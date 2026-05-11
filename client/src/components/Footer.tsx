/* Design: Chrome & Asphalt — minimal dark footer */
export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 py-8">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div
            className="w-6 h-6 bg-[#FF4500] flex items-center justify-center"
            style={{ clipPath: "polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 5px 100%, 0 calc(100% - 5px))" }}
          >
            <span className="text-white font-bold text-[9px] leading-none">AC</span>
          </div>
          <span
            className="text-white/40 text-sm"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.1em" }}
          >
            COMPLEX
          </span>
        </div>

        <p
          className="text-white/20 text-xs text-center"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          ТЦ «Облака», −3 уровень · м. Домодедовская · Москва
        </p>

        <p
          className="text-white/20 text-xs"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          © 2026 Авто-мото комплекс
        </p>
      </div>
    </footer>
  );
}
