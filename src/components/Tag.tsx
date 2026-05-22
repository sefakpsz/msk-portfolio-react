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
      background: accent ? "rgba(232,255,71,0.15)" : "rgba(255,255,255,0.07)",
      color: accent ? "#E8FF47" : "rgba(255,255,255,0.6)",
      border: accent
        ? "1px solid rgba(232,255,71,0.3)"
        : "1px solid rgba(255,255,255,0.1)",
      whiteSpace: "nowrap",
      letterSpacing: "0.02em",
    }}
  >
    {children}
  </span>
);

export default Tag;
