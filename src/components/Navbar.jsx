import React, { useState, useEffect } from "react";
import {
    BicepsFlexed,
    Sun,
    Moon,
    Sunrise,
    Menu,
    X,
    CalendarCheck,
} from "lucide-react";

export const Navbar = ({
    currentTheme,
    onToggleTheme,
    onBookNowClick,
}) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");

    const navItems = [
        { label: "Home", href: "#hero" },
        { label: "About", href: "#about" },
        { label: "Rooms", href: "#rooms" },
        { label: "Beach", href: "#beach" },
        { label: "Amenities", href: "#amenities" },
        { label: "Gallery", href: "#gallery" },
        { label: "Dining", href: "#dining" },
        { label: "Reviews", href: "#reviews" },
        { label: "Location", href: "#location" },
        { label: "FAQ", href: "#faq" },
        { label: "Contact", href: "#contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
        const scrollY = window.scrollY;

        const sections = navItems.map((item) =>
            item.href.substring(1)
        );

            for (const sectionId of sections.reverse()) {
            const element = document.getElementById(sectionId);
                if (element && scrollY >= element.offsetTop - 150) {
                    setActiveSection(sectionId);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true, });
        return () => { window.removeEventListener("scroll", handleScroll); };
  }, [navItems]);

    const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
            behavior: "smooth",
            });
        }
    };

    return (
        <header className="strongme-header">
        <div className="flex items-center gap-6">
        <a href="#hero"
            onClick={(e) => {
            e.preventDefault();
            handleNavClick("#hero");
            }}
            className="strongme-brand"
        >

        <div className="brand-icon-box">
        <BicepsFlexed className="w-5 h-5 text-slate-700 dark:text-sky-400" strokeWidth={2.4} />
        </div>

        <span className="brand-title">StrongMe</span>
        </a>

        <nav className="nav-links hidden lg:flex">
        {navItems.map((item) => (
            <a key={item.href} href={item.href}
                onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                }}
                className={`nav-item ${
                activeSection === item.href.substring(1) ? "active" : "" }`}
            >
                {item.label}
            </a>
        ))}
        </nav>
        </div>

        <div className="header-actions">
            <button type="button" onClick={onToggleTheme} title={`Switch theme (Current: ${currentTheme})`} className="header-action-btn p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer transition-transform active:scale-90" >
                {currentTheme === "light" && (
                <Sun className="w-4 h-4 text-amber-500" />
                )}

                {currentTheme === "warm" && (
                <Sunrise className="w-4 h-4 text-orange-500" />
                )}

                {currentTheme === "dark" && (
                <Moon className="w-4 h-4 text-sky-400" />
                )}
            </button>

            <button type="button" onClick={onBookNowClick} className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white text-xs sm:text-sm font-semibold rounded-xl shadow-md shadow-sky-500/20 transition-all cursor-pointer active:scale-95" >
                <CalendarCheck className="w-4 h-4" />
                <a href="#contact" className="text-white hover:text-slate-200" > Book Stay </a>
            </button>

            <button type="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen) } className="nav-hamburger lg:hidden" aria-label="Toggle Navigation Menu" aria-expanded={mobileMenuOpen} >
            {mobileMenuOpen ? (
                <X className="w-5 h-5" />
                ) : (
                <Menu className="w-5 h-5" />
            )}
            </button>
        </div>

        {mobileMenuOpen && (
        <div className="nav-drawer lg:hidden">
        <nav className="nav-drawer-links">
        {navItems.map((item) => (
            <a key={item.href} href={item.href}
            onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
            }}
            className={`nav-drawer-link ${ activeSection === item.href.substring(1) ? "active" : "" }`}
            >
                {item.label}
            </a>
        ))}
        </nav>

            <button type="button"
                onClick={() => {
                    setMobileMenuOpen(false);
                    onBookNowClick();
                }}
            className="nav-drawer-cta"
            >
                <CalendarCheck className="w-4 h-4" />
                Reserve Your Sanctuary
            </button>
        </div>
        )}

        </header>
    );
};
