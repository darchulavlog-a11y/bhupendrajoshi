export type Language = 'en' | 'ne';

export interface Project {
  id: string;
  title: string;
  titleNe: string;
  category: string;
  categoryNe: string;
  description: string;
  descriptionNe: string;
  detailedProcess?: string;
  challenges?: string;
  learningOutcomes?: string;
  tools: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  status: 'completed' | 'in-progress' | 'planned';
}

export interface StudyNote {
  id: string;
  subjectId: string;
  chapterNumber: number;
  chapterName: string;
  chapterNameNe: string;
  title: string;
  titleNe: string;
  summary: string;
  summaryNe: string;
  definitions: Array<{
    term: string;
    termNe: string;
    meaning: string;
    meaningNe: string;
  }>;
  formulas?: Array<{
    name: string;
    formula: string;
    explanation: string;
    explanationNe: string;
    example?: string;
  }>;
  workedExamples?: Array<{
    question: string;
    questionNe: string;
    solution: string;
    solutionNe: string;
  }>;
  practiceQuestions: Array<{
    type: 'short' | 'long' | 'mcq';
    question: string;
    questionNe: string;
    answer?: string;
    answerNe?: string;
  }>;
  cdcVerified: boolean;
  officialReference?: string;
}

export interface CDCSubject {
  id: string;
  name: string;
  nameNe: string;
  code: string;
  icon: string;
  color: string;
  totalChapters: number;
  description: string;
  descriptionNe: string;
  chapters: Array<{
    number: number;
    title: string;
    titleNe: string;
    topics: string[];
  }>;
}

export interface ModelQuestionSet {
  id: string;
  subjectId: string;
  title: string;
  titleNe: string;
  year: string;
  fullMarks: number;
  passMarks: number;
  timeLimit: string;
  sections: Array<{
    name: string;
    nameNe: string;
    marksPerQuestion: number;
    questions: Array<{
      id: string;
      q: string;
      qNe: string;
      answerHint?: string;
      answerHintNe?: string;
    }>;
  }>;
}

export interface BlogPost {
  id: string;
  title: string;
  titleNe: string;
  excerpt: string;
  excerptNe: string;
  content: string;
  contentNe: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  tags: string[];
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  titleNe: string;
  category: 'projects' | 'presentations' | 'posters' | 'school' | 'certificates';
  categoryNe: string;
  imageUrl: string;
  caption: string;
  captionNe: string;
  date: string;
}

export interface EducationalResource {
  id: string;
  title: string;
  titleNe: string;
  category: 'official-cdc' | 'math' | 'science' | 'coding' | 'general';
  description: string;
  descriptionNe: string;
  url: string;
  isOfficial: boolean;
  badge: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
  read: boolean;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
  sources?: Array<{
    title: string;
    subject?: string;
    chapter?: string | number;
    reference?: string;
  }>;
}
