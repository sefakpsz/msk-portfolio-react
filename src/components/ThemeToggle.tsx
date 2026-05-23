import { type FC } from "react";
import { useTheme } from "../ThemeContext";

const ThemeToggle: FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border-color)",
        borderRadius: "50%",
        width: 40,
        height: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        color: "var(--accent-color)",
        fontSize: 20,
      }}
      className="theme-toggle-btn"
      aria-label="Toggle Theme"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          transition: "transform 0.5s cubic-bezier(0.6, -0.28, 0.735, 0.045)",
          transform: theme === "dark" ? "translateY(20px)" : "translateY(-20px)",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <i className="ti ti-sun" style={{ height: 20, display: "flex", alignItems: "center" }} />
        <i className="ti ti-moon" style={{ height: 20, display: "flex", alignItems: "center" }} />
      </div>
    </button>
  );
};

export default ThemeToggle;
