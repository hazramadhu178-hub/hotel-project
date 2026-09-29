
import React, { useState, useEffect } from "react";

import {
    ShieldCheck,
    FileText,
    Calendar,
    RotateCcw,
    ChevronDown,
    Sparkles,
} from "lucide-react";

const privacyBlocks = [
    {
        id: "p1",
        title: "1. What Personal Information We Collect",
        body: "Basic identity and contact details — your name, email address, phone number and postal address — plus stay details such as arrival and departure dates, number of guests, villa preference, and any accessibility, dietary or celebration notes you choose to share. We also collect technical data: IP address, browser type, device and the pages you visit. Payment card numbers are never stored on our servers; they are handled directly by our PCI-DSS compliant payment provider.",
    },

    {
        id: "p2",
        title: "2. Contact / Enquiry Form Data",
        body: "When you send a message through our concierge form we receive exactly what you type: your name, email, optional phone number, the nature of your inquiry and your message. We use it solely to answer you — typically within two hours, always within one working day — and keep it for up to 24 months so we can follow up on earlier conversations. Newsletter subscription is separate and optional; unsubscribing never affects service emails about a booking.",
    },

    {
        id: "p3",
        title: "3. Cookies & Analytics",
        body: "Essential cookies keep your chosen theme, language and session working — the site cannot remember these preferences without them. Optional analytics cookies (page views, scroll depth, load performance) help us improve the guest journey and are only set after you accept them. We never use advertising, retargeting or cross-site tracking cookies, and we do not sell browsing data. You can clear or block cookies at any time in your browser settings.",
    },

    {
        id: "p4",
        title: "4. How Information Is Used & Protected",
        body: "Information is used to prepare your villa, arrange transfers, reserve dining tables, personalise wellness rituals, process payments and meet legal accounting obligations — nothing else. Protection includes TLS encryption in transit, encrypted storage at rest, role-based staff access on a need-to-know basis, signed confidentiality agreements and annual security reviews. Access, correction or deletion requests can be sent to privacy@strongmeresort.com; we respond within 30 days.",
    },
];

const termsBlocks = [
  {
    id: "t1",
    title: "1. Website Usage",
    body: "This website is provided for personal, non-commercial trip planning. Content, photography, copy and design belong to StrongMe Coastal Sanctuary and may not be scraped, reproduced or republished without written permission. Automated extraction is prohibited except by search engines respecting robots.txt. External links are offered for convenience; we are not responsible for third-party sites. The site is provided \"as is\", and we may update, suspend or withdraw content at any time.",
  },

  {
    id: "t2",
    title: "2. Booking Conditions",
    body: "A reservation is confirmed once you receive a written confirmation code and any required deposit has cleared. The lead guest must be at least 18 years old and is authorised to accept these conditions for everyone on the booking. Quoted rates are per villa per night in USD and include daily farm-to-table breakfast, scheduled wellness classes, Wi-Fi and estate access; applicable taxes and a 10% sanctuary service charge are added at checkout.",
  },

  {
    id: "t3",
    title: "3. Guest Responsibilities",
    body: "Guests must respect quiet hours (10:00 PM – 7:00 AM), the smoke-free and drone-free estate policy, other guests' privacy, and our coastal conservation zones. Children must be supervised in pools and along cliff paths. The lead guest is responsible for damage caused by any member of their party and for visitors they host. Behaviour that seriously disturbs other guests may result in removal from the estate without refund.",
  },

  {
    id: "t4",
    title: "4. Payment & General Terms",
    body: "Payments are accepted by major credit or debit card and bank transfer in USD. A 30% deposit secures flexible bookings with the balance due 7 days before arrival; non-refundable plans are charged in full at the time of booking. A confirmed rate is guaranteed even if published prices change later. To the extent permitted by law, our liability is limited to the amount you paid for the stay, and we are not liable for indirect loss or interruptions caused by events beyond our control.",
  },
];

const cancellationBlocks = [
  {
    id: "c1",
    title: "1. Cancellation Deadlines",
    body: "Flexible reservations: cancel free of charge until 11:59 PM local time, 7 days before arrival. Inside 7 days but before arrival: a fee equal to the first night applies, or your payment is held as a credit. Within 48 hours of arrival, and on non-refundable rate plans: the full stay is charged. All deadlines are calculated in the property's local time zone (UTC+9).",
  },

  {
    id: "c2",
    title: "2. Refund Rules",
    body: "Eligible refunds are returned to the original payment method within 7–10 business days; posting time then depends on your bank. Where you choose a credit instead of a refund, it equals 100% of the amount paid, is valid for 24 months against any future rate, and applies automatically at checkout. Promotional rates, gift vouchers and third-party booking-platform reservations are handled through their original channel. Taxes and service charges on cancelled nights are always refunded in full.",
  },

  {
    id: "c3",
    title: "3. No-Show Policy",
    body: "If we receive no communication by 10:00 PM on the arrival date, the reservation is recorded as a no-show: the first night is charged in full and the remaining nights are released without penalty. Arriving late is always welcome at any hour — a quick message keeps your villa held for you. No-shows on prepaid non-refundable rates are charged for the full stay.",
  },

  {
    id: "c4",
    title: "4. Modification / Rescheduling Rules",
    body: "One date change is permitted free of charge when requested at least 7 days before arrival, subject to availability and any difference in rate for the new dates. Additional changes, or changes requested inside 7 days, are treated as a cancellation and rebooking under the rules above. Shortening a stay after arrival is not refundable for unused nights unless required by local law. Requests can be made through the concierge form or by replying to your confirmation email.",
  },
];

const PolicyCard = ({
    id,
    icon,
    iconTone,
    title,
    updated,
    blocks,
    open,
    onToggle,
}) => {

    const bodyId = `${id}-body`;

    return (
        <div id={id} className="legal-card">
        <button type="button" onClick={() => onToggle(id)} className="legal-card-header" aria-expanded={open} aria-controls={bodyId} >
        <span className={`legal-card-icon legal-card-icon--${iconTone}`}> {icon} </span>
        <span className="legal-card-heading">
            <span className="legal-card-title"> {title} </span>
            <span className="legal-card-sub"> {updated} </span>
        </span>

            <ChevronDown className={`w-5 h-5 legal-chevron ${open ? "open" : ""}`} />
        </button>

        <div id={bodyId} className={`legal-card-body ${open ? "open" : ""}`} >

        <div className="legal-blocks">
        {blocks.map((block) => (
        <article key={block.id} className="legal-block" >
            <h3 className="legal-block-title"> {block.title} </h3>
            <p className="legal-block-body"> {block.body} </p>
        </article>
        ))}

        </div>
        </div>
        </div>
    );
};

export const LegalSection = () => {

    const [openId, setOpenId] = useState(null);

    const handleToggle = (id) => {
    setOpenId((current) => (
        current === id ? null : id
    ));
    };

    useEffect(() => {
    const openFromHash = () => {
      const id = window.location.hash.replace("#", "");
      if (
        id === "privacy" ||
        id === "terms" ||
        id === "cancellation"
      ) {
        setOpenId(id);
      }
    };

    openFromHash();
    window.addEventListener("hashchange", openFromHash);

    return () => {
        window.removeEventListener("hashchange", openFromHash);
    };

  }, []);


return (
    <section className="resort-section legal-section">
    <div className="resort-container">

    <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="section-badge">
            <Sparkles className="w-3.5 h-3.5" />
            Policies & Guest Care
        </div>

        <h2 className="section-title">Privacy, Terms & Cancellation Policies</h2>
        <p className="section-description">
            Everything you need to know about your data, your booking and
            your flexibility — written plainly, with no small print.
        </p>
    </div>

    <div className="legal-grid">
        <PolicyCard id="privacy" icon={<ShieldCheck className="w-5 h-5" />} iconTone="privacy" title="Privacy Policy" updated="Last updated: 12 July 2025" blocks={privacyBlocks} open={openId === "privacy"} onToggle={handleToggle} />
        <PolicyCard id="terms" icon={<FileText className="w-5 h-5" />} iconTone="terms" title="Terms & Conditions" updated="Effective: 12 July 2025" blocks={termsBlocks} open={openId === "terms"} onToggle={handleToggle} />
        <PolicyCard id="cancellation" icon={<RotateCcw className="w-5 h-5" />} iconTone="cancel" title="Cancellation & Refund Policy" updated="Effective: 12 July 2025" blocks={cancellationBlocks} open={openId === "cancellation"} onToggle={handleToggle} />
    </div>
        <p className="legal-note">
            Questions about these policies? Write to{" "}
            <a href="mailto:privacy@strongmeresort.com" className="legal-note-link" > privacy@strongmeresort.com </a>{" "}
            — our team replies within two hours, every day.
        </p>
      </div>
    </section>
  );
};