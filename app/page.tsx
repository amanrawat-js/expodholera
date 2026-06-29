"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import {
  ArrowRight,
  MapPin,
  Plane,
  Cpu,
  Train,
  Building2,
  Users,
  Handshake,
  Landmark,
  BriefcaseBusiness,
  Globe,
  ShieldCheck,
} from "lucide-react";
import AnimatedSection from "./components/AnimatedSection";
import SectionHeading from "./components/SectionHeading";
import CounterCard from "./components/CounterCard";

const highlights = [
  { icon: <MapPin size={28} />, title: "Dholera Expressway", desc: "Seamless connectivity to Ahmedabad and beyond" },
  { icon: <Plane size={28} />, title: "International Airport", desc: "World-class airport to boost commerce & travel" },
  { icon: <Cpu size={28} />, title: "Tata Semiconductor Plant", desc: "Major industrial investment driving growth" },
  { icon: <Train size={28} />, title: "Monorail", desc: "Modern transit infrastructure for smart mobility" },
];

const participants = [
  { icon: <Building2 size={26} />, title: "Developers", desc: "Residential, commercial & industrial project developers" },
  { icon: <Users size={26} />, title: "Investors", desc: "Individual investors, HNIs, NRIs & business owners" },
  { icon: <Handshake size={26} />, title: "Associate Partners", desc: "Real estate consultants, channel partners & advisors" },
  { icon: <Landmark size={26} />, title: "Financial Institutions", desc: "Banks, housing finance companies & loan consultants" },
  { icon: <BriefcaseBusiness size={26} />, title: "Industry Experts", desc: "Investment advisors, legal & tax consultants" },
  { icon: <Globe size={26} />, title: "Government Representatives", desc: "Smart city experts & infrastructure consultants" },
];

const metrics = [
  { end: 50, suffix: "+", label: "Exhibitors" },
  { end: 10000, suffix: "+", label: "Visitors" },
  { end: 500, suffix: "+", label: "Investor Leads" },
  { end: 200, suffix: "+", label: "Channel Partners" },
  { end: 50, suffix: "+", label: "HNIs" },
  { end: 6, suffix: "", label: "Cities Phase 1" },
];

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
      });
      gsap.from(".hero-subtitle", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
      });
      gsap.from(".hero-tagline", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.7,
      });
      gsap.from(".hero-cta", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.9,
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* HERO */}
      <section
        ref={heroRef}
        style={{
          position: "relative",
          minHeight: "110vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <Image
          src="/main-bg-3.jpg"
          alt="Modern city skyline"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
          }}
        />
        <div className="container-main" style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "120px 24px 80px" }}>
          <div
            className="hero-tagline"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 20px",
              border: "1px solid rgba(255, 255, 255, 1)",
              borderRadius: 100,
              marginBottom: 32,
              color: "rgba(255, 255, 255, 1)",
              fontFamily: "var(--font-body)",
              fontSize: "0.875rem",
              fontWeight: 500,
              letterSpacing: "0.03em",
            }}
          >
            <ShieldCheck size={16} />
            India&apos;s First Dedicated Dholera Property Expo
          </div>
          <h1
            className="hero-title heading-display"
            style={{
              fontSize: "clamp(2.25rem, 6vw, 4.5rem)",
              color: "var(--white)",
              marginBottom: 20,
              maxWidth: 900,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Dholera Property Expo{" "}
            <span style={{ color: "var(--gold)" }}>India 2026</span>
          </h1>
          <p
            className="hero-subtitle"
            style={{
              fontFamily: "var(--font-heading)",
              // fontStyle: "italic",
              fontSize: "clamp(1.1rem, 2.0vw, 1.1rem)",
              color: "rgba(255,255,255,0.75)",
              marginBottom: 48,
              maxWidth: 650,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            From Vision to Value - connecting infrastructure, industry &amp; opportunities for a smarter tomorrow.
          </p>
          <div className="hero-cta" style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/register" className="btn-primary" style={{ fontSize: "1rem", padding: "16px 36px" }}>
              Register Now <ArrowRight size={18} />
            </Link>
            <Link href="/events" className="btn-secondary" style={{ fontSize: "1rem", padding: "16px 36px" }}>
              Explore Events
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          style={{
            position: "absolute",
            bottom: 40,
            left: "50%",
            transform: "translateX(-50%)",
            width: 28,
            height: 44,
            border: "2px solid rgba(255,255,255,0.3)",
            borderRadius: 14,
            display: "flex",
            justifyContent: "center",
            paddingTop: 8,
          }}
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            style={{
              width: 4,
              height: 8,
              borderRadius: 2,
              background: "var(--gold)",
            }}
          />
        </motion.div>
      </section>

      {/* OPPORTUNITY */}
      {/* <section className="section" style={{ background: "var(--white)" }}>
        <div className="container-main">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 60, alignItems: "center" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 60, alignItems: "center" }}>
              <AnimatedSection direction="left">
                <div className="accent-line" style={{ marginBottom: 20 }} />
                <h2
                  className="heading-display"
                  style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", color: "var(--navy)", marginBottom: 20 }}
                >
                  The Opportunity
                </h2>
                <p className="body-text" style={{ fontSize: "1.0625rem", marginBottom: 24 }}>
                  Dholera is one of India&apos;s most talked-about emerging smart city developments. However, investors across India still lack access to reliable information and a unified platform.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {["Reliable information about Dholera", "Direct access to verified developers", "One platform to compare opportunities"].map(
                    (item) => (
                      <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
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
                        <span className="body-text" style={{ fontSize: "1rem", margin: 0 }}>
                          {item}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </AnimatedSection>
              <AnimatedSection direction="right" delay={0.15}>
                <div
                  style={{
                    position: "relative",
                    borderRadius: 16,
                    overflow: "hidden",
                    aspectRatio: "4/3",
                  }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
                    alt="Modern real estate investment"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection delay={0.2}>
              <div
                style={{
                  background: "var(--off-white)",
                  borderRadius: 16,
                  padding: "40px 48px",
                  borderLeft: "4px solid var(--gold)",
                }}
              >
                <p
                  className="heading-serif"
                  style={{
                    fontSize: "1.1875rem",
                    color: "var(--navy)",
                    fontStyle: "italic",
                    margin: 0,
                    lineHeight: 1.7,
                  }}
                >
                  &ldquo;Dholera Property Expo bridges this gap — bringing together developers, investors, and partners on a single trusted platform to explore opportunities and build the future of India&apos;s most ambitious smart city.&rdquo;
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section> */}

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
                To make Dholera a nationally recognised investment destination by taking the opportunity directly to the people - rather than waiting for people to discover it themselves.
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

      {/* DHOLERA HIGHLIGHTS */}
      <section className="section" style={{ background: "var(--off-white)" }}>
        <div className="container-main">
          <SectionHeading
            title="Dholera - The Future Is Here"
            subtitle="World-class connectivity, industrial growth, and smart infrastructure driving India's tomorrow."
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 24,
              marginTop: 60,
            }}
          >
            {highlights.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="card" style={{ textAlign: "center", padding: "40px 28px" }}>
                  <div
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: 12,
                      background: "rgba(15, 43, 91, 0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--navy)",
                      margin: "0 auto 20px",
                    }}
                  >
                    {item.icon}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "1.0625rem",
                      fontWeight: 600,
                      color: "var(--charcoal)",
                      marginBottom: 8,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p className="body-text" style={{ fontSize: "0.9375rem", margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container-main">
          <SectionHeading
            title="Expected Expo Metrics"
            subtitle="Per city - our projected impact across India's major metros."
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
              gap: 20,
              marginTop: 60,
            }}
          >
            {metrics.map((m) => (
              <CounterCard key={m.label} end={m.end} suffix={m.suffix} label={m.label} />
            ))}
          </div>
        </div>
      </section>

      {/* WHO PARTICIPATES */}
      <section className="section" style={{ background: "var(--off-white)" }}>
        <div className="container-main">
          <SectionHeading
            title="Who Will Participate?"
            subtitle="A curated ecosystem of industry leaders, investors, and experts."
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 24,
              marginTop: 60,
            }}
          >
            {participants.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.08}>
                <div className="card" style={{ display: "flex", alignItems: "flex-start", gap: 20, padding: "28px 28px" }}>
                  <div
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 10,
                      background: "rgba(200, 145, 58, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--gold)",
                      flexShrink: 0,
                    }}
                  >
                    {p.icon}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "var(--charcoal)",
                        marginBottom: 4,
                      }}
                    >
                      {p.title}
                    </h3>
                    <p className="body-text" style={{ fontSize: "0.875rem", margin: 0 }}>
                      {p.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          position: "relative",
          padding: "100px 0",
          overflow: "hidden",
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
          alt="Modern conference"
          fill
          style={{ objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, rgba(9,29,62,0.92) 0%, rgba(15,43,91,0.88) 100%)",
          }}
        />
        <div className="container-main" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <AnimatedSection>
            <h2
              className="heading-display"
              style={{
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                color: "var(--white)",
                marginBottom: 16,
              }}
            >
              Be Part of India&apos;s Biggest{" "}
              <span style={{ color: "var(--gold)" }}>Dholera Investment</span> Event
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.0625rem",
                color: "rgba(255,255,255,0.7)",
                maxWidth: 550,
                margin: "0 auto 40px",
                lineHeight: 1.7,
              }}
            >
              Register today to connect with verified developers, explore exclusive opportunities, and secure your future in India&apos;s smartest city.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/register" className="btn-primary" style={{ fontSize: "1rem", padding: "16px 36px" }}>
                Register Now <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="btn-secondary" style={{ fontSize: "1rem", padding: "16px 36px" }}>
                Contact Us
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
