import type { FC } from "react";
import Section from "./Section";
import { data, STATS } from "../data";

const About: FC = () => (
  <Section
    id="About"
    style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}
  >
    <div className="fade-up" style={{ animationDelay: "0s" }}>
      <div
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 12,
          color: "#E8FF47",
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
          fontSize: "clamp(42px, 7vw, 88px)",
          lineHeight: 1.02,
          marginBottom: 8,
          letterSpacing: "-0.02em",
        }}
      >
        Muhammet
        <br />
        <span style={{ color: "#E8FF47" }}>Sefa</span> Kapısız
      </h1>
    </div>

    <div className="fade-up" style={{ animationDelay: "0.2s" }}>
      <div
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 15,
          color: "rgba(255,255,255,0.45)",
          marginBottom: 32,
          letterSpacing: "0.02em",
        }}
      >
        Backend Engineer & Team Lead — Istanbul, Turkey
      </div>
    </div>

    <div className="fade-up" style={{ animationDelay: "0.3s" }}>
      <p
        style={{
          fontSize: 16,
          lineHeight: 1.75,
          color: "rgba(255,255,255,0.65)",
          maxWidth: 620,
          marginBottom: 40,
        }}
      >
        {data.profile}
      </p>
    </div>

    <div
      className="fade-up"
      style={{ animationDelay: "0.4s", display: "flex", gap: 16, flexWrap: "wrap" }}
    >
      <a
        href={`mailto:${data.email}`}
        style={{
          padding: "12px 28px",
          background: "#E8FF47",
          color: "#0B0C0F",
          borderRadius: 4,
          fontSize: 13,
          fontWeight: 600,
          textDecoration: "none",
          letterSpacing: "0.04em",
          fontFamily: "'DM Mono', monospace",
        }}
      >
        GET IN TOUCH
      </a>
      <a
        href={data.github}
        target="_blank"
        rel="noreferrer"
        style={{
          padding: "12px 28px",
          border: "1px solid rgba(255,255,255,0.15)",
          color: "rgba(255,255,255,0.7)",
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
        gap: 0,
        marginTop: 72,
        borderTop: "1px solid rgba(255,255,255,0.07)",
        paddingTop: 32,
      }}
    >
      {STATS.map((s, i) => (
        <div
          key={i}
          style={{
            flex: 1,
            paddingRight: 24,
            borderRight: i < STATS.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
            paddingLeft: i > 0 ? 24 : 0,
          }}
        >
          <div
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 32,
              fontWeight: 800,
              color: "#E8FF47",
              lineHeight: 1,
              marginBottom: 6,
            }}
          >
            {s.num}
          </div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", letterSpacing: "0.04em" }}>
            {s.label}
          </div>
        </div>
      ))}
    </div>
  </Section>
);

export default About;
