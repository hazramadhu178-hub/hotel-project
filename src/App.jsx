import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

// Resort Sections
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { RoomsSection } from './components/RoomsSection';
import { BeachSection } from './components/BeachSection';
import { AmenitiesSection } from './components/AmenitiesSection';
import { GallerySection } from './components/GallerySection';
import { DiningSection } from './components/DiningSection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { LegalSection } from './components/LegalSection';
import { FooterSection } from './components/FooterSection';

// Modals
import { RoomDetailModal } from './components/modals/RoomDetailModal';
import { DiningReservationModal } from './components/modals/DiningReservationModal';
import { BookingConfirmationModal } from './components/modals/BookingConfirmationModal';
import { ReservationModal } from './components/modals/ReservationModal';

import { ShareModal } from './components/modals/ShareModal';
import { PhotoModal } from './components/modals/PhotoModal';

// Data & Types
import { INITIAL_ENTRIES } from './data/journalData';
import { RESORT_ROOMS } from './data/resortData';

import { playChime } from './utils/audio';
import { Check, Sparkles } from 'lucide-react';

export function App() {
  // Journal entries state
  const [entries, setEntries] = useState(() => {
    const saved = localStorage.getItem('strongme_entries');
    if (saved) {
      try {
        return JSON.parse(saved).map((entry) =>
          typeof entry.image === 'string' && entry.image.startsWith('/images/')
            ? { ...entry, image: `.${entry.image}` }
            : entry
        );
      } catch {
        return INITIAL_ENTRIES;
      }
    }
    return INITIAL_ENTRIES;
  });

  const [activeEntryId, setActiveEntryId] = useState('entry-today');

  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('strongme_theme') || 'light';
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', saved);
      if (saved === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
    return saved;
  });
  const [fontStyle, setFontStyle] = useState('sans');
  const [paperStyle, setPaperStyle] = useState('ruled');

  // Resort State
  const [selectedRoomForBooking, setSelectedRoomForBooking] = useState(RESORT_ROOMS[0]);
  const [previewRoom, setPreviewRoom] = useState(null);
  const [reserveVenue, setReserveVenue] = useState(null);
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  // Modals state
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);
  const [isRoomModalOpen, setIsRoomModalOpen] = useState(false);
  const [isDiningModalOpen, setIsDiningModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);

  // Toast
  const [toastMessage, setToastMessage] = useState(null);
  const [copied, setCopied] = useState(false);

  // Sea-wave preloader: brief splash, then fade once the page is ready
  const [booting, setBooting] = useState(true);
  const [bootGone, setBootGone] = useState(false);

  useEffect(() => {
    const minSplash = window.setTimeout(() => setBooting(false), 1600);
    const unmount = window.setTimeout(() => setBootGone(true), 2500);
    return () => {
      window.clearTimeout(minSplash);
      window.clearTimeout(unmount);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('strongme_entries', JSON.stringify(entries));
  }, [entries]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('strongme_theme', theme);
  }, [theme]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const activeEntry = entries.find((e) => e.id === activeEntryId) || entries[0];

  const handleUpdateActiveEntry = (updatedFields) => {
    setEntries((prev) =>
      prev.map((item) =>
        item.id === activeEntry.id ? { ...item, ...updatedFields } : item
      )
    );
  };

  const handleToggleTheme = () => {
    const nextTheme = theme === 'light' ? 'warm' : theme === 'warm' ? 'dark' : 'light';
    setTheme(nextTheme);
    showToast(`Switched to ${nextTheme.toUpperCase()} theme`);
  };

  const handleCopyQuote = () => {
    const textToCopy = `"${activeEntry.quote}" — StrongMe Sanctuary (${activeEntry.fullDate})`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    showToast(<><i className="fa-solid fa-wand-magic-sparkles" aria-hidden="true"></i> Daily reflection copied to clipboard!</>);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleScrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectRoomForBooking = (room) => {
    setSelectedRoomForBooking(room);
    setIsReservationModalOpen(true);
  };

  const handleOpenRoomModal = (room) => {
    setPreviewRoom(room);
    setIsRoomModalOpen(true);
  };

  const handleReserveTable = (venue) => {
    setReserveVenue(venue);
    setIsDiningModalOpen(true);
  };

  const handleConfirmDining = (details) => {
    setIsDiningModalOpen(false);
    playChime();
    confetti({ particleCount: 50 });
    showToast(<><i className="fa-solid fa-utensils" aria-hidden="true"></i> {`Table confirmed for ${details.guests} at ${details.venue.name} on ${details.date}!`}</>);
  };

  const handleInquireExperience = (exp) => {
    handleScrollToSection('contact');
    showToast(`Inquiring about ${exp.title}. Our concierge is ready!`);
  };

  const handleCompleteBooking = (details) => {
    setConfirmedBooking(details);
    setIsConfirmationModalOpen(true);
    playChime();
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.5 },
      colors: ['#22c0f6', '#f59e0b', '#10b981', '#a855f7'],
    });
  };

  const handleSendMessage = async (formData) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL || ''}/api/inquiries`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const responseText = await response.text();
    let result = {};

    if (responseText) {
      try {
        result = JSON.parse(responseText);
      } catch {
        throw new Error(`The server returned an invalid response (${response.status}).`);
      }
    }

    if (!response.ok) {
      throw new Error(result.message || `Unable to send your inquiry (${response.status}).`);
    }

    if (!responseText) {
      throw new Error('The server returned an empty response. Make sure the backend is running.');
    }

    playChime();
    showToast(<><i className="fa-solid fa-envelope" aria-hidden="true"></i> {`Message sent by ${formData.name}! Concierge will reply within 2 hours.`}</>);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-sky-200 selection:text-sky-900">
      {/* SEA WAVE PRELOADER */}
      {!bootGone && <Preloader fading={!booting} />}

      {/* 1. NAVBAR */}
      <Navbar
        currentTheme={theme}
        onToggleTheme={handleToggleTheme}
        onBookNowClick={() => handleScrollToSection('rooms')}
      />

      {/* 2. HERO (with Live Skeuomorphic Journal Notebook) */}
      <HeroSection
        activeEntry={activeEntry}
        onUpdateEntry={handleUpdateActiveEntry}
        fontStyle={fontStyle}
        paperStyle={paperStyle}
        onOpenPhotoModal={() => setIsPhotoOpen(true)}
        onOpenShareModal={() => setIsShareOpen(true)}
        onCopyQuote={handleCopyQuote}
      />

      {/* 3. ABOUT */}
      <AboutSection />

      {/* 4. ROOMS */}
      <RoomsSection
        onSelectRoomForBooking={handleSelectRoomForBooking}
        onOpenRoomModal={handleOpenRoomModal}
      />

      {/* 5. BEACH EXPERIENCE */}
      <BeachSection
        onInquireExperience={handleInquireExperience}
      />

      {/* 6. AMENITIES */}
      <AmenitiesSection />

      {/* 7. GALLERY */}
      <GallerySection />

      {/* 8. DINING */}
      <DiningSection
        onReserveTable={handleReserveTable}
      />

      {/* 9. REVIEWS */}
      <ReviewsSection />

      {/* 10. LOCATION */}
      <LocationSection />

      {/* 11. FAQ */}
      <FAQSection />

      {/* 12. CONTACT */}
      <ContactSection
        onSendMessage={handleSendMessage}
      />

      {/* 13. PRIVACY POLICY & TERMS OF SANCTUARY */}
      <LegalSection />

      {/* 14. FOOTER */}
      <FooterSection />

      {/* MODALS */}
      <RoomDetailModal
        room={previewRoom}
        isOpen={isRoomModalOpen}
        onClose={() => setIsRoomModalOpen(false)}
        onBookRoom={(room) => {
          setIsRoomModalOpen(false);
          handleSelectRoomForBooking(room);
        }}
      />

      <DiningReservationModal
        venue={reserveVenue}
        isOpen={isDiningModalOpen}
        onClose={() => setIsDiningModalOpen(false)}
        onConfirmReservation={handleConfirmDining}
      />

      <BookingConfirmationModal
        isOpen={isConfirmationModalOpen}
        onClose={() => setIsConfirmationModalOpen(false)}
        details={confirmedBooking}
      />

      <ReservationModal
        room={selectedRoomForBooking}
        isOpen={isReservationModalOpen}
        onClose={() => setIsReservationModalOpen(false)}
        onSubmitted={handleCompleteBooking}
      />

      <ShareModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        entry={activeEntry}
        onCopyQuote={handleCopyQuote}
        copied={copied}
      />

      <PhotoModal
        isOpen={isPhotoOpen}
        onClose={() => setIsPhotoOpen(false)}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="strongme-toast">
          {typeof toastMessage === 'string' &&
          (toastMessage.includes('copied') || toastMessage.includes('exported') || toastMessage.includes('confirmed')) ? (
            <Check className="w-4 h-4 text-emerald-400" />
          ) : (
            <Sparkles className="w-4 h-4 text-amber-300" />
          )}
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}

export default App;
