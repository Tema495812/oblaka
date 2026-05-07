/* Design: Chrome & Asphalt — horizontal cards, recognition triggers */
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const audiences = [
  {
    icon: "🚗",
    title: "Автолюбители",
    desc: "Место, где можно обслужить авто, прокачать навыки и пообщаться с единомышленниками",
    accent: "#FF4500",
  },
  {
    icon: "🔰",
    title: "Новички",
    desc: "Мотошкола с нуля, безопасная площадка, опытные инструкторы — идеальный старт",
    accent: "#27AE60",
  },
  {
    icon: "🇯🇵",
    title: "Фанаты JDM",
    desc: "Музей культовых японских авто, атмосфера настоящей JDM культуры",
    accent: "#9B59B6",
  },
  {
    icon: "🏁",
    title: "Любители драйва",
    desc: "Дрифт-картинг, адреналин контролируемого заноса на закрытой трассе",
    accent: "#E74C3C",
  },

  {
    icon: "📸",
    title: "Контент-мейкеры",
    desc: "Уникальные локации для съёмок: неон, машины, атмосфера — идеальный фон",
    accent: "#2980B9",
  },
];

export default function AudienceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="audience" ref={ref} className="relative py-24 md:py-32 bg-[#080808] overflow-hidden">
      <div
        className="absolute top-0 right-0 text-[20rem] leading-none text-white/[0.02] pointer-events-none select-none"
        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
      >
        05
      </div>

      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-px bg-[#FF4500]" />
          <span
            className="text-[#FF4500] text-xs font-semibold tracking-[0.3em] uppercase"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Для кого
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em" }}
          className="text-white text-[clamp(2rem,4vw,3.5rem)] leading-none mb-4"
        >
          Узнай себя<br />
          <span className="text-[#FF4500]">в этом месте</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#8A8A8A] text-base max-w-xl mb-16"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Автомобильный комплекс создан для всех, кто живёт автомобильной культурой — независимо от уровня и цели
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {audiences.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="group relative p-6 border border-white/5 bg-[#111] hover:border-white/10 transition-all duration-400 hover:-translate-y-1"
              style={{
                clipPath: "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))",
              }}
            >
              {/* Icon */}
              <div className="text-3xl mb-4">{a.icon}</div>

              {/* Title */}
              <h3
                className="text-white text-xl mb-2"
                style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em" }}
              >
                {a.title}
              </h3>

              {/* Description */}
              <p
                className="text-[#8A8A8A] text-sm leading-relaxed"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {a.desc}
              </p>

              {/* Bottom line */}
              <div
                className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
                style={{ background: `linear-gradient(90deg, ${a.accent}, transparent)` }}
              />

              {/* Corner dot */}
              <div
                className="absolute top-3 right-3 w-1.5 h-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: a.accent }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
