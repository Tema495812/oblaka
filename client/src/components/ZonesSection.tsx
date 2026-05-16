/* Design: Chrome & Asphalt — zone cards with angled clips, images, orange accents */
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const DRIFT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663494442443/knxjAHbzRkvMbdpxrjKPQC/drift-kart-aKTF2ZtTgJUbpyBpTxwv6k.webp";
const JDM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663494442443/knxjAHbzRkvMbdpxrjKPQC/jdm-museum-XGqBpsesNP4vfADv2k5MqB.webp";
const MOTO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663494442443/knxjAHbzRkvMbdpxrjKPQC/moto-school-WbR7GGSjrStH5Md25ESBmh.webp";
const DETAIL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663494442443/knxjAHbzRkvMbdpxrjKPQC/detailing-studio-MKYkztHyPiMWbjDKRRU2NN.webp";
const TAXI_IMG = "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80";
const MOTO_SALON_IMG = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80";

const zones = [
  {
    id: "moto-school",
    num: "01",
    icon: "🏍",
    title: "Мотошкола",
    subtitle: "Обучение с нуля",
    description: "Закрытая безопасная площадка для обучения езде на мотоцикле. Опытные инструкторы, программы для начинающих и продвинутых. Полный курс от теории до практики.",
    features: ["Обучение с нуля", "Закрытая площадка", "Опытные инструкторы" "Подготовка к сдаче экзамена"],
    image: MOTO_IMG,
    accent: "#FF4500",
  },
  {
    id: "jdm-museum",
    num: "02",
    icon: "🇯🇵",
    title: "Музей японских автомобилей",
    subtitle: "JDM культура",
    description: "Коллекция культовых японских автомобилей — Nissan Skyline GT-R, Toyota Supra, Mazda RX-7. Редкие экземпляры, история JDM культуры и атмосфера настоящего японского гаража.",
    features: ["Культовые JDM авто", "Редкие экземпляры", "История и культура"],
    image: JDM_IMG,
    accent: "#9B59B6",
  },
  {
    id: "drift-kart",
    num: "03",
    icon: "🏁",
    title: "Дрифт-картинг",
    subtitle: "Контролируемый занос",
    description: "Единственная в Москве трасса для дрифт-картинга внутри комплекса. Почувствуй контролируемый занос на специальных картах. Для новичков и опытных водителей.",
    features: ["Контролируемый занос", "Трасса внутри", "Для любого уровня"],
    image: DRIFT_IMG,
    accent: "#E74C3C",
  },
  {
    id: "detailing",
    num: "04",
    icon: "✨",
    title: "Студия детейлинга",
    subtitle: "Полный уход за авто",
    description: "Профессиональный уход за вашим автомобилем. Полировка кузова, химчистка салона, нанесение защитных покрытий. Ваш автомобиль выйдет как с завода.",
    features: ["Полировка кузова", "Химчистка салона", "Защитные покрытия"],
    image: DETAIL_IMG,
    accent: "#27AE60",
  },
  {
    id: "moto-salon",
    num: "05",
    icon: "🏍",
    title: "Мотосалон",
    subtitle: "Продажа техники",
    description: "Широкий выбор мотоциклов и мотоэкипировки. Профессиональные консультации по подбору техники. Тест-драйвы на площадке мотошколы.",
    features: ["Продажа техники", "Подбор и консультации", "Тест-драйвы"],
    image: MOTO_SALON_IMG,
    accent: "#2980B9",
  },
];

function ZoneCard({ zone, index }: { zone: typeof zones[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="zone-card group relative overflow-hidden"
      style={{
        borderColor: hovered ? zone.accent + "50" : "rgba(255,255,255,0.07)",
        boxShadow: hovered ? `0 0 40px ${zone.accent}20` : "none",
      }}
    >
      {/* Image */}
      {zone.image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={zone.image}
            alt={zone.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/20 to-transparent" />
          {/* Zone number overlay */}
          <div
            className="absolute top-3 left-3 text-5xl leading-none opacity-30"
            style={{ fontFamily: "'Bebas Neue', sans-serif", color: zone.accent }}
          >
            {zone.num}
          </div>
        </div>
      )}

      {/* No image placeholder */}
      {!zone.image && (
        <div
          className="h-32 flex items-center justify-center text-6xl"
          style={{ background: `linear-gradient(135deg, ${zone.accent}10, transparent)` }}
        >
          {zone.icon}
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        {/* Number + icon */}
        <div className="flex items-center justify-between mb-4">
          <span
            className="text-4xl leading-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif", color: zone.accent + "40", letterSpacing: "0.05em" }}
          >
            {zone.num}
          </span>
          <div
            className="w-8 h-8 flex items-center justify-center text-lg"
            style={{
              background: zone.accent + "20",
              clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))",
            }}
          >
            {zone.icon}
          </div>
        </div>

        {/* Title */}
        <h3
          className="text-white text-2xl leading-tight mb-1"
          style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em" }}
        >
          {zone.title}
        </h3>
        <p
          className="text-xs uppercase tracking-widest mb-4"
          style={{ color: zone.accent, fontFamily: "'Montserrat', sans-serif" }}
        >
          {zone.subtitle}
        </p>

        {/* Description */}
        <p
          className="text-[#8A8A8A] text-sm leading-relaxed mb-5"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {zone.description}
        </p>

        {/* Features */}
        <div className="flex flex-col gap-2">
          {zone.features.map((f) => (
            <div key={f} className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full" style={{ background: zone.accent }} />
              <span
                className="text-xs text-white/50"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {f}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom accent line */}
        <div
          className="absolute bottom-0 left-0 h-0.5 transition-all duration-500"
          style={{
            width: hovered ? "100%" : "0%",
            background: `linear-gradient(90deg, ${zone.accent}, transparent)`,
          }}
        />
      </div>
    </motion.div>
  );
}

export default function ZonesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="zones" ref={ref} className="relative py-24 md:py-32 bg-[#080808] overflow-hidden">
      <div
        className="absolute top-0 right-0 text-[20rem] leading-none text-white/[0.02] pointer-events-none select-none"
        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
      >
        03
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
            Зоны комплекса
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em" }}
          className="text-white text-[clamp(2rem,4vw,3.5rem)] leading-none mb-16"
        >
          Пять пространств —<br />
          <span className="text-[#FF4500]">одна территория</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {zones.map((zone, i) => (
            <ZoneCard key={zone.id} zone={zone} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
