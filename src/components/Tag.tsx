import type { FC, ReactNode } from "react";

interface TagProps {
  children: ReactNode;
  accent?: boolean;
}

const Tag: FC<TagProps> = ({ children, accent = false }) => (
  <span
    style={{
      fontSize: 11,
      padding: "3px 9px",
      borderRadius: 20,
      background: accent ? "rgba(189,0,255,0.15)" : "var(--bg-card)",
      color: accent ? "#BD00FF" : "var(--text-secondary)",
      border: accent
        ? "1px solid rgba(189,0,255,0.3)"
        : "1px solid var(--border-color)",
      whiteSpace: "nowrap",
      letterSpacing: "0.02em",
    }}
  >
    {children}
  </span>
);

export default Tag;
