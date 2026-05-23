import type { FC, ReactNode } from "react";

interface SectionLabelProps {
  children: ReactNode;
}

const SectionLabel: FC<SectionLabelProps> = ({ children }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 16,
      marginBottom: 48,
    }}
  >
    <span
      style={{
        fontSize: 11,
        letterSpacing: "0.18em",
        color: "#BD00FF",
        textTransform: "uppercase",
        fontFamily: "'DM Mono', monospace",
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </span>
    <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.08)" }} />
  </div>
);

export default SectionLabel;
