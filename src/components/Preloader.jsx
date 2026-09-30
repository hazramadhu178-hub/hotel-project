import React from 'react';
const wavePath =
    'M0,64 q150,-26 300,0 t300,0 t300,0 t300,0 V120 H0 Z';

const Wave = ({ className }) => (
    <svg className={`preloader-wave ${className}`} viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true" >
        <path d={wavePath} />
    </svg>
);

const SailBoat = () => (
    <svg className="preloader-boat" viewBox="0 0 72 56" aria-hidden="true">
        <path d="M36 6v30" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" fill="none" />
        <path d="M33 10 15 36h18z" fill="currentColor" opacity="0.85" />
        <path d="M39 8l18 28H39z" fill="currentColor" opacity="0.55" />
        <path d="M9 38h54l-9 12H18z" fill="currentColor" />
    </svg>
);

export const Preloader = ({ fading }) => {
    return (
        <div className={`preloader ${fading ? 'preloader--hide' : ''}`} role="status" aria-live="polite" aria-label="Loading StrongMe Coastal Sanctuary" >
        <div className="preloader-sky">
            <div className="preloader-sun" />
        <div className="preloader-content">
        
            <h1 className="preloader-brand">StrongMe</h1>
            <p className="preloader-tag">Coastal Sanctuary &amp; Seaside Retreat</p>
        <div className="preloader-bar" aria-hidden="true">
            <span className="preloader-bar-fill" />
        </div>
            <p className="preloader-hint">Warming up the shoreline…</p>
        </div>
        </div>

        <div className="preloader-sea" aria-hidden="true">
            <Wave className="preloader-wave--back" />
            <Wave className="preloader-wave--mid" />
            <Wave className="preloader-wave--front" />
        </div>
        </div>
    );
};
