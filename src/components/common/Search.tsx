import React, { useState, useEffect, useRef } from 'react';
import { X, Search as SearchIcon, Calendar, User, BookOpen } from 'lucide-react';

interface SearchProps {
  isOpen: boolean;
  onClose: () => void;
}

const Search: React.FC<SearchProps> = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchScope, setSearchScope] = useState('All');
  const [publishedAfter, setPublishedAfter] = useState('');
  const [publishedBefore, setPublishedBefore] = useState('');
  const [author, setAuthor] = useState('');
  const [subject, setSubject] = useState('');
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Prevent scrolling on body when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const hasData = searchQuery.trim() !== '' || publishedAfter !== '' || publishedBefore !== '' || author.trim() !== '' || subject !== '';

  const handleClear = () => {
    setSearchQuery('');
    setSearchScope('All');
    setPublishedAfter('');
    setPublishedBefore('');
    setAuthor('');
    setSubject('');
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-[2000] flex justify-center items-start pt-[100px] px-4 animate-in fade-in duration-200">
      <div 
        ref={modalRef}
        className="bg-white w-full max-w-[650px] rounded-lg shadow-2xl p-6 relative animate-in zoom-in-95 duration-200"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-[#1e5292] transition-colors"
          aria-label="Close search"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold text-[#1e5292] mb-6 border-b pb-2">Search Repository</h2>

        {/* Main Search Input with Dropdown */}
        <div className="flex flex-col sm:flex-row mb-6 border-2 border-[#1e5292] rounded-md overflow-hidden shadow-sm">
          <div className="relative min-w-[140px] border-b sm:border-b-0 sm:border-r border-gray-200">
            <select 
              value={searchScope}
              onChange={(e) => setSearchScope(e.target.value)}
              className="w-full h-full bg-gray-50 px-4 py-3 outline-none text-gray-700 font-medium cursor-pointer hover:bg-gray-100 transition-colors appearance-none"
            >
              <option value="All">All Categories</option>
              <option value="Title">Title</option>
              <option value="ISBN">ISBN/ISSN</option>
              <option value="Keywords">Keywords</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <div className="flex-1 flex">
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for journals, books, articles..."
              className="flex-1 px-4 py-3 outline-none text-gray-700"
              autoFocus
            />
            <div className="bg-[#1e5292] px-4 flex items-center justify-center">
              <SearchIcon className="text-white" size={20} />
            </div>
          </div>
        </div>

        {/* Advanced Search Section */}
        <div className="bg-gray-50 p-5 rounded-md border border-gray-200">
          <h3 className="text-lg font-semibold text-[#1e5292] mb-4 flex items-center gap-2">
            Advanced Search Options
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-600 flex items-center gap-1">
                <Calendar size={14} /> Published After
              </label>
              <input 
                type="date" 
                value={publishedAfter}
                onChange={(e) => setPublishedAfter(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 outline-none focus:border-[#1e5292] focus:ring-1 focus:ring-[#1e5292]/20 transition-all"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-600 flex items-center gap-1">
                <Calendar size={14} /> Published Before
              </label>
              <input 
                type="date" 
                value={publishedBefore}
                onChange={(e) => setPublishedBefore(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 outline-none focus:border-[#1e5292] focus:ring-1 focus:ring-[#1e5292]/20 transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-600 flex items-center gap-1">
                <User size={14} /> By Author
              </label>
              <input 
                type="text" 
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Author name"
                className="border border-gray-300 rounded px-3 py-2 outline-none focus:border-[#1e5292] focus:ring-1 focus:ring-[#1e5292]/20 transition-all"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-600 flex items-center gap-1">
                <BookOpen size={14} /> Subject
              </label>
              <select 
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 outline-none focus:border-[#1e5292] focus:ring-1 focus:ring-[#1e5292]/20 transition-all bg-white"
              >
                <option value="">Select Subject</option>
                <option value="Engineering & Management">Engineering & Management</option>
                <option value="Medical & Health Sciences">Medical & Health Sciences</option>
                <option value="Interdisciplinary Sciences">Interdisciplinary Sciences</option>
              </select>
            </div>
          </div>

          <div className="flex gap-3">
            <button 
              onClick={handleClear}
              disabled={!hasData}
              className={`px-6 py-3 rounded font-bold border transition-all duration-200 ${
                hasData 
                  ? 'border-gray-300 text-gray-600 hover:bg-gray-100' 
                  : 'border-gray-200 text-gray-300 cursor-not-allowed'
              }`}
            >
              Clear
            </button>
            <button 
              disabled={!hasData}
              className={`flex-1 py-3 rounded font-bold text-white transition-all duration-200 flex items-center justify-center gap-2 ${
                hasData 
                  ? 'bg-[#1e5292] hover:bg-[#163e70] shadow-md transform hover:-translate-y-0.5' 
                  : 'bg-gray-400 cursor-not-allowed opacity-70'
              }`}
            >
              <SearchIcon size={18} />
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;