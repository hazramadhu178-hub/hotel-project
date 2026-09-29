
import { Sparkles, Clock, Compass, Heart } from "lucide-react";
import { BEACH_EXPERIENCES } from "../data/resortData";

// Main Beach Section
export const BeachSection = ({ onInquireExperience }) => {
    return (
        <section id="beach" className="resort-section bg-sky-50/40 dark:bg-slate-900/40" >
        <div className="resort-container">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">

        {/* Small Badge */}
        <div className="section-badge">
            <Sparkles className="w-3.5 h-3.5" />
            Beach & Coastal Experience
        </div>

        {/* Title */}
        <h2 className="section-title"> The Healing Rhythm of Tides & Shoreline Stillness </h2>

        {/* Description */}
        <p className="section-description">
            Immerse yourself in intentional seaside rituals designed to awaken
            your senses at dawn and bring deep serenity under starlit skies.
        </p>
        </div>


        {/* Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {BEACH_EXPERIENCES.map((exp) => (
        <div key={exp.id} className="experience-card-banner group" >
            <img src={exp.image} alt={exp.title} loading="lazy" />
        <div className="experience-overlay">
        <div className="flex flex-wrap items-center gap-2 mb-3">
            {exp.tags.map((tag, idx) => (
            <span key={idx} className="bg-white/20 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full" >
                {tag}
            </span>
            ))}

            {/* Complimentary Badge */}
            {exp.included && (
            <span className="bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                COMPLIMENTARY
            </span>
            )}
        </div>
        <h3 className="text-xl sm:text-2xl font-bold mb-1 leading-snug"> {exp.title} </h3>

        {/* Experience Description */}
        <p className="text-xs sm:text-sm text-slate-200 line-clamp-2 mb-4"> {exp.description} </p>

        {/* Time, Duration and Button */}
        <div className="flex items-center justify-between border-t border-white/20 pt-3 text-xs text-slate-200">

            {/* Time and Duration */}
            <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-sky-400" />
                <span>{exp.time}</span>
                <span>•</span>
                <span>{exp.duration}</span>
            </div>

            {/* Details Button */}
            <button type="button" onClick={() => onInquireExperience(exp)} className="py-1.5 px-3.5 bg-white text-slate-900 font-bold rounded-xl text-xs hover:bg-sky-400 hover:text-white transition-colors cursor-pointer" >
                Experience Details
            </button>
        </div>
        </div>
        </div>
        ))}
        </div>


        {/* Private Beach Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">

            {/* Left Side */}
            <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-sky-100 dark:bg-sky-950 text-sky-600 flex items-center justify-center font-bold">
                <Compass className="w-7 h-7" />
            </div>

            <div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white"> Exclusive 800-Meter Private Sandbar & Lagoon </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Reserved exclusively for retreat guests with shaded bamboo
                    cabanas, fresh coconuts, and cold towel service.
                </p>
            </div>
            </div>

        <a href="#rooms" className="whitespace-nowrap px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold rounded-xl hover:bg-sky-500 dark:hover:bg-sky-400 dark:hover:text-white transition-colors flex items-center gap-2" >
            <Heart className="w-3.5 h-3.5 text-red-400" />
            Plan Your Beach Getaway
        </a>
        </div>
        </div>
        </section>
    );
};

