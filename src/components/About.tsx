import type { FC } from "react";
import Section from "./Section";
import { data, STATS } from "../data";

interface AboutProps {
  onContact?: () => void;
}

const About: FC<AboutProps> = ({ onContact }) => (
  <Section
    id="About"
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }}
  >
    <div className="fade-up" style={{ animationDelay: "0s" }}>
      <div
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 12,
          color: "#BD00FF",
          letterSpacing: "0.16em",
          marginBottom: 20,
        }}
      >
        ⬡ AVAILABLE FOR NEW OPPORTUNITIES
      </div>
    </div>

    <div className="fade-up" style={{ animationDelay: "0.1s" }}>
      <h1
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: "clamp(32px, 8vw, 88px)",
          lineHeight: 1.02,
          marginBottom: 8,
          letterSpacing: "-0.02em",
          wordBreak: "break-word",
          color: "var(--text-primary)",
        }}
      >
        Muhammet
        <br />
        <span style={{ color: "#BD00FF" }}>Sefa</span> Kapısız
      </h1>
    </div>

    <div className="fade-up" style={{ animationDelay: "0.2s" }}>
      <div
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "clamp(13px, 3.5vw, 15px)",
          color: "var(--text-dim)",
          marginBottom: 32,
          letterSpacing: "0.02em",
        }}
      >
        Senior Backend Engineer — Istanbul, Turkey
      </div>
    </div>

    <div className="fade-up" style={{ animationDelay: "0.3s" }}>
      <p
        style={{
          fontSize: 16,
          lineHeight: 1.75,
          color: "var(--text-secondary)",
          maxWidth: 620,
          marginBottom: 40,
        }}
      >
        {data.profile}
      </p>
    </div>

    <div
      className="fade-up"
      style={{
        animationDelay: "0.4s",
        display: "flex",
        gap: 16,
        flexWrap: "wrap",
      }}
    >
      <button
        onClick={onContact}
        className="btn-primary"
        style={{
          padding: "12px 28px",
          background: "#BD00FF",
          color: "var(--bg-main)",
          border: "none",
          borderRadius: 4,
          fontSize: 13,
          fontWeight: 600,
          cursor: "pointer",
          letterSpacing: "0.04em",
          fontFamily: "'DM Mono', monospace",
        }}
      >
        GET IN TOUCH
      </button>
      <a
        href={data.github}
        target="_blank"
        rel="noreferrer"
        className="btn-secondary"
        style={{
          padding: "12px 28px",
          border: "1px solid var(--border-color)",
          color: "var(--text-secondary)",
          borderRadius: 4,
          fontSize: 13,
          fontWeight: 500,
          textDecoration: "none",
          letterSpacing: "0.04em",
          fontFamily: "'DM Mono', monospace",
        }}
      >
        GITHUB ↗
      </a>
    </div>

    <div
      className="fade-up"
      style={{
        animationDelay: "0.5s",
        display: "flex",
        gap: 24,
        marginTop: 72,
        borderTop: "1px solid var(--border-color)",
        paddingTop: 48,
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {STATS.map((s, i) => (
        <div
          key={i}
          style={{
            flex: "1 1 160px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            padding: "0 12px",
            marginBottom: 32,
          }}
        >
          <div
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(28px, 5vw, 36px)",
              fontWeight: 800,
              color: "#BD00FF",
              lineHeight: 1,
              marginBottom: 10,
            }}
          >
            {s.num}
          </div>
          <div
            style={{
              fontSize: 11,
              color: "var(--text-dim)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontFamily: "'DM Mono', monospace",
            }}
          >
            {s.label}
          </div>
        </div>
      ))}
    </div>
  </Section>
);

export default About;
