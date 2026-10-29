import express, { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import {
  PROFILE_INFO,
  CDC_SUBJECTS,
  STUDY_NOTES,
  PROJECTS,
  MODEL_QUESTIONS,
  BLOG_POSTS,
  GALLERY_ITEMS,
  EDUCATIONAL_RESOURCES,
  ACHIEVEMENTS
} from './src/data/defaultContent.ts';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const HOST = '0.0.0.0';
const ADMIN_PASSCODE = process.env.ADMIN_PASSCODE || 'bhupendra2026';

app.use(express.json({ limit: '10mb' }));

// Ensure data directory exists
const DATA_DIR = path.join(__dirname, 'data');
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

const CONTENT_FILE = path.join(DATA_DIR, 'content.json');
const MESSAGES_FILE = path.join(DATA_DIR, 'messages.json');

// Initialize content file if absent
if (!fs.existsSync(CONTENT_FILE)) {
  const initialContent = {
    profile: PROFILE_INFO,
    subjects: CDC_SUBJECTS,
    notes: STUDY_NOTES,
    projects: PROJECTS,
    modelQuestions: MODEL_QUESTIONS,
    blog: BLOG_POSTS,
    gallery: GALLERY_ITEMS,
    resources: EDUCATIONAL_RESOURCES,
    achievements: ACHIEVEMENTS,
    lastUpdated: new Date().toISOString()
  };
  fs.writeFileSync(CONTENT_FILE, JSON.stringify(initialContent, null, 2), 'utf-8');
}

// Initialize messages file if absent
if (!fs.existsSync(MESSAGES_FILE)) {
  fs.writeFileSync(MESSAGES_FILE, JSON.stringify([], null, 2), 'utf-8');
}

function getContentData() {
  try {
    const raw = fs.readFileSync(CONTENT_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error reading content file:', err);
    return {
      profile: PROFILE_INFO,
      subjects: CDC_SUBJECTS,
      notes: STUDY_NOTES,
      projects: PROJECTS,
      modelQuestions: MODEL_QUESTIONS,
      blog: BLOG_POSTS,
      gallery: GALLERY_ITEMS,
      resources: EDUCATIONAL_RESOURCES,
      achievements: ACHIEVEMENTS
    };
  }
}

// Initialize Gemini Client
let geminiClient: GoogleGenAI | null = null;
if (process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== 'MY_GEMINI_API_KEY') {
  try {
    geminiClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build'
        }
      }
    });
  } catch (err) {
    console.warn('Could not initialize GoogleGenAI client:', err);
  }
}

// Retrieval Augmented Generation (RAG) matcher
function retrieveContext(query: string, content: any) {
  const q = query.toLowerCase();
  const matchedSources: Array<{ title: string; subject?: string; chapter?: string | number; reference?: string }> = [];
  const relevantSnippets: string[] = [];

  // Match notes & formulas
  for (const note of content.notes || []) {
    const noteText = `${note.title} ${note.titleNe} ${note.summary} ${note.summaryNe} ${note.subjectId} ${note.chapterName}`.toLowerCase();
    const queryTokens = q.split(/\s+/).filter(t => t.length > 2);
    const matches = queryTokens.some(token => noteText.includes(token));

    if (matches || q.includes('degree') || q.includes('pascal') || q.includes('pressure') || q.includes('formula') || q.includes('सूत्र') || q.includes('चाँप') || q.includes('पदवर्ग')) {
      if (relevantSnippets.length < 4) {
        let snippet = `[CDC Study Note - ${note.chapterName}]: ${note.title} / ${note.titleNe}\nSummary: ${note.summary}\n`;
        if (note.formulas && note.formulas.length > 0) {
          snippet += `Key Formulas:\n` + note.formulas.map((f: any) => `- ${f.name}: ${f.formula} (${f.explanation})`).join('\n') + '\n';
        }
        if (note.definitions && note.definitions.length > 0) {
          snippet += `Definitions:\n` + note.definitions.map((d: any) => `- ${d.term}: ${d.meaning}`).join('\n') + '\n';
        }
        relevantSnippets.push(snippet);
        matchedSources.push({
          title: note.title,
          subject: note.subjectId,
          chapter: note.chapterNumber,
          reference: note.officialReference || 'CDC Nepal Grade 9 Curriculum'
        });
      }
    }
  }

  // Match projects
  for (const proj of content.projects || []) {
    const projText = `${proj.title} ${proj.titleNe} ${proj.category} ${proj.description} ${proj.tools?.join(' ')}`.toLowerCase();
    const queryTokens = q.split(/\s+/).filter(t => t.length > 2);
    if (queryTokens.some(token => projText.includes(token)) || q.includes('project') || q.includes('काम') || q.includes('कामहरू') || q.includes('portfolio')) {
      if (relevantSnippets.length < 5) {
        relevantSnippets.push(`[Project]: ${proj.title} (${proj.category})\nDescription: ${proj.description}\nTools: ${proj.tools?.join(', ')}\nProcess: ${proj.detailedProcess || ''}`);
        matchedSources.push({
          title: proj.title,
          reference: 'Bhupendra Joshi Portfolio Projects'
        });
      }
    }
  }

  // Match profile information
  if (q.includes('bhupendra') || q.includes('who are you') || q.includes('who is') || q.includes('school') || q.includes('darchula') || q.includes('grade') || q.includes('भुपेन्द्र') || q.includes('परिचय') || q.includes('विद्यालय') || q.includes('दार्चुला')) {
    relevantSnippets.push(
      `[Profile Information]: Bhupendra Joshi is a Grade 9 (Section E) student at Mahendra Model Secondary School, Darchula, Sudurpashchim, Nepal. Interests: Web development, Mathematics, Science, Computer Studies, Angle Systems, Financial Literacy. Email: darchulavlog@gmail.com. Location: Darchula, Sudurpashchim, Nepal.`
    );
    matchedSources.push({
      title: 'Bhupendra Joshi Profile & School Information',
      reference: 'Official Personal Profile'
    });
  }

  return { snippets: relevantSnippets, sources: matchedSources };
}

// Fallback response generator if no API key is available or external rate limit occurs
function generateSmartFallbackResponse(query: string, language: 'en' | 'ne', contextSnippets: string[], sources: any[]) {
  const q = query.toLowerCase();

  if (q.includes('degree') || q.includes('radian') || q.includes('gradian') || q.includes('रेडियन') || q.includes('ग्रेड') || q.includes('डिग्री')) {
    if (language === 'ne') {
      return `कक्षा ९ को अनिवार्य तथा ऐच्छिक गणितमा कोण मापनका तीन मुख्य प्रणालीहरू छन्:
१. **षष्टिक प्रणाली (Sexagesimal / Degree System):** १ समकोण = ९०°, १° = ६० मिनेट ('), १' = ६० सेकेन्ड ('')।
२. **शतिक प्रणाली (Centesimal / Grade System):** १ समकोण = १००g, १g = १००', १' = १००''।
३. **वृत्तीय प्रणाली (Circular / Radian System):** १ समकोण = π/२ रेडियन।

**आधारभूत रूपान्तरण सूत्र:**
\`\`\`
D / 180 = G / 200 = R / π
\`\`\`
- डिग्रीबाट ग्रेड: **G = D × (10 / 9)** (जस्तै: ४५° = ५०g)
- डिग्रीबाट रेडियन: **R = D × (π / 180)** (जस्तै: ९०° = π/२ rad)

तपाईं यो वेबसाइटको 'Projects' वा 'CDC Library' मा गएर मेरो अन्तरक्रियात्मक कोण क्यालकुलेटर पनि चलाउन सक्नुहुन्छ!`;
    }
    return `In CDC Nepal Grade 9 Mathematics, there are three angle measurement systems:
1. **Sexagesimal System (Degrees):** 1 right angle = 90°, 1° = 60', 1' = 60''.
2. **Centesimal System (Grades):** 1 right angle = 100g, 1g = 100', 1' = 100''.
3. **Circular System (Radians):** 1 right angle = π/2 radians.

**Core Conversion Formula:**
\`\`\`
D / 180 = G / 200 = R / π
\`\`\`
- Degree to Grade: **G = D × (10 / 9)** (e.g. 45° = 50g)
- Degree to Radian: **R = D × (π / 180)** (e.g. 90° = π/2 rad)

You can explore my interactive Degree/Gradian/Radian tool in the Projects section to visualize these angles on a dynamic circle!`;
  }

  if (q.includes('pascal') || q.includes('pressure') || q.includes('चाँप') || q.includes('पास्कल') || q.includes('archimedes') || q.includes('आर्किमिडिज')) {
    if (language === 'ne') {
      return `**कक्षा ९ विज्ञान तथा प्रविधि - चाँप (Pressure):**

१. **पास्कलको नियम (Pascal's Law):**
"बन्द भाँडोमा राखिएको तरल पदार्थमा कुनै बिन्दुमा चाँप दिइयो भने त्यो चाँप सबै दिशामा समान रूपले र लम्ब रूपमा प्रसारण हुन्छ।"
- यसको प्रयोग **हाइड्रोलिक लिफ्ट**, **हाइड्रोलिक ब्रेक** र **हाइड्रोलिक प्रेस** मा हुन्छ।
- सूत्र: \`F₁ / A₁ = F₂ / A₂\`

२. **तरलको चाँपको सूत्र:**
\`\`\`
P = h × d × g
\`\`\`
जहाँ h = गहिराइ, d = तरलको घनत्व, र g = ९.८ m/s² (गुरुत्व प्रवेग)।

३. **आर्किमिडिजको सिद्धान्त:**
कुनै वस्तु तरलमा डुब्दा त्यसले अनुभव गर्ने उर्ध्वचाप (Upthrust) वस्तुले विस्थापित गरेको तरलको तौल बराबर हुन्छ (U = V × d × g)।`;
    }
    return `**CDC Nepal Grade 9 Science & Technology - Pressure:**

1. **Pascal's Law:**
"When pressure is applied on an enclosed liquid, it is transmitted equally and normally in all directions without any loss."
- Applications: Hydraulic lift, hydraulic brakes, hydraulic press.
- Principle formula: \`F₁ / A₁ = F₂ / A₂\`

2. **Liquid Pressure Formula:**
\`\`\`
P = h × d × g
\`\`\`
Where h = depth of liquid, d = density of liquid, and g = 9.8 m/s² (acceleration due to gravity).

3. **Archimedes' Principle:**
When an object is partially or wholly immersed in a fluid, it experiences an upthrust equal to the weight of the fluid displaced by it (U = V × d × g).`;
  }

  if (q.includes('bhupendra') || q.includes('who are you') || q.includes('who is') || q.includes('about') || q.includes('भुपेन्द्र') || q.includes('परिचय')) {
    if (language === 'ne') {
      return `नमस्ते! म **भुपेन्द्र एआई (Bhupendra AI)** हुँ — भुपेन्द्र जोशीको व्यक्तिगत स्मार्ट एआई सहायक।

**भुपेन्द्र जोशीको परिचय:**
- **ठेगाना:** दार्चुला, सुदूरपश्चिम प्रदेश, नेपाल
- **विद्यालय:** महेन्द्र नमुना माध्यमिक विद्यालय, दार्चुला (Mahendra Model Secondary School)
- **कक्षा:** कक्षा ९, सेक्सन 'ई' (Grade 9, Section E)
- **रुचिहरू:** वेब विकास (HTML, CSS, JS, React), कम्प्युटर विज्ञान, गणित तथा कोण मापन पद्धति, विज्ञान सिमुलेसन, र वित्तीय साक्षरता।
- **सम्पर्क इमेल:** darchulavlog@gmail.com

तपाईं यस वेबसाइटमा उहाँका सफ्टवेयर परियोजनाहरू, कक्षा ९ को सीडीसी डिजिटल लाइब्रेरी, अध्ययन नोटहरू, र मोडेल प्रश्नहरू अध्ययन गर्न सक्नुहुन्छ!`;
    }
    return `Hello! I am **Bhupendra AI**, the personal smart assistant of Bhupendra Joshi.

**About Bhupendra Joshi:**
- **Location:** Darchula, Sudurpashchim Province, Nepal
- **School:** Mahendra Model Secondary School, Darchula
- **Class:** Grade 9, Section 'E'
- **Interests:** Web development (HTML, CSS, JavaScript, React), Computer Science, Mathematics, Science simulations, and Financial Literacy.
- **Contact Email:** darchulavlog@gmail.com

You can browse through his verified project portfolio, CDC Grade 9 digital library, study notes, and model exam sets right here on this website!`;
  }

  if (language === 'ne') {
    return `नमस्ते! म भुपेन्द्र एआई हुँ। तपाईंले सोध्नुभएको विषयमा पाठ्यक्रम विकास केन्द्र (CDC) नेपालको कक्षा ९ को पाठ्यपुस्तक तथा भुपेन्द्र जोशीको अध्ययन स्रोतहरूका आधारमा म मद्दत गर्न तयार छु।

तपाईं मलाई गणितका सूत्रहरू (जस्तै: डिग्री र रेडियन रूपान्तरण, हेरोनको सूत्र, बीजगणित), विज्ञानका नियमहरू (पास्कलको नियम, शक्ति, ओमको नियम), कम्प्युटर विज्ञान (बाइनरी रूपान्तरण, HTML), वा भुपेन्द्रका परियोजनाहरू बारे सोध्न सक्नुहुन्छ!`;
  }
  return `Hello! I am Bhupendra AI. I am here to help you explore Bhupendra Joshi's projects, personal profile, and verified CDC Nepal Grade 9 learning resources.

Feel free to ask about Grade 9 Mathematics (Angle systems, Sets, Mensuration), Science (Pascal's Law, Force & Motion), Computer Science (Binary conversion, HTML), or any of Bhupendra's portfolio creations!`;
}

// REST API Endpoints

// 1. Get full site content
app.get('/api/content', (_req: Request, res: Response) => {
  const data = getContentData();
  res.json({ success: true, data });
});

// 2. Admin Login
app.post('/api/admin/login', (req: Request, res: Response) => {
  const { passcode } = req.body;
  if (!passcode) {
    return res.status(400).json({ success: false, message: 'Passcode is required' });
  }
  if (passcode === ADMIN_PASSCODE) {
    return res.json({ success: true, message: 'Admin authenticated successfully', token: 'bhupendra_auth_' + Date.now() });
  }
  return res.status(401).json({ success: false, message: 'Invalid admin passcode' });
});

// 3. Update site content (Admin only)
app.post('/api/content', (req: Request, res: Response) => {
  const { passcode, section, item, action, fullData } = req.body;

  if (passcode !== ADMIN_PASSCODE) {
    return res.status(401).json({ success: false, message: 'Unauthorized: Invalid admin passcode' });
  }

  try {
    const currentData = getContentData();

    if (fullData) {
      fs.writeFileSync(CONTENT_FILE, JSON.stringify({ ...fullData, lastUpdated: new Date().toISOString() }, null, 2), 'utf-8');
      return res.json({ success: true, message: 'Full content updated successfully', data: fullData });
    }

    if (!section || !action) {
      return res.status(400).json({ success: false, message: 'Section and action are required' });
    }

    if (section === 'profile') {
      currentData.profile = { ...currentData.profile, ...item };
    } else if (Array.isArray(currentData[section])) {
      if (action === 'add') {
        const newItem = { id: `${section}_${Date.now()}`, ...item };
        currentData[section].unshift(newItem);
      } else if (action === 'edit') {
        currentData[section] = currentData[section].map((it: any) => it.id === item.id ? { ...it, ...item } : it);
      } else if (action === 'delete') {
        currentData[section] = currentData[section].filter((it: any) => it.id !== item.id);
      }
    }

    currentData.lastUpdated = new Date().toISOString();
    fs.writeFileSync(CONTENT_FILE, JSON.stringify(currentData, null, 2), 'utf-8');

    return res.json({ success: true, message: `Content section '${section}' updated`, data: currentData });
  } catch (err: any) {
    console.error('Error updating content:', err);
    return res.status(500).json({ success: false, message: 'Failed to update content', error: err.message });
  }
});

// 4. Contact form submission
app.post('/api/contact', (req: Request, res: Response) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Name, email, and message are required' });
  }

  try {
    const raw = fs.readFileSync(MESSAGES_FILE, 'utf-8');
    const messages = JSON.parse(raw);
    const newMessage = {
      id: `msg_${Date.now()}`,
      name: String(name).trim().slice(0, 100),
      email: String(email).trim().slice(0, 100),
      subject: String(subject || 'General Inquiry').trim().slice(0, 150),
      message: String(message).trim().slice(0, 3000),
      timestamp: new Date().toISOString(),
      read: false
    };

    messages.unshift(newMessage);
    fs.writeFileSync(MESSAGES_FILE, JSON.stringify(messages, null, 2), 'utf-8');

    return res.json({
      success: true,
      message: 'Thank you for reaching out! Your message has been received by Bhupendra Joshi.'
    });
  } catch (err: any) {
    console.error('Error saving contact message:', err);
    return res.status(500).json({ success: false, message: 'Could not save message', error: err.message });
  }
});

// 5. Get contact messages (Admin only)
app.get('/api/messages', (req: Request, res: Response) => {
  const passcode = req.query.passcode;
  if (passcode !== ADMIN_PASSCODE) {
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }

  try {
    const raw = fs.readFileSync(MESSAGES_FILE, 'utf-8');
    const messages = JSON.parse(raw);
    res.json({ success: true, data: messages });
  } catch (err) {
    res.json({ success: true, data: [] });
  }
});

// 6. Bhupendra AI Chat endpoint with RAG
app.post('/api/chat', async (req: Request, res: Response) => {
  const { message, conversationHistory = [], language = 'en' } = req.body;

  if (!message || typeof message !== 'string' || !message.trim()) {
    return res.status(400).json({ success: false, message: 'Message is required' });
  }

  const userQuery = message.trim().slice(0, 2000);
  const currentContent = getContentData();
  const { snippets, sources } = retrieveContext(userQuery, currentContent);

  // System instruction with RAG grounding
  const systemInstruction = `You are "Bhupendra AI", the official personal AI assistant and educational companion integrated directly into the website of Bhupendra Joshi.
Bhupendra Joshi Profile:
- Class: Grade 9, Section 'E'
- School: Mahendra Model Secondary School, Darchula, Sudurpashchim Province, Nepal (महेन्द्र नमुना माध्यमिक विद्यालय, दार्चुला)
- Tagline: "Learning, Creating, and Building the Future" / "सिक्दै, सिर्जना गर्दै र भविष्य निर्माण गर्दै"
- Interests: Web development, Mathematics (especially Degree/Gradian/Radian angle systems), Science & Technology, Computer Studies, Scratch, Financial Literacy.
- Contact Email: darchulavlog@gmail.com

Your Core Duties:
1. Assist visitors in navigating the website and answering questions about Bhupendra's profile, school, geography of Darchula, and portfolio projects.
2. Provide authentic, high-quality educational help for CDC Nepal Grade 9 curriculum across Mathematics, Science & Tech, Nepali, English, Social Studies, Computer Science, and Optional Math.
3. Be respectful, encouraging, and academically accurate. If presenting formulas, write them clearly.
4. Respond in the same language the user communicates in (Nepali in Devanagari script, or English).
5. Ground your answers in the following verified knowledge base context when applicable:
--- KNOWLEDGE BASE CONTEXT ---
${snippets.join('\n\n')}
--- END CONTEXT ---
Never invent awards, certificates, or personal details that are not provided. If referencing study notes, mention the CDC subject or chapter appropriately.`;

  // Try Gemini AI API first
  if (geminiClient) {
    try {
      const contents: any[] = [];

      // Append past conversation context (last 6 turns)
      const recentHistory = (conversationHistory || []).slice(-6);
      for (const turn of recentHistory) {
        if (turn.sender === 'user') {
          contents.push({ role: 'user', parts: [{ text: turn.text }] });
        } else if (turn.sender === 'ai') {
          contents.push({ role: 'model', parts: [{ text: turn.text }] });
        }
      }

      // Add current message
      contents.push({ role: 'user', parts: [{ text: userQuery }] });

      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Gemini API call timed out')), 7000)
      );

      const generatePromise = geminiClient.models.generateContent({
        model: 'gemini-3.8-flash',
        contents,
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      const response = (await Promise.race([generatePromise, timeoutPromise])) as any;

      const replyText = response.text || generateSmartFallbackResponse(userQuery, language, snippets, sources);
      return res.json({
        success: true,
        reply: replyText,
        sources: sources.slice(0, 3)
      });
    } catch (err: any) {
      console.warn('Gemini API call issue, using intelligent RAG fallback engine:', err.message);
    }
  }

  // Check optional OpenAI API fallback if OPENAI_API_KEY is present
  if (process.env.OPENAI_API_KEY) {
    try {
      const openAiRes = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            { role: 'system', content: systemInstruction },
            ...(conversationHistory || []).slice(-6).map((m: any) => ({
              role: m.sender === 'user' ? 'user' : 'assistant',
              content: m.text
            })),
            { role: 'user', content: userQuery }
          ],
          max_tokens: 800,
          temperature: 0.7
        })
      });

      if (openAiRes.ok) {
        const openAiData = await openAiRes.json();
        const reply = openAiData.choices?.[0]?.message?.content;
        if (reply) {
          return res.json({
            success: true,
            reply,
            sources: sources.slice(0, 3)
          });
        }
      }
    } catch (openAiErr) {
      console.warn('OpenAI fallback failed:', openAiErr);
    }
  }

  // Intelligent built-in RAG fallback response
  const fallbackReply = generateSmartFallbackResponse(userQuery, language, snippets, sources);
  return res.json({
    success: true,
    reply: fallbackReply,
    sources: sources.slice(0, 3)
  });
});

// Health check endpoint
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    app: 'Bhupendra Joshi Website & Bhupendra AI',
    version: '1.0.0',
    geminiConfigured: !!(process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== 'MY_GEMINI_API_KEY'),
    openAiConfigured: !!process.env.OPENAI_API_KEY
  });
});

// Vite Middleware for Dev / Static for Production
async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, HOST, () => {
    console.log(`Bhupendra Joshi Official Website running at http://${HOST}:${PORT}`);
  });
}

startServer().catch(err => {
  console.error('Failed to start server:', err);
});
