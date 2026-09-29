import React, { useState } from 'react';
import { 
  X, 
  Star, 
  Maximize2, 
  Users, 
  BedDouble, 
  Eye, 
  Check, 
  Sparkles, 
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export const RoomDetailModal = ({
  room,
  isOpen,
  onClose,
  onBookRoom,
}) => {
  const [selectedImgIdx, setSelectedImgIdx] = useState(0);

  if (!isOpen || !room) return null;

  const images = room.gallery.length > 0 ? room.gallery : [room.image];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-card max-w-3xl p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 z-10 p-2 rounded-full bg-white/80 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 shadow transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Image Carousel */}
        <div className="relative rounded-2xl overflow-hidden aspect-[16/9] mb-4 bg-slate-100 dark:bg-slate-800">
          <img
            src={images[selectedImgIdx]}
            alt={room.name}
            className="w-full h-full object-cover transition-all duration-300"
          />

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => setSelectedImgIdx((selectedImgIdx - 1 + images.length) % images.length)}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setSelectedImgIdx((selectedImgIdx + 1) % images.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </>
          )}

          {room.badge && (
            <div className="absolute top-4 left-4 bg-white/95 dark:bg-slate-900/90 text-slate-900 dark:text-white text-xs font-bold px-3 py-1 rounded-full shadow backdrop-blur-sm flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-500" /> {room.badge}
            </div>
          )}
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="flex gap-2 mb-5 overflow-x-auto pb-1">
            {images.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedImgIdx(idx)}
                className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 cursor-pointer ${
                  selectedImgIdx === idx ? 'border-sky-500 ring-2 ring-sky-200' : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img src={img} alt="thumb" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* Room Header Info */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                {room.name}
              </h2>
              <div className="flex items-center gap-1 text-xs font-bold bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300 px-2.5 py-0.5 rounded-full">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>{room.rating}</span>
              </div>
            </div>
            <p className="text-xs font-medium text-sky-600 dark:text-sky-400">
              {room.subtitle}
            </p>
          </div>

          <div className="text-left sm:text-right">
            <div className="text-2xl font-extrabold text-slate-900 dark:text-white">
              ${room.price}
              <span className="text-xs font-normal text-slate-400 ml-1">/ night</span>
            </div>
            {room.originalPrice && (
              <span className="text-xs text-slate-400 line-through">
                ${room.originalPrice}
              </span>
            )}
          </div>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 text-xs text-slate-700 dark:text-slate-300 mb-5">
          <div className="flex items-center gap-1.5">
            <Maximize2 className="w-4 h-4 text-sky-500" />
            <div>
              <span className="text-slate-400 block text-[10px]">Living Space</span>
              <strong>{room.size}</strong>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="w-4 h-4 text-sky-500" />
            <div>
              <span className="text-slate-400 block text-[10px]">Occupancy</span>
              <strong>{room.capacity}</strong>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <BedDouble className="w-4 h-4 text-sky-500" />
            <div>
              <span className="text-slate-400 block text-[10px]">Bed Type</span>
              <strong>{room.bed}</strong>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <Eye className="w-4 h-4 text-sky-500" />
            <div>
              <span className="text-slate-400 block text-[10px]">Sanctuary View</span>
              <strong className="truncate max-w-[100px] block">{room.view}</strong>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
          {room.description}
        </p>

        {/* Feature List */}
        <div className="mb-8">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
            Sanctuary Villa Amenities & Inclusions
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {room.features.map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={onClose}
            className="py-2.5 px-5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 cursor-pointer"
          >
            Close
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              onBookRoom(room);
            }}
            className="py-2.5 px-6 bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold rounded-xl shadow-md shadow-sky-500/20 transition-all flex items-center gap-2 cursor-pointer active:scale-95"
          >
            <span>Book This Sanctuary</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
