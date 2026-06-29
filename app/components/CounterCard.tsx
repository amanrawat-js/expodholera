"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CounterCardProps {
  end: number;
  suffix?: string;
  label: string;
  duration?: number;
  icon?: React.ReactNode;
}

export default function CounterCard({
  end,
  suffix = "",
  label,
  duration = 2,
  icon,
}: CounterCardProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = (currentTime - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className="card" style={{ textAlign: "center" }}>
      {icon && (
        <div
          style={{
            marginBottom: 16,
            color: "var(--gold)",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {icon}
        </div>
      )}
      <div
        className="heading-display"
        style={{
          fontSize: "2rem",
          color: "var(--navy)",
          marginBottom: 8,
        }}
      >
        {count.toLocaleString()}
        {suffix}
      </div>
      <div
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.9375rem",
          color: "var(--medium-gray)",
          fontWeight: 500,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
        }}
      >
        {label}
      </div>
    </div>
  );
}
