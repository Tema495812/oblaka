/* Design: Chrome & Asphalt — sticky dark nav with orange accent, Bebas Neue logo */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "О комплексе", href: "#about" },
  { label: "Зоны", href: "#zones" },
  { label: "Галерея", href: "#gallery" },
  { label: "Локация", href: "#location" },
  { label: "Контакты", href: "#contacts" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleLink = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#080808]/95 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 bg-[#FF4500] flex items-center justify-center"
            style={{ clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))" }}>
            <span className="text-white font-bold text-xs leading-none">AC</span>
          </div>
          <span
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.1em" }}
            className="text-white text-xl group-hover:text-[#FF4500] transition-colors"
          >
            COMPLEX
          </span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleLink(link.href)}
              className="text-[#8A8A8A] hover:text-white text-sm font-medium tracking-wider uppercase transition-colors relative group"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#FF4500] group-hover:w-full transition-all duration-300" />
            </button>
          ))}
          <button
            onClick={() => handleLink("#contacts")}
            className="btn-orange text-sm ml-2"
          >
            Записаться
          </button>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0A0A0A] border-t border-white/5 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleLink(link.href)}
                  className="text-[#8A8A8A] hover:text-white text-sm font-medium tracking-wider uppercase transition-colors text-left"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleLink("#contacts")}
                className="btn-orange text-sm w-fit mt-2"
              >
                Записаться
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
