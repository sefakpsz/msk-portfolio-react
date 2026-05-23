import type { FC } from "react";
import Section from "./Section";
import SectionLabel from "./SectionLabel";
import Tag from "./Tag";
import { data } from "../data";

const Experience: FC = () => (
  <Section id="Experience">
    <SectionLabel>03 — Experience</SectionLabel>
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {data.experience.map((exp, i) => (
        <div
          key={i}
          className="exp-card"
          style={{
            border: "1px solid var(--border-color)",
            borderRadius: 8,
            padding: "28px 28px 24px",
            background: "var(--bg-card)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: 10,
              marginBottom: 18,
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  fontSize: 18,
                  color: "var(--text-primary)",
                  marginBottom: 4,
                }}
              >
                {exp.role}
              </div>
              <div style={{ fontSize: 14, color: "var(--text-dim)" }}>
                <span style={{ color: "#BD00FF", fontWeight: 500 }}>{exp.company}</span>
                {" · "}
                {exp.domain}
                {" · "}
                {exp.location}
              </div>
            </div>
            <div
              style={{
                fontSize: 12,
                fontFamily: "'DM Mono', monospace",
                color: "var(--text-dim)",
                whiteSpace: "nowrap",
                paddingTop: 2,
              }}
            >
              {exp.period}
            </div>
          </div>

          <ul style={{ listStyle: "none", marginBottom: 18 }}>
            {exp.highlights.map((h, j) => (
              <li
                key={j}
                style={{
                  fontSize: 13.5,
                  color: "var(--text-secondary)",
                  lineHeight: 1.65,
                  paddingLeft: 16,
                  marginBottom: 5,
                  position: "relative",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "0.55em",
                    width: 4,
                    height: 4,
                    borderRadius: "50%",
                    background: "#BD00FF",
                    opacity: 0.5,
                  }}
                />
                {h}
              </li>
            ))}
          </ul>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
            {exp.stack.map((t, j) => (
              <Tag key={j} accent={j === 0}>
                {t}
              </Tag>
            ))}
          </div>
        </div>
      ))}
    </div>
  </Section>
);

export default Experience;
