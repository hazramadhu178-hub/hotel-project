import React, { useEffect, useState } from 'react';
import { CalendarDays, Mail, Phone, User, X } from 'lucide-react';

const formatDate = (value) =>
  new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  }).format(new Date(`${value}T00:00:00`));

export const ReservationModal = ({ room, isOpen, onClose, onSubmitted }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    adults: 2,
    children: 0,
    requests: '',
  });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const today = new Date();
    const checkIn = new Date(today);
    checkIn.setDate(today.getDate() + 1);
    const checkOut = new Date(checkIn);
    checkOut.setDate(checkIn.getDate() + 5);
    const toInputDate = (date) => date.toISOString().slice(0, 10);

    setFormData((current) => ({
      ...current,
      checkIn: toInputDate(checkIn),
      checkOut: toInputDate(checkOut),
    }));
    setError('');
  }, [isOpen]);

  if (!isOpen || !room) return null;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    if (formData.checkOut <= formData.checkIn) {
      setError('Check-out must be after check-in.');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || ''}/api/reservations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, room: room.name }),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Unable to submit your reservation request.');
      }

      const nights = Math.max(
        1,
        Math.round((new Date(`${formData.checkOut}T00:00:00`) - new Date(`${formData.checkIn}T00:00:00`)) / 86400000),
      );
      const subtotal = room.price * nights;
      const taxes = Math.round(subtotal * 0.1);

      onSubmitted({
        room,
        checkIn: formatDate(formData.checkIn),
        checkOut: formatDate(formData.checkOut),
        guests: Number(formData.adults) + Number(formData.children),
        nights,
        total: subtotal + taxes,
        discount: 0,
        addons: [],
      });
      onClose();
    } catch (submissionError) {
      setError(submissionError.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-card max-w-xl p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close reservation form"
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <p className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider mb-1">
          Reservation enquiry
        </p>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-1">
          {room.name}
        </h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
          Share your details and our host team will follow up by email.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="contact-field">
              <span className="contact-label">Full name</span>
              <span className="contact-input-wrap">
                <User className="contact-input-icon" />
                <input className="contact-input" name="name" required value={formData.name} onChange={handleChange} />
              </span>
            </label>
            <label className="contact-field">
              <span className="contact-label">Email</span>
              <span className="contact-input-wrap">
                <Mail className="contact-input-icon" />
                <input className="contact-input" type="email" name="email" required value={formData.email} onChange={handleChange} />
              </span>
            </label>
          </div>

          <label className="contact-field">
            <span className="contact-label">Phone</span>
            <span className="contact-input-wrap">
              <Phone className="contact-input-icon" />
              <input className="contact-input" type="tel" name="phone" required value={formData.phone} onChange={handleChange} />
            </span>
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="contact-field">
              <span className="contact-label">Check-in</span>
              <span className="contact-input-wrap">
                <CalendarDays className="contact-input-icon" />
                <input className="contact-input" type="date" name="checkIn" required value={formData.checkIn} onChange={handleChange} />
              </span>
            </label>
            <label className="contact-field">
              <span className="contact-label">Check-out</span>
              <span className="contact-input-wrap">
                <CalendarDays className="contact-input-icon" />
                <input className="contact-input" type="date" name="checkOut" required value={formData.checkOut} onChange={handleChange} />
              </span>
            </label>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <label className="contact-field">
              <span className="contact-label">Adults</span>
              <input className="contact-input rounded-xl" type="number" min="1" name="adults" required value={formData.adults} onChange={handleChange} />
            </label>
            <label className="contact-field">
              <span className="contact-label">Children</span>
              <input className="contact-input rounded-xl" type="number" min="0" name="children" value={formData.children} onChange={handleChange} />
            </label>
          </div>

          <label className="contact-field">
            <span className="contact-label">Special requests (optional)</span>
            <textarea className="contact-input rounded-xl min-h-20 resize-y" name="requests" value={formData.requests} onChange={handleChange} />
          </label>

          {error && <p className="text-sm text-red-600 dark:text-red-400" role="alert">{error}</p>}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-sky-500 hover:bg-sky-600 disabled:opacity-60 text-white text-sm font-bold rounded-xl shadow-md transition-colors cursor-pointer"
          >
            {isSubmitting ? 'Sending request...' : 'Send reservation request'}
          </button>
        </form>
      </div>
    </div>
  );
};
