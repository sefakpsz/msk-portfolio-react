import type { CSSProperties, FC, ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  style?: CSSProperties;
}

const Section: FC<SectionProps> = ({ id, children, style }) => (
  <section
    id={id}
    style={{
      minHeight: "100vh",
      padding: "100px 0 60px",
      ...style,
    }}
  >
    {children}
  </section>
);

export default Section;
