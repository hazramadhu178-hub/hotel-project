
import React from "react";
import { Sparkles } from "lucide-react";
import { NotebookBinder } from "./NotebookBinder";

export const HeroSection = ({
    activeEntry,
    onUpdateEntry,
    fontStyle,
    paperStyle,
    onOpenPhotoModal,
    onOpenShareModal,
    onCopyQuote,
}) => {
return (
    <section id="hero" className="hero-section">
    <div className="resort-container text-center px-4">
    <div className="hero-announcement animate-in fade-in zoom-in-95 duration-500">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="font-semibold text-slate-800 dark:text-slate-200">
            StrongMe Coastal Sanctuary
        </span>
            <span>•</span>
        <span className="text-sky-600 dark:text-sky-400 flex items-center gap-1 font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            Mindful Living & Ocean Retreat
        </span>
    </div>

    <h1 className="hero-headline"> Slow Down, Feel the Breeze &amp; Savor the Moment </h1>
    <p className="hero-subtext">
        A peaceful seaside escape where golden sands meet the endless blue horizon.
        Wake up to the sound of gentle waves, take a relaxing morning walk along the shore,
        and spend your days enjoying the warmth of the sun and the beauty of the ocean.
        Unwind in comfortable rooms, savor delicious local cuisine, and watch breathtaking
        sunsets from the perfect spot by the sea. Whether you're here for a relaxing getaway,
        a family holiday, or a memorable escape with someone special, every moment is an
        invitation to slow down, reconnect, and simply enjoy your time by the ocean.
    </p>
    </div>

    <div className="strongme-workspace">
    <NotebookBinder
        entry={activeEntry}
        onUpdateEntry={onUpdateEntry}
        fontStyle={fontStyle}
        paperStyle={paperStyle}
        onOpenPhotoModal={onOpenPhotoModal}
        onOpenShareModal={onOpenShareModal}
        onCopyQuote={onCopyQuote}
    />
    </div>
    </section>
  );
};
