
import React from "react";
import { RESORT_AMENITIES } from "../data/resortData";


const AmenityIcon = ({ name }) => {
const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "w-6 h-6",
    "aria-hidden": "true",
};

switch (name) {
    // Sea icon
    case "sea":
    return (
    <svg {...common}>
        <path d="M3 16c1.5 1.2 3 1.2 4.5 0S10.5 14.8 12 16s3 1.2 4.5 0S19.5 14.8 21 16" />
        <path d="M3 20c1.5 1.2 3 1.2 4.5 0S10.5 18.8 12 20s3 1.2 4.5 0S19.5 18.8 21 20" />
        <path d="M12 3v8" />
        <path d="M8.5 7.5 12 4l3.5 3.5" />
    </svg>
    );

    // Beach icon
    case "beach":
    return (
    <svg {...common}>
        <path d="M12 4c3.5 2.2 5.5 5 5.5 8.2A5.5 5.5 0 0 1 12 17.7 5.5 5.5 0 0 1 6.5 12.2C6.5 9 8.5 6.2 12 4z" />
        <path d="M12 4v14" />
        <path d="M4 20h16" />
    </svg>
    );

    // Experience icon
    case "experience":
    return (
    <svg {...common}>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2.2M12 19.8V22M2 12h2.2M19.8 12H22M4.9 4.9l1.6 1.6M17.5 17.5l1.6 1.6M19.1 4.9l-1.6 1.6M6.5 17.5l-1.6 1.6" />
    </svg>
    );

    // Food icon
    case "food":
    return (
    <svg {...common}>
        <path d="M4 3v8a3 3 0 0 0 3 3v7" />
        <path d="M7 3v8" />
        <path d="M10 3v8" />
        <path d="M17 3c-1.8 2.2-1.8 4.4 0 6.6V21" />
        <path d="M17 9.6c1.6-.4 2.8-1.6 3-3.2" />
    </svg>
    );

    // Comfort icon
    case "comfort":
    return (
    <svg {...common}>
        <path d="M3 18V10a2 2 0 0 1 2-2h4a3 3 0 0 1 6 0h4a2 2 0 0 1 2 2v8" />
        <path d="M3 14h18" />
        <path d="M5 18v2M19 18v2" />
    </svg>
    );


case "housekeeping":
    default:
    return (
    <svg {...common}>
        <path d="M4 20h10" />
        <path d="M6 20V9l6-4 6 4v4" />
        <path d="M14 20v-5h4l3 3.2V20" />
        <path d="M9 11h2" />
    </svg>
    );
  }
};


const HighlightIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-sky-500" aria-hidden="true" >
        <path d="M20 6 9 17l-5-5" />
    </svg>
);

export const AmenitiesSection = () => {
    return (
        <section id="amenities" className="resort-section">
        <div className="resort-container">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">

        {/* Small Badge */}
        <div className="section-badge">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden="true" >
            <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1-2.1" />
            <circle cx="12" cy="12" r="3.2" />
        </svg>

        Hotel Services
        </div>

        {/* Section Title */}
        <h2 className="section-title"> Comfortable Stay &amp; Helpful Service </h2>

        {/* Section Description */}
        <p className="section-description">
            Friendly staff, sea-view rooms, easy beach access, and freshly
            prepared meals — everything you need for a smooth and enjoyable
            stay by the sea.
        </p>
        </div>

        {/* Amenities Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {RESORT_AMENITIES.map((item) => (
            <div key={item.id} className="amenity-card group">

            {/* Amenity Icon */}
            <div className="amenity-icon-box group-hover:scale-110 transition-transform">
                <AmenityIcon name={item.iconName} />
            </div>

            {/* Category */}
            <span className="text-[11px] font-bold tracking-wider uppercase text-sky-600 dark:text-sky-400 mb-1 block">
                {item.category}
            </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2"> {item.title} </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4"> {item.description} </p>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/80 px-3 py-1 rounded-full border border-slate-100 dark:border-slate-700">
                <HighlightIcon />
                <span>{item.highlight}</span>
            </div>
            </div>
        ))}

        </div>
        </div>
        </section>
    );
};

