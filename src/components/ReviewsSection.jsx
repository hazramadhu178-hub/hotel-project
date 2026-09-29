
import React, { useState } from "react";
import {
    Sparkles,
    Star,
    ThumbsUp,
    ShieldCheck,
} from "lucide-react";

import { GUEST_REVIEWS } from "../data/resortData";

export const ReviewsSection = () => {
    const [reviewsList, setReviewsList] = useState(GUEST_REVIEWS);
    const [activeFilter, setActiveFilter] = useState("all");
    const [likedIds, setLikedIds] = useState({});

    const filteredReviews = reviewsList.filter((review) => {
        if (activeFilter === "all") {
            return true;
        }

        return review.tripType === activeFilter;
    });

    const handleToggleLike = (id) => {
        setLikedIds((prev) => {
            const isLiked = !!prev[id];
            const updatedLikes = isLiked ? -1 : 1;
            setReviewsList((list) =>
            list.map((item) =>
                item.id === id
                ? {
                    ...item,
                    likes: item.likes + updatedLikes,
                    }
                : item
            )
            );
            return {
            ...prev,
            [id]: !isLiked,
            };
        });
    };

return (
    <section id="reviews" className="resort-section bg-sky-50/40 dark:bg-slate-900/40" >
    <div className="resort-container">
    <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="section-badge">
            <Sparkles className="w-3.5 h-3.5" />
            Guest Reflections & Stories
        </div>

        <h2 className="section-title">
            Words From Those Who Found Stillness Here
        </h2>

        <p className="section-description">
            Read honest reflections from solo travelers, couples, and creative
            souls who stepped into our coastal sanctuary.
        </p>
    </div>

    <div className="max-w-xl mx-auto p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm flex items-center justify-around text-center mb-10">
        <div>
        <div className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center justify-center gap-1">
            <span>4.98</span>
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
        </div>

        <div className="text-[11px] text-slate-400">
            Overall Serenity Score
        </div>
        </div>

            <div className="h-8 w-px bg-slate-200 dark:bg-slate-700" />
        <div>
        <div className="text-2xl font-extrabold text-sky-500">
            99.4%
        </div>

        <div className="text-[11px] text-slate-400">
            Would Recommend to a Friend
        </div>
        </div>

        <div className="h-8 w-px bg-slate-200 dark:bg-slate-700" />
        <div>
        <div className="text-2xl font-extrabold text-slate-900 dark:text-white">
            300+
        </div>

        <div className="text-[11px] text-slate-400">
            Verified Guest Reviews
        </div>
        </div>
    </div>

    <div className="text-center mb-8">
        <div className="filter-tabs-container">
        {[
            "all",
            "Solo Mindful",
            "Romantic Escape",
            "Wellness Retreat",
        ].map((type) => (
            <button key={type} type="button" onClick={() => setActiveFilter(type)} className={`filter-tab-btn ${ activeFilter === type ? "active" : "" }`} >
                {type === "all" ? "All Stories" : type}
            </button>
        ))}
        </div>

        <select className="filter-select" value={activeFilter} onChange={(e) => setActiveFilter(e.target.value)} aria-label="Filter reviews by trip type" >
            <option value="all">All Stories</option>
            <option value="Solo Mindful">Solo Mindful</option>
            <option value="Romantic Escape">Romantic Escape</option>
            <option value="Wellness Retreat">Wellness Retreat</option>
        </select>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredReviews.map((review) => (
        <div key={review.id} className="resort-card p-6 flex flex-col justify-between" >
        <div>
        <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
            <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full object-cover border border-sky-300" />
        <div>
            <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1">
            <span>{review.name}</span>
                {review.verified && (
                    <span title="Verified Guest Stay" className="inline-flex" >
                        <ShieldCheck className="w-3.5 h-3.5 text-sky-500" />
                    </span>
                )}
            </div>

            <div className="text-[11px] text-slate-400"> {review.location} </div>
        </div>
        </div>

        <span className="text-[10px] bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-300 px-2 py-0.5 rounded-full font-semibold">
            {review.tripType}
        </span>
        </div>
        <div className="flex items-center gap-1 mb-2">
            {[...Array(review.rating)].map((_, index) => (
            <Star
                key={index}
                className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
            />
            ))}

            <span className="text-xs text-slate-400 ml-1.5"> {review.date} </span>
        </div>

            <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2 leading-snug"> "{review.title}" </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4"> {review.comment} </p>
        </div>

        <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
            <span className="truncate max-w-[170px]" title={review.stayedRoom} >
                Stayed:{" "}
            <strong className="text-slate-600 dark:text-slate-300">
                {review.stayedRoom.split(" ")[0]}{" "}
                {review.stayedRoom.split(" ")[1]}
            </strong>
            </span>

            <button
                type="button"
                onClick={() => handleToggleLike(review.id)}
                className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg border transition-all cursor-pointer ${
                likedIds[review.id]
                    ? "border-sky-400 bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-300 font-bold"
                    : "border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400"
                }`}
            >
                <ThumbsUp className="w-3 h-3" />
                <span>{review.likes}</span>
            </button>
        </div>
        </div>
        ))}
    </div>
    </div>
    </section>
  );
};