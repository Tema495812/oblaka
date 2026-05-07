/* Design: Chrome & Asphalt — full-screen hero, Bebas Neue headline, orange CTA, dark overlay */
import { motion } from "framer-motion";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663494442443/knxjAHbzRkvMbdpxrjKPQC/hero-bg-SUwn5Q5mYntigRcaeVKNyd.webp";

export default function HeroSection() {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden scanlines">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/75 to-[#080808]/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/50" />

      {/* Orange glow bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF4500]/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 w-full pt-20">
        <div className="max-w-3xl">
          {/* Location badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-px bg-[#FF4500]" />
            <span
              className="text-[#FF4500] text-xs font-semibold tracking-[0.3em] uppercase"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              ТЦ «Облака» · Метро Домодедовская · −3 уровень
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em" }}
            className="text-white leading-none mb-4"
          >
            <span className="block text-[clamp(3rem,8vw,7rem)]">Автомобильное</span>
            <span className="block text-[clamp(3rem,8vw,7rem)]">пространство</span>
            <span className="block text-[clamp(3.5rem,9vw,8rem)] text-[#FF4500]">17.000 М²</span>
            <span className="block text-[clamp(1.5rem,3vw,2.5rem)] text-[#C0C0C0] font-normal mt-2">под землёй</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-[#8A8A8A] text-base md:text-lg font-light max-w-xl mb-10 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Мотошкола, музей японских авто, дрифт-картинг и инфраструктура в одном месте
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap items-center gap-4"
          >
            <button onClick={scrollToAbout} className="btn-orange text-base">
              Смотреть, что внутри
            </button>
            <button
              onClick={() => document.querySelector("#zones")?.scrollIntoView({ behavior: "smooth" })}
              className="text-white/60 hover:text-white text-sm font-medium tracking-wider uppercase transition-colors flex items-center gap-2"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <span>Все зоны</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-white/10"
          >
            {[
              { num: "17.000", label: "м² площадь" },
              { num: "6", label: "зон комплекса" },
              { num: "−3", label: "этаж под землёй" },
              { num: "1", label: "место для всего" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-[#FF4500] text-3xl md:text-4xl leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
                >
                  {stat.num}
                </div>
                <div
                  className="text-[#8A8A8A] text-xs uppercase tracking-widest mt-1"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs tracking-[0.3em] uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-gradient-to-b from-[#FF4500]/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
