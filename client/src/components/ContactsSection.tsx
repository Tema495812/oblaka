/* Design: Chrome & Asphalt — dark contact form, social links, orange CTA */
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function ContactsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const socials = [
    { label: "Telegram", icon: "✈️", href: "#" },
    { label: "Instagram", icon: "📸", href: "#" },
    { label: "ВКонтакте", icon: "💬", href: "#" },
    { label: "YouTube", icon: "▶️", href: "#" },
  ];

  return (
    <section id="contacts" ref={ref} className="relative py-24 md:py-32 bg-[#080808] overflow-hidden">
      {/* Orange glow top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF4500]/40 to-transparent" />

      <div
        className="absolute top-0 right-0 text-[20rem] leading-none text-white/[0.02] pointer-events-none select-none"
        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
      >
        07
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
            Контакты
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em" }}
          className="text-white text-[clamp(2rem,4vw,3.5rem)] leading-none mb-16"
        >
          Запланируй визит<br />
          <span className="text-[#FF4500]">или свяжись с нами</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {sent ? (
              <div className="flex flex-col items-start gap-4 py-12">
                <div className="text-5xl">✅</div>
                <h3
                  className="text-white text-3xl"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
                >
                  Заявка отправлена!
                </h3>
                <p
                  className="text-[#8A8A8A] text-sm"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Мы свяжемся с вами в ближайшее время
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="text-[#FF4500] text-sm underline mt-2"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Отправить ещё одну заявку
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label
                    className="text-[#8A8A8A] text-xs uppercase tracking-widest block mb-2"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Иван Петров"
                    className="w-full bg-[#111] border border-white/10 text-white placeholder-white/20 px-4 py-3 text-sm focus:outline-none focus:border-[#FF4500]/50 transition-colors"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  />
                </div>
                <div>
                  <label
                    className="text-[#8A8A8A] text-xs uppercase tracking-widest block mb-2"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Телефон
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+7 (999) 000-00-00"
                    className="w-full bg-[#111] border border-white/10 text-white placeholder-white/20 px-4 py-3 text-sm focus:outline-none focus:border-[#FF4500]/50 transition-colors"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  />
                </div>
                <div>
                  <label
                    className="text-[#8A8A8A] text-xs uppercase tracking-widest block mb-2"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Сообщение (необязательно)
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Что вас интересует?"
                    rows={4}
                    className="w-full bg-[#111] border border-white/10 text-white placeholder-white/20 px-4 py-3 text-sm focus:outline-none focus:border-[#FF4500]/50 transition-colors resize-none"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  />
                </div>
                <button type="submit" className="btn-orange w-fit mt-2">
                  Запланировать визит
                </button>
              </form>
            )}
          </motion.div>

          {/* Right: contacts info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col gap-8"
          >
            {/* Phone */}
            <div>
              <div
                className="text-[#8A8A8A] text-xs uppercase tracking-widest mb-2"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Телефон
              </div>
              <a
                href="tel:+74951234567"
                className="text-white text-2xl font-semibold hover:text-[#FF4500] transition-colors"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                +7 (495) 123-45-67
              </a>
            </div>

            {/* Email */}
            <div>
              <div
                className="text-[#8A8A8A] text-xs uppercase tracking-widest mb-2"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Email
              </div>
              <a
                href="mailto:info@autocomplex.ru"
                className="text-white text-lg hover:text-[#FF4500] transition-colors"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                info@autocomplex.ru
              </a>
            </div>

            {/* Address */}
            <div>
              <div
                className="text-[#8A8A8A] text-xs uppercase tracking-widest mb-2"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Адрес
              </div>
              <p
                className="text-white text-base leading-relaxed"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                ТЦ «Облака», −3 уровень<br />
                <span className="text-[#8A8A8A] text-sm">м. Домодедовская, Москва</span>
              </p>
            </div>

            {/* Socials */}
            <div>
              <div
                className="text-[#8A8A8A] text-xs uppercase tracking-widest mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Социальные сети
              </div>
              <div className="flex flex-wrap gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="flex items-center gap-2 px-4 py-2 bg-[#111] border border-white/5 hover:border-[#FF4500]/30 hover:text-[#FF4500] text-white/60 text-sm transition-all duration-300"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
                    }}
                  >
                    <span>{s.icon}</span>
                    <span>{s.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
