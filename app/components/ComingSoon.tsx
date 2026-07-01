"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, ArrowRight, Sparkles, MapPin, Calendar } from "lucide-react";

/* ─────────────────────────────────────────────
   Countdown hook
───────────────────────────────────────────── */
function useCountdown(targetDate: Date) {
  const calc = () => {
    const diff = Math.max(0, targetDate.getTime() - Date.now());
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return time;
}

/* ─────────────────────────────────────────────
   Animated digit flip
───────────────────────────────────────────── */
function FlipDigit({ value, label }: { value: number; label: string }) {
  const display = String(value).padStart(2, "0");
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
      <div
        style={{
          position: "relative",
          width: "clamp(68px, 12vw, 96px)",
          height: "clamp(72px, 13vw, 104px)",
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(212,175,55,0.35)",
          borderRadius: 16,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          boxShadow: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.12)",
        }}
      >
        {/* top sheen */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "50%",
            background: "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%)",
            borderRadius: "16px 16px 0 0",
          }}
        />
        {/* mid line */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: 0,
            right: 0,
            height: 1,
            background: "rgba(212,175,55,0.25)",
          }}
        />
        <AnimatePresence mode="popLayout">
          <motion.span
            key={display}
            initial={{ y: -32, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 32, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            style={{
              fontFamily: "var(--font-playfair, serif)",
              fontSize: "clamp(28px, 6vw, 48px)",
              fontWeight: 700,
              color: "#D4AF37",
              lineHeight: 1,
              letterSpacing: "-0.02em",
              textShadow: "0 0 24px rgba(212,175,55,0.5)",
              position: "relative",
              zIndex: 1,
            }}
          >
            {display}
          </motion.span>
        </AnimatePresence>
      </div>
      <span
        style={{
          fontFamily: "var(--font-poppins, sans-serif)",
          fontSize: "clamp(9px, 1.5vw, 11px)",
          fontWeight: 600,
          color: "rgba(255,255,255,0.55)",
          textTransform: "uppercase",
          letterSpacing: "0.18em",
        }}
      >
        {label}
      </span>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Floating particle
───────────────────────────────────────────── */
interface ParticleProps {
  delay: number;
  x: number;
  height: number;
}

function Particle({ delay, x, height }: ParticleProps) {
  return (
    <motion.div
      style={{
        position: "absolute",
        bottom: "-10px",
        left: `${x}%`,
        width: 3,
        height: 3,
        borderRadius: "50%",
        background: "rgba(212,175,55,0.7)",
        filter: "blur(0.5px)",
      }}
      animate={{
        y: [0, -height],
        opacity: [0, 0.8, 0],
        scale: [0.5, 1.5, 0.5],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}

/* ─────────────────────────────────────────────
   Main component
───────────────────────────────────────────── */
export default function ComingSoon() {
  // Event launch date – adjust as needed
  const TARGET = new Date("2026-09-15T10:00:00+05:30");
  const { days, hours, minutes, seconds } = useCountdown(TARGET);

  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(false);
  const [windowHeight, setWindowHeight] = useState(800);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    const onResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  // Stable particle positions (no random at render to avoid hydration mismatch)
  const particles = [5, 15, 25, 35, 45, 55, 65, 75, 85, 95];
  const delays =   [0, 2.1, 1.3, 3.5, 0.7, 2.8, 1.6, 4.2, 0.3, 3.1];

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: "111vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "#0a0a14",
      }}
    >
      {/* ── Background video (Pexels – aerial smart city, free to use) ── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.45,
          filter: "saturate(0.8) brightness(0.7)",
        }}
        src="https://videos.pexels.com/video-files/3141208/3141208-uhd_2560_1440_25fps.mp4"
      />

      {/* ── Gradient overlays ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(10,10,20,0.65) 0%, rgba(10,10,20,0.2) 40%, rgba(10,10,20,0.8) 100%)",
          zIndex: 1,
        }}
      />
      {/* Gold radial glow at center */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 80% 50% at 50% 60%, rgba(212,175,55,0.1) 0%, transparent 70%)",
          zIndex: 2,
        }}
      />

      {/* ── Floating gold particles ── */}
      <div style={{ position: "absolute", inset: 0, zIndex: 3, pointerEvents: "none" }}>
        {particles.map((x, i) => (
          <Particle key={i} x={x} delay={delays[i]} height={windowHeight} />
        ))}
      </div>

      {/* ── Main content ── */}
      <motion.div
        initial={{ opacity: 0, y: 48 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: 800,
          margin: "0 auto",
          padding: "clamp(32px, 6vw, 64px) clamp(24px, 6vw, 64px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 36,
          textAlign: "center",
        }}
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <Image
            src="/logo.png"
            alt="Expodholera"
            width={220}
            height={74}
            style={{
              height: 64,
              width: "auto",
              objectFit: "contain",
              filter: "drop-shadow(0 4px 24px rgba(212,175,55,0.4))",
            }}
            priority
          />
        </motion.div>


        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          style={{ display: "flex", flexDirection: "column", gap: 14 }}
        >
          <h1
            style={{
            
              fontSize: "clamp(2rem, 6vw, 4.25rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              color: "#fff",
              margin: 0,
              textShadow: "0 2px 24px rgba(0,0,0,0.6)",
            }}
          >
            <span
              style={{
                background: "linear-gradient(135deg, #D4AF37 0%, #F5D97A 50%, #B8882A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Coming Soon
            </span>{" "}
    
          </h1>
          <p
            style={{
              fontFamily: "var(--font-poppins, sans-serif)",
              fontSize: "clamp(0.9rem, 2.2vw, 1.1rem)",
              color: "rgba(255,255,255,0.6)",
              margin: 0,
              lineHeight: 1.75,
              maxWidth: 540,
              alignSelf: "center",
            }}
          >
            The Dholera Property Expo Roadshow is launching across India&apos;s major cities.
            Stay tuned!
          </p>
        </motion.div>

    

    

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          style={{
            width: "100%",
            maxWidth: 340,
            height: 1,
            background:
              "linear-gradient(90deg, transparent, rgba(212,175,55,0.4), transparent)",
          }}
        />

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          style={{
            fontFamily: "var(--font-poppins, sans-serif)",
            fontSize: "0.72rem",
            color: "rgba(255,255,255,0.28)",
            margin: 0,
            letterSpacing: "0.06em",
          }}
        >
          © {new Date().getFullYear()} Expodholera &nbsp;·&nbsp; India&apos;s First Dedicated
          Dholera Property Expo
        </motion.p>
      </motion.div>

      {/* Input placeholder colour */}
      <style>{`
        input::placeholder { color: rgba(255,255,255,0.3) !important; }
      `}</style>
    </div>
  );
}
