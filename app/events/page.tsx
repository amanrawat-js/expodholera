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
