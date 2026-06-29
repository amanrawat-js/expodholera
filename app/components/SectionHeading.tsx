import AnimatedSection from "./AnimatedSection";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <AnimatedSection direction="up" className={`${align === "center" ? "text-center" : ""}`}>
      <div
        className={align === "center" ? "accent-line-center" : "accent-line"}
        style={{ marginBottom: 20 }}
      />
      <h2
        className="heading-display"
        style={{
          fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
          color: light ? "var(--white)" : "var(--navy)",
          marginBottom: subtitle ? 16 : 0,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="body-text"
          style={{
            fontSize: "1.0625rem",
            maxWidth: 600,
            margin: align === "center" ? "0 auto" : undefined,
            color: light ? "rgba(255,255,255,0.7)" : undefined,
          }}
        >
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  );
}
