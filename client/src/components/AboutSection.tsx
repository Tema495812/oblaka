/* Design: Chrome & Asphalt — asymmetric layout, large number, orange accents */
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "17.000", unit: "м²", label: "общая площадь" },
  { value: "5", unit: "+", label: "уникальных зон" },
  { value: "−3", unit: "", label: "этаж под землёй" },
  { value: "1", unit: "", label: "место для всего" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="relative py-24 md:py-32 bg-[#080808] overflow-hidden">
      {/* Background number */}
      <div
        className="absolute top-0 right-0 text-[20rem] leading-none text-white/[0.02] pointer-events-none select-none"
        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
      >
        01
      </div>

      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="w-8 h-px bg-[#FF4500]" />
          <span
            className="text-[#FF4500] text-xs font-semibold tracking-[0.3em] uppercase"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            О пространстве
          </span>
        </motion.div>

        {/* Neon divider */}
        <div className="neon-line mb-16" />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em" }}
              className="text-white text-[clamp(2.5rem,5vw,4.5rem)] leading-none mb-8"
            >
              Уникальный комплекс,<br />
              <span className="text-[#FF4500]">которого нет</span><br />
              больше нигде
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-[#8A8A8A] text-base leading-relaxed mb-6"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Уникальный мультиформатный автомобильный комплекс площадью 17.000 м², объединяющий обучение, развлечения и автомобильную инфраструктуру в одном пространстве.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-[#8A8A8A] text-base leading-relaxed"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Расположенный на −3 уровне ТЦ «Облака» у метро Домодедовская, комплекс создан для тех, кто живёт автомобильной культурой — от новичков до профессионалов.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex items-center gap-3"
            >
              <div className="w-12 h-px bg-[#FF4500]" />
              <span
                className="text-white/40 text-sm tracking-widest uppercase"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Пространство, где автомобиль — это стиль жизни
              </span>
            </motion.div>
          </div>

          {/* Right: stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="zone-card p-6"
              >
                <div
                  className="text-[#FF4500] leading-none mb-2"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2rem,4vw,3rem)", letterSpacing: "0.04em" }}
                >
                  {stat.value}
                  <span className="text-[#FF4500]/60 text-2xl">{stat.unit}</span>
                </div>
                <div
                  className="text-[#8A8A8A] text-xs uppercase tracking-widest"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
