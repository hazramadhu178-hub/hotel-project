
import React, { useState } from "react";

import {
    Sparkles,
    Clock,
    ChefHat,
    CalendarDays,
    Flame,
    Check,
    UtensilsCrossed,
} from "lucide-react";

import { DINING_VENUES } from "../data/resortData";

export const DiningSection = ({ onReserveTable }) => {
const [activeVenueIdx, setActiveVenueIdx] = useState(0);

const currentVenue = DINING_VENUES[activeVenueIdx] || DINING_VENUES[0];

    return (
        <section id="dining" className="resort-section">
        <div className="resort-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="section-badge">
            <Sparkles className="w-3.5 h-3.5" />
            Gastronomy & Dining
        </div>

            <h2 className="section-title"> Nourishment for Body, Spirit & Mind </h2>
            <p className="section-description">
                Estate-grown produce, line-caught seafood from local fisherman,
                and botanical infusions harmonized with mindful dining rituals.
            </p>
        </div>

        <div className="flex justify-center mb-10">
        <div className="p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-800 inline-flex gap-2">
        {DINING_VENUES.map((venue, idx) => (
            <button key={venue.id} type="button" onClick={() => setActiveVenueIdx(idx)} className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${ activeVenueIdx === idx ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-md" : "text-slate-500 hover:text-slate-900 dark:hover:text-white" }`} >
                <UtensilsCrossed className="w-4 h-4 text-sky-500" />
                <span>{venue.name}</span>
            </button>
        ))}
        </div>
        </div>

        <div className="resort-card p-6 sm:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

        <div className="lg:col-span-5">
        <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg mb-4">
            <img src={currentVenue.image} alt={currentVenue.name} className="w-full h-full object-cover" />
        </div>

        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 space-y-2 text-xs">
        <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-semibold">
            <ChefHat className="w-4 h-4 text-sky-500" />
            <span>{currentVenue.chef}</span>
        </div>

        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
            <Clock className="w-4 h-4 text-sky-500" />
            <span>{currentVenue.hours}</span>
        </div>

        <div className="text-[11px] text-slate-400 italic pt-1">
            "{currentVenue.atmosphere}"
        </div>
        </div>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-between">
        <div>
        <div className="inline-flex items-center gap-1 text-[11px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            {currentVenue.type}
        </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-3">{currentVenue.name}</h3>
        <div className="space-y-3 mb-6">
        {currentVenue.description.map((paragraph, idx) => (
            <p key={idx} className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed" > {paragraph} </p>
        ))}
        </div>

        {currentVenue.tagline && (
        <p className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 mb-6">
            {currentVenue.tagline}
        </p>
        )}

        {currentVenue.signatureDishes.length > 0 && (
        <>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-amber-500" />
                Signature Culinary Highlights
            </h4>

            <div className="space-y-3 mb-8">
            {currentVenue.signatureDishes.map((dish, idx) => (
            <div key={idx} className="space-y-0.5" >
            <div className="dining-dish-row">
                <span className="text-sm font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                    {dish.name}
                    {dish.isSpecial && (
                    <span className="text-[10px] bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 px-2 py-0.2 rounded-full font-bold">
                        Chef's Signature
                    </span>
                    )}
                </span>
                <span className="text-sm font-extrabold text-sky-600 dark:text-sky-400"> {dish.price} </span>
            </div>
                <p className="text-xs text-slate-400"> {dish.desc} </p>
            </div>
            ))}
            </div>
        </>
        )}
        </div>

        <div className="flex items-center gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
            <button type="button" onClick={() => onReserveTable(currentVenue)} className="py-3 px-6 bg-sky-500 hover:bg-sky-600 text-white text-xs sm:text-sm font-bold rounded-xl shadow-md shadow-sky-500/20 transition-all flex items-center gap-2 cursor-pointer active:scale-95" >
                <CalendarDays className="w-4 h-4" />
                <span> Reserve Table at {currentVenue.name} </span>
            </button>

            <span className="text-xs text-slate-400 hidden sm:inline flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                In-Villa Dining also available
            </span>
        </div>
        </div>
        </div>
        </div>
        </div>
        </section>
    );
};
