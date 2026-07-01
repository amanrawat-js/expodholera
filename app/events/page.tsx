"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  MapPin,
  Users,
  Target,
  Megaphone,
  Mail,
  Globe,
  Mic,
  QrCode,
  Share2,
  Building,
} from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import SectionHeading from "../components/SectionHeading";
import CounterCard from "../components/CounterCard";

const phase1 = [
  { city: "Jaipur", dates: "12–13 September 2026", state: "Rajasthan" },
  { city: "Guwahati", dates: "26–27 September 2026", state: "Assam" },
  { city: "Indore", dates: "10–11 October 2026", state: "Madhya Pradesh" },
  { city: "Nagpur", dates: "24–25 October 2026", state: "Maharashtra" },
  { city: "Pune", dates: "14–15 November 2026", state: "Maharashtra" },
  { city: "Patna", dates: "28–29 November 2026", state: "Bihar" },
];

const phase2 = [
  { city: "Delhi", state: "Delhi NCR" },
  { city: "Mumbai", state: "Maharashtra" },
  { city: "Chennai", state: "Tamil Nadu" },
  { city: "Bangalore", state: "Karnataka" },
  { city: "Kolkata", state: "West Bengal" },
  { city: "Chandigarh", state: "Punjab/Haryana" },
];

const engagementActivities = [
  { icon: <Globe size={20} />, text: "Digital advertising - Google, Facebook, YouTube" },
  { icon: <Mic size={20} />, text: "Press conferences & media partnerships" },
  { icon: <Share2 size={20} />, text: "Collaborations with investment influencers" },
  // { icon: <Megaphone size={20} />, text: "Outdoor advertising" },
  { icon: <Mail size={20} />, text: "WhatsApp, SMS & email campaigns" },
  { icon: <Building size={20} />, text: "Corporate outreach & local business associations" },
  { icon: <Users size={20} />, text: "Pre-event roadshows & investor seminars" },
  { icon: <QrCode size={20} />, text: "Free online registration with QR entry" },
  { icon: <Target size={20} />, text: "Referral programmes" },
];

const metrics = [
  { end: 50, suffix: "+", label: "Exhibitors" },
  { end: 2, suffix: "", label: "Founder Partners" },
  { end: 10, suffix: "", label: "Premium Partners" },
  { end: 10000, suffix: "+", label: "Visitors" },
  { end: 500, suffix: "+", label: "Qualified Leads" },
  { end: 200, suffix: "+", label: "Channel Partners" },
];

export default function EventsPage() {
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
              Events &amp; Schedule
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
              Two phases, twelve cities — bringing the Dholera opportunity to every corner of India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PHASE 1 */}
      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container-main">
          <SectionHeading
            title="Phase 1 - 2026 Schedule"
            subtitle="Six cities from September to November 2026."
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 24,
              marginTop: 60,
            }}
          >
            {phase1.map((event, i) => (
              <AnimatedSection key={event.city} delay={i * 0.08}>
                <div
                  className="card"
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    padding: "32px 28px",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: 4,
                      height: "100%",
                      background: "var(--gold)",
                    }}
                  />
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                    <MapPin size={16} style={{ color: "var(--gold)" }} />
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.8125rem",
                        fontWeight: 500,
                        color: "var(--medium-gray)",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                      }}
                    >
                      {event.state}
                    </span>
                  </div>
                  <h3
                    className="heading-display"
                    style={{
                      fontSize: "1.5rem",
                      color: "var(--navy)",
                      marginBottom: 8,
                    }}
                  >
                    {event.city}
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      color: "var(--charcoal)",
                      fontFamily: "var(--font-body)",
                      fontSize: "0.9375rem",
                    }}
                  >
                    <Calendar size={16} style={{ color: "var(--medium-gray)" }} />
                    {event.dates}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
        {/* LAUNCH CEREMONY SECTION */}
            <section
              style={{
                background: "linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 60%, #1a3560 100%)",
                padding: "80px 0",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Decorative background orbs */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: "-120px",
                  right: "-120px",
                  width: 480,
                  height: 480,
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(200,145,58,0.12) 0%, transparent 70%)",
                  pointerEvents: "none",
                }}
              />
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  bottom: "-80px",
                  left: "-80px",
                  width: 360,
                  height: 360,
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(200,145,58,0.08) 0%, transparent 70%)",
                  pointerEvents: "none",
                }}
              />
              {/* Subtle grid pattern overlay */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                  backgroundSize: "60px 60px",
                  pointerEvents: "none",
                }}
              />
      
              <div className="container-main" style={{ position: "relative", zIndex: 1 }}>
      
                {/* Header */}
                <AnimatedSection>
                  <div style={{ textAlign: "center", marginBottom: 44 }}>
                    {/* Badge */}
      
                    <h2
                      className="heading-display"
                      style={{
                        fontSize: "clamp(1.75rem, 4vw, 3rem)",
                        color: "var(--white)",
                        marginBottom: 24,
                        lineHeight: 1.15,
                      }}
                    >
                      Launch Ceremony &amp; Press Conference
                    </h2>
      
                    {/* Date pill */}
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 10,
                        background: "var(--gold)",
                        borderRadius: 8,
                        padding: "8px 20px",
                        marginBottom: 24,
                      }}
                    >
                      <span style={{ fontSize: "1.25rem" }}>📍</span>
                      <span
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: "0.9375rem",
                          fontWeight: 700,
                          color: "var(--navy-dark)",
                          letterSpacing: "0.04em",
                          textTransform: "uppercase",
                        }}
                      >
                        Ahmedabad · 18th July 2026
                      </span>
                    </div>
      
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "1.0625rem",
                        color: "rgba(255,255,255,0.55)",
                        fontStyle: "italic",
                        marginBottom: 20,
                        maxWidth: 620,
                        margin: "0 auto 10px",
                      }}
                    >
                      India&apos;s first dedicated Dholera Property Expo roadshow to be launched across major cities.
                    </p>
                  </div>
                </AnimatedSection>
      
                {/* Main content grid */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
                    gap: 30,
                    alignItems: "start",
                  }}
                >
                  {/* Left — About the event */}
                  <AnimatedSection direction="left" delay={0.1}>
                    <div
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: 20,
                        padding: "26px 36px",
                        backdropFilter: "blur(12px)",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 12,
                          marginBottom: 18,
                        }}
                      >
                        <div
                          style={{
                            width: 40,
                            height: 40,
                            borderRadius: 10,
                            background: "rgba(200,145,58,0.2)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "1.25rem",
                            flexShrink: 0,
                          }}
                        >
                          🏛️
                        </div>
                        <h3
                          className="heading-display"
                          style={{
                            fontSize: "1.25rem",
                            color: "var(--white)",
                            margin: 0,
                          }}
                        >
                          About the Event
                        </h3>
                      </div>
      
                      <p
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.9375rem",
                          color: "rgba(255,255,255,0.72)",
                          lineHeight: 1.85,
                          margin: 0,
                        }}
                      >
                        The Dholera Investment Expo Series will commence with an exclusive Launch Ceremony and Press Conference in Ahmedabad, bringing together government representatives, industry leaders, developers, investors, channel partners, media houses, and strategic stakeholders.
                      </p>
      
                      {/* Divider */}
                      <div
                        style={{
                          height: 1,
                          background: "rgba(255,255,255,0.08)",
                          margin: "20px 0",
                        }}
                      />
      
                      <p
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.9375rem",
                          color: "rgba(255,255,255,0.72)",
                          lineHeight: 1.85,
                          margin: 0,
                        }}
                      >
                        The objective of this launch event is to officially unveil the 6-city Dholera Investment Expo roadmap, create awareness about investment opportunities in Dholera, and establish a strong platform for industry collaboration and investor engagement.
                      </p>
      
                      {/* Objectives */}
                      <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 14 }}>
                        {[
                          "Unveil the 06-city Expo roadmap",
                          "Create nationwide investment awareness",
                          "Foster industry collaboration",
                          "Drive investor engagement at scale",
                        ].map((item) => (
                          <div
                            key={item}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 12,
                            }}
                          >
                            <div
                              style={{
                                width: 20,
                                height: 20,
                                borderRadius: "50%",
                                background: "rgba(200,145,58,0.2)",
                                border: "1px solid rgba(200,145,58,0.5)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                              }}
                            >
                              <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                                <path d="M1 4L3.5 6.5L9 1" stroke="#C8913A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                            <span
                              style={{
                                fontFamily: "var(--font-body)",
                                fontSize: "0.875rem",
                                color: "rgba(255,255,255,0.8)",
                              }}
                            >
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </AnimatedSection>
      
                  {/* Right — Key Invitees */}
                  <AnimatedSection direction="right" delay={0.2}>
                    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      
                      {/* Business Media */}
                      <div
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          borderRadius: 16,
                          padding: "28px 28px",
                          backdropFilter: "blur(12px)",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
                          <span style={{ fontSize: "1.1rem" }}>📺</span>
                          <h3
                            style={{
                              fontFamily: "var(--font-heading)",
                              fontSize: "0.9375rem",
                              fontWeight: 600,
                              color: "var(--gold-light)",
                              margin: 0,
                              letterSpacing: "0.04em",
                              textTransform: "uppercase",
                            }}
                          >
                            Business Media
                          </h3>
                        </div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                          {["CNBC Gujarati", "Zee 24 Kalak", "TV9 Gujarati", "ABP Asmita", "Sandesh", "Divya Bhaskar", "Gujarat Samachar"].map(
                            (name) => (
                              <span
                                key={name}
                                style={{
                                  fontFamily: "var(--font-body)",
                                  fontSize: "0.8125rem",
                                  fontWeight: 500,
                                  color: "rgba(255,255,255,0.85)",
                                  background: "rgba(255,255,255,0.07)",
                                  border: "1px solid rgba(255,255,255,0.12)",
                                  borderRadius: 100,
                                  padding: "5px 14px",
                                }}
                              >
                                {name}
                              </span>
                            )
                          )}
                        </div>
                      </div>
      
                      {/* Digital Creators */}
                      <div
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          borderRadius: 16,
                          padding: "28px 28px",
                          backdropFilter: "blur(12px)",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
                          <span style={{ fontSize: "1.1rem" }}>🎥</span>
                          <h3
                            style={{
                              fontFamily: "var(--font-heading)",
                              fontSize: "0.9375rem",
                              fontWeight: 600,
                              color: "var(--gold-light)",
                              margin: 0,
                              letterSpacing: "0.04em",
                              textTransform: "uppercase",
                            }}
                          >
                            Digital Creators
                          </h3>
                        </div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                          {["Real Estate YouTubers", "Gujarati Business Influencers", "Investment Bloggers"].map((name) => (
                            <span
                              key={name}
                              style={{
                                fontFamily: "var(--font-body)",
                                fontSize: "0.8125rem",
                                fontWeight: 500,
                                color: "rgba(255,255,255,0.85)",
                                background: "rgba(255,255,255,0.07)",
                                border: "1px solid rgba(255,255,255,0.12)",
                                borderRadius: 100,
                                padding: "5px 14px",
                              }}
                            >
                              {name}
                            </span>
                          ))}
                        </div>
                      </div>
      
                      {/* Industry Guests */}
                      <div
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          borderRadius: 16,
                          padding: "28px 28px",
                          backdropFilter: "blur(12px)",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
                          <span style={{ fontSize: "1.1rem" }}>🏗️</span>
                          <h3
                            style={{
                              fontFamily: "var(--font-heading)",
                              fontSize: "0.9375rem",
                              fontWeight: 600,
                              color: "var(--gold-light)",
                              margin: 0,
                              letterSpacing: "0.04em",
                              textTransform: "uppercase",
                            }}
                          >
                            Industry Guests
                          </h3>
                        </div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                          {["Dholera Developers", "Architects", "Urban Planners", "Property Consultants"].map((name) => (
                            <span
                              key={name}
                              style={{
                                fontFamily: "var(--font-body)",
                                fontSize: "0.8125rem",
                                fontWeight: 500,
                                color: "rgba(255,255,255,0.85)",
                                background: "rgba(255,255,255,0.07)",
                                border: "1px solid rgba(255,255,255,0.12)",
                                borderRadius: 100,
                                padding: "5px 14px",
                              }}
                            >
                              {name}
                            </span>
                          ))}
                        </div>
                      </div>
      
                    </div>
                  </AnimatedSection>
                </div>
      
                {/* Bottom CTA strip */}
                <AnimatedSection delay={0.3}>
                  <div
                    style={{
                      marginTop: 56,
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: 16,
                      padding: "32px 40px",
                      display: "flex",
                      backdropFilter: "blur(12px)",
                      flexWrap: "wrap",
                      gap: 24,
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <p
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: "1.125rem",
                          fontWeight: 600,
                          color: "var(--white)",
                          margin: "0 0 4px",
                        }}
                      >
                        Want to attend the Launch Ceremony?
                      </p>
                      <p
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.9rem",
                          color: "rgba(255,255,255,0.55)",
                          margin: 0,
                        }}
                      >
                        Register above and select your preferred city. Our team will reach out with an exclusive invite.
                      </p>
                    </div>
                    <a
                      href="/register"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        background: "var(--gold)",
                        color: "var(--navy-dark)",
                        fontFamily: "var(--font-body)",
                        fontSize: "0.9375rem",
                        fontWeight: 700,
                        padding: "13px 28px",
                        borderRadius: 10,
                        textDecoration: "none",
                        whiteSpace: "nowrap",
                        transition: "background 0.2s ease",
                        flexShrink: 0,
                      }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "var(--gold-light)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "var(--gold)"; }}
                    >
                      Register Now ↑
                    </a>
                  </div>
                </AnimatedSection>
      
              </div>
            </section>

      {/* PHASE 2 */}
      <section className="section" style={{ background: "var(--off-white)" }}>
        <div className="container-main">
          <SectionHeading
            title="Phase 2 - January to March 2027"
            subtitle="Expansion to India's major metros."
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
              gap: 20,
              marginTop: 60,
            }}
          >
            {phase2.map((city, i) => (
              <AnimatedSection key={city.city} delay={i * 0.06}>
                <div
                  className="card"
                  style={{
                    textAlign: "center",
                    padding: "32px 20px",
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: "50%",
                      background: "rgba(15, 43, 91, 0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 14px",
                      color: "var(--navy)",
                    }}
                  >
                    <MapPin size={20} />
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "1.0625rem",
                      fontWeight: 600,
                      color: "var(--charcoal)",
                      marginBottom: 4,
                    }}
                  >
                    {city.city}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.8125rem",
                      color: "var(--medium-gray)",
                      margin: 0,
                    }}
                  >
                    {city.state}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.3}>
            <p
              style={{
                textAlign: "center",
                marginTop: 32,
                fontFamily: "var(--font-body)",
                fontSize: "0.9375rem",
                color: "var(--medium-gray)",
                fontStyle: "italic",
              }}
            >
              * Exact dates for Phase 2 cities will be announced soon.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* METRICS */}
      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container-main">
          <SectionHeading
            title="Expected Metrics Per City"
            subtitle="Our projected impact at each expo location."
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

      {/* VISITOR ENGAGEMENT */}
      <section className="section" style={{ background: "var(--off-white)" }}>
        <div className="container-main">
          <SectionHeading
            title="Visitor Engagement"
            subtitle="How we drive footfall and ensure quality participation."
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: 16,
              marginTop: 60,
              maxWidth: 900,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {engagementActivities.map((activity, i) => (
              <AnimatedSection key={activity.text} delay={i * 0.05}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    padding: "18px 24px",
                    background: "var(--white)",
                    borderRadius: 10,
                    border: "1px solid var(--light-gray)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div style={{ color: "var(--gold)", flexShrink: 0 }}>
                    {activity.icon}
                  </div>
                  <span
                    className="body-text"
                    style={{ fontSize: "0.9375rem", margin: 0 }}
                  >
                    {activity.text}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* WHO VISITS */}
      <section
        style={{
          position: "relative",
          padding: "100px 0",
          overflow: "hidden",
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=1920&q=80"
          alt="Expo event"
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
        <div className="container-main" style={{ position: "relative", zIndex: 1 }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div className="accent-line-center" style={{ marginBottom: 20 }} />
              <h2
                className="heading-display"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "var(--white)", marginBottom: 12 }}
              >
                Who Will Visit?
              </h2>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
                justifyContent: "center",
              }}
            >
              {[
                "Investors",
                "HNIs",
                "Business Owners",
                "Corporate Professionals",
                "NRIs",
                "Brokers & Consultants",
                "Family Buyers",
                "Industry Leaders",
              ].map((visitor, i) => (
                <motion.div
                  key={visitor}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.06 }}
                  viewport={{ once: true }}
                  style={{
                    padding: "12px 24px",
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: 100,
                    fontFamily: "var(--font-body)",
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.85)",
                    fontWeight: 500,
                  }}
                >
                  {visitor}
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div style={{ textAlign: "center", marginTop: 48 }}>
              <Link href="/register" className="btn-primary" style={{ fontSize: "1rem", padding: "16px 36px" }}>
                Register Now <ArrowRight size={18} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
