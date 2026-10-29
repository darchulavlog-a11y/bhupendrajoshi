# Bhupendra Joshi Official Website + Bhupendra AI

> **Website Title:** Bhupendra Joshi | Personal Portfolio & Learning Hub  
> **Tagline:** Learning, Creating, and Building the Future  
> **Nepali Tagline:** सिक्दै, सिर्जना गर्दै र भविष्य निर्माण गर्दै  
> **AI Assistant:** Bhupendra AI (Your Smart Personal AI Assistant / तपाईंको आफ्नै स्मार्ट AI सहायक)

---

## 📌 Profile & Identity

- **Name:** Bhupendra Joshi (भुपेन्द्र जोशी)
- **School:** Mahendra Model Secondary School, Darchula (महेन्द्र नमुना माध्यमिक विद्यालय, दार्चुला)
- **Class:** Grade 9, Section 'E' (कक्षा ९, सेक्सन 'ई')
- **Location:** Darchula, Sudurpashchim Province, Nepal (२९.८४° N, ८०.५३° E)
- **Interests:** Web development (HTML, CSS, JS, React), Mathematics & angle measurement systems (Degree, Gradian, Radian), Science & Technology, Computer Studies & Cybersecurity, Digital Design, CDC Nepal Educational Platforms, Entrepreneurship & Financial Literacy.
- **Contact Email:** `darchulavlog@gmail.com`

---

## 🚀 Integrated Architecture

The platform unifies **Bhupendra Joshi's Personal Portfolio** and **Bhupendra AI Chatbot** into one cohesive full-stack web application:

1. **Frontend:** React 19, TypeScript, Tailwind CSS, Lucide Icons, Devanagari typography (`Mukta`, `Plus Jakarta Sans`, `JetBrains Mono`).
2. **Backend:** Express full-stack server (`server.ts`) mounting Vite middleware in development and serving high-performance static bundles in production.
3. **Bhupendra AI Engine:**
   - **Primary Engine:** Google Gemini API (`@google/genai` with `gemini-3.8-flash`), pre-wired and running out-of-the-box.
   - **Alternative Engine:** Optional OpenAI API support (`OPENAI_API_KEY`) if supplied.
   - **RAG System (Retrieval-Augmented Generation):** Grounded directly on the authentic CDC Nepal Grade 9 educational library and verified personal information.
   - **Built-in Fallback:** Offline semantic retrieval engine ensuring 100% continuous uptime.
4. **Content Management System (CMS):**
   - Protected admin dashboard (`Passcode: bhupendra2026`).
   - Persistent file storage in `data/content.json` and `data/messages.json`.
5. **Interactive Educational Tools:**
   - **Degree, Gradian & Radian Angle Visualizer:** Dynamic SVG circle arc, real-time conversions ($D/180 = G/200 = R/\pi$), DMS sexagesimal breakdown, and practice drill generator.
   - **Darchula & School Coordinates Explorer:** GPS mapping of Mahendra Model Secondary School ($29.8408^\circ\text{ N}, 80.5348^\circ\text{ E}$), Api Peak ($7,132\text{ m}$), Mahakali valley, and Haversine distance calculator.

---

## 📚 17 Integrated Pages & Sections

| # | Section / View | Description |
|---|---|---|
| 1 | **Home** | Interactive hero, personal profile, live stat indicators, and quick action buttons. |
| 2 | **About Me** | Authentic biography, Darchula background, philosophy, and verified checklist. |
| 3 | **Education** | Academic milestones, Grade 9 Section E timetable, and CDC curriculum structure. |
| 4 | **Skills & Tech** | Web development (React, JS, CSS), Mathematics, Science, Scratch, and Design. |
| 5 | **Projects Portfolio** | Filterable showcase across all 8 categories with live demo triggers. |
| 6 | **Project Details** | In-depth modal with dev process, technical challenges, and learning outcomes. |
| 7 | **CDC Grade 9 Library** | 8 verified subjects (Math, Science, Nepali, English, Social, CS, Opt Math, HPE). |
| 8 | **Study Notes** | Chapter notes with definitions, formulas, worked solutions, and practice drills. |
| 9 | **Model Questions** | CDC board exam question sets (Groups A, B, C) with collapsible hints. |
| 10 | **Blog & Articles** | Articles on coding from Darchula, trigonometry angles, and financial literacy. |
| 11 | **Gallery & Media** | Filterable lightbox gallery with high-resolution school and project visuals. |
| 12 | **Achievements** | Verified school exhibition awards and academic certificates. |
| 13 | **Educational Resources**| Curated links to official CDC portal, OLE Nepal, Khan Academy, and PhET. |
| 14 | **Contact Me** | Functional contact form saving to backend inbox with email link. |
| 15 | **Privacy & Terms** | Transparent student data protection and CDC educational fair-use notice. |
| 16 | **Search Results** | Site-wide omnibar search with keyboard shortcut (`Ctrl+K` / `Cmd+K`). |
| 17 | **Custom 404** | Polished fallback state with quick navigation back to safety. |

---

## 🛠️ Configuration & Environment Variables

Copy `.env.example` to `.env`:

```bash
# GEMINI_API_KEY: Injected by AI Studio runtime or manually configured
GEMINI_API_KEY="your-gemini-api-key"

# OPENAI_API_KEY: Optional alternative OpenAI API key for Bhupendra AI
OPENAI_API_KEY=""

# ADMIN_PASSCODE: Passcode to access Content Management Admin Panel
ADMIN_PASSCODE="bhupendra2026"

# Port
PORT=3000
```

---

## 💻 Local Testing & Run Commands

```bash
# Install dependencies
npm install

# Start full-stack development server (Express + Vite)
npm run dev

# Typecheck and validate
npm run lint

# Production build
npm run build

# Start production server
npm run start
```
