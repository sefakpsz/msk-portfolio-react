import type { FC } from "react";
import { NAV_ITEMS, type NavItem } from "../data";
import ThemeToggle from "./ThemeToggle";

interface NavbarProps {
  active: NavItem;
  scrolled: boolean;
  onNav: (id: NavItem) => void;
}

const Navbar: FC<NavbarProps> = ({ active, scrolled, onNav }) => (
  <nav
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: "0 5vw",
      height: 64,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: scrolled ? "var(--bg-secondary)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? "1px solid var(--border-color)" : "none",
      transition: "all 0.3s ease",
    }}
  >
    <div
      style={{
        fontFamily: "'Syne', sans-serif",
        fontWeight: 800,
        fontSize: 15,
        letterSpacing: "0.04em",
        color: "#BD00FF",
        cursor: "pointer",
      }}
      onClick={() => onNav("About")}
    >
      MSK
    </div>

    <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
      <div 
        className="nav-container"
        style={{ display: "flex", gap: 32, alignItems: "center", maxWidth: "calc(100vw - 180px)" }}
      >
        {NAV_ITEMS.map((n) => (
          <span
            key={n}
            className="nav-link"
            onClick={() => onNav(n)}
            style={{
              fontSize: 13,
              fontFamily: "'DM Mono', monospace",
              color: active === n ? "#BD00FF" : "var(--text-dim)",
              letterSpacing: "0.04em",
              cursor: "pointer",
            }}
          >
            {n}
          </span>
        ))}
      </div>
      <ThemeToggle />
    </div>
  </nav>
);

export default Navbar;
