import React from 'react';
import { X, Copy, Check, Share2, Sparkles, Send } from 'lucide-react';

export const ShareModal = ({
  isOpen,
  onClose,
  entry,
  onCopyQuote,
  copied,
}) => {
  if (!isOpen) return null;

  const shareText = `"${entry.quote}" — StrongMe Daily Reflection (${entry.fullDate})`;

  const handleTwitterShare = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-card max-w-md p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-1">
          <Share2 className="w-5 h-5 text-sky-500" />
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Share Daily Reflection
          </h2>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-5">
          Inspire someone today with your mindful card.
        </p>

        {/* Visual Preview Card */}
        <div className="p-5 rounded-2xl bg-gradient-to-br from-sky-50 via-indigo-50/50 to-amber-50/40 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 border border-sky-100 dark:border-slate-700 shadow-lg text-center mb-5">
          <div className="flex items-center justify-between text-[11px] text-slate-400 mb-3">
            <span className="flex items-center gap-1 font-semibold text-sky-600">
              <Sparkles className="w-3 h-3" /> StrongMe
            </span>
            <span>{entry.fullDate}</span>
          </div>

          <p className="text-base font-bold text-slate-800 dark:text-slate-100 leading-relaxed my-2">
            "{entry.quote}"
          </p>

          <div className="text-[11px] text-slate-400 mt-3 italic">
            ~ {entry.caption}
          </div>
        </div>

        <div className="space-y-2.5">
          <button
            type="button"
            onClick={onCopyQuote}
            className="w-full py-2.5 px-4 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-md shadow-sky-500/20 transition-all cursor-pointer active:scale-98"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? 'Copied Reflection Card!' : 'Copy Quote Text'}
          </button>

          <button
            type="button"
            onClick={handleTwitterShare}
            className="w-full py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <Send className="w-4 h-4 text-sky-400" /> Share on X / Twitter
          </button>
        </div>
      </div>
    </div>
  );
};
