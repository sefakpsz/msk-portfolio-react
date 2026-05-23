import type { FC } from "react";
import Section from "./Section";
import SectionLabel from "./SectionLabel";
import { data } from "../data";

const Skills: FC = () => (
  <Section id="Skills">
    <SectionLabel>02 — Skills</SectionLabel>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: 20,
      }}
    >
      {data.skills.map((cat, i) => (
        <div
          key={i}
          style={{
            border: "1px solid var(--border-color)",
            borderRadius: 8,
            padding: "24px 24px 20px",
            background: "var(--bg-card)",
          }}
        >
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
            {cat.category}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
            {cat.items.map((item, j) => (
              <span
                key={j}
                className="skill-pill"
                style={{
                  fontSize: 12,
                  padding: "5px 11px",
                  borderRadius: 4,
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-color)",
                  color: "var(--text-secondary)",
                  cursor: "default",
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </Section>
);

export default Skills;
