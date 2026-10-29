import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
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
} from '../data/defaultContent';
import { Project, CDCSubject, StudyNote, ModelQuestionSet, BlogPost, GalleryItem, EducationalResource } from '../types';

interface SiteContent {
  profile: typeof PROFILE_INFO;
  subjects: CDCSubject[];
  notes: StudyNote[];
  projects: Project[];
  modelQuestions: ModelQuestionSet[];
  blog: BlogPost[];
  gallery: GalleryItem[];
  resources: EducationalResource[];
  achievements: typeof ACHIEVEMENTS;
}

interface ContentContextType {
  content: SiteContent;
  loading: boolean;
  refreshContent: () => Promise<void>;
  updateItem: (section: string, item: any, action: 'add' | 'edit' | 'delete', passcode: string) => Promise<{ success: boolean; message: string }>;
  selectedProject: Project | null;
  setSelectedProject: (proj: Project | null) => void;
  selectedNote: StudyNote | null;
  setSelectedNote: (note: StudyNote | null) => void;
  selectedSubject: CDCSubject | null;
  setSelectedSubject: (subj: CDCSubject | null) => void;
  isAiModalOpen: boolean;
  setIsAiModalOpen: (open: boolean) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  isAdminOpen: boolean;
  setIsAdminOpen: (open: boolean) => void;
  isDegreeCalcOpen: boolean;
  setIsDegreeCalcOpen: (open: boolean) => void;
  isDarchulaMapOpen: boolean;
  setIsDarchulaMapOpen: (open: boolean) => void;
}

const defaultContentData: SiteContent = {
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

const ContentContext = createContext<ContentContextType>({
  content: defaultContentData,
  loading: false,
  refreshContent: async () => {},
  updateItem: async () => ({ success: false, message: '' }),
  selectedProject: null,
  setSelectedProject: () => {},
  selectedNote: null,
  setSelectedNote: () => {},
  selectedSubject: null,
  setSelectedSubject: () => {},
  isAiModalOpen: false,
  setIsAiModalOpen: () => {},
  isSearchOpen: false,
  setIsSearchOpen: () => {},
  isAdminOpen: false,
  setIsAdminOpen: () => {},
  isDegreeCalcOpen: false,
  setIsDegreeCalcOpen: () => {},
  isDarchulaMapOpen: false,
  setIsDarchulaMapOpen: () => {}
});

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<SiteContent>(defaultContentData);
  const [loading, setLoading] = useState<boolean>(true);

  // Modals state
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedNote, setSelectedNote] = useState<StudyNote | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<CDCSubject | null>(null);
  const [isAiModalOpen, setIsAiModalOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isAdminOpen, setIsAdminOpen] = useState<boolean>(false);
  const [isDegreeCalcOpen, setIsDegreeCalcOpen] = useState<boolean>(false);
  const [isDarchulaMapOpen, setIsDarchulaMapOpen] = useState<boolean>(false);

  const refreshContent = useCallback(async () => {
    try {
      const res = await fetch('/api/content');
      if (res.ok) {
        const json = await res.json();
        if (json.success && json.data) {
          setContent(json.data);
        }
      }
    } catch (err) {
      console.warn('Using client fallback default content:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshContent();
  }, [refreshContent]);

  const updateItem = async (section: string, item: any, action: 'add' | 'edit' | 'delete', passcode: string) => {
    try {
      const res = await fetch('/api/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ section, item, action, passcode })
      });
      const data = await res.json();
      if (data.success) {
        await refreshContent();
        return { success: true, message: data.message || 'Updated successfully' };
      }
      return { success: false, message: data.message || 'Update failed' };
    } catch (err: any) {
      return { success: false, message: err.message || 'Network error' };
    }
  };

  return (
    <ContentContext.Provider
      value={{
        content,
        loading,
        refreshContent,
        updateItem,
        selectedProject,
        setSelectedProject,
        selectedNote,
        setSelectedNote,
        selectedSubject,
        setSelectedSubject,
        isAiModalOpen,
        setIsAiModalOpen,
        isSearchOpen,
        setIsSearchOpen,
        isAdminOpen,
        setIsAdminOpen,
        isDegreeCalcOpen,
        setIsDegreeCalcOpen,
        isDarchulaMapOpen,
        setIsDarchulaMapOpen
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => useContext(ContentContext);
