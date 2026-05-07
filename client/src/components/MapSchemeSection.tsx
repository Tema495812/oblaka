/* Design: Chrome & Asphalt — stylized floor plan with orange highlights */
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const zones = [
  { id: 1, label: "Мотошкола", color: "#FF4500", x: 8, y: 10, w: 28, h: 35, icon: "🏍" },
  { id: 2, label: "Музей JDM", color: "#9B59B6", x: 40, y: 10, w: 30, h: 35, icon: "🇯🇵" },
  { id: 3, label: "Дрифт-картинг", color: "#E74C3C", x: 74, y: 10, w: 22, h: 55, icon: "🏁" },
  { id: 4, label: "Детейлинг", color: "#27AE60", x: 8, y: 52, w: 30, h: 30, icon: "✨" },
  { id: 5, label: "Мотосалон", color: "#2980B9", x: 40, y: 52, w: 56, h: 30, icon: "🏍" },
];

export default function MapSchemeSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeZone, setActiveZone] = useState<number | null>(null);

  return (
    <section id="scheme" ref={ref} className="relative py-24 bg-[#0A0A0A] overflow-hidden">
      <div
        className="absolute top-0 right-0 text-[20rem] leading-none text-white/[0.02] pointer-events-none select-none"
        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
      >
        02
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
            Схема комплекса
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em" }}
          className="text-white text-[clamp(2rem,4vw,3.5rem)] leading-none mb-12"
        >
          Карта пространства<br />
          <span className="text-[#FF4500]">−3 уровень</span>
        </motion.h2>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* SVG Floor Plan */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="relative bg-[#111] border border-white/10 p-4"
              style={{ clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))" }}>
              {/* Floor plan label */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-[#FF4500] text-xs tracking-widest uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  ТЦ «Облака» · Этаж −3
                </span>
                <span className="text-white/20 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  17.000 м²
                </span>
              </div>

              {/* SVG plan */}
              <svg viewBox="0 0 100 100" className="w-full" style={{ aspectRatio: "16/9" }}>
                {/* Outer boundary */}
                <rect x="5" y="5" width="90" height="92" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
                {/* Grid lines */}
                {[20, 40, 60, 80].map(x => (
                  <line key={x} x1={x} y1="5" x2={x} y2="97" stroke="rgba(255,255,255,0.04)" strokeWidth="0.3" />
                ))}
                {[25, 50, 75].map(y => (
                  <line key={y} x1="5" y1={y} x2="95" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="0.3" />
                ))}

                {/* Zone blocks */}
                {zones.map((zone) => (
                  <g
                    key={zone.id}
                    onMouseEnter={() => setActiveZone(zone.id)}
                    onMouseLeave={() => setActiveZone(null)}
                    style={{ cursor: "pointer" }}
                  >
                    <rect
                      x={zone.x}
                      y={zone.y}
                      width={zone.w}
                      height={zone.h}
                      fill={activeZone === zone.id ? zone.color + "40" : zone.color + "18"}
                      stroke={activeZone === zone.id ? zone.color : zone.color + "60"}
                      strokeWidth={activeZone === zone.id ? "0.8" : "0.4"}
                      rx="0.5"
                      style={{ transition: "all 0.3s" }}
                    />
                    <text
                      x={zone.x + zone.w / 2}
                      y={zone.y + zone.h / 2 - 2}
                      textAnchor="middle"
                      fill={activeZone === zone.id ? "#fff" : zone.color}
                      fontSize="3"
                      fontFamily="Montserrat, sans-serif"
                      fontWeight="600"
                      style={{ transition: "all 0.3s" }}
                    >
                      {zone.label}
                    </text>
                    <text
                      x={zone.x + zone.w / 2}
                      y={zone.y + zone.h / 2 + 5}
                      textAnchor="middle"
                      fill={zone.color + "80"}
                      fontSize="5"
                    >
                      {zone.icon}
                    </text>
                  </g>
                ))}

                {/* Entry arrow */}
                <g>
                  <line x1="50" y1="97" x2="50" y2="90" stroke="#FF4500" strokeWidth="0.6" markerEnd="url(#arrow)" />
                  <text x="50" y="100" textAnchor="middle" fill="#FF4500" fontSize="2.5" fontFamily="Montserrat, sans-serif">ВХОД</text>
                </g>
                <defs>
                  <marker id="arrow" markerWidth="4" markerHeight="4" refX="2" refY="2" orient="auto">
                    <path d="M0,0 L0,4 L4,2 z" fill="#FF4500" />
                  </marker>
                </defs>
              </svg>
            </div>
          </motion.div>

          {/* Legend */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col gap-3"
          >
            <h3
              className="text-white/40 text-xs uppercase tracking-widest mb-2"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Зоны комплекса
            </h3>
            {zones.map((zone) => (
              <div
                key={zone.id}
                onMouseEnter={() => setActiveZone(zone.id)}
                onMouseLeave={() => setActiveZone(null)}
                className={`flex items-center gap-3 p-3 border transition-all duration-300 cursor-pointer ${
                  activeZone === zone.id
                    ? "border-[#FF4500]/40 bg-[#FF4500]/5"
                    : "border-white/5 bg-white/[0.02] hover:border-white/10"
                }`}
                style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))" }}
              >
                <div className="w-3 h-3 flex-shrink-0" style={{ background: zone.color }} />
                <span
                  className="text-sm text-white/70"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {zone.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
