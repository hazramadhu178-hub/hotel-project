import { X } from 'lucide-react';

export const PhotoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

     return (
          <div className="modal-overlay" onClick={onClose}>
          <div className="relative w-full max-w-6xl" onClick={(event) => event.stopPropagation()} role="dialog" aria-modal="true" aria-label="Tropical beach photo" >
               <button type="button" onClick={onClose} className="absolute right-3 top-3 z-10 rounded-full bg-black/60 p-2 text-white transition-colors hover:bg-black/80" aria-label="Close photo" >
               <X className="h-5 w-5" />
               </button>
               <img src="./images/tropical-sandy-beach.jpg" alt="Tropical sandy beach" className="mx-auto max-h-[85vh] w-full rounded-xl object-contain" />
          </div>
          </div>
     );
};
