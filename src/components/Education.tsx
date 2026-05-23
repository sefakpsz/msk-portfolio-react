import type { FC } from "react";
import Section from "./Section";
import SectionLabel from "./SectionLabel";
import { data } from "../data";

const Education: FC = () => (
  <Section id="Education">
    <SectionLabel>04 — Education</SectionLabel>

    <div
      style={{
        border: "1px solid var(--border-color)",
        borderRadius: 8,
        padding: "32px",
        background: "var(--bg-card)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 20,
      }}
    >
      <div>
        <div
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: 22,
            marginBottom: 6,
            color: "var(--text-primary)",
          }}
        >
          {data.education.degree}
        </div>
        <div style={{ fontSize: 15, color: "#BD00FF", marginBottom: 4 }}>
          {data.education.school}
        </div>
        <div style={{ fontSize: 13, color: "var(--text-dim)" }}>
          {data.education.location}
        </div>
      </div>
      <div
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 13,
          color: "var(--text-dim)",
        }}
      >
        {data.education.period}
      </div>
    </div>

    <div style={{ marginTop: 32 }}>
      <div
        style={{
          fontSize: 11,
          fontFamily: "'DM Mono', monospace",
          color: "#BD00FF",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          marginBottom: 16,
        }}
      >
        Languages
      </div>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        {data.languages.map((lang, i) => (
          <div
            key={i}
            style={{
              padding: "10px 20px",
              border: "1px solid var(--border-color)",
              borderRadius: 6,
              fontSize: 14,
              color: "var(--text-secondary)",
            }}
          >
            {lang}
          </div>
        ))}
      </div>
    </div>
  </Section>
);

export default Education;
