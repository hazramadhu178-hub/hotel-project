import React from "react";
import {
    MapPin,
} from "lucide-react";

export const NotebookBinder = ({
    entry,
    onUpdateEntry,
    fontStyle,
    paperStyle,
    onOpenPhotoModal,
}) => {

    return (
        <div className="book-container relative">
            <div className="book-glow-layer" />
            <div className="book-spine-gutter" />
        <div className="binder-ring-wrapper binder-ring-top">
            <div className="binder-hole-left" />
            <div className="binder-ring-arc" />
            <div className="binder-hole-right" />
        </div>

        <div className="binder-ring-wrapper binder-ring-middle">
            <div className="binder-hole-left" />
            <div className="binder-ring-arc" />
            <div className="binder-hole-right" />
        </div>

        <div className="binder-ring-wrapper binder-ring-bottom">
            <div className="binder-hole-left" />
            <div className="binder-ring-arc" />
            <div className="binder-hole-right" />
        </div>

        <section className="book-page-left" aria-label="Journal Overview" >
        <div className="polaroid-wrapper group" onClick={onOpenPhotoModal} title="Click to view full photo or generate new art" >
        <div className="polaroid-frame">
        <div className="polaroid-image-container">
            <img src="./images/tropical-sandy-beach.jpg" alt="image" className="polaroid-img" loading="eager" />
        </div>
        </div>
        </div>
        </section>

        <section className="book-page-right" aria-label="Journal Editor" >
        <div className="quote-frosted-card">
            <div className="quote-card-body"> "{entry.quote}" </div>
        </div>

        <div className="journal-section">
        <div className="journal-prompt-header">
        <span className="journal-prompt-icon">
            <i className="fa-solid fa-pen-nib" aria-hidden="true" />
        </span>
        <span> {entry.prompt} </span>
        </div>

        <div
            className={`ruled-paper-container ${
                paperStyle === "blank" ? "!bg-none" : ""
            }`}
            style={{
                backgroundImage:
                paperStyle === "dots"
                    ? "radial-gradient(circle, var(--page-line) 1.5px, transparent 1.5px)"
                    : undefined,

                backgroundSize:
                paperStyle === "dots"
                    ? "24px 24px"
                    : undefined,
            }}
            >

            <textarea value={entry.content} readOnly aria-readonly="true" placeholder="Feel free to journal your current thoughts or anything else you'd like..." className={`journal-textarea journal-textarea-readonly ${ fontStyle === "handwriting" ? "handwriting" : "" } ${ fontStyle === "serif" ? "font-serif" : "" }`} rows={6} />
        </div>

        <div className="location-bar">
            <MapPin className="w-4 h-4 text-slate-400 flex-shrink-0" />
            <input type="text" value={entry.location}
            onChange={(e) =>
                onUpdateEntry({
                    location: e.target.value,
                })
            }
            placeholder="Where are you right now..." className="location-input" />
        </div>
        </div>
        </section>
        </div>
    );
};

