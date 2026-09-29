
import React, { useState } from "react";

import {
    Sparkles,
    Phone,
    Mail,
    MessageSquare,
    MapPin,
    Send,
    CheckCircle,
    Clock,
    Camera,
    AtSign,
    Globe,
    Video,
    Headphones,
    Star,
    ArrowUpRight,
    User,
} from "lucide-react";


// Main Contact Section
export const ContactSection = ({ onSendMessage }) => {

    // Form data
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "General Stay & Suite Reservations",
        message: "",
    });

    // Form status
    const [formSent, setFormSent] = useState(false);
    const [formError, setFormError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);


  // Submit the contact form
const handleSubmit = async (e) => {
    e.preventDefault();

    setFormError("");
    setIsSubmitting(true);

    try {
        // Send form data to the parent function
        await onSendMessage(formData);
        // Clear the form after sending
        setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "General Stay & Suite Reservations",
            message: "",
        });
        // Show success message
        setFormSent(true);
        // Hide success message after 4 seconds
        setTimeout(() => setFormSent(false), 4000);
    } catch (error) {
        // Show error message
        setFormError(error.message);
    } finally {
        // Stop loading state
        setIsSubmitting(false);
    }
  };

// Contact information
const contactChannels = [
    {
      icon: <Phone className="w-5 h-5" />,
      tone: "sky",
      label: "Call / WhatsApp",
      value: "+1 (800) 880-FLOW",
      sub: "Available 24 hours daily",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      tone: "amber",
      label: "Email Concierge",
      value: "concierge@strongmeresort.com",
      sub: "Reply within 2 hours",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      tone: "emerald",
      label: "Estate Location",
      value: "88 Sunflower Bluff Road",
      sub: "Azure Peninsula • Private Gated Estate",
    },
];

  // Social media icons
const socials = [
    {
        icon: <Camera className="w-4 h-4" />,
        label: "Instagram",
    },
    {
        icon: <AtSign className="w-4 h-4" />,
        label: "Facebook",
    },
    {
        icon: <Globe className="w-4 h-4" />,
        label: "Website",
    },
    {
        icon: <Video className="w-4 h-4" />,
        label: "Youtube",
    },
];

  // Background colors for contact icons
const toneMap = {
    sky: "bg-sky-100 dark:bg-sky-950 text-sky-600",
    amber: "bg-amber-100 dark:bg-amber-950 text-amber-600",
    emerald: "bg-emerald-100 dark:bg-emerald-950 text-emerald-600",
};


return (
    <section id="contact" className="resort-section contact-section">
    <div className="resort-container">
    <div className="text-center max-w-3xl mx-auto mb-14">
    <div className="section-badge">
        <Sparkles className="w-3.5 h-3.5" />
        24/7 Sanctuary Concierge
    </div>

        <h2 className="section-title"> Let's Plan Your Season of Stillness </h2>
        <p className="section-description">
            Whether arranging private helicopter transfers, planning bespoke
            wellness rituals, or answering dietary inquiries, our dedicated
            hosts are at your quiet service — day and night.
        </p>
    </div>

    <div className="contact-panel">
    <div className="contact-aside">
        <div className="contact-aside-overlay" />
        <div className="contact-aside-content">
    <div>
        <span className="contact-aside-eyebrow">
            <Headphones className="w-3.5 h-3.5" />
            Concierge Desk
        </span>

        <h3 className="contact-aside-title"> A gentle conversation is the first step toward serenity. </h3>
        <p className="contact-aside-text">
            Our multilingual hosts craft every detail of your retreat,
            from sunrise rituals to private dining beneath the stars.
        </p>
    </div>

    <div className="contact-channel-list">
    {contactChannels.map((c, idx) => (
        <div key={idx} className="contact-channel">
        <div className={`contact-channel-icon ${toneMap[c.tone]}`} > {c.icon} </div>

        <div className="min-w-0">
            <div className="contact-channel-label"> {c.label} </div>
            <div className="contact-channel-value"> {c.value} </div>
            <div className="contact-channel-sub"> {c.sub} </div>
        </div>

        </div>
    ))}
    </div>

    <div className="contact-meta-row">
    <div className="contact-meta-box">
        <Clock className="w-4 h-4 text-sky-500" />
    <div>

    <div className="contact-meta-title">
        Front Desk Hours
    </div>
    
    <div className="contact-meta-sub">
        Open 24 / 7 · Every day
    </div>
    </div>
    </div>

    <div className="contact-meta-box">
        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
    <div>
        <div className="contact-meta-title"> 4.98 Guest Rating </div>
        <div className="contact-meta-sub"> 300+ verified reviews </div>
    </div>
    </div>
    </div>

    <div className="contact-social-row">
        <span className="contact-social-label">
            Follow the sanctuary
        </span>

    <div className="flex items-center gap-2">
    {socials.map((s, idx) => (
        <a key={idx} href="#" aria-label={s.label} className="contact-social-btn" > {s.icon} </a>
    ))}
    </div>
    </div>
    </div>
    </div>

    <div className="contact-form-col">

    <div className="mb-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1"> Send a Message to the Host Team </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400">
            Share your dates and preferences — we'll tailor a bespoke
            proposal just for you.
        </p>
    </div>

    <form onSubmit={handleSubmit} className="space-y-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div className="contact-field">

        <label className="contact-label"> Full Name </label>
    <div className="contact-input-wrap">
        <User className="contact-input-icon" />

    <input type="text" placeholder="e.g. Eleanor Vance" value={formData.name}
        onChange={(e) =>
            setFormData({
                ...formData,
                name: e.target.value,
            })
        }
        className="contact-input"/>
    </div>
    </div>

    <div className="contact-field">
        <label className="contact-label"> Email Address</label>
    <div className="contact-input-wrap">
        <Mail className="contact-input-icon" />
        <input type="email" placeholder="eleanor@example.com" value={formData.email}
        onChange={(e) =>
            setFormData({
                ...formData,
                email: e.target.value,
            })
        }
        className="contact-input" />

    </div>
    </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div className="contact-field">
        <label className="contact-label"> Phone </label>
    <div className="contact-input-wrap">
        <Phone className="contact-input-icon" />
        <input type="tel" maxLength={10}  placeholder="+1 555 000 1234" value={formData.phone}
        onChange={(e) =>
            setFormData({
                ...formData,
                phone: e.target.value,
            })
        }
        className="contact-input" />
    </div>
    </div>


    {/* Inquiry Type */}
    <div className="contact-field">
    <label className="contact-label"> Nature of Inquiry </label>
    <select value={formData.subject}
        onChange={(e) =>
            setFormData({
            ...formData,
            subject: e.target.value,
            })
        }
    className="contact-select">
        <option> General Stay & Suite Reservations </option>
        <option> Custom Mindful Wellness Program </option>
        <option> Private Dining & Special Occasions </option>
        <option> Helicopter & Airport Transfer Assistance </option>
        <option> Full Sanctuary Buyout & Retreats </option>
    </select>
    </div>
    </div>

    <div className="contact-field">
        <label className="contact-label"> Your Message </label>
        <textarea rows={4} placeholder="Tell us about your upcoming dates, special preferences, or questions..." value={formData.message}
        onChange={(e) =>
            setFormData({
                ...formData,
                message: e.target.value,
            })
        }
        className="contact-textarea" />
    </div>

    <div className="flex flex-col sm:flex-row items-center gap-3 pt-1">
    <button type="submit" disabled={isSubmitting} className="contact-submit-btn disabled:opacity-60" >
        <Send className="w-4 h-4" />
        {isSubmitting ? "Sending..." : "Send Concierge Inquiry"}
    </button>

    {/* Success Message */}
    {formSent && (
    <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 animate-in fade-in duration-300">
        <CheckCircle className="w-4 h-4" />
        Message sent — we'll reply shortly!
    </span>
    )}

    <a href="https://wa.me" target="_blank" rel="noreferrer" className="contact-whatsapp-btn" >
        <MessageSquare className="w-4 h-4" />
        Chat on WhatsApp
        <ArrowUpRight className="w-3 h-3" />
    </a>
    </div>


    {formError && (
    <p className="text-sm text-red-600 dark:text-red-400" role="alert">
        {formError}
    </p>
    )}

    </form>
    </div>
    </div>
    </div>
    </section>
  );
};

