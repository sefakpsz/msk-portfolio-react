import { useState, useEffect, useRef, type FC } from "react";
import { NAV_ITEMS, type NavItem } from "./data";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";

const GlobalStyles: FC = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&family=Syne:wght@700;800&display=swap');
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: #0B0C0F; }
    ::-webkit-scrollbar-thumb { background: #E8FF47; border-radius: 2px; }
    .exp-card { transition: border-color 0.3s, background 0.3s; }
    .exp-card:hover { border-color: rgba(232,255,71,0.25) !important; background: rgba(232,255,71,0.03) !important; }
    .nav-link { transition: color 0.2s; cursor: pointer; }
    .nav-link:hover { color: #E8FF47 !important; }
    .social-link { transition: color 0.2s, transform 0.2s; display: flex !important; }
    .social-link:hover { color: #E8FF47 !important; transform: translateX(4px); }
    .skill-pill { transition: background 0.2s, border-color 0.2s; }
    .skill-pill:hover { background: rgba(232,255,71,0.12) !important; border-color: rgba(232,255,71,0.4) !important; }
    @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
    .fade-up { animation: fadeUp 0.7s ease forwards; }
    .cursor-glow { pointer-events: none; position: fixed; border-radius: 50%; mix-blend-mode: screen; z-index: 9999; transform: translate(-50%, -50%); }
  `}</style>
);

const App: FC = () => {
  const [active, setActive] = useState<NavItem>("About");
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number }>({ x: -200, y: -200 });
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleScroll = (): void => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMouse = (e: MouseEvent): void =>
      setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((n) => document.getElementById(n)).filter(
      Boolean
    ) as HTMLElement[];

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id as NavItem);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((s) => observerRef.current?.observe(s));
    return () => observerRef.current?.disconnect();
  }, []);

  const scrollToSection = (id: NavItem): void => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      style={{
        background: "#0B0C0F",
        color: "#F0F0EC",
        fontFamily: "'DM Sans', sans-serif",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <GlobalStyles />

      {/* Cursor glow */}
      <div
        className="cursor-glow"
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
          width: 320,
          height: 320,
          background: "radial-gradient(circle, rgba(232,255,71,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Background grid */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <Navbar active={active} scrolled={scrolled} onNav={scrollToSection} />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          margin: "0 auto",
          maxWidth: "min(1100px, 92vw)",
        }}
      >
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contact />

        <footer
          style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            padding: "24px 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 12,
            color: "rgba(255,255,255,0.25)",
            fontFamily: "'DM Mono', monospace",
          }}
        >
          <span>© 2026 Muhammet Sefa Kapısız</span>
          <span>Istanbul, Turkey</span>
        </footer>
      </div>
    </div>
  );
};

export default App;
