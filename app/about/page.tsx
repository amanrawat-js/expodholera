"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Eye,
  Target,
  BookOpen,
  ShieldCheck,
  Rocket,
  Award,
  TrendingUp,
  MapPin,
  Calendar,
} from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import SectionHeading from "../components/SectionHeading";

const objectives = [
  {
    icon: <Eye size={24} />,
    title: "Increase National Awareness",
    desc: "Introduce Dholera to audiences in major metropolitan and emerging cities who may not yet fully understand its long-term growth potential.",
  },
  {
    icon: <BookOpen size={24} />,
    title: "Educate Investors",
    desc: "Provide accurate information about infrastructure development, government initiatives, investment opportunities and future prospects.",
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Create a Trusted Marketplace",
    desc: "Bring together verified developers and buyers under one platform to encourage transparency and informed decision-making.",
  },
  {
    icon: <Rocket size={24} />,
    title: "Expand Market Reach",
    desc: "Enable Dholera-based developers to connect with potential customers from across India instead of limiting their reach to Gujarat.",
  },
  {
    icon: <Award size={24} />,
    title: "Build a National Brand",
    desc: "Establish Dholera Property Expo as India's premier platform dedicated exclusively to Dholera real estate and future city investments.",
  },
  {
    icon: <TrendingUp size={24} />,
    title: "Generate Economic Opportunities",
    desc: "Encourage investment participation from professionals, entrepreneurs, NRIs and long-term investors from multiple regions of India.",
  },
];

const cityReasons = [
  "Growing investor population",
  "Strong middle and upper-middle income groups",
  "Emerging real estate investment appetite",
  "Less competition from large property expos",
  "Strategic regional coverage across India",
  "Access to untapped markets",
  "High business and professional audience",
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <div className="page-hero-content container-main" style={{ textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="accent-line-center" style={{ marginBottom: 24 }} />
            <h1
              className="heading-display"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.25rem)",
                color: "var(--white)",
                marginBottom: 16,
              }}
            >
              About Expodholera
            </h1>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.0625rem",
                color: "rgba(255,255,255,0.65)",
                maxWidth: 560,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Taking Dholera&apos;s investment opportunities directly to the people across India&apos;s major cities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* VISION */}
      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container-main">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 60,
              alignItems: "center",
            }}
          >
            <AnimatedSection direction="left">
              <div className="accent-line" style={{ marginBottom: 20 }} />
              <h2
                className="heading-display"
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                  color: "var(--navy)",
                  marginBottom: 24,
                }}
              >
                Our Vision
              </h2>
              <p className="body-text" style={{ fontSize: "1.0625rem", marginBottom: 24 }}>
                To make Dholera a nationally recognised investment destination by taking the opportunity directly to the people — rather than waiting for people to discover it themselves.
              </p>
              <div
                style={{
                  background: "var(--off-white)",
                  borderRadius: 12,
                  padding: "28px 32px",
                  borderLeft: "3px solid var(--gold)",
                }}
              >
                <p
                  className="heading-serif"
                  style={{
                    fontSize: "1rem",
                    color: "var(--navy)",
                    fontStyle: "italic",
                    margin: 0,
                    lineHeight: 1.8,
                  }}
                >
                  &ldquo;Our vision is not just to organize a property exhibition. We aim to create a dedicated investment platform that brings together developers, investors, and associate partners, helping them explore opportunities in Dholera while building trust, generating business, and contributing to the growth of one of India&apos;s most ambitious smart city projects.&rdquo;
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.15}>
              <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", aspectRatio: "4/3" }}>
                <Image
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                  alt="Smart city infrastructure"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* WHY ORGANISING */}
      <section className="section" style={{ background: "var(--off-white)" }}>
        <div className="container-main">
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <AnimatedSection>
              <SectionHeading
                title="Why This Expo?"
                subtitle="Bridging the awareness gap for India's most ambitious greenfield smart city project."
              />
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <p
                className="body-text"
                style={{ fontSize: "1.0625rem", marginTop: 32, marginBottom: 24 }}
              >
                Dholera is a key part of the Delhi–Mumbai Industrial Corridor. Despite its national importance, awareness remains limited outside Gujarat. The Dholera Property Expo is being organised across major Indian cities to bridge this gap and create a single trusted platform where investors, homebuyers, businesses and developers can interact directly.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* OBJECTIVES */}
      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container-main">
          <SectionHeading
            title="Our Objectives"
            subtitle="Six pillars driving the Dholera Property Expo mission."
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: 24,
              marginTop: 60,
            }}
          >
            {objectives.map((obj, i) => (
              <AnimatedSection key={obj.title} delay={i * 0.08}>
                <div className="card" style={{ display: "flex", alignItems: "flex-start", gap: 20 }}>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 10,
                      background: "rgba(15, 43, 91, 0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--navy)",
                      flexShrink: 0,
                    }}
                  >
                    {obj.icon}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "var(--charcoal)",
                        marginBottom: 6,
                      }}
                    >
                      {obj.title}
                    </h3>
                    <p className="body-text" style={{ fontSize: "0.9375rem", margin: 0 }}>
                      {obj.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* WHY THESE CITIES */}
      <section className="section" style={{ background: "var(--off-white)" }}>
        <div className="container-main">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 60,
              alignItems: "center",
            }}
          >
            <AnimatedSection direction="left">
              <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", aspectRatio: "4/3" }}>
                <Image
                  src="https://images.unsplash.com/photo-1524813686514-a57563d77965?w=800&q=80"
                  alt="Indian cityscape"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.15}>
              <div className="accent-line" style={{ marginBottom: 20 }} />
              <h2
                className="heading-display"
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  color: "var(--navy)",
                  marginBottom: 20,
                }}
              >
                Why These Six Cities?
              </h2>
              <p className="body-text" style={{ fontSize: "1rem", marginBottom: 24 }}>
                These cities provide the ideal mix of investor potential, economic growth and regional reach.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {cityReasons.map((reason) => (
                  <div key={reason} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                    <div
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: "var(--gold)",
                        marginTop: 7,
                        flexShrink: 0,
                      }}
                    />
                    <span className="body-text" style={{ fontSize: "0.9375rem", margin: 0 }}>
                      {reason}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* LAUNCH CEREMONY */}
      <section
        style={{
          position: "relative",
          padding: "100px 0",
          overflow: "hidden",
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80"
          alt="Conference event"
          fill
          style={{ objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, rgba(9,29,62,0.93) 0%, rgba(15,43,91,0.88) 100%)",
          }}
        />
        <div className="container-main" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <AnimatedSection>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 20px",
                background: "rgba(200, 145, 58, 0.15)",
                border: "1px solid rgba(200, 145, 58, 0.3)",
                borderRadius: 100,
                marginBottom: 28,
                color: "var(--gold)",
                fontFamily: "var(--font-body)",
                fontSize: "0.875rem",
                fontWeight: 500,
              }}
            >
              <Calendar size={16} />
              Official Launch Ceremony
            </div>
            <h2
              className="heading-display"
              style={{
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                color: "var(--white)",
                marginBottom: 12,
              }}
            >
              Ahmedabad —{" "}
              <span style={{ color: "var(--gold)" }}>18 July 2026</span>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.0625rem",
                color: "rgba(255,255,255,0.7)",
                maxWidth: 620,
                margin: "0 auto 32px",
                lineHeight: 1.7,
              }}
            >
              The launch ceremony and press conference will bring together government representatives, industry leaders, developers, investors, channel partners, media houses and strategic stakeholders to officially unveil the 6-city roadmap.
            </p>
            <div style={{ display: "flex", gap: 32, justifyContent: "center", flexWrap: "wrap" }}>
              {[
                { icon: <MapPin size={20} />, text: "Ahmedabad, Gujarat" },
                { icon: <Calendar size={20} />, text: "18 July 2026" },
                { icon: <Target size={20} />, text: "6-City Roadmap Unveil" },
              ].map((item) => (
                <div key={item.text} style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.8)" }}>
                  <span style={{ color: "var(--gold)" }}>{item.icon}</span>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem" }}>{item.text}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
