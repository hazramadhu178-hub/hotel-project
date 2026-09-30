
import React from "react";
import { X, CheckCircle2, Sparkles, Download } from "lucide-react";

export const BookingConfirmationModal = ({
  isOpen,
  onClose,
  details,
}) => {

  // Don't show the modal if it is closed or there are no booking details
  if (!isOpen || !details) return null;

  // Generate a random confirmation number
  const confirmationCode = `SM-${Math.floor(100000 + Math.random() * 900000)}`;

  return (
    <div className="modal-overlay" onClick={onClose}>

      {/* Modal */}
      <div
        className="modal-card max-w-lg p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-center"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Success icon */}
        <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 mx-auto flex items-center justify-center mb-4">
          <CheckCircle2 className="w-9 h-9" />
        </div>

        {/* Confirmation message */}
        <div className="inline-flex items-center gap-1 text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider mb-1">
          <Sparkles className="w-3.5 h-3.5" />
          Reservation Confirmed
        </div>

        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2">
          Your Sanctuary Awaits
        </h2>

        <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
          A confirmation package with your customized retreat itinerary has been prepared.
        </p>

        {/* Booking information */}
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-left text-xs space-y-3 mb-6">

          {/* Confirmation code */}
          <div className="flex justify-between items-center pb-2.5 border-b border-slate-200 dark:border-slate-700">
            <span className="text-slate-400">
              Confirmation Code:
            </span>

            <strong className="text-sky-600 dark:text-sky-400 font-mono text-sm tracking-wider">
              {confirmationCode}
            </strong>
          </div>

          {/* Room name */}
          <div className="flex justify-between">
            <span className="text-slate-400">
              Reserved Sanctuary:
            </span>

            <strong className="text-slate-800 dark:text-slate-100">
              {details.room.name}
            </strong>
          </div>

          {/* Check-in and check-out dates */}
          <div className="flex justify-between">
            <span className="text-slate-400">
              Dates of Stay:
            </span>

            <strong className="text-slate-800 dark:text-slate-100">
              {details.checkIn} → {details.checkOut} ({details.nights} nights)
            </strong>
          </div>

          {/* Number of guests */}
          <div className="flex justify-between">
            <span className="text-slate-400">
              Guests:
            </span>

            <strong className="text-slate-800 dark:text-slate-100">
              {details.guests} Adults
            </strong>
          </div>

          {/* Add-ons */}
          {details.addons.length > 0 && (
            <div className="pt-2 border-t border-slate-200 dark:border-slate-700">

              <span className="text-slate-400 block mb-1">
                Included Experiences:
              </span>

              <ul className="list-disc list-inside space-y-0.5 text-[11px] text-slate-600 dark:text-slate-300">
                {details.addons.map((addon, index) => (
                  <li key={index}>
                    {addon}
                  </li>
                ))}
              </ul>

            </div>
          )}

          {/* Total price */}
          <div className="pt-2 border-t border-slate-200 dark:border-slate-700 flex justify-between items-baseline">

            <span className="font-bold text-slate-800 dark:text-slate-200">
              Total Confirmed:
            </span>

            <span className="text-xl font-extrabold text-sky-600 dark:text-sky-400">
              ${details.total}
            </span>

          </div>

        </div>

        {/* Buttons */}
        <div className="space-y-2">

          {/* Save or print confirmation */}
          <button
            type="button"
            onClick={() => {
              window.print();
            }}
            className="w-full py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <Download className="w-4 h-4" />
            Save Booking Confirmation Receipt
          </button>

          {/* Close modal */}
          <button
            type="button"
            onClick={onClose}
            className="w-full py-2.5 bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer"
          >
            Return to Sanctuary Home
          </button>

        </div>

      </div>
    </div>
  );
};