import React, { useState } from "react";
import {
    Sparkles,
    Maximize2,
    Users,
    BedDouble,
    Eye,
    Check,
    Star,
    ArrowRight,
} from "lucide-react";
import { RESORT_ROOMS } from "../data/resortData";

export const RoomsSection = ({
    onSelectRoomForBooking,
    onOpenRoomModal,
}) => {

    const [activeCategory, setActiveCategory] = useState("all");
    const filteredRooms = RESORT_ROOMS.filter((room) => {
        if (activeCategory === "all") {
            return true;
        }

        return room.category === activeCategory;
    });

    return (
        <section id="rooms" className="resort-section">
        <div className="resort-container">
        <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="section-badge">
            <Sparkles className="w-3.5 h-3.5" />
            Sanctuary Suites &amp; Rooms
        </div>

        <h2 className="section-title">Thoughtfully Designed for Comfort &amp; Coastal Escape </h2>
        <p className="section-description">
            Each room and suite at StrongMe Sanctuary is designed as a peaceful
            retreat, blending refined comfort with the natural beauty of the
            coast. Wake to gentle ocean breezes, unwind in beautifully
            appointed spaces, and enjoy thoughtfully chosen details that make
            every stay feel effortless. From relaxing interiors to inviting
            views, every room offers the perfect setting to rest, recharge,
            and experience the quiet luxury of life by the sea.
        </p>
        </div>

        <div className="text-center">
        <div className="filter-tabs-container">
            <button type="button" onClick={() => setActiveCategory("all")} className={`filter-tab-btn ${ activeCategory === "all" ? "active" : "" }`} >
                All Sanctuaries ({RESORT_ROOMS.length})
            </button>

            <button type="button" onClick={() => setActiveCategory("villa")} className={`filter-tab-btn ${ activeCategory === "villa" ? "active" : "" }`} >
                Ocean Villas
            </button>

            <button type="button" onClick={() => setActiveCategory("bungalow")} className={`filter-tab-btn ${ activeCategory === "bungalow" ? "active" : "" }`} >
                Overwater Bungalows
            </button>

            <button type="button" onClick={() => setActiveCategory("suite")} className={`filter-tab-btn ${ activeCategory === "suite" ? "active" : "" }`} >
                Garden Suites
            </button>
        </div>

        <select className="filter-select" value={activeCategory} onChange={(e) => setActiveCategory(e.target.value)} aria-label="Filter sanctuary type" >
            <option value="all"> All Sanctuaries ({RESORT_ROOMS.length}) </option>
            <option value="villa">Ocean Villas</option>
            <option value="bungalow">Overwater Bungalows</option>
            <option value="suite">Garden Suites</option>
        </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredRooms.map((room) => (
        <div key={room.id} className="resort-card flex flex-col justify-between group" >
        <div>
        <div className="room-card-media cursor-pointer" onClick={() => onOpenRoomModal(room)} >
            <img src={room.image} alt={room.name} loading="lazy" />

            {room.badge && (
                <div className="absolute top-4 left-4 bg-white/95 dark:bg-slate-900/90 text-slate-900 dark:text-white text-xs font-bold px-3 py-1 rounded-full shadow-md backdrop-blur-sm flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-500" />
                {room.badge}
                </div>
            )}

        <div className="absolute top-4 right-4 bg-slate-900/75 text-white text-xs font-semibold px-2.5 py-1 rounded-lg backdrop-blur-sm flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{room.rating}</span>
            <span className="text-slate-300"> ({room.reviewsCount}) </span>
        </div>

        <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-slate-200 text-xs px-3 py-1 rounded-full font-medium shadow opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
            <Maximize2 className="w-3 h-3" />
            View Photos & Details
        </div>
        </div>

        <div className="p-6 sm:p-7">
        <div className="flex items-baseline justify-between mb-2">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white"> {room.name} </h3>

        <div className="text-right">
        <div className="text-2xl font-extrabold text-slate-900 dark:text-white">
            ${room.price}
        </div>

        <div className="text-[11px] text-slate-400">
            per night
        </div>
        </div>
        </div>

            <p className="text-xs font-medium text-sky-600 dark:text-sky-400 mb-4"> {room.subtitle} </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mb-5"> {room.description} </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 py-3 border-y border-slate-100 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-300 mb-5">
        <div className="flex items-center gap-1">
            <Maximize2 className="w-3.5 h-3.5 text-sky-500" />
            {room.size}
        </div>

        <div className="flex items-center gap-1">
            <Users className="w-3.5 h-3.5 text-sky-500" />
            {room.capacity}
        </div>

        <div className="flex items-center gap-1">
            <BedDouble className="w-3.5 h-3.5 text-sky-500" />
            {room.bed.split(" ")[0]} King
        </div>

        <div className="flex items-center gap-1 truncate" title={room.view} >
            <Eye className="w-3.5 h-3.5 text-sky-500" />
            {room.view.split(" ")[0]} View
        </div>
        </div>

        <div className="space-y-1.5 mb-6">
        {room.features.slice(0, 3).map((feat, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300" >
                <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                <span>{feat}</span>
            </div>
        ))}
        </div>
        </div>
        </div>

        <div className="px-6 pb-6 pt-0 flex items-center gap-3">
            <button type="button" onClick={() => onOpenRoomModal(room)} className="flex-1 py-2.5 px-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-semibold transition-colors cursor-pointer" >
                Explore Villa Details
            </button>

            <button type="button" onClick={() => onSelectRoomForBooking(room)} className="py-2.5 px-5 bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold rounded-xl shadow-md shadow-sky-500/20 transition-all flex items-center gap-1 cursor-pointer active:scale-95" >
                <span>Reserve</span>
                <ArrowRight className="w-3.5 h-3.5" />
            </button>
        </div>
        </div>
        ))}
        </div>
        </div>
        </section>
    );
};