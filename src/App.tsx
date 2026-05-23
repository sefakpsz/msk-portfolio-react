import { useState, useEffect, useRef, type FC } from "react";
import { NAV_ITEMS, type NavItem } from "./data";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import ContactModal from "./components/ContactModal";
import { useTheme } from "./ThemeContext";

const GlobalStyles: FC = () => {
  const { theme } = useTheme();
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&family=Syne:wght@700;800&display=swap');
      
      :root {
        --bg-main: #0B0C0F;
        --bg-secondary: #16171D;
        --bg-card: rgba(255, 255, 255, 0.03);
        --text-primary: #F0F0EC;
        --text-secondary: rgba(255, 255, 255, 0.65);
        --text-dim: rgba(255, 255, 255, 0.45);
        --accent-color: #BD00FF;
        --border-color: rgba(255, 255, 255, 0.07);
        --grid-color: rgba(255, 255, 255, 0.025);
        --btn-text: #0B0C0F;
      }

      [data-theme='light'] {
        --bg-main: #FBFBFA;
        --bg-secondary: #F0F0F0;
        --bg-card: rgba(0, 0, 0, 0.03);
        --text-primary: #121212;
        --text-secondary: rgba(0, 0, 0, 0.7);
        --text-dim: rgba(0, 0, 0, 0.5);
        --accent-color: #BD00FF;
        --border-color: rgba(0, 0, 0, 0.08);
        --grid-color: rgba(0, 0, 0, 0.03);
        --btn-text: #FFFFFF;
      }

      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      body { background: var(--bg-main); color: var(--text-primary); transition: background 0.4s ease, color 0.4s ease; }
      html { scroll-behavior: smooth; }
      ::-webkit-scrollbar { width: 4px; }
      ::-webkit-scrollbar-track { background: var(--bg-main); }
      ::-webkit-scrollbar-thumb { background: var(--accent-color); border-radius: 2px; }
      .exp-card { transition: border-color 0.3s, background 0.3s; }
      .exp-card:hover { border-color: rgba(189,0,255,0.25) !important; background: rgba(189,0,255,0.03) !important; }
      .nav-link { transition: color 0.2s; cursor: pointer; }
      .nav-link:hover { color: var(--accent-color) !important; }
      .social-link { transition: color 0.2s, transform 0.2s; display: flex !important; }
      .social-link:hover { color: var(--accent-color) !important; transform: translateX(4px); }
      .skill-pill { transition: background 0.2s, border-color 0.2s; }
      .skill-pill:hover { background: rgba(189,0,255,0.12) !important; border-color: rgba(189,0,255,0.4) !important; }
      @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
      .fade-up { animation: fadeUp 0.7s ease forwards; }
      
      @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      @keyframes modalIn { 
        from { opacity: 0; transform: scale(0.9) translateY(10px); } 
        to { opacity: 1; transform: scale(1) translateY(0); } 
      }
      
      .modal-backdrop { animation: fadeIn 0.3s ease-out forwards; }
      .modal-content { animation: modalIn 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
      
      @keyframes fadeOut { from { opacity: 1; } to { opacity: 0; } }
      @keyframes modalOut { 
        from { opacity: 1; transform: scale(1) translateY(0); } 
        to { opacity: 0; transform: scale(0.95) translateY(10px); } 
      }
      
      .modal-backdrop.closing { animation: fadeOut 0.25s ease-in forwards; }
      .modal-content.closing { animation: modalOut 0.2s ease-in forwards; }

      .cursor-glow { pointer-events: none; position: fixed; border-radius: 50%; mix-blend-mode: ${theme === "dark" ? "screen" : "multiply"}; z-index: 9999; transform: translate(-50%, -50%); opacity: ${theme === "dark" ? 1 : 0.4}; transition: mix-blend-mode 0.4s ease, opacity 0.4s ease; }
      @media (max-width: 768px) {
        .cursor-glow { display: none; }
        .nav-container { overflow-x: auto; scrollbar-width: none; -ms-overflow-style: none; }
        .nav-container::-webkit-scrollbar { display: none; }
      }
      .btn-primary { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); cursor: pointer; }
      .btn-primary:hover { 
        transform: translateY(-2px); 
        box-shadow: 0 0 20px rgba(189,0,255,0.4); 
        filter: brightness(1.1);
      }
      .btn-primary:active { transform: translateY(0); }

      .btn-secondary { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); cursor: pointer; }
      .btn-secondary:hover { 
        transform: translateY(-2px); 
        background: var(--bg-card) !important;
        border-color: rgba(189,0,255,0.5) !important;
        box-shadow: 0 0 20px rgba(189,0,255,0.15);
        color: var(--text-primary) !important;
      }
      .btn-secondary:active { transform: translateY(0); }

      .modal-link:hover { 
        background: rgba(189,0,255,0.06) !important; 
        border-color: rgba(189,0,255,0.2) !important; 
        transform: scale(1.02);
      }
      .modal-social-link:hover {
        background: rgba(189,0,255,0.1) !important;
        border-color: rgba(189,0,255,0.3) !important;
        color: var(--accent-color) !important;
        transform: translateY(-3px);
      }
      .theme-toggle-btn:hover {
        transform: scale(1.1);
        border-color: var(--accent-color) !important;
        box-shadow: 0 0 15px rgba(189,0,255,0.2);
      }
    `}</style>
  );
};

const App: FC = () => {
  const { theme } = useTheme();
  const [active, setActive] = useState<NavItem>("About");
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number }>({ x: -200, y: -200 });
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
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
        background: "var(--bg-main)",
        color: "var(--text-primary)",
        fontFamily: "'DM Sans', sans-serif",
        minHeight: "100vh",
        overflowX: "hidden",
        transition: "background 0.4s ease, color 0.4s ease",
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
          background: `radial-gradient(circle, ${theme === "dark" ? "rgba(189,0,255,0.06)" : "rgba(189,0,255,0.1)"} 0%, transparent 70%)`,
        }}
      />

      {/* Background grid */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage: `
            linear-gradient(var(--grid-color) 1px, transparent 1px),
            linear-gradient(90deg, var(--grid-color) 1px, transparent 1px)
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
        <About onContact={() => setIsModalOpen(true)} />
        <Skills />
        <Experience />
        <Education />
        <Contact />

        <footer
          style={{
            borderTop: "1px solid var(--border-color)",
            padding: "24px 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 12,
            color: "var(--text-dim)",
            fontFamily: "'DM Mono', monospace",
          }}
        >
          <span>© 2026 Muhammet Sefa Kapısız</span>
          <span>Istanbul, Turkey</span>
        </footer>
      </div>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default App;
