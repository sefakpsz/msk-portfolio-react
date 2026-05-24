import type { FC } from "react";
import Section from "./Section";
import SectionLabel from "./SectionLabel";
import { data } from "../data";
import type { ContactLink } from "../types";

const contactLinks: ContactLink[] = [
  { label: "Email", value: data.email, href: `mailto:${data.email}` },
  {
    label: "Phone",
    value: data.phone,
    href: `tel:${data.phone.replace(/\s/g, "")}`,
  },
  { label: "GitHub", value: "github.com/sefakpsz", href: data.github },
  { label: "LinkedIn", value: "linkedin.com/in/sefakpsz", href: data.linkedin },
  { label: "Medium", value: "medium.com/@sefakpsz", href: data.medium },
];

const Contact: FC = () => (
  <Section id="Contact">
    <SectionLabel>05 — Contact</SectionLabel>
    <div style={{ maxWidth: 580 }}>
      <h2
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: "clamp(32px, 5vw, 56px)",
          lineHeight: 1.1,
          marginBottom: 20,
          letterSpacing: "-0.02em",
          color: "var(--text-primary)",
        }}
      >
        Let's build something <span style={{ color: "#BD00FF" }}>great</span>{" "}
        together.
      </h2>
      <p
        style={{
          fontSize: 15,
          color: "var(--text-dim)",
          marginBottom: 40,
          lineHeight: 1.7,
        }}
      >
        Open to backend engineering and team lead roles. Feel free to reach out
        via email or connect on LinkedIn.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {contactLinks.map((c, i) => (
          <a
            key={i}
            href={c.href}
            target="_blank"
            rel="noreferrer"
            className="social-link"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "16px 20px",
              border: "1px solid var(--border-color)",
              borderRadius: 6,
              textDecoration: "none",
              color: "var(--text-secondary)",
              background: "var(--bg-card)",
            }}
          >
            <span
              style={{
                fontSize: 11,
                fontFamily: "'DM Mono', monospace",
                color: "#BD00FF",
                letterSpacing: "0.1em",
              }}
            >
              {c.label}
            </span>
            <span style={{ fontSize: 14 }}>{c.value} ↗</span>
          </a>
        ))}
      </div>
    </div>
  </Section>
);

export default Contact;
