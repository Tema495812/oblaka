/* Design: Chrome & Asphalt — masonry-style gallery with hover effects */
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663494442443/knxjAHbzRkvMbdpxrjKPQC/hero-bg-SUwn5Q5mYntigRcaeVKNyd.webp";
const DRIFT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663494442443/knxjAHbzRkvMbdpxrjKPQC/drift-kart-aKTF2ZtTgJUbpyBpTxwv6k.webp";
const JDM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663494442443/knxjAHbzRkvMbdpxrjKPQC/jdm-museum-XGqBpsesNP4vfADv2k5MqB.webp";
const MOTO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663494442443/knxjAHbzRkvMbdpxrjKPQC/moto-school-WbR7GGSjrStH5Md25ESBmh.webp";
const DETAIL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663494442443/knxjAHbzRkvMbdpxrjKPQC/detailing-studio-MKYkztHyPiMWbjDKRRU2NN.webp";

const gallery = [
  { src: HERO_BG, label: "Общий вид", span: "col-span-2 row-span-2" },
  { src: JDM_IMG, label: "Музей JDM", span: "col-span-1 row-span-1" },
  { src: DRIFT_IMG, label: "Дрифт-картинг", span: "col-span-1 row-span-1" },
  { src: MOTO_IMG, label: "Мотошкола", span: "col-span-1 row-span-1" },
  { src: DETAIL_IMG, label: "Детейлинг", span: "col-span-1 row-span-1" },
];

export default function GallerySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="gallery" ref={ref} className="relative py-24 md:py-32 bg-[#0A0A0A] overflow-hidden">
      <div
        className="absolute top-0 right-0 text-[20rem] leading-none text-white/[0.02] pointer-events-none select-none"
        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
      >
        04
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
            Атмосфера
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12"
        >
          <h2
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em" }}
            className="text-white text-[clamp(2rem,4vw,3.5rem)] leading-none"
          >
            Пространство, где<br />
            <span className="text-[#FF4500]">Мототехника и автомобиль — стиль жизни</span>
          </h2>
          <p
            className="text-[#8A8A8A] text-sm max-w-xs leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Машины, свет, люди, процесс — всё это создаёт уникальную атмосферу подземного автомира
          </p>
        </motion.div>

        {/* Gallery grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[220px]"
        >
          {gallery.map((item, i) => (
            <div
              key={i}
              className={`relative overflow-hidden group cursor-pointer ${item.span}`}
              style={{ clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))" }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-[#080808] transition-opacity duration-400 ${hovered === i ? "opacity-30" : "opacity-50"}`} />
              <div className={`absolute inset-0 flex items-end p-4 transition-opacity duration-300 ${hovered === i ? "opacity-100" : "opacity-0"}`}>
                <span
                  className="text-white text-sm font-semibold tracking-wider uppercase"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {item.label}
                </span>
              </div>
              {/* Orange corner accent on hover */}
              <div
                className="absolute top-0 left-0 w-8 h-0.5 bg-[#FF4500] transition-all duration-300"
                style={{ width: hovered === i ? "2rem" : "0" }}
              />
              <div
                className="absolute top-0 left-0 h-8 w-0.5 bg-[#FF4500] transition-all duration-300"
                style={{ height: hovered === i ? "2rem" : "0" }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
