import { Project, CDCSubject, StudyNote, ModelQuestionSet, BlogPost, GalleryItem, EducationalResource } from '../types';

export const PROFILE_INFO = {
  name: "Bhupendra Joshi",
  nameNe: "भुपेन्द्र जोशी",
  title: "Grade 9 Student & Tech Explorer",
  titleNe: "कक्षा ९ का विद्यार्थी तथा प्रविधि अन्वेषक",
  tagline: "Learning, Creating, and Building the Future",
  taglineNe: "सिक्दै, सिर्जना गर्दै र भविष्य निर्माण गर्दै",
  location: "Darchula, Sudurpashchim Province, Nepal",
  locationNe: "दार्चुला, सुदूरपश्चिम प्रदेश, नेपाल",
  school: "Mahendra Model Secondary School, Darchula",
  schoolNe: "महेन्द्र नमुना माध्यमिक विद्यालय, खलङ्गा, दार्चुला",
  classGrade: "Grade 9, Section 'E'",
  classGradeNe: "कक्षा ९, सेक्सन 'ई'",
  academicYear: "2081/2082 BS (2025/2026 AD)",
  email: "darchulavlog@gmail.com",
  aboutBio: "Hello! I am Bhupendra Joshi, a Grade 9 student from Darchula in the far-western Sudurpashchim province of Nepal. I am passionate about web development, mathematics, computer science, and innovative educational platforms. Through this website, I aim to combine my digital creations with verified CDC Nepal curriculum resources to help fellow students learn, practice, and excel in their studies.",
  aboutBioNe: "नमस्ते! म भुपेन्द्र जोशी, नेपालको सुदूरपश्चिम प्रदेशको दार्चुला जिल्लास्थित महेन्द्र नमुना माध्यमिक विद्यालयमा कक्षा ९ (सेक्सन 'ई') मा अध्ययनरत विद्यार्थी हुँ। मलाई वेब विकास, कम्प्युटर प्रविधि, गणित, विज्ञान र रचनात्मक शैक्षिक परियोजनाहरूमा गहिरो रुचि छ। यस वेबसाइटमार्फत मैले मेरा डिजिटल परियोजनाहरू र पाठ्यक्रम विकास केन्द्र (CDC) नेपालको कक्षा ९ का उपयोगी अध्ययन सामग्रीहरू एकै ठाउँमा प्रस्तुत गरेको छु।",
  interests: [
    { en: "Web Development (HTML, CSS, JS, React)", ne: "वेब विकास (HTML, CSS, JS, React)" },
    { en: "Mathematics & Angle Systems", ne: "गणित तथा कोण मापन पद्धति" },
    { en: "Science & Technology", ne: "विज्ञान तथा प्रविधि" },
    { en: "Computer Studies & Cybersecurity", ne: "कम्प्युटर अध्ययन र साइबर सुरक्षा" },
    { en: "Digital Design & Presentations", ne: "डिजिटल डिजाइन र प्रस्तुतीकरण" },
    { en: "Educational Projects for CDC Nepal", ne: "पाठ्यक्रम विकास केन्द्र आधारित शैक्षिक सामग्री" },
    { en: "Entrepreneurship & Financial Literacy", ne: "उद्यमशीलता र वित्तीय साक्षरता" },
    { en: "School Geography & Map Coordinates", ne: "भूगोल, नक्सा र जीपीएस कोअर्डिनेट" }
  ]
};

export const CDC_SUBJECTS: CDCSubject[] = [
  {
    id: "mathematics",
    name: "Mathematics",
    nameNe: "गणित",
    code: "MTH-901",
    icon: "Calculator",
    color: "from-blue-600 to-cyan-500",
    totalChapters: 8,
    description: "Compulsory Mathematics for Grade 9 covering Sets, Arithmetic, Mensuration, Algebra, Geometry, Trigonometry, Statistics & Probability.",
    descriptionNe: "कक्षा ९ को अनिवार्य गणित: समूह, अंकगणित, क्षेत्रमिति, बीजगणित, ज्यामिति, त्रिकोणमिति, तथ्यांकशास्त्र र सम्भाव्यता।",
    chapters: [
      { number: 1, title: "Sets", titleNe: "समूह (Sets)", topics: ["Set Operations", "Venn Diagrams", "Cardinality of Sets"] },
      { number: 2, title: "Arithmetic & Financial Math", titleNe: "अंकगणित र वित्तीय गणित", topics: ["Profit and Loss", "VAT and Discount", "Compound Interest Introduction"] },
      { number: 3, title: "Mensuration", titleNe: "क्षेत्रमिति (Mensuration)", topics: ["Triangles & Heron's Formula", "Area of Quadrilaterals", "Paths inside & outside"] },
      { number: 4, title: "Algebra", titleNe: "बीजगणित (Algebra)", topics: ["Factorization", "Indices & Laws", "Simultaneous Linear Equations", "Quadratic Equations"] },
      { number: 5, title: "Geometry", titleNe: "ज्यामिति (Geometry)", topics: ["Triangles & Angles", "Parallelograms Theorems", "Circle Basics", "Geometric Constructions"] },
      { number: 6, title: "Trigonometry", titleNe: "त्रिकोणमिति (Trigonometry)", topics: ["Angle Measurement Systems (Degree, Radian, Grade)", "Trigonometric Ratios", "Standard Angle Values"] },
      { number: 7, title: "Statistics", titleNe: "तथ्याङ्कशास्त्र (Statistics)", topics: ["Mean of Continuous Data", "Median & Quartiles", "Frequency Tables"] },
      { number: 8, title: "Probability", titleNe: "सम्भाव्यता (Probability)", topics: ["Sample Space", "Empirical Probability", "Tree Diagrams"] }
    ]
  },
  {
    id: "science",
    name: "Science and Technology",
    nameNe: "विज्ञान तथा प्रविधि",
    code: "SCI-902",
    icon: "Atom",
    color: "from-emerald-600 to-teal-400",
    totalChapters: 10,
    description: "Core science exploring Physics, Chemistry, Biology, Earth & Space Science, and Information & Communication Technology.",
    descriptionNe: "कक्षा ९ को विज्ञान तथा प्रविधि: भौतिक विज्ञान, रसायन विज्ञान, जीव विज्ञान, पृथ्वी र अन्तरिक्ष, तथा सूचना प्रविधि।",
    chapters: [
      { number: 1, title: "Scientific Learning & Measurement", titleNe: "वैज्ञानिक सिकाइ र नाप", topics: ["Fundamental & Derived Units", "SI Units", "Precision Instruments"] },
      { number: 2, title: "Force and Motion", titleNe: "बल र गति (Force & Motion)", topics: ["Newton's Laws of Motion", "Balanced and Unbalanced Forces", "Equations of Motion"] },
      { number: 3, title: "Pressure", titleNe: "चाँप (Pressure)", topics: ["Pascal's Law", "Atmospheric Pressure", "Hydraulic Lift", "Upthrust & Archimedes Principle"] },
      { number: 4, title: "Energy, Work and Power", titleNe: "शक्ति, कार्य र सामर्थ्य", topics: ["Kinetic & Potential Energy", "Work Formula", "Power in Watts", "Renewable Energy in Nepal"] },
      { number: 5, title: "Heat & Sound", titleNe: "ताप र ध्वनि (Heat & Sound)", topics: ["Heat Transfer", "Specific Heat Capacity", "Echo & Ultrasound Applications"] },
      { number: 6, title: "Electricity & Magnetism", titleNe: "विद्युत र चुम्बकत्व", topics: ["Ohm's Law (V = IR)", "Series & Parallel Circuits", "Electromagnets"] },
      { number: 7, title: "Matter & Chemical Reactions", titleNe: "पदार्थ र रासायनिक प्रतिक्रिया", topics: ["Atomic Structure", "Electronic Configuration", "Types of Chemical Reactions", "Acids, Bases & Salts"] },
      { number: 8, title: "Living Beings and Cell Division", titleNe: "जीवहरू र कोष विभाजन", topics: ["Plant & Animal Tissues", "Mitosis & Meiosis basics", "Human Organ Systems"] },
      { number: 9, title: "Earth & Solar System", titleNe: "पृथ्वी र सौर्यमण्डल", topics: ["Structure of Earth", "Plate Tectonics", "Solar System Dynamics", "Scratch Solar Simulation"] },
      { number: 10, title: "Information & Digital Technology", titleNe: "सूचना तथा सञ्चार प्रविधि", topics: ["Digital Devices", "Computer Networks", "Cyber Safety Guidelines"] }
    ]
  },
  {
    id: "nepali",
    name: "Nepali",
    nameNe: "अनिवार्य नेपाली",
    code: "NEP-903",
    icon: "BookOpen",
    color: "from-red-600 to-amber-500",
    totalChapters: 8,
    description: "Compulsory Nepali curriculum covering literature, stories, essays, poetry, and comprehensive Devanagari grammar.",
    descriptionNe: "कक्षा ९ को अनिवार्य नेपाली: साहित्य, कथा, कविता, जीवनी, निबन्ध तथा गहन नेपाली व्याकरण।",
    chapters: [
      { number: 1, title: "वर्णविन्यास र शुद्ध लेखन", titleNe: "वर्णविन्यास र शुद्ध लेखन", topics: ["ह्रस्व र दीर्घ नियम", "श, ष, स को प्रयोग", "ब र व को भेद"] },
      { number: 2, title: "पदवर्ग (Parts of Speech)", titleNe: "पदवर्ग पहिचान", topics: ["नाम, सर्वनाम", "विशेषण, क्रियापद", "अव्यय (नामयोगी, संयोजक, विस्मयादिबोधक)"] },
      { number: 3, title: "काल, पक्ष र भाव", titleNe: "काल, पक्ष र भाव", topics: ["भूत, वर्तमान, भविष्यत्", "सामान्य, अपूर्ण, पूर्ण, अज्ञात, अभ्यस्त पक्ष"] },
      { number: 4, title: "वाच्य र वाक्य संश्लेषण", titleNe: "वाच्य (कर्तृ, कर्म, भाव)", topics: ["वाच्य परिवर्तन नियम", "करण र अकरण", "सरल, मिश्र, संयुक्त वाक्य"] },
      { number: 5, title: "साहित्य: कविता र जागरण", titleNe: "कविता र राष्ट्रिय जागरण", topics: ["नेपाली गौरव", "भाव विस्तार र व्याख्या"] },
      { number: 6, title: "साहित्य: कथा र संवाद", titleNe: "कथा र संवादात्मक अभिव्यक्ति", topics: ["चरित्र चित्रण", "उद्देश्य र सन्देश"] },
      { number: 7, title: "व्यावहारिक लेखन", titleNe: "व्यावहारिक तथा सिर्जनात्मक लेखन", topics: ["चिठी र निवेदन", "प्रतिवेदन र टिप्पणी", "संक्षिप्तिकरण र सारांश"] },
      { number: 8, title: "निबन्ध र तार्किक अभिव्यक्ति", titleNe: "निबन्ध र वैचारिक अभिव्यक्ति", topics: ["सुदूरपश्चिमको विकास र पर्यटन", "प्रविधि र विद्यार्थी जीवन"] }
    ]
  },
  {
    id: "english",
    name: "English",
    nameNe: "अंग्रेजी (English)",
    code: "ENG-904",
    icon: "Languages",
    color: "from-indigo-600 to-purple-500",
    totalChapters: 8,
    description: "CDC Compulsory English curriculum focusing on reading comprehension, communicative grammar, writing skills, and vocabulary.",
    descriptionNe: "कक्षा ९ को अनिवार्य अंग्रेजी: पठनबोध, व्याकरण (Tenses, Conditionals, Voice), लेखन र शब्दावली।",
    chapters: [
      { number: 1, title: "Travel and Tourism", titleNe: "Travel and Tourism", topics: ["Reading Travelogues", "Adjectives & Adverbs", "Giving Directions"] },
      { number: 2, title: "Communication and Technology", titleNe: "Communication & Technology", topics: ["Digital Literacy", "Passive Voice in Process Writing"] },
      { number: 3, title: "Conditionals & Hypothesis", titleNe: "Conditionals (Type 0, 1, 2, 3)", topics: ["Zero and First Conditional", "Second & Third Conditionals", "Expressing Wishes"] },
      { number: 4, title: "Reported Speech", titleNe: "Reported Speech (Direct to Indirect)", topics: ["Statements", "Questions (Wh- & Yes/No)", "Commands and Requests"] },
      { number: 5, title: "Subject-Verb Agreement", titleNe: "Subject-Verb Concord", topics: ["Compound Subjects", "Indefinite Pronouns", "Collective Nouns"] },
      { number: 6, title: "Relative Clauses", titleNe: "Defining & Non-Defining Relative Clauses", topics: ["Who, Which, That, Whose, Where", "Sentence Joining"] },
      { number: 7, title: "Writing Skills: Formal Letters & CV", titleNe: "Formal Letters & Bio-data", topics: ["Job Applications", "Letters to the Editor", "Personal Statements"] },
      { number: 8, title: "Narrative & Essay Writing", titleNe: "Essay & Story Writing", topics: ["Descriptive Essays", "Problem-Solution Essays", "Story from Outlines"] }
    ]
  },
  {
    id: "social-studies",
    name: "Social Studies & Values",
    nameNe: "सामाजिक अध्ययन तथा मानव मूल्य शिक्षा",
    code: "SOC-905",
    icon: "Compass",
    color: "from-amber-600 to-orange-500",
    totalChapters: 8,
    description: "Society, Constitution of Nepal 2072, Geography of Nepal & Darchula, Cultural Heritage, and Financial Literacy.",
    descriptionNe: "हाम्रो समाज, नेपालको संविधान २०७२, भूगोल र नक्सा कार्य, सुदूरपश्चिमको सम्पदा, र वित्तीय साक्षरता।",
    chapters: [
      { number: 1, title: "We and Our Society", titleNe: "हामी र हाम्रो समाज", topics: ["Social Diversity in Nepal", "Harmonious Coexistence", "Human Values"] },
      { number: 2, title: "Traditions and Culture", titleNe: "हाम्रा परम्परा, मूल्य र मान्यता", topics: ["Cultural Heritage of Sudurpashchim", "Gaura Festival", "National Dignity"] },
      { number: 3, title: "Social Problems & Solutions", titleNe: "सामाजिक समस्या, विकृति र समाधान", topics: ["Superstition Eradication", "Addiction Prevention", "Gender Equality"] },
      { number: 4, title: "Civic Consciousness & Constitution", titleNe: "नागरिक चेतना र नेपालको संविधान", topics: ["Constitution of Nepal 2072", "Fundamental Rights (मौलिक हक)", "Citizen Duties"] },
      { number: 5, title: "Our Earth & Nepal Geography", titleNe: "हाम्रो पृथ्वी र नेपालको भूगोल", topics: ["Topography of Nepal", "Darchula District Profile (Mahakali, Api Nampa)", "Map Scale & Symbols"] },
      { number: 6, title: "History and National Heroes", titleNe: "हाम्रो गौरवशाली इतिहास", topics: ["Unification of Nepal", "National Luminaries (राष्ट्रिय विभूतिहरू)"] },
      { number: 7, title: "Economic Activities & Financial Literacy", titleNe: "आर्थिक क्रियाकलाप र वित्तीय साक्षरता", topics: ["Agriculture & Tourism in Far-West", "Budgeting and Savings for Youth", "Entrepreneurial Mindset"] },
      { number: 8, title: "International Relations & Nepal", titleNe: "अन्तर्राष्ट्रिय सम्बन्ध र नेपाल", topics: ["United Nations Organizations", "SAARC & Diplomatic Relations"] }
    ]
  },
  {
    id: "computer-science",
    name: "Computer Science",
    nameNe: "कम्प्युटर विज्ञान",
    code: "CMP-906",
    icon: "Laptop",
    color: "from-cyan-600 to-blue-500",
    totalChapters: 7,
    description: "Computer fundamentals, Number Systems (Binary/Decimal), HTML/CSS Web Development, Algorithm/Flowcharts, and Cyber Safety.",
    descriptionNe: "कम्प्युटरको आधारभूत सिद्धान्त, बाइनरी संख्या पद्धति, वेब डिजाइन (HTML/CSS), एल्गोरिदम, र साइबर सुरक्षा कानुन।",
    chapters: [
      { number: 1, title: "Computer Fundamentals & Architecture", titleNe: "कम्प्युटर प्रणाली र संरचना", topics: ["Von Neumann Architecture", "CPU, RAM, Cache, Storage", "Hardware vs Software"] },
      { number: 2, title: "Number Systems", titleNe: "संख्या प्रणाली (Number Systems)", topics: ["Binary to Decimal Conversion", "Decimal to Binary", "Hexadecimal & Octal Basics"] },
      { number: 3, title: "Computer Software & Operating Systems", titleNe: "सफ्टवेयर र अपरेटिङ सिस्टम", topics: ["System Software vs Application Software", "Functions of Windows/Linux OS"] },
      { number: 4, title: "Algorithms and Flowcharts", titleNe: "एल्गोरिदम र फ्लोचार्ट", topics: ["Problem Solving Steps", "Flowchart Symbols", "Conditional Logic & Loops"] },
      { number: 5, title: "Web Technology (HTML & CSS)", titleNe: "वेब प्रविधि (HTML र CSS)", topics: ["HTML5 Tags & Structure", "CSS Selectors, Box Model & Flexbox", "Building Student Portfolios"] },
      { number: 6, title: "Introduction to Programming (QBasic/Python)", titleNe: "प्रोग्रामिङको परिचय", topics: ["Variables & Data Types", "Input/Output Statements", "Simple Calculations"] },
      { number: 7, title: "Cyber Safety & Nepal Cyber Law", titleNe: "साइबर सुरक्षा र नेपालको साइबर कानुन", topics: ["Strong Passwords & 2FA", "Phishing & Malware Protection", "Electronic Transactions Act 2063"] }
    ]
  },
  {
    id: "optional-math",
    name: "Optional Mathematics",
    nameNe: "ऐच्छिक गणित (Optional Math)",
    code: "OPT-907",
    icon: "Binary",
    color: "from-violet-600 to-fuchsia-500",
    totalChapters: 7,
    description: "Advanced mathematics for Grade 9: Functions, Matrices, Coordinate Geometry, Advanced Trigonometry, Vectors, and Transformations.",
    descriptionNe: "कक्षा ९ को ऐच्छिक गणित: फङ्सन, म्याट्रिक्स, निर्देशांक ज्यामिति, त्रिकोणमिति, क्टर र रूपान्तरण।",
    chapters: [
      { number: 1, title: "Functions and Polynomials", titleNe: "फलन र पोलिनोमियल्स", topics: ["Domain and Range", "One-to-One and Onto Functions", "Polynomial Division"] },
      { number: 2, title: "Matrices & Determinants", titleNe: "म्याट्रिक्स (Matrices)", topics: ["Order of Matrix", "Matrix Addition and Multiplication", "Determinant of 2x2 Matrix"] },
      { number: 3, title: "Coordinate Geometry", titleNe: "निर्देशांक ज्यामिति", topics: ["Distance Formula", "Section Formula (Internal & External)", "Slope and Equation of Straight Lines"] },
      { number: 4, title: "Advanced Trigonometry", titleNe: "त्रिकोणमिति (Trigonometric Transformations)", topics: ["Trigonometric Identities", "Compound Angle Formulae", "Multiple Angles (sin 2A, cos 2A)"] },
      { number: 5, title: "Vectors", titleNe: "क्टर (Vectors)", topics: ["Magnitude and Direction", "Vector Addition (Triangle & Parallelogram Law)", "Scalar/Dot Product"] },
      { number: 6, title: "Transformation", titleNe: "रूपान्तरण (Transformation)", topics: ["Reflection in Axes", "Rotation about Origin", "Translation Vectors", "Enlargement"] },
      { number: 7, title: "Statistics & Dispersion", titleNe: "तथ्यांकशास्त्र र विचलन", topics: ["Mean Deviation", "Standard Deviation introduction", "Quartile Deviation"] }
    ]
  },
  {
    id: "health-physical",
    name: "Health & Physical Education",
    nameNe: "स्वास्थ्य तथा शारीरिक शिक्षा",
    code: "HPE-908",
    icon: "Activity",
    color: "from-rose-600 to-pink-500",
    totalChapters: 6,
    description: "Physical health, Yoga & Pranayama, Balanced Nutrition, Adolescent Growth, First Aid, and Community Wellness.",
    descriptionNe: "शारीरिक सुगठन, योग र प्राणायाम, सन्तुलित आहार, प्राथमिक उपचार र सामुदायिक स्वास्थ्य।",
    chapters: [
      { number: 1, title: "Physical Fitness & Exercise", titleNe: "शारीरिक तन्दुरुस्ती र कसरत", topics: ["Cardiovascular Endurance", "Flexibility Drills", "Warm-up & Cool-down Routines"] },
      { number: 2, title: "Yoga, Asanas and Pranayama", titleNe: "योग, आसन र प्राणायाम", topics: ["Surya Namaskar Steps", "Bhramari & Anulom Vilom", "Mental Calmness for Students"] },
      { number: 3, title: "Nutrition and Balanced Diet", titleNe: "पोषण र सन्तुलित आहार", topics: ["Macronutrients & Micronutrients", "Preventing Malnutrition", "Local Food Value in Himalayan Nepal"] },
      { number: 4, title: "First Aid & Emergency Response", titleNe: "प्राथमिक उपचार र उद्धार", topics: ["Sprains, Fractures, Bleeding", "Burn Management", "High Altitude Sickness basics"] },
      { number: 5, title: "Adolescent Health & Well-being", titleNe: "किशोरावस्थाको स्वास्थ्य", topics: ["Physical and Emotional Changes", "Stress Management for Board Exams"] },
      { number: 6, title: "Community Hygiene & Sanitation", titleNe: "सामुदायिक सरसफाइ र स्वास्थ्य", topics: ["Safe Drinking Water", "Waste Segregation", "Communicable Disease Prevention"] }
    ]
  }
];

export const STUDY_NOTES: StudyNote[] = [
  {
    id: "note-math-angles",
    subjectId: "mathematics",
    chapterNumber: 6,
    chapterName: "Trigonometry - Measurement of Angles",
    chapterNameNe: "त्रिकोणमिति - कोण मापन पद्धति",
    title: "Sexagesimal, Centesimal & Circular Systems (Degree, Grade, Radian)",
    titleNe: "डिग्री, ग्रेड र रेडियन प्रणालीको विस्तृत नियम तथा सूत्र",
    summary: "Complete guide to the three major angle measurement systems used in CDC Grade 9 Mathematics, with conversion rules and step-by-step worked examples.",
    summaryNe: "कक्षा ९ को पाठ्यक्रममा आधारित तीन मुख्य कोण मापन पद्धतिहरू: षष्टिक (डिग्री), शतिक (ग्रेड) र वृत्तीय (रेडियन) बीचको सम्बन्ध र रूपान्तरण सूत्र।",
    definitions: [
      {
        term: "Sexagesimal System (Degree Measure)",
        termNe: "षष्टिक प्रणाली (डिग्री मापन)",
        meaning: "A system where one right angle is divided into 90 equal parts called degrees (°). 1° = 60 minutes ('), 1' = 60 seconds ('').",
        meaningNe: "एक समकोणलाई ९० बराबर भागमा विभाजन गरिएको पद्धति। १ समकोण = ९०°, १° = ६० मिनेट, १' = ६० सेकेन्ड।"
      },
      {
        term: "Centesimal System (Grade Measure)",
        termNe: "शतिक प्रणाली (ग्रेड मापन)",
        meaning: "A system where one right angle is divided into 100 equal parts called grades (g). 1g = 100 centesimal minutes ('), 1' = 100 centesimal seconds ('').",
        meaningNe: "एक समकोणलाई १०० बराबर भागमा विभाजन गरिएको पद्धति। १ समकोण = १००g, १g = १००', १' = १००''।"
      },
      {
        term: "Circular System (Radian Measure)",
        termNe: "वृत्तीय प्रणाली (रेडियन मापन)",
        meaning: "One radian (1^c) is the angle subtended at the center of a circle by an arc whose length is equal to the radius of the circle.",
        meaningNe: "कुनै वृत्तको अर्धव्यास बराबर लम्बाइ भएको चापले वृत्तको केन्द्रमा बनाउने कोणलाई १ रेडियन भनिन्छ।"
      }
    ],
    formulas: [
      {
        name: "Fundamental Equivalence Relation",
        formula: "D / 180 = G / 200 = R / π",
        explanation: "Relates Degree (D), Grade (G), and Radian (R). One right angle = 90° = 100g = (π/2)^c.",
        explanationNe: "डिग्री (D), ग्रेड (G) र रेडियन (R) बीचको आधारभूत सम्बन्ध। १ समकोण = ९०° = १००g = π/२ रेडियन।"
      },
      {
        name: "Degree to Grade",
        formula: "G = D × (10 / 9)",
        explanation: "Multiply degrees by 10/9 to obtain grades.",
        explanationNe: "डिग्रीलाई १०/९ ले गुणन गरेर ग्रेड प्राप्त हुन्छ।"
      },
      {
        name: "Degree to Radian",
        formula: "R = D × (π / 180)",
        explanation: "Multiply degrees by π/180 to convert into radians.",
        explanationNe: "डिग्रीलाई π/१८० ले गुणन गर्दा रेडियनमा रूपान्तरण हुन्छ।"
      },
      {
        name: "Arc Length & Central Angle",
        formula: "s = r × θ (where θ is in radians)",
        explanation: "Arc length equals radius multiplied by angle in radians.",
        explanationNe: "चापको लम्बाइ = अर्धव्यास × कोण (रेडियनमा)।"
      }
    ],
    workedExamples: [
      {
        question: "Convert 45° into Centesimal (Grade) and Circular (Radian) measures.",
        questionNe: "४५° लाई ग्रेड (g) र रेडियन (^c) मा रूपान्तरण गर्नुहोस्।",
        solution: "1. Grade: G = 45 × (10/9) = 5 × 10 = 50g.\n2. Radian: R = 45 × (π/180) = π/4 radians (approx 0.7854 rad).",
        solutionNe: "१. ग्रेड: G = ४५ × (१०/९) = ५ × १० = ५०g\n२. रेडियन: R = ४५ × (π/१८०) = π/४ रेडियन।"
      },
      {
        question: "The two angles of a triangle are 60° and 50g. Find the third angle in radians.",
        questionNe: "कुनै त्रिभुजका दुई कोणहरू क्रमशः ६०° र ५०g छन् भने तेस्रो कोणको मान रेडियनमा पत्ता लगाउनुहोस्।",
        solution: "1. Convert 50g to degrees: D = 50 × (9/10) = 45°.\n2. Sum of angles in a triangle = 180°.\n3. Third angle = 180° - (60° + 45°) = 180° - 105° = 75°.\n4. Convert 75° to radians: R = 75 × (π/180) = 5π/12 radians.",
        solutionNe: "१. ५०g लाई डिग्रीमा लैजाँदा: ५० × (९/१०) = ४५°\n२. त्रिभुजका तीन कोणको जोड = १८०°\n३. तेस्रो कोण = १८०° - (६०° + ४५°) = ७५°\n४. ७५° लाई रेडियनमा: ७५ × (π/१८०) = ५π/१२ रेडियन।"
      }
    ],
    practiceQuestions: [
      {
        type: "short",
        question: "Define 1 radian and state its value in degrees up to 2 decimal places.",
        questionNe: "१ रेडियनको परिभाषा लेखी यसको मान डिग्रीमा कति हुन्छ उल्लेख गर्नुहोस्।",
        answer: "1 radian is the angle subtended at the center of a circle by an arc equal in length to its radius. 1 rad ≈ 57.296° or 57° 17' 44.8''.",
        answerNe: "वृत्तको अर्धव्यास बराबरको चापले केन्द्रमा बनाउने कोण १ रेडियन हो। १ रेडियन ≈ ५७.२९६° (लगभग ५७° १७' ४५'')।"
      },
      {
        type: "long",
        question: "The difference between two acute angles of a right-angled triangle is 20g. Find the angles in degrees.",
        questionNe: "कुनै समकोणी त्रिभुजका दुई न्यूनकोणहरूको अन्तर २०g छ भने ती कोणहरूलाई डिग्रीमा पत्ता लगाउनुहोस्।",
        answer: "Let angles be A and B. A + B = 90°. Given A - B = 20g = 20 × (9/10) = 18°. Adding equations: 2A = 108° => A = 54°. Thus B = 36°.",
        answerNe: "कोणहरू A र B मानौं। A + B = ९०°। फरक A - B = २०g = २० × (९/१०) = १८°। दुबै समीकरण जोड्दा: २A = १०८° => A = ५४°, त्यसैले B = ३६°।"
      }
    ],
    cdcVerified: true,
    officialReference: "CDC Nepal Grade 9 Compulsory Mathematics, Chapter 6, Page 142-158."
  },
  {
    id: "note-science-pressure",
    subjectId: "science",
    chapterNumber: 3,
    chapterName: "Pressure (चाँप)",
    chapterNameNe: "चाँप (Pressure) - पास्कलको नियम र आर्किमिडिजको सिद्धान्त",
    title: "Pascal's Law, Hydraulic Machines & Archimedes' Principle",
    titleNe: "पास्कलको नियम, हाइड्रोलिक मेसिनहरू र आर्किमिडिजको सिद्धान्त",
    summary: "Detailed study notes on fluid pressure, Pascal's law, hydraulic lift principle, atmospheric pressure, upthrust, and Archimedes' principle with diagrams and calculations.",
    summaryNe: "तरल पदार्थको चाँप, पास्कलको नियम, हाइड्रोलिक लिफ्ट, वायुमण्डलीय चाँप, उर्ध्वचाप र आर्किमिडिजको सिद्धान्तको गणितीय व्याख्या।",
    definitions: [
      {
        term: "Pressure (P)",
        termNe: "चाँप (P)",
        meaning: "The thrust (perpendicular force) acting normally per unit surface area. Formula: P = F / A. SI unit: Pascal (Pa) or N/m².",
        meaningNe: "कुनै सतहको एकाइ क्षेत्रफलमा लम्ब रूपले पर्ने बललाई चाँप भनिन्छ। P = F / A। एकाइ: पास्कल (Pa)।"
      },
      {
        term: "Pascal's Law",
        termNe: "पास्कलको नियम",
        meaning: "When pressure is applied on an enclosed liquid, it is transmitted equally and normally in all directions without any loss.",
        meaningNe: "बन्द भाँडोमा राखिएको तरल पदार्थमा कुनै बिन्दुमा चाँप दियो भने त्यो चाँप सबै दिशामा समान रूपले र लम्ब रूपमा प्रसारण हुन्छ।"
      },
      {
        term: "Upthrust (Buoyant Force)",
        termNe: "उर्ध्वचाप (Upthrust)",
        meaning: "The resultant upward force exerted by a liquid on a body partially or completely submerged in it. Formula: U = V × d × g.",
        meaningNe: "कुनै वस्तुलाई तरलमा डुबाउँदा तरलले वस्तुलाई माथितिर धकेल्ने परिणामी बललाई उर्ध्वचाप भनिन्छ। U = V × d × g।"
      },
      {
        term: "Archimedes' Principle",
        termNe: "आर्किमिडिजको सिद्धान्त",
        meaning: "When an object is wholly or partially immersed in a liquid, it experiences an upthrust which is equal to the weight of the liquid displaced by it.",
        meaningNe: "कुनै वस्तुलाई तरल पदार्थमा पूर्ण वा आंशिक रूपमा डुबाउँदा उक्त वस्तुले विस्थापित गरेको तरलको तौल बराबरको उर्ध्वचाप अनुभव गर्दछ।"
      }
    ],
    formulas: [
      {
        name: "Liquid Pressure Formula",
        formula: "P = h × d × g",
        explanation: "Liquid pressure depends on depth (h), density of liquid (d), and acceleration due to gravity (g).",
        explanationNe: "तरलको चाँप गहिराइ (h), तरलको घनत्व (d) र गुरुत्व प्रवेग (g) मा निर्भर गर्दछ।"
      },
      {
        name: "Hydraulic Machine Principle",
        formula: "F₁ / A₁ = F₂ / A₂  =>  F₂ = F₁ × (A₂ / A₁)",
        explanation: "Force multiplication principle used in hydraulic lifts and brakes.",
        explanationNe: "हाइड्रोलिक लिफ्ट र ब्रेकमा सानो बलले ठूलो तौल उठाउन प्रयोग हुने सूत्र।"
      },
      {
        name: "Upthrust Formula",
        formula: "Upthrust (U) = V × d × g = Weight of Displaced Liquid",
        explanation: "V = volume of displaced liquid, d = density of liquid, g = 9.8 m/s².",
        explanationNe: "V = विस्थापित तरलको आयतन, d = घनत्व, g = ९.८ m/s²।"
      }
    ],
    workedExamples: [
      {
        question: "In a hydraulic garage lift, the cross-sectional area of small piston is 0.02 m² and that of large piston is 2.5 m². What force must be applied on the small piston to lift a vehicle of mass 1500 kg? (g = 9.8 m/s²)",
        questionNe: "एक हाइड्रोलिक लिफ्टमा सानो पिस्टनको क्षेत्रफल ०.०२ m² र ठूलो पिस्टनको क्षेत्रफल २.५ m² छ। १५०० kg को गाडी उठाउन सानो पिस्टनमा कति बल लगाउनुपर्छ? (g = ९.८ m/s²)",
        solution: "1. Force on large piston F₂ = m × g = 1500 × 9.8 = 14,700 N.\n2. By Pascal's law: F₁ / A₁ = F₂ / A₂\n3. F₁ = F₂ × (A₁ / A₂) = 14,700 × (0.02 / 2.5) = 14,700 × 0.008 = 117.6 N.\nResult: A small force of 117.6 N can lift a heavy 1500 kg vehicle!",
        solutionNe: "१. ठूलो पिस्टनमा चाहिने बल F₂ = १५०० × ९.८ = १४,७०० N\n२. पास्कलको नियमअनुसार: F₁ / A₁ = F₂ / A₂\n३. F₁ = १४,७०० × (०.०२ / २.५) = ११७.६ N। अतः ११७.६ N को सानो बलले १५०० किलोको गाडी उठाउन सकिन्छ।"
      }
    ],
    practiceQuestions: [
      {
        type: "short",
        question: "Why is water not used in a hydraulic machine?",
        questionNe: "हाइड्रोलिक मेसिनमा पानीको सट्टा तेल किन प्रयोग गरिन्छ?",
        answer: "Water causes rust/corrosion in metal parts, evaporates easily, has high freezing point, and has low lubricating property compared to oil.",
        answerNe: "पानीले मेसिनका धातुहरू खियाउँछ, छिटो वाष्पीकरण हुन्छ र तेलको जस्तो चिल्लोपना (लुब्रिकेसन) प्रदान गर्दैन।"
      }
    ],
    cdcVerified: true,
    officialReference: "CDC Nepal Grade 9 Science & Technology, Chapter 3 (Pressure), Page 38-54."
  },
  {
    id: "note-nepali-grammar",
    subjectId: "nepali",
    chapterNumber: 2,
    chapterName: "पदवर्ग (Parts of Speech in Devanagari)",
    chapterNameNe: "पदवर्ग पहिचान र वर्गीकरण",
    title: "नेपाली पदवर्ग पहिचान: नाम, सर्वनाम, विशेषण र क्रियापद",
    titleNe: "नेपाली पदवर्ग पहिचान: नाम, सर्वनाम, विशेषण, क्रियापद र अव्यय",
    summary: "Comprehensive guide to identifying Nepali parts of speech in Grade 9 CDC board examinations with rules, indicators, and model exam questions.",
    summaryNe: "कक्षा ९ को अनिवार्य नेपाली परीक्षामा आउने पदवर्ग (नाम, सर्वनाम, विशेषण, क्रियापद, नामयोगी, संयोजक) पहिचान गर्ने सरल र अचूक नियमहरू।",
    definitions: [
      {
        term: "नाम (Noun)",
        termNe: "नाम (Noun)",
        meaning: "कुनै व्यक्ति, वस्तु, स्थान, भाव वा समुदाय बुझाउने शब्दलाई नाम भनिन्छ। जस्तै: भुपेन्द्र, दार्चुला, विद्यालय, हिमाल, माया, पानी।",
        meaningNe: "कुनै व्यक्ति, वस्तु, स्थान, भाव वा समुदाय बुझाउने शब्द।"
      },
      {
        term: "सर्वनाम (Pronoun)",
        termNe: "सर्वनाम (Pronoun)",
        meaning: "नामको सट्टामा प्रयोग हुने शब्दलाई सर्वनाम भनिन्छ। जस्तै: म, हामी, तँ, तिमी, तपाईं, ऊ, उनी, को, के, जे।",
        meaningNe: "नाम शब्दको दोहोरिने क्रम रोक्न नामको सट्टामा आउने शब्द।"
      },
      {
        term: "विशेषण (Adjective)",
        termNe: "विशेषण (Adjective)",
        meaning: "नाम वा सर्वनामको गुण, दोष, संख्या, परिमाण वा विशेषता बुझाउने शब्द। जस्तै: राम्रो, अग्लो, परिश्रमी, पाँच, थोरै, यो (किताब)।",
        meaningNe: "नाम वा सर्वनामको गुण वा विशेषता देखाउने शब्द।"
      },
      {
        term: "क्रियापद (Verb)",
        termNe: "क्रियापद (Verb)",
        meaning: "वाक्यको अन्त्यमा आएर काम भएको, अवस्था वा अस्तित्व बुझाउने पूर्ण शब्द। जस्तै: पढ्छ, लेख्छिन्, गर्यौं, हुन्।",
        meaningNe: "कुनै कार्य वा अवस्था सम्पन्न भएको बुझाउने शब्द।"
      }
    ],
    workedExamples: [
      {
        question: "रेखाङ्कित पदको वर्ग पहिचान गर्नुहोस्: 'परिश्रमी भुपेन्द्रले कम्प्युटरमा नयाँ सफ्टवेयर बनायो र साथीहरूलाई देखायो।'",
        questionNe: "रेखाङ्कित पदहरूको वर्ग पहिचान गर्नुहोस्: परिश्रमी, भुपेन्द्र, नयाँ, र, देखायो।",
        solution: "१. परिश्रमी = विशेषण (भुपेन्द्रको गुण बुझाएको)\n२. भुपेन्द्र = नाम (व्यक्तिवाचक नाम)\n३. नयाँ = विशेषण (सफ्टवेयरको विशेषता)\n४. र = संयोजक (दुई उपवाक्य जोड्ने शब्द)\n५. देखायो = क्रियापद (वाक्य टुङ्ग्याउने काम बुझाउने शब्द)",
        solutionNe: "१. परिश्रमी: विशेषण\n२. भुपेन्द्र: नाम\n३. नयाँ: विशेषण\n४. र: संयोजक\n५. देखायो: क्रियापद"
      }
    ],
    practiceQuestions: [
      {
        type: "short",
        question: "विशेषण र नामयोगी बीचको फरक एउटा उदाहरणसहित स्पष्ट पार्नुहोस्।",
        questionNe: "विशेषण र नामयोगी बीचको फरक उदाहरणसहित स्पष्ट पार्नुहोस्।",
        answer: "विशेषणले नामको विशेषता बताउँछ (जस्तै: 'हरियो रूख') भने नामयोगी नाम वा सर्वनामसँग जोडिएर सम्बन्ध देखाउँछ (जस्तै: 'रूखमाथि', 'टेबुलमुनि')।",
        answerNe: "विशेषणले नामको विशेषता (जस्तै: रातो कलम) देखाउँछ, नामयोगी नामसँग गाँसिएर (जस्तै: घरभित्र, भाइसित) आउँछ।"
      }
    ],
    cdcVerified: true,
    officialReference: "CDC Nepal Grade 9 Compulsory Nepali, Chapter 2 (पदवर्ग), Page 22-35."
  },
  {
    id: "note-computer-number-systems",
    subjectId: "computer-science",
    chapterNumber: 2,
    chapterName: "Number Systems & Logic Gates",
    chapterNameNe: "संख्या प्रणाली (बाइनरी, डेसिमल) र रूपान्तरण विधि",
    title: "Binary to Decimal & Decimal to Binary Conversion",
    titleNe: "बाइनरी र डेसिमल संख्या प्रणाली रूपान्तरण विधि तथा सूत्र",
    summary: "Clear rules and algorithms for converting between Decimal (Base 10) and Binary (Base 2) systems, along with Octal and Hexadecimal overviews.",
    summaryNe: "कम्प्युटर विज्ञान कक्षा ९ को लागि डेसिमल (आधार १०) र बाइनरी (आधार २) संख्या प्रणाली बीचको रूपान्तरण, निरन्तर भाग विधि र गुणन विधिको पूर्ण अभ्यास।",
    definitions: [
      {
        term: "Decimal System (Base 10)",
        termNe: "डेसिमल संख्या प्रणाली (आधार १०)",
        meaning: "A positional number system that uses 10 distinct symbols: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9.",
        meaningNe: "० देखि ९ सम्मका १० वटा अंकहरू प्रयोग गरिने मानव जीवनमा प्रचलित संख्या प्रणाली।"
      },
      {
        term: "Binary System (Base 2)",
        termNe: "बाइनरी संख्या प्रणाली (आधार २)",
        meaning: "A number system used by computers and digital circuits with base 2, utilizing only two digits: 0 and 1 (bits).",
        meaningNe: "कम्प्युटरले बुझ्ने दुईवटा मात्र अंक (० र १) प्रयोग गरिने प्रणाली।"
      }
    ],
    formulas: [
      {
        name: "Binary to Decimal Positional Weight Formula",
        formula: "Decimal = Σ (bit_i × 2^i) for i = 0 to n-1",
        explanation: "Multiply each bit by 2 raised to its position power (starting from right at power 0).",
        explanationNe: "दायाँबाट सुरु गरी प्रत्येक बाइनरी अंकलाई २ को घातांकले गुणन गरेर जोड्ने।"
      }
    ],
    workedExamples: [
      {
        question: "Convert (45)₁₀ into binary.",
        questionNe: "(४५)₁₀ लाई बाइनरी संख्यामा रूपान्तरण गर्नुहोस्।",
        solution: "Successive division by 2:\n45 / 2 = 22 remainder 1\n22 / 2 = 11 remainder 0\n11 / 2 = 5 remainder 1\n5 / 2 = 2 remainder 1\n2 / 2 = 1 remainder 0\n1 / 2 = 0 remainder 1\nReading remainders from bottom to top: (45)₁₀ = (101101)₂.",
        solutionNe: "२ ले लगातार भाग गर्दा शेषहरू तलबाट माथि पढ्दा: (४५)₁₀ = (१०११०१)₂।"
      },
      {
        question: "Convert (11010)₂ into decimal.",
        questionNe: "(११०१०)₂ लाई डेसिमलमा लैजानुहोस्।",
        solution: "1×2⁴ + 1×2³ + 0×2² + 1×2¹ + 0×2⁰\n= 1×16 + 1×8 + 0×4 + 1×2 + 0×1\n= 16 + 8 + 0 + 2 + 0 = (26)₁₀.",
        solutionNe: "१×१६ + १×८ + ०×४ + १×२ + ०×१ = (२६)₁₀।"
      }
    ],
    practiceQuestions: [
      {
        type: "short",
        question: "What is 1 Byte in terms of bits and nibbles?",
        questionNe: "१ बाइट (Byte) मा कति बिट (bit) र निबल (nibble) हुन्छ?",
        answer: "1 Byte = 8 bits = 2 nibbles (since 1 nibble = 4 bits).",
        answerNe: "१ बाइट = ८ बिट = २ निबल (किनकि १ निबल = ४ बिट)।"
      }
    ],
    cdcVerified: true,
    officialReference: "CDC Nepal Grade 9 Computer Studies, Unit 2 (Number Systems), Page 18-32."
  }
];

export const PROJECTS: Project[] = [
  {
    id: "bhupendra-portfolio-hub",
    title: "Bhupendra Joshi Portfolio & CDC Grade 9 Learning Hub",
    titleNe: "भुपेन्द्र जोशी व्यक्तिगत पोर्टफोलियो तथा कक्षा ९ डिजिटल लाइब्रेरी",
    category: "Personal portfolio website",
    categoryNe: "व्यक्तिगत पोर्टफोलियो वेबसाइट",
    description: "An extraordinary bilingual personal website combining personal identity, school achievements, verified Grade 9 CDC study resources, and Bhupendra AI assistant.",
    descriptionNe: "व्यक्तिगत परिचय, विद्यालय विवरण, कक्षा ९ को सम्पूर्ण पाठ्यक्रम सामग्री र भुपेन्द्र एआई सहायक एकीकृत गरिएको आधुनिक द्विभाषिक वेबसाइट।",
    detailedProcess: "Architected a full-stack platform with Vite, React, Tailwind CSS, Express backend, responsive dark/navy theme, bilingual context state, and Gemini-powered RAG chat assistant.",
    challenges: "Harmonizing English and Devanagari typography smoothly while providing instant search across 8 CDC subjects, formulas, and projects without interface lag.",
    learningOutcomes: "Mastered full-stack React + Express architecture, bilingual i18n state patterns, modern glassmorphism UI, and server-side AI retrieval pipelines.",
    tools: ["React 19", "TypeScript", "Tailwind CSS", "Express", "Vite", "Gemini AI API"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80",
    demoUrl: "#",
    githubUrl: "https://github.com",
    featured: true,
    status: "completed"
  },
  {
    id: "degree-gradian-radian-system",
    title: "Degree, Gradian & Radian Angle Measurement System",
    titleNe: "डिग्री, ग्रेड र रेडियन कोण मापन अन्तरक्रियात्मक प्रणाली",
    category: "Degree, gradian, and radian systems",
    categoryNe: "डिग्री, ग्रेड र रेडियन प्रणाली",
    description: "Interactive visual mathematics tool comparing Sexagesimal, Centesimal, and Circular angle systems with live arc rendering and step-by-step CDC formulas.",
    descriptionNe: "षष्टिक (डिग्री), शतिक (ग्रेड) र वृत्तीय (रेडियन) कोण मापन प्रणालीलाई रेखाचित्र र प्रत्यक्ष सूत्रसहित तुलना गर्ने अन्तरक्रियात्मक गणित औजार।",
    detailedProcess: "Designed interactive SVG circle arc renderer with real-time slider controls (0 to 360° / 400g / 2π rad), formula conversion breakdown (D/180 = G/200 = R/π), and student practice drills.",
    challenges: "Maintaining floating point precision when converting non-terminating radian multiples of π into exact sexagesimal degrees, minutes, and seconds.",
    learningOutcomes: "Strengthened trigonometry foundations, trigonometric unit conversions, and Canvas/SVG geometry rendering.",
    tools: ["HTML5 Canvas", "JavaScript", "SVG", "Tailwind CSS", "MathJax/KaTeX logic"],
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop&q=80",
    demoUrl: "#degree-calc",
    githubUrl: "https://github.com",
    featured: true,
    status: "completed"
  },
  {
    id: "darchula-school-coordinates-explorer",
    title: "Darchula District & School Coordinates Explorer",
    titleNe: "दार्चुला जिल्ला तथा विद्यालय नक्सा कोअर्डिनेट अन्वेषक",
    category: "School geography and coordinates",
    categoryNe: "विद्यालय भूगोल तथा कोअर्डिनेट",
    description: "Geographic tool mapping Mahendra Model Secondary School (29.84°N, 80.53°E), Api mountain (7,132m), and Mahakali river valley with elevation profiles and distance calculations.",
    descriptionNe: "महेन्द्र नमुना माध्यमिक विद्यालय, दार्चुला खलङ्गा, अपी हिमाल (७,१३२ मिटर) र महाकाली नदीको भौगोलिक अवस्थिति र जीपीएस कोअर्डिनेट देखाउने डिजिटल नक्सा।",
    detailedProcess: "Gathered GPS coordinates of key Darchula landmarks, integrated geographic calculation algorithms (Haversine distance formula), and mapped topographical data for Social Studies Grade 9.",
    challenges: "Accurately reflecting mountain altitudes, district boundaries, and local landmark names in both Devanagari and Roman script.",
    learningOutcomes: "Learned Haversine coordinate math, GIS fundamentals, and deep practical appreciation of Sudurpashchim's geography.",
    tools: ["Leaflet/MapLibre", "GeoJSON", "TypeScript", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80",
    demoUrl: "#darchula-map",
    githubUrl: "https://github.com",
    featured: true,
    status: "completed"
  },
  {
    id: "scratch-solar-system-simulation",
    title: "Interactive Scratch 3D Solar System Simulation",
    titleNe: "अन्तरक्रियात्मक स्क्र्याच सौर्यमण्डल सिमुलेसन",
    category: "Scratch Solar System",
    categoryNe: "स्क्र्याच सौर्यमण्डल परियोजना",
    description: "An animated, educational planetary simulation programmed in Scratch and web canvas demonstrating orbital periods, relative planet sizes, and Kepler's laws for Science Grade 9.",
    descriptionNe: "कक्षा ९ को विज्ञान विषयको 'पृथ्वी र अन्तरिक्ष' एकाइलाई सघाउने गरी ग्रहहरूको परिक्रमण गति र आकार अनुपात देखाउने अन्तरक्रियात्मक सौर्यमण्डल सिमुलेसन।",
    detailedProcess: "Constructed Scratch custom blocks for elliptical orbits, programmed realistic scaled revolutions for all 8 planets, and exported canvas animation player.",
    challenges: "Balancing realistic distance scales (which are enormous) with screen visibility so that Mercury and Neptune are both understandable to student viewers.",
    learningOutcomes: "Gained core algorithmic thinking, event broadcasting, sprite synchronization, and astronomy physics concepts.",
    tools: ["Scratch 3.0", "HTML5 Canvas", "Vector Graphics", "Web Audio"],
    image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=80",
    demoUrl: "#solar-sim",
    githubUrl: "https://github.com",
    featured: true,
    status: "completed"
  },
  {
    id: "html-css-js-grade9-quiz",
    title: "CDC Grade 9 Interactive Math & Science Quiz Web App",
    titleNe: "कक्षा ९ गणित तथा विज्ञान अन्तरक्रियात्मक प्रश्नोत्तर एप",
    category: "HTML, CSS, and JavaScript projects",
    categoryNe: "HTML, CSS र JavaScript परियोजनाहरू",
    description: "A fast, gamified quiz web app with timer, immediate answer explanations in Nepali & English, and score analytics aligned with CDC terminal examinations.",
    descriptionNe: "कक्षा ९ का विद्यार्थीहरूका लागि समयसीमा सहितको क्विज एप, जसले गलत र सही उत्तरको विस्तृत नेपाली व्याख्या तत्काल देखाउँछ।",
    detailedProcess: "Wrote clean modular vanilla JavaScript with local storage tracking, randomized question selection from CDC question bank, and animated result cards.",
    challenges: "Building an intuitive mobile touch interface that functions smoothly on budget Android smartphones common in rural schools.",
    learningOutcomes: "DOM manipulation, state management in pure JS, sound effects with Web Audio API, and accessible mobile design.",
    tools: ["HTML5", "CSS3 Flexbox/Grid", "Modern JavaScript", "LocalStorage"],
    image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&auto=format&fit=crop&q=80",
    demoUrl: "#quiz-app",
    githubUrl: "https://github.com",
    featured: false,
    status: "completed"
  },
  {
    id: "youth-financial-literacy-planner",
    title: "Student Budget & Financial Literacy Calculator",
    titleNe: "विद्यार्थी बजेट तथा वित्तीय साक्षरता क्यालकुलेटर",
    category: "Business and entrepreneurship ideas",
    categoryNe: "व्यवसाय तथा उद्यमशीलता अवधारणाहरू",
    description: "A practical financial planner teaching Grade 9 students budgeting, pocket money tracking, simple interest calculations, and entrepreneurial seed savings.",
    descriptionNe: "कक्षा ९ को सामाजिक तथा गणित विषयसँग जोडिएको वित्तीय साक्षरता औजार, जसले विद्यार्थीलाई बचत, सामान्य ब्याज र साना उद्यमको योजना बनाउन सिकाउँछ।",
    detailedProcess: "Designed budgeting tables, integrated compound vs simple interest comparison visualizer, and created case studies based on rural agricultural opportunities in Sudurpashchim.",
    challenges: "Translating complex banking terms (compound interest, inflation, collateral) into student-friendly Nepali explanations.",
    learningOutcomes: "Understood practical financial math, economic planning, and spreadsheet-like reactive calculation logic.",
    tools: ["React", "Chart.js logic", "Tailwind CSS", "TypeScript"],
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&auto=format&fit=crop&q=80",
    demoUrl: "#finance-calc",
    githubUrl: "https://github.com",
    featured: false,
    status: "completed"
  },
  {
    id: "cyber-safety-presentation-poster",
    title: "Cyber Safety & Digital Ethics Presentation Deck",
    titleNe: "साइबर सुरक्षा तथा डिजिटल नैतिकता प्रस्तुतीकरण र पोस्टर",
    category: "PowerPoint presentations",
    categoryNe: "पावरपोइन्ट प्रस्तुतीकरणहरू",
    description: "Comprehensive 24-slide PowerPoint deck and infographics presented at school assembly on student password security, phishing detection, and Nepal Cyber Law.",
    descriptionNe: "महेन्द्र नमुना माध्यमिक विद्यालयको प्रार्थना सभामा प्रस्तुत गरिएको २४-स्लाइडको साइबर सुरक्षा प्रस्तुतीकरण र जानकारीमूलक पोस्टरहरू।",
    detailedProcess: "Researched Nepal's Electronic Transactions Act 2063, created custom vector illustrations in PowerPoint/Canva, and structured practical actionable security rules for classmates.",
    challenges: "Explaining two-factor authentication and social media privacy settings in simple, relatable terms for non-technical peers.",
    learningOutcomes: "Public speaking, visual communication hierarchy, and practical cybersecurity awareness.",
    tools: ["Microsoft PowerPoint", "Canva", "Vector Design", "Infographics"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=80",
    demoUrl: "#presentation-view",
    githubUrl: "https://github.com",
    featured: false,
    status: "completed"
  }
];

export const MODEL_QUESTIONS: ModelQuestionSet[] = [
  {
    id: "mq-math-grade9-set1",
    subjectId: "mathematics",
    title: "CDC Grade 9 Compulsory Mathematics Model Question Set 1",
    titleNe: "पाठ्यक्रम विकास केन्द्र कक्षा ९ अनिवार्य गणित नमुना प्रश्नपत्र - सेट १",
    year: "2081/2082",
    fullMarks: 75,
    passMarks: 27,
    timeLimit: "3 hours (३ घण्टा)",
    sections: [
      {
        name: "Group A (Knowledge & Understanding - 1 Mark each)",
        nameNe: "समूह 'क' (अति संक्षिप्त प्रश्नहरू - प्रत्येकको १ अंक)",
        marksPerQuestion: 1,
        questions: [
          {
            id: "mqa-1",
            q: "If A and B are disjoint sets, write the formula for n(A ∪ B).",
            qNe: "यदि A र B अलगिएका समूह (Disjoint sets) हुन् भने n(A ∪ B) को सूत्र लेख्नुहोस्।",
            answerHint: "n(A ∪ B) = n(A) + n(B)",
            answerHintNe: "n(A ∪ B) = n(A) + n(B)"
          },
          {
            id: "mqa-2",
            q: "Express 1 right angle in terms of Grades and Radians.",
            qNe: "१ समकोणलाई ग्रेड र रेडियनमा व्यक्त गर्नुहोस्।",
            answerHint: "1 right angle = 100g = (π/2) radians",
            answerHintNe: "१ समकोण = १००g = π/२ रेडियन"
          },
          {
            id: "mqa-3",
            q: "What is Heron's formula for the area of a scalene triangle?",
            qNe: "विषमबाहु त्रिभुजको क्षेत्रफल निकाल्ने हेरोनको सूत्र के हो?",
            answerHint: "Area = √[s(s-a)(s-b)(s-c)], where s = (a+b+c)/2",
            answerHintNe: "क्षेत्रफल = √[s(s-a)(s-b)(s-c)], जहाँ s = (a+b+c)/२"
          }
        ]
      },
      {
        name: "Group B (Short Answer Questions - 2 Marks each)",
        nameNe: "समूह 'ख' (संक्षिप्त प्रश्नहरू - प्रत्येकको २ अंक)",
        marksPerQuestion: 2,
        questions: [
          {
            id: "mqb-1",
            q: "In a class of 50 students, 30 like football, 25 like volleyball, and 5 like neither. Find how many students like both sports using a Venn diagram.",
            qNe: "५० जना विद्यार्थी भएको कक्षामा ३० जनाले फुटबल, २५ जनाले भलिबल र ५ जनाले कुनै पनि खेल मन पराउँदैनन्। भेनचित्र प्रयोग गरी दुवै खेल मन पराउने विद्यार्थी संख्या पत्ता लगाउनुहोस्।",
            answerHint: "n(U)=50, n(F)=30, n(V)=25, n(F∪V)'=5 => n(F∪V)=45. n(F∩V) = 30 + 25 - 45 = 10 students.",
            answerHintNe: "दुबै खेल मन पराउने = १० जना।"
          },
          {
            id: "mqb-2",
            q: "Convert 135° into circular measure (radians).",
            qNe: "१३५° लाई वृत्तीय मान (रेडियन) मा बदल्नुहोस्।",
            answerHint: "R = 135 × (π / 180) = 3π / 4 radians.",
            answerHintNe: "१३५ × (π/१८०) = ३π/४ रेडियन।"
          }
        ]
      },
      {
        name: "Group C (Long Answer Questions - 4 Marks each)",
        nameNe: "समूह 'ग' (लामो उत्तर आउने प्रश्नहरू - प्रत्येकको ४ अंक)",
        marksPerQuestion: 4,
        questions: [
          {
            id: "mqc-1",
            q: "Solve the simultaneous equations using substitution or elimination method: 3x + 2y = 19 and 2x + 5y = 20.",
            qNe: "समीकरणहरू हल गर्नुहोस्: 3x + 2y = 19 र 2x + 5y = 20।",
            answerHint: "Multiply eqn 1 by 2 and eqn 2 by 3: 6x + 4y = 38, 6x + 15y = 60 => 11y = 22 => y = 2. Then x = (19 - 4)/3 = 5. Solution: (x=5, y=2).",
            answerHintNe: "x = ५, y = २।"
          }
        ]
      }
    ]
  },
  {
    id: "mq-science-grade9-set1",
    subjectId: "science",
    title: "CDC Grade 9 Science & Technology Model Question Set 1",
    titleNe: "पाठ्यक्रम विकास केन्द्र कक्षा ९ विज्ञान तथा प्रविधि नमुना प्रश्न सेट १",
    year: "2081/2082",
    fullMarks: 75,
    passMarks: 27,
    timeLimit: "3 hours (३ घण्टा)",
    sections: [
      {
        name: "Group A (Very Short Questions - 1 Mark each)",
        nameNe: "समूह 'क' (अति छोटो प्रश्नहरू - १ अंक)",
        marksPerQuestion: 1,
        questions: [
          {
            id: "sqa-1",
            q: "State Pascal's Law of liquid pressure.",
            qNe: "तरल पदार्थको चाँपसम्बन्धी पास्कलको नियम उल्लेख गर्नुहोस्।",
            answerHint: "Pressure exerted on an enclosed liquid is transmitted equally and undiminished in all directions.",
            answerHintNe: "बन्द भाँडोमा रहेको तरलमा दिइएको चाँप सबैतिर समान रूपमा प्रसारण हुन्छ।"
          },
          {
            id: "sqa-2",
            q: "What is the SI unit of electric potential difference (Voltage)?",
            qNe: "विद्युत विभवान्तर (Voltage) को SI एकाइ के हो?",
            answerHint: "Volt (V)",
            answerHintNe: "भोल्ट (Volt - V)"
          }
        ]
      },
      {
        name: "Group B (Short Conceptual Questions - 2 Marks each)",
        nameNe: "समूह 'ख' (संक्षिप्त प्रश्नहरू - २ अंक)",
        marksPerQuestion: 2,
        questions: [
          {
            id: "sqb-1",
            q: "Why do dams have much thicker walls at the bottom than at the top?",
            qNe: "पानीको बाँधको तलको भित्ता माथिको भन्दा धेरै बाक्लो किन बनाइन्छ?",
            answerHint: "Liquid pressure increases with depth (P = h d g). Dam bottoms experience immense pressure, requiring thicker walls to withstand it.",
            answerHintNe: "गहिराइ बढ्दै जाँदा तरलको चाँप (P = h d g) धेरै बढ्छ, त्यसैले तलको बलियो भित्ता आवश्यक हुन्छ।"
          }
        ]
      }
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "student-journey-darchula-tech",
    title: "Coding from Darchula: How a Grade 9 Student Discovered Web Development",
    titleNe: "दार्चुलाबाट कोडिङ: कक्षा ९ को एक विद्यार्थीले कसरी वेब विकास सिके",
    excerpt: "Growing up in Khalanga, Darchula surrounded by Himalayan peaks, discovering how lines of code can create interactive tools for education changed everything.",
    excerptNe: "महाकाली नदी र अपी हिमालको काखमा रहेको दार्चुला खलङ्गाबाट कोडिङ सिक्दै आफ्ना साथीहरूका लागि उपयोगी शैक्षिक वेबसाइट बनाउने मेरो अनुभव।",
    content: `Growing up in Darchula, Sudurpashchim province, technology often feels far away from the capital city of Kathmandu. However, the internet and personal computers have broken down geographical barriers. 

When I entered Grade 9 at Mahendra Model Secondary School, I realized that many classmates struggle with mathematics formulas and visualizing scientific principles like Pascal's law or planetary orbits. That inspired me to learn HTML, CSS, and JavaScript.

By building interactive web apps—such as the Degree/Gradian/Radian Angle Converter and the Scratch Solar System simulation—I noticed that abstract formulas suddenly became intuitive and fun. Coding is not just about making apps; it is about solving real learning challenges in our community.

My advice to every student in Nepal: Do not wait for someone else to build tools for you. With free tutorials, curiosity, and persistence, you can build software that helps your school and your country.`,
    contentNe: `नेपालको सुदूरपश्चिम प्रदेशको दुर्गम मानिने दार्चुला जिल्लामा हुर्कंदा काठमाडौं जस्ता ठूला सहरका सुविधाहरू यहाँ तुरुन्त उपलब्ध हुँदैनन्। तर कम्प्युटर र इन्टरनेटले भूगोलको दूरी मेटिदिएको छ।

महेन्द्र नमुना माध्यमिक विद्यालयमा कक्षा ९ मा पढ्दै गर्दा मैले देखें कि धेरै साथीहरूलाई गणितका सूत्रहरू (जस्तै डिग्री र रेडियनको सम्बन्ध) र विज्ञानका नियमहरू (जस्तै पास्कलको नियम र आर्किमिडिजको सिद्धान्त) किताबमा पढेर बुझ्न कठिन हुन्थ्यो। यसैले मलाई प्रोग्रामिङ सिकेर त्यसलाई दृश्य रूपमा देखाउने प्रेरणा मिल्यो।

मैले सुरुमा HTML र CSS सिकें र पछि JavaScript मार्फत हिसाब आफै हुने क्यालकुलेटर बनाएँ। जब साथीहरूले स्क्रिनमा कोणको चाप घुमेको र सूत्रले काम गरेको देखे, उनीहरूको मुहारमा खुशी छाएको थियो।

मेरो सन्देश: प्रविधि सिक्न महँगो सहरमै हुनुपर्छ भन्ने छैन। दृढ इच्छाशक्ति र निरन्तर अभ्यास भए हामी आफ्नै गाउँ-ठाउँबाट पनि देश र समाजलाई उपयोगी प्रविधि निर्माण गर्न सक्छौं।`,
    category: "Personal Journey & Tech",
    date: "2026-03-15",
    readTime: "4 min read",
    author: "Bhupendra Joshi",
    tags: ["Darchula", "WebDev", "StudentLife", "Grade9", "Nepal"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "demystifying-angle-systems",
    title: "Why Do We Need Degrees, Gradians, and Radians? A Grade 9 Mathematical Insight",
    titleNe: "डिग्री, ग्रेड र रेडियन किन चाहिन्छ? कक्षा ९ को गणितीय दृष्टिकोण",
    excerpt: "Unpacking the historical and practical reasons why mathematicians and engineers divide circles into 360 degrees, 400 grades, or 2π radians.",
    excerptNe: "इन्जिनियर, वैज्ञानिक र गणितज्ञहरूले वृत्तलाई ३६० डिग्री, ४०० ग्रेड वा २π रेडियनमा किन बाँडेका हुन्? विस्तृत र रोचक जानकारी।",
    content: `In Grade 9 Compulsory Mathematics and Optional Mathematics, trigonometry introduces three distinct angle measurement units:
1. Sexagesimal (Degrees: 360° in a circle)
2. Centesimal (Grades: 400g in a circle)
3. Circular (Radians: 2π radians in a circle)

Why not just stick to degrees?
Ancient Babylonians loved base 60 because 60 is divisible by 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30. That gave us 360 degrees in a full revolution.

Later, French scientists during the metric revolution introduced Gradians (dividing a right angle into 100g, making a circle 400g) so that navigation aligned with decimal percentages.

However, in higher mathematics, calculus, and physics, the Radian is the king. Why? Because when angle θ is measured in radians, the arc length formula is simply s = r × θ without any messy conversion factors!

Check out my interactive Degree/Grade/Radian tool in the Projects section to see this dynamic relationship in action!`,
    contentNe: `कक्षा ९ को अनिवार्य गणित र ऐच्छिक गणितमा त्रिकोणमिति पढ्दा हामी तीनवटा एकाइ भेट्छौं:
१. डिग्री (३६०° को वृत्त)
२. ग्रेड (४००g को वृत्त)
३. रेडियन (२π रेडियनको वृत्त)

धेरै साथीहरू सोध्छन्: एउटै डिग्रीले पुग्ने ठाउँमा किन तीनवटा चाहियो?
प्राचीन बेबिलोनियनहरूले ६० को आधार मान्दा ३६० डिग्रीको जन्म भयो किनभने ३६० लाई २, ३, ४, ५, ६ लगायत धेरै संख्याले निशेष भाग जान्छ।

फ्रान्सेली क्रान्तिको समयमा दशमलव प्रणालीसँग मिलाउन १ समकोणलाई १०० भाग (१०० ग्रेड) बनाएर ४०० ग्रेडको वृत्त बनाइयो।

तर वैज्ञानिक अनुसन्धान र क्यालकुलसमा 'रेडियन' सबैभन्दा शुद्ध मानिन्छ किनभने रेडियनमा चापको लम्बाइ निकाल्दा कुनै झन्झटिलो गुणा गर्नु पर्दैन, सिधै s = r × θ हुन्छ।

यसलाई आफ्नै आँखाले चलाएर हेर्न मेरो प्रोजेक्ट सेक्सनमा रहेको कोण क्यालकुलेटर चलाउनुहोस्!`,
    category: "Mathematics & Science",
    date: "2026-02-28",
    readTime: "5 min read",
    author: "Bhupendra Joshi",
    tags: ["Math", "Trigonometry", "Grade9", "CDC"],
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "financial-literacy-for-nepali-youth",
    title: "Financial Literacy for Secondary School Students: Why Saving Matters Early",
    titleNe: "माध्यमिक विद्यालयका विद्यार्थीका लागि वित्तीय साक्षरताको महत्त्व",
    excerpt: "Understanding compounding interest, budgeting pocket money, and avoiding digital financial scams as young Nepali learners.",
    excerptNe: "स-साना बचत, चक्रवृद्धि ब्याजको शक्ति, र अनलाइन डिजिटल ठगीबाट जोगिने व्यावहारिक उपायहरू।",
    content: `Financial literacy is not just for adults working in banks; it is an essential life skill that every secondary student in Nepal should understand.

In our Social Studies and Mathematics curriculum, we learn about simple and compound interest (I = PTR / 100). But applying it in real life makes the difference:
1. Differentiating Needs vs Wants: When given festival money or pocket allowances, saving at least 20% forms a lifelong habit.
2. The Magic of Compounding: Even a small deposit of Rs 500 per month earning 8% annual compound interest grows significantly over a decade.
3. Digital Financial Caution: As e-wallets (eSewa, Khalti, connectIPS) become common, students must never share OTPs or login credentials.`,
    contentNe: `वित्तीय साक्षरता ठूलाबडा वा बैंकरका लागि मात्र होइन, विद्यालय तहकै विद्यार्थीका लागि नभई नहुने जीवनोपयोगी सीप हो।

कक्षा ९ को सामाजिक तथा गणित विषयमा हामी साधारण ब्याज (I = PTR / १००) पढ्छौं। तर यसलाई व्यावहारिक जीवनमा उतार्नु महत्त्वपूर्ण छ:
१. आवश्यकता र चाहना बीचको भेद: दशैं-तिहारको दक्षिणा वा खाजा खर्चबाट कम्तीमा २०% बचाउने बानी बसाल्नुपर्छ।
२. चक्रवृद्धिको शक्ति: महिनाको रु. ५०० मात्र पनि उचित बचतमा राख्दा दीर्घकालमा ठूलो पुँजी बन्छ।
३. डिजिटल सुरक्षा: मोबाइल बैंकिङ र ई-सेवा चलाउँदा आफ्नो OTP वा गोप्य पिन कसैलाई दिनु हुँदैन।`,
    category: "Financial Literacy & Business",
    date: "2026-01-20",
    readTime: "4 min read",
    author: "Bhupendra Joshi",
    tags: ["Finance", "StudentLife", "Savings", "SocialStudies"],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=80"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Mahendra Model Secondary School Campus View",
    titleNe: "महेन्द्र नमुना माध्यमिक विद्यालय, दार्चुला खलङ्गा परिसर",
    category: "school",
    categoryNe: "विद्यालय परिसर",
    imageUrl: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&auto=format&fit=crop&q=80",
    caption: "Academic hub in Khalanga, Darchula where I study in Grade 9, Section E.",
    captionNe: "दार्चुला खलङ्गास्थित महेन्द्र नमुना माध्यमिक विद्यालय, जहाँ म कक्षा ९ (ई) मा अध्ययन गर्दछु।",
    date: "2025-11-10"
  },
  {
    id: "gal-2",
    title: "Angle Systems Simulator UI Screenshot",
    titleNe: "डिग्री, ग्रेड र रेडियन सिमुलेटर सफ्टवेयर स्क्रिनसट",
    category: "projects",
    categoryNe: "सफ्टवेयर परियोजना",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    caption: "Interactive visual conversion interface built with Canvas and React.",
    captionNe: "गणितका विद्यार्थीहरूका लागि बनाइएको क्यानभास आधारित प्रत्यक्ष कोण रूपान्तरण सफ्टवेयर।",
    date: "2026-02-14"
  },
  {
    id: "gal-3",
    title: "Api Mountain & Mahakali Valley Topography",
    titleNe: "अपी हिमाल (७,१३२ मिटर) र महाकाली नदी उपत्यका",
    category: "school",
    categoryNe: "स्थानीय भूगोल",
    imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop&q=80",
    caption: "The majestic natural landscape inspiring our geography and coordinates projects.",
    captionNe: "हाम्रो विद्यालय भूगोल परियोजनामा समेटिएको अपी नम्पा संरक्षण क्षेत्रको मनमोहक दृश्य।",
    date: "2025-12-05"
  },
  {
    id: "gal-4",
    title: "Cyber Safety School Presentation Slides",
    titleNe: "साइबर सुरक्षा विद्यालय प्रस्तुतीकरण स्लाइडहरू",
    category: "presentations",
    categoryNe: "प्रस्तुतीकरणहरू",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=80",
    caption: "Presentation deck used for school morning assembly digital literacy talk.",
    captionNe: "विद्यालयको प्रार्थना सभामा प्रस्तुत गरिएको साइबर सुरक्षा सम्बन्धी डिजिटल स्लाइडहरू।",
    date: "2026-01-18"
  },
  {
    id: "gal-5",
    title: "Scratch Solar System Code & Sprites",
    titleNe: "स्क्र्याच सौर्यमण्डल कोडिङ ब्लकहरू",
    category: "projects",
    categoryNe: "कोडिङ परियोजना",
    imageUrl: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=80",
    caption: "Block-based orbital mechanics script developed for Grade 9 Science exhibit.",
    captionNe: "कक्षा ९ को विज्ञान प्रदर्शनीका लागि तयार पारिएको ग्रहहरूको परिक्रमण स्क्र्याच कोड।",
    date: "2025-10-22"
  },
  {
    id: "gal-6",
    title: "School Science & Technology Exhibition Participation",
    titleNe: "विद्यालयस्तरीय विज्ञान तथा प्रविधि प्रदर्शनी सहभागिता",
    category: "certificates",
    categoryNe: "प्रमाणपत्र तथा सहभागिता",
    imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&auto=format&fit=crop&q=80",
    caption: "Honored for demonstrating interactive digital math simulations and solar system mechanics.",
    captionNe: "विद्यालयस्तरीय विज्ञान प्रदर्शनीमा डिजिटल गणित मोडेल प्रदर्शन गरेबापत प्राप्त प्रशंसा।",
    date: "2025-09-30"
  }
];

export const EDUCATIONAL_RESOURCES: EducationalResource[] = [
  {
    id: "res-cdc-nepal-portal",
    title: "Curriculum Development Centre (CDC) Nepal Official Portal",
    titleNe: "पाठ्यक्रम विकास केन्द्र (CDC) नेपाल आधिकारिक पोर्टल",
    category: "official-cdc",
    description: "Official repository of curriculum frameworks, authorized textbook PDFs, and model questions published by the Ministry of Education, Sanothimi, Bhaktapur.",
    descriptionNe: "शिक्षा मन्त्रालय, पाठ्यक्रम विकास केन्द्र सानोठिमी भक्तपुरको आधिकारिक पाठ्यपुस्तक र नमुना प्रश्न पोर्टल।",
    url: "https://moecdc.gov.np",
    isOfficial: true,
    badge: "Official CDC Portal"
  },
  {
    id: "res-ole-nepal",
    title: "Open Learning Exchange (OLE) Nepal - E-Pustakalaya",
    titleNe: "ओएलई नेपाल - ई-पुस्तकालय (निःशुल्क शैक्षिक डिजिटल पुस्तकालय)",
    category: "official-cdc",
    description: "Free, open-source digital library with interactive learning activities, audiobooks, and Grade 1-12 curriculum textbooks.",
    descriptionNe: "कक्षा १ देखि १२ सम्मका अन्तरक्रियात्मक सिकाइ सामग्री र पुस्तकहरू भएको राष्ट्रिय ई-पुस्तकालय।",
    url: "https://pustakalaya.org",
    isOfficial: true,
    badge: "National Open Library"
  },
  {
    id: "res-khan-academy",
    title: "Khan Academy (Math & Science Visualized)",
    titleNe: "खान एकेडेमी (गणित तथा विज्ञान दृश्य सिकाइ)",
    category: "math",
    description: "World-class interactive exercises and video lessons covering algebra, geometry, trigonometry, physics, and biology.",
    descriptionNe: "बीजगणित, ज्यामिति, त्रिकोणमिति र भौतिक विज्ञानका निःशुल्क विश्वस्तरीय भिडियो र अभ्यासहरू।",
    url: "https://www.khanacademy.org",
    isOfficial: false,
    badge: "Global Learning"
  },
  {
    id: "res-mdn-web-docs",
    title: "MDN Web Docs (Mozilla Developer Network)",
    titleNe: "MDN वेब डक्स (वेब विकासको आधिकारिक गाइड)",
    category: "coding",
    description: "The gold standard reference documentation for HTML5, CSS3, and JavaScript web development.",
    descriptionNe: "HTML, CSS र JavaScript सिक्ने विश्वको सबैभन्दा भरपर्दो र आधिकारिक दस्तावेज।",
    url: "https://developer.mozilla.org",
    isOfficial: false,
    badge: "Web Standards"
  },
  {
    id: "res-scratch-mit",
    title: "Scratch MIT Creative Computing Platform",
    titleNe: "स्क्र्याच एमआईटी (Scratch MIT) कोडिङ प्लेटफर्म",
    category: "coding",
    description: "Creative block coding community by MIT Media Lab where students learn algorithmic simulations and game design.",
    descriptionNe: "विद्यार्थीहरूलाई कोडिङ, सिमुलेसन र एनिमेसन सिकाउने एमआईटी (MIT) को अन्तर्राष्ट्रिय प्लेटफर्म।",
    url: "https://scratch.mit.edu",
    isOfficial: false,
    badge: "Creative Coding"
  },
  {
    id: "res-phET-simulations",
    title: "PhET Interactive Science Simulations (University of Colorado)",
    titleNe: "PhET अन्तरक्रियात्मक विज्ञान सिमुलेसन",
    category: "science",
    description: "Research-based physics, chemistry, and biology interactive simulations (including pressure, buoyant force, and Ohm's law).",
    descriptionNe: "चाँप, उर्ध्वचाप, ओमको नियम र सौर्यमण्डल प्रत्यक्ष परीक्षण गर्न मिल्ने निःशुल्क सिमुलेसनहरू।",
    url: "https://phet.colorado.edu",
    isOfficial: false,
    badge: "Interactive STEM"
  }
];

export const ACHIEVEMENTS = [
  {
    id: "ach-1",
    year: "2081 BS (2025 AD)",
    title: "School Science & IT Exhibition - Interactive Simulation Award",
    titleNe: "विद्यालय विज्ञान तथा प्रविधि प्रदर्शनी - अन्तरक्रियात्मक सिमुलेसन सम्मान",
    organization: "Mahendra Model Secondary School, Darchula",
    organizationNe: "महेन्द्र नमुना माध्यमिक विद्यालय, दार्चुला",
    description: "Demonstrated custom-built Degree/Grade/Radian angle converter and Scratch Solar System simulation to students, teachers, and school inspectors.",
    descriptionNe: "कक्षा ९ का विद्यार्थी र शिक्षकहरूका अगाडि प्रत्यक्ष डिजिटल कोण रूपान्तरण सफ्टवेयर र सौर्यमण्डल सिमुलेसनको सफल प्रस्तुति।",
    verified: true
  },
  {
    id: "ach-2",
    year: "2081 BS (2025 AD)",
    title: "School Assembly Digital Ethics & Cyber Safety Presentation",
    titleNe: "विद्यालय प्रार्थना सभामा साइबर सुरक्षा तथा डिजिटल नैतिकता मन्तव्य",
    organization: "Mahendra Model Secondary School",
    organizationNe: "महेन्द्र नमुना माध्यमिक विद्यालय",
    description: "Conducted an awareness session on password hygiene, 2FA, and protecting personal privacy online for secondary students.",
    descriptionNe: "माध्यमिक तहका विद्यार्थीहरूलाई इन्टरनेटमा सुरक्षित रहने उपाय, बलियो पासवर्ड र अनलाइन सतर्कता बारे जानकारी प्रदान।",
    verified: true
  },
  {
    id: "ach-3",
    year: "2080 BS (2024 AD)",
    title: "Grade 8 District Level Examination (BLE) Completion",
    titleNe: "कक्षा ८ को जिल्लास्तरीय आधारभूत तह परीक्षा (BLE) उत्तीर्ण",
    organization: "Education Development & Coordination Unit, Darchula",
    organizationNe: "शिक्षा विकास तथा समन्वय इकाइ, दार्चुला",
    description: "Successfully graduated from basic level education with strong honors in Mathematics, Computer Studies, and Science.",
    descriptionNe: "गणित, कम्प्युटर र विज्ञान विषयमा उत्कृष्ट नतिजासहित आधारभूत तह उत्तीर्ण गरी कक्षा ९ मा भर्ना।",
    verified: true
  }
];
