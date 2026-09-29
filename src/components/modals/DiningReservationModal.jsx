import React, { useState } from 'react';
import { X, Calendar, Clock, Users, UtensilsCrossed, Check } from 'lucide-react';

export const DiningReservationModal = ({
  venue,
  isOpen,
  onClose,
  onConfirmReservation,
}) => {
  const [date, setDate] = useState('2025-07-29');
  const [time, setTime] = useState('19:30');
  const [guests, setGuests] = useState(2);
  const [specialRequests, setSpecialRequests] = useState('');

  if (!isOpen || !venue) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirmReservation({
      venue,
      date,
      time,
      guests,
      specialRequests,
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-card max-w-lg p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-1">
          <UtensilsCrossed className="w-5 h-5 text-sky-500" />
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Table Reservation
          </h2>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-5">
          {venue.name} • {venue.type}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                <Calendar className="w-3.5 h-3.5 inline mr-1 text-sky-500" /> Date
              </label>
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-900 dark:text-white outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                <Clock className="w-3.5 h-3.5 inline mr-1 text-sky-500" /> Seating Time
              </label>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-900 dark:text-white outline-none"
              >
                <option value="08:00">08:00 AM (Breakfast)</option>
                <option value="09:30">09:30 AM (Breakfast)</option>
                <option value="12:30">12:30 PM (Lunch)</option>
                <option value="17:30">05:30 PM (Golden Hour Sunset)</option>
                <option value="19:30">07:30 PM (Dinner Degustation)</option>
                <option value="20:30">08:30 PM (Starlit Dinner)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
              <Users className="w-3.5 h-3.5 inline mr-1 text-sky-500" /> Number of Guests
            </label>
            <div className="flex gap-2">
              {[1, 2, 4, 6].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setGuests(num)}
                  className={`flex-1 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    guests === num
                      ? 'bg-sky-500 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                  }`}
                >
                  {num} {num === 1 ? 'Guest' : 'Guests'}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
              Special Dietary Notes or Seating Preference
            </label>
            <textarea
              rows={3}
              placeholder="e.g. Sunset terrace table, gluten-free preference, anniversary celebration..."
              value={specialRequests}
              onChange={(e) => setSpecialRequests(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-900 dark:text-white outline-none resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs rounded-xl shadow-md shadow-sky-500/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Check className="w-4 h-4" /> Confirm Table Reservation
          </button>
        </form>
      </div>
    </div>
  );
};
