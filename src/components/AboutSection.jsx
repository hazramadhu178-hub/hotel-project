import React from "react";

import {
  Sparkles,
  Heart,
  Compass,
  Feather,
  Sunrise,
  UtensilsCrossed,
} from "lucide-react";

export const AboutSection = () => {

  // ================= PILLARS =================

  const pillars = [
    {
      icon: <Feather className="w-6 h-6 text-sky-500" />,
      title: "Tactile Journaling Ritual",
      desc: "Each morning and evening begins with curated reflection cards, encouraging you to capture thoughts on archival paper and embrace quiet clarity.",
    },

    {
      icon: <Compass className="w-6 h-6 text-amber-500" />,
      title: "Sunflower Coastal Haven",
      desc: "Wander along 4 hectares of blooming golden flowers overlooking turquoise bays where gentle breezes whisper peace into your soul.",
    },

    {
      icon: <Heart className="w-6 h-6 text-rose-500" />,
      title: "Mindful Sanctuary Hospitality",
      desc: "No hurried schedules. Intimate villas designed with natural teakwood, outdoor rainwater baths, and dedicated wellness concierges.",
    },
  ];


  // ================= STATS =================

  const stats = [
    {
      value: "4.2 Ha",
      label: "Coastal Flower Fields",
    },

    {
      value: "100%",
      label: "Farm-to-Table Organic",
    },

    {
      value: (
        <>
            4.98{" "}<i className="fa-solid fa-star" aria-hidden="true" />
        </>
      ),
      label: "Guest Serenity Rating",
    },

    {
      value: "12 Only",
      label: "Exclusive Private Villas",
    },
  ];


    return (
        <section id="about" className="resort-section bg-slate-50/50 dark:bg-slate-900/30" >
        <div className="resort-container">

        {/* ================= SECTION HEADER ================= */}

        <div className="text-center max-w-3xl mx-auto mb-16">

        {/* Small Badge */}
        <div className="section-badge">
            <Sparkles className="w-3.5 h-3.5" />
            About StrongMe Sanctuary
        </div>

        {/* Main Title */}
        <h2 className="section-title">Where Modern Luxury Meets Coastal Stillness</h2>

        {/* Description */}
        <p className="section-description">
            StrongMe Sanctuary was born from a simple realization: the greatest
            luxury is having the time and space to truly slow down. We created
            a private coastal retreat where refined comfort, thoughtful design,
            and the untamed beauty of the sea come together. Here, every detail
            is designed to create a sense of calm—from elegant spaces and
            natural textures to the gentle rhythm of the waves beyond. It is a
            place to step away from the noise of everyday life, reconnect with
            yourself, and experience the quiet luxury of simply being by the
            sea.
        </p>
        </div>

        {/* ================= STORY SECTION ================= */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">

        {/* ---------- LEFT SIDE IMAGE ---------- */}

        <div className="relative">

        {/* Main Image */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 aspect-[4/3]">
            <img  src="https://images.pexels.com/photos/2476632/pexels-photo-2476632.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" alt="StrongMe Ocean Sanctuary Cliffside" className="w-full h-full object-cover" />
        {/* Image Quote */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
        <blockquote className="text-white text-sm sm:text-base font-medium italic">
            "I slow down to hear the flowers bloom and feel the gentle
            touch of the breeze."
        </blockquote>
        </div>
        </div>


        {/* Floating Card */}
        <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white dark:bg-slate-800 p-4 sm:p-5 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 max-w-xs">

            <div className="flex items-center gap-3">
            {/* Icon */}
            <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-600 flex items-center justify-center font-bold text-lg">
                <i className="fa-solid fa-spa" aria-hidden="true" />
            </div>

            {/* Text */}
            <div>
            <div className="text-xs font-bold text-slate-800 dark:text-slate-100">
                4-Hectare Sunflower Meadow
            </div>

            <div className="text-[11px] text-slate-400">
                Private access for all retreat guests
            </div>
            </div>
            </div>
        </div>

        </div>

        {/* ---------- RIGHT SIDE STORY ---------- */}

        <div className="space-y-6">

        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white leading-snug">
            A Gentle Invitation to Pause, Breathe &amp; Simply Be
        </h3>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Every detail at StrongMe Sanctuary has been thoughtfully curated
            to make your stay feel effortless and unhurried. From beautifully
            appointed rooms and natural textures to the soothing rhythm of
            the ocean beyond your window, this is a place where comfort meets
            coastal beauty. Leave the rush of everyday life behind and
            rediscover the simple pleasure of waking slowly, enjoying a quiet
            morning by the sea, and watching the golden light settle over the
            horizon.
        </p>


        {/* Three Small Features */}
        <div className="space-y-4 pt-2">

        {/* Wake with the Sea */}
        <div className="flex items-start gap-3 text-sm">
            <Sunrise className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
        <p>
            <span className="font-bold text-slate-800 dark:text-slate-100">
            Wake with the Sea
            </span>

            <span className="text-slate-600 dark:text-slate-300">
            {" "}
            — Begin your mornings with gentle ocean breezes, natural
            light, and the peaceful rhythm of the waves.
            </span>
        </p>
        </div>
        {/* Savor the Moment */}

        <div className="flex items-start gap-3 text-sm">
            <UtensilsCrossed className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
        <p>
            <span className="font-bold text-slate-800 dark:text-slate-100">
            Savor the Moment
            </span>

            <span className="text-slate-600 dark:text-slate-300">
            {" "}
            — Enjoy freshly prepared cuisine, local flavors, and
            relaxed dining experiences inspired by the coast.
            </span>
        </p>
        </div>

        {/* Explore & Unwind */}
        <div className="flex items-start gap-3 text-sm">
            <Compass className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
        <p>
            <span className="font-bold text-slate-800 dark:text-slate-100">
            Explore &amp; Unwind
            </span>

            <span className="text-slate-600 dark:text-slate-300">
            {" "}
            — Wander along the shoreline, discover quiet coastal
            spaces, or simply settle in and enjoy the view.
            </span>
        </p>
        </div>
        </div>
        </div>
        </div>

        {/* ================= THREE PILLARS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {pillars.map((pillar, index) => (
            <div key={index} className="resort-card p-6 sm:p-8" >

                {/* Pillar Icon */}
                <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-5">
                {pillar.icon}
                </div>

                {/* Pillar Title */}
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2"> {pillar.title} </h4>

                {/* Pillar Description */}
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed"> {pillar.desc} </p>
            </div>
            ))}
        </div>

        {/* ================= ESTATE STATS ================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-md">
        {stats.map((stat, index) => (
            <div key={index} className="text-center p-2" >

                {/* Number */}
                <div className="text-2xl sm:text-3xl font-extrabold text-sky-500 dark:text-sky-400 mb-1">
                {stat.value}
                </div>

                {/* Label */}
                <div className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                {stat.label}
                </div>

            </div>
        ))}
        </div>
        </div>
        </section>
    );
};

