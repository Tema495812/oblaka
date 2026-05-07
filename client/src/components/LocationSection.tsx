/* Design: Chrome & Asphalt — dark map embed, location details */
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapView } from "@/components/Map";

export default function LocationSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="location" ref={ref} className="relative py-24 md:py-32 bg-[#0A0A0A] overflow-hidden">
      <div
        className="absolute top-0 right-0 text-[20rem] leading-none text-white/[0.02] pointer-events-none select-none"
        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
      >
        06
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
            Локация
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em" }}
          className="text-white text-[clamp(2rem,4vw,3.5rem)] leading-none mb-12"
        >
          Как нас найти
        </motion.h2>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {[
              {
                icon: "🏢",
                label: "Торговый центр",
                value: "ТЦ «Облака»",
                sub: "Москва",
              },
              {
                icon: "🚇",
                label: "Метро",
                value: "Домодедовская",
                sub: "Выход 1, 5 минут пешком",
              },
              {
                icon: "🅿️",
                label: "Этаж",
                value: "−3 уровень",
                sub: "Подземный паркинг",
              },
              {
                icon: "🕐",
                label: "Режим работы",
                value: "Ежедневно",
                sub: "09:00 — 22:00",
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                className="flex items-start gap-4 p-4 bg-[#111] border border-white/5 hover:border-[#FF4500]/20 transition-colors"
                style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))" }}
              >
                <span className="text-2xl mt-0.5">{item.icon}</span>
                <div>
                  <div
                    className="text-[#8A8A8A] text-xs uppercase tracking-widest mb-1"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {item.label}
                  </div>
                  <div
                    className="text-white font-semibold text-base"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {item.value}
                  </div>
                  <div
                    className="text-[#8A8A8A] text-xs mt-0.5"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {item.sub}
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              onClick={() => document.querySelector("#contacts")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-orange mt-2 w-fit"
            >
              Запланировать визит
            </motion.button>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3 h-[450px] relative overflow-hidden"
            style={{ clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))" }}
          >
            <MapView
              onMapReady={(map) => {
                const center = { lat: 55.6122, lng: 37.6589 };
                map.setCenter(center);
                map.setZoom(16);
                new google.maps.Marker({
                  position: center,
                  map,
                  title: "Автомобильный комплекс — ТЦ Облака",
                  icon: {
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 10,
                    fillColor: "#FF4500",
                    fillOpacity: 1,
                    strokeColor: "#fff",
                    strokeWeight: 2,
                  },
                });
              }}
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
