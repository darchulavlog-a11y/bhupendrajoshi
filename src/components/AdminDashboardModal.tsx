import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useContent } from '../context/ContentContext';
import {
  X,
  Lock,
  Unlock,
  Plus,
  Trash2,
  Edit3,
  Mail,
  FolderKanban,
  BookOpen,
  Check,
  AlertCircle
} from 'lucide-react';

export const AdminDashboardModal: React.FC = () => {
  const { language } = useLanguage();
  const { isAdminOpen, setIsAdminOpen, content, refreshContent, updateItem } = useContent();

  const [passcode, setPasscode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState('');
  const [activeTab, setActiveTab] = useState<'projects' | 'notes' | 'messages' | 'profile'>('projects');
  const [messages, setMessages] = useState<any[]>([]);
  const [statusNotice, setStatusNotice] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  // New Project Form state
  const [newProject, setNewProject] = useState({
    title: '',
    titleNe: '',
    category: 'Educational websites',
    categoryNe: 'शैक्षिक वेबसाइटहरू',
    description: '',
    descriptionNe: '',
    tools: 'HTML, CSS, JavaScript',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80',
    demoUrl: '#',
    status: 'completed' as const
  });

  // Fetch messages if authenticated
  useEffect(() => {
    if (isAuthenticated) {
      fetch(`/api/messages?passcode=${encodeURIComponent(passcode)}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.success) setMessages(data.data || []);
        })
        .catch((err) => console.error(err));
    }
  }, [isAuthenticated, passcode]);

  if (!isAdminOpen) return null;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ passcode })
      });
      const data = await res.json();
      if (data.success) {
        setIsAuthenticated(true);
      } else {
        setAuthError(data.message || 'Incorrect passcode');
      }
    } catch (err: any) {
      setAuthError('Network error connecting to auth server');
    }
  };

  const handleAddProject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProject.title) return;

    const projToSave = {
      ...newProject,
      tools: newProject.tools.split(',').map((t) => t.trim()),
      featured: false
    };

    const res = await updateItem('projects', projToSave, 'add', passcode);
    if (res.success) {
      setStatusNotice({ type: 'success', message: 'Project published successfully!' });
      setNewProject({
        title: '',
        titleNe: '',
        category: 'Educational websites',
        categoryNe: 'शैक्षिक वेबसाइटहरू',
        description: '',
        descriptionNe: '',
        tools: 'HTML, CSS, JavaScript',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80',
        demoUrl: '#',
        status: 'completed'
      });
      setTimeout(() => setStatusNotice(null), 3000);
    } else {
      setStatusNotice({ type: 'error', message: res.message });
    }
  };

  const handleDeleteItem = async (section: string, item: any) => {
    if (window.confirm(`Are you sure you want to delete this ${section} item?`)) {
      const res = await updateItem(section, item, 'delete', passcode);
      if (res.success) {
        setStatusNotice({ type: 'success', message: 'Item deleted successfully' });
        setTimeout(() => setStatusNotice(null), 3000);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-slate-900 border border-cyan-500/30 rounded-2xl shadow-2xl p-6 text-slate-100">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">
                {language === 'ne' ? 'व्यवस्थापक नियन्त्रण कक्ष (Admin CMS)' : 'Content Management & Admin Panel'}
              </h2>
              <p className="text-xs text-slate-400">
                {language === 'ne'
                  ? 'भुपेन्द्र जोशी - सामग्री सम्पादन तथा नियन्त्रण'
                  : 'Bhupendra Joshi Official Web Platform Administration'}
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsAdminOpen(false)}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Auth Gate */}
        {!isAuthenticated ? (
          <form onSubmit={handleLogin} className="max-w-md mx-auto py-10 space-y-4">
            <div className="text-center space-y-2 mb-6">
              <div className="w-12 h-12 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 flex items-center justify-center mx-auto">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">
                {language === 'ne' ? 'व्यवस्थापक पासकोड प्रविष्ट गर्नुहोस्' : 'Enter Admin Passcode'}
              </h3>
              <p className="text-xs text-slate-400">
                {language === 'ne'
                  ? 'सामग्री थप्न वा सम्पादन गर्न कृपया गोप्य पासकोड राख्नुहोस्।'
                  : 'Default passcode: bhupendra2026 (Configured in .env)'}
              </p>
            </div>

            {authError && (
              <div className="p-3 rounded-xl bg-red-950/50 border border-red-500/30 text-red-200 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{authError}</span>
              </div>
            )}

            <div>
              <input
                type="password"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Passcode..."
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm transition shadow-lg shadow-cyan-500/20"
            >
              {language === 'ne' ? 'प्रवेश गर्नुहोस्' : 'Authenticate & Unlock'}
            </button>
          </form>
        ) : (
          /* Authenticated Dashboard */
          <div>
            {/* Status Notice */}
            {statusNotice && (
              <div
                className={`p-3 rounded-xl mb-4 text-xs flex items-center gap-2 ${
                  statusNotice.type === 'success'
                    ? 'bg-emerald-950/50 border border-emerald-500/40 text-emerald-200'
                    : 'bg-red-950/50 border border-red-500/40 text-red-200'
                }`}
              >
                <Check className="w-4 h-4" />
                <span>{statusNotice.message}</span>
              </div>
            )}

            {/* Navigation Tabs */}
            <div className="flex border-b border-slate-800 gap-2 mb-6 overflow-x-auto">
              <button
                onClick={() => setActiveTab('projects')}
                className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-t-xl transition flex items-center gap-2 border-b-2 ${
                  activeTab === 'projects'
                    ? 'border-cyan-400 text-cyan-300 bg-slate-800/50'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                <FolderKanban className="w-4 h-4" />
                {language === 'ne' ? 'परियोजनाहरू' : 'Projects'} ({content.projects?.length || 0})
              </button>
              <button
                onClick={() => setActiveTab('notes')}
                className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-t-xl transition flex items-center gap-2 border-b-2 ${
                  activeTab === 'notes'
                    ? 'border-cyan-400 text-cyan-300 bg-slate-800/50'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                {language === 'ne' ? 'अध्ययन नोटहरू' : 'CDC Notes'} ({content.notes?.length || 0})
              </button>
              <button
                onClick={() => setActiveTab('messages')}
                className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-t-xl transition flex items-center gap-2 border-b-2 ${
                  activeTab === 'messages'
                    ? 'border-cyan-400 text-cyan-300 bg-slate-800/50'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                <Mail className="w-4 h-4" />
                {language === 'ne' ? 'सम्पर्क सन्देशहरू' : 'Inbox Messages'} ({messages.length})
              </button>
            </div>

            {/* TAB: Projects */}
            {activeTab === 'projects' && (
              <div className="space-y-6">
                {/* Add new project */}
                <form
                  onSubmit={handleAddProject}
                  className="p-5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-4"
                >
                  <h4 className="text-sm font-bold text-cyan-300 flex items-center gap-2">
                    <Plus className="w-4 h-4" />
                    {language === 'ne' ? 'नयाँ परियोजना थप्नुहोस्' : 'Add New Portfolio Project'}
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-slate-400 block mb-1">Title (English)</label>
                      <input
                        type="text"
                        required
                        value={newProject.title}
                        onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white"
                        placeholder="e.g. Darchula Map Explorer"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-slate-400 block mb-1">Title (नेपाली)</label>
                      <input
                        type="text"
                        value={newProject.titleNe}
                        onChange={(e) => setNewProject({ ...newProject, titleNe: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white"
                        placeholder="जस्तै: दार्चुला नक्सा अन्वेषक"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-slate-400 block mb-1">Category</label>
                      <input
                        type="text"
                        value={newProject.category}
                        onChange={(e) => setNewProject({ ...newProject, category: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-slate-400 block mb-1">Tools / Technologies (comma separated)</label>
                      <input
                        type="text"
                        value={newProject.tools}
                        onChange={(e) => setNewProject({ ...newProject, tools: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-slate-400 block mb-1">Description (English)</label>
                    <textarea
                      rows={2}
                      value={newProject.description}
                      onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-slate-400 block mb-1">Image URL</label>
                    <input
                      type="text"
                      value={newProject.image}
                      onChange={(e) => setNewProject({ ...newProject, image: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-lg transition"
                  >
                    {language === 'ne' ? 'परियोजना सुरक्षित गर्नुहोस्' : 'Publish Project'}
                  </button>
                </form>

                {/* Existing Projects List */}
                <div className="space-y-3">
                  <h4 className="text-xs uppercase text-slate-400 font-semibold tracking-wider">
                    {language === 'ne' ? 'मौजुदा परियोजनाहरू' : 'Existing Projects'}
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {content.projects?.map((proj) => (
                      <div
                        key={proj.id}
                        className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs"
                      >
                        <div>
                          <div className="font-bold text-white text-sm">{proj.title}</div>
                          <div className="text-slate-400">{proj.category} • {proj.tools.join(', ')}</div>
                        </div>
                        <button
                          onClick={() => handleDeleteItem('projects', proj)}
                          className="p-2 rounded-lg bg-red-950/40 hover:bg-red-900/60 text-red-400 hover:text-red-200 transition"
                          title="Delete Project"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB: Notes */}
            {activeTab === 'notes' && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300">
                  <p>
                    {language === 'ne'
                      ? 'सीडीसी कक्षा ९ का नोटहरू, सूत्रहरू र परिभाषा सूची मौजुदा पाठहरूमा आधारित छन्।'
                      : 'Verified CDC Grade 9 Notes and formulas are active in the educational library.'}
                  </p>
                </div>
                <div className="space-y-2">
                  {content.notes?.map((n) => (
                    <div
                      key={n.id}
                      className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs"
                    >
                      <div>
                        <div className="font-bold text-white">{n.title}</div>
                        <div className="text-cyan-400 font-mono">{n.chapterName} ({n.subjectId})</div>
                      </div>
                      <button
                        onClick={() => handleDeleteItem('notes', n)}
                        className="p-2 rounded-lg bg-red-950/40 text-red-400 hover:text-red-200 transition"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB: Messages */}
            {activeTab === 'messages' && (
              <div className="space-y-3">
                {messages.length === 0 ? (
                  <div className="p-8 text-center text-slate-400 text-xs">
                    {language === 'ne' ? 'कुनै सन्देश प्राप्त भएको छैन।' : 'No contact messages received yet.'}
                  </div>
                ) : (
                  messages.map((m) => (
                    <div
                      key={m.id}
                      className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white text-sm">{m.name}</span>
                        <span className="text-slate-500 font-mono">
                          {new Date(m.timestamp).toLocaleString()}
                        </span>
                      </div>
                      <div className="text-cyan-400 font-mono">{m.email} • {m.subject}</div>
                      <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 whitespace-pre-wrap">
                        {m.message}
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
