"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  ArrowRight,
  CheckCircle,
  Users,
  Building2,
  Handshake,
  Newspaper,
  Eye,
  Shield,
  Zap,
  Gift,
} from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";

const registrationTypes = [
  { value: "visitor", label: "Visitor / Investor", icon: <Eye size={20} /> },
  { value: "exhibitor", label: "Exhibitor / Developer", icon: <Building2 size={20} /> },
  { value: "partner", label: "Channel Partner", icon: <Handshake size={20} /> },
  { value: "media", label: "Media / Press", icon: <Newspaper size={20} /> },
];

// const cities = [
//   "Jaipur — 12–13 Sep 2026",
//   "Guwahati — 26–27 Sep 2026",
//   "Indore — 10–11 Oct 2026",
//   "Nagpur — 24–25 Oct 2026",
//   "Pune — 14–15 Nov 2026",
//   "Patna — 28–29 Nov 2026",
//   "All Cities",
// ];

const benefits = [
  { icon: <Users size={20} />, title: "Direct Access", desc: "Meet verified developers and industry experts face-to-face" },
  { icon: <Shield size={20} />, title: "Trusted Platform", desc: "All exhibitors and projects are pre-verified for transparency" },
  { icon: <Zap size={20} />, title: "Exclusive Offers", desc: "Avail special expo-only pricing and early-bird investment deals" },
  { icon: <Gift size={20} />, title: "Free Entry", desc: "Register online for complimentary entry with QR-based access" },
];

interface RegistrationForm {
  name: string;
  email: string;
  phone: string;
  // city: string;
  type: string;
  company: string;
  message: string;
}

export default function RegisterPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<RegistrationForm>();

  const onSubmit = async (data: RegistrationForm) => {
    setSubmitError("");
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error(json.error || "Submission failed. Please try again.");
      }
      setSubmitted(true);
    } catch (err: unknown) {
      setSubmitError(
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
  };

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
              Register for the Launch Ceremony
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
              Secure your spot for launch ceremony at Ahmedabad - 18th July 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* BENEFITS */}
      <section style={{ background: "var(--white)", padding: "80px 0 0" }}>
        <div className="container-main">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 20,
              marginTop: -40,
              position: "relative",
              zIndex: 2,
            }}
          >
            {benefits.map((b, i) => (
              <AnimatedSection key={b.title} delay={i * 0.08}>
                <div
                  className="card"
                  style={{
                    textAlign: "center",
                    padding: "28px 20px",
                    background: "var(--white)",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 10,
                      background: "rgba(15, 43, 91, 0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--navy)",
                      margin: "0 auto 12px",
                    }}
                  >
                    {b.icon}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.9375rem",
                      fontWeight: 600,
                      color: "var(--charcoal)",
                      marginBottom: 4,
                    }}
                  >
                    {b.title}
                  </h3>
                  <p className="body-text" style={{ fontSize: "0.8125rem", margin: 0 }}>
                    {b.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container-main" style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px" }}>
          {submitted ? (
            <AnimatedSection>
              <div
                style={{
                  textAlign: "center",
                  padding: "80px 32px",
                  background: "var(--off-white)",
                  borderRadius: 20,
                }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <CheckCircle size={64} style={{ color: "var(--gold)", marginBottom: 24 }} />
                </motion.div>
                <h2
                  className="heading-display"
                  style={{ fontSize: "1.75rem", color: "var(--navy)", marginBottom: 12 }}
                >
                  Registration Submitted!
                </h2>
                <p className="body-text" style={{ fontSize: "1.0625rem", maxWidth: 440, margin: "0 auto 32px" }}>
                  Thank you for registering for the Dholera Property Expo 2026. Our team will reach out to you shortly with confirmation details.
                </p>
                <Link href="/" className="btn-navy">
                  Back to Home <ArrowRight size={16} />
                </Link>
              </div>
            </AnimatedSection>
          ) : (
            <>
              <AnimatedSection>
                <div style={{ textAlign: "center", marginBottom: 48 }}>
                  <div className="accent-line-center" style={{ marginBottom: 20 }} />
                  <h2
                    className="heading-display"
                    style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "var(--navy)", marginBottom: 12 }}
                  >
                    Registration Form
                  </h2>
                  <p className="body-text" style={{ fontSize: "1rem" }}>
                    Complete the form below. Registration is free with QR-based entry.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* Registration Type */}
                  <div style={{ marginBottom: 28 }}>
                    <label className="form-label">I am registering as</label>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                        gap: 12,
                        marginTop: 8,
                      }}
                    >
                      {registrationTypes.map((type) => (
                        <button
                          key={type.value}
                          type="button"
                          onClick={() => {
                            setSelectedType(type.value);
                            setValue("type", type.value);
                          }}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                            padding: "14px 16px",
                            borderRadius: 10,
                            border: selectedType === type.value
                              ? "2px solid var(--gold)"
                              : "1.5px solid var(--light-gray)",
                            background: selectedType === type.value
                              ? "rgba(200, 145, 58, 0.06)"
                              : "var(--white)",
                            cursor: "pointer",
                            fontFamily: "var(--font-body)",
                            fontSize: "0.875rem",
                            fontWeight: 500,
                            color: selectedType === type.value
                              ? "var(--navy)"
                              : "var(--charcoal)",
                            transition: "all 0.25s ease",
                          }}
                        >
                          <span
                            style={{
                              color: selectedType === type.value
                                ? "var(--gold)"
                                : "var(--medium-gray)",
                            }}
                          >
                            {type.icon}
                          </span>
                          {type.label}
                        </button>
                      ))}
                    </div>
                    <input type="hidden" {...register("type", { required: "Please select a type" })} />
                    {errors.type && <p className="form-error">{errors.type.message}</p>}
                  </div>

                  {/* Name & Email */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                      gap: 20,
                      marginBottom: 20,
                    }}
                  >
                    <div>
                      <label className="form-label" htmlFor="reg-name">Full Name *</label>
                      <input
                        id="reg-name"
                        className="form-input"
                        placeholder="Your full name"
                        {...register("name", {
                          required: "Full name is required.",
                          minLength: { value: 2, message: "Name must be at least 2 characters." },
                          maxLength: { value: 60, message: "Name cannot exceed 60 characters." },
                          pattern: {
                            value: /^[A-Za-z][A-Za-z\s.'-]{1,59}$/,
                            message: "Name may only contain letters, spaces, hyphens, apostrophes, or dots.",
                          },
                          setValueAs: (v: string) => v.trim(),
                        })}
                      />
                      {errors.name && <p className="form-error">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="form-label" htmlFor="reg-email">Email Address *</label>
                      <input
                        id="reg-email"
                        type="email"
                        className="form-input"
                        placeholder="you@example.com"
                        {...register("email", {
                          required: "Email address is required.",
                          pattern: {
                            value: /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/,
                            message: "Please enter a valid email address (e.g. name@domain.com).",
                          },
                          setValueAs: (v: string) => v.trim().toLowerCase(),
                        })}
                      />
                      {errors.email && <p className="form-error">{errors.email.message}</p>}
                    </div>
                  </div>

                  {/* Phone & Company */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                      gap: 20,
                      marginBottom: 20,
                    }}
                  >
                    <div>
                      <label className="form-label" htmlFor="reg-phone">Phone Number *</label>
                      <input
                        id="reg-phone"
                        type="tel"
                        className="form-input"
                        placeholder="+91 98765 43210"
                        {...register("phone", {
                          required: "Phone number is required.",
                          pattern: {
                            value: /^(?:\+91|91|0)?[6-9]\d{9}$/,
                            message: "Enter a valid 10-digit Indian mobile number (6–9 prefix).",
                          },
                          setValueAs: (v: string) => v.replace(/[\s\-()]/g, ""),
                        })}
                      />
                      {errors.phone && <p className="form-error">{errors.phone.message}</p>}
                    </div>
                    <div>
                      <label className="form-label" htmlFor="reg-company">Company / Organisation (optional)</label>
                      <input
                        id="reg-company"
                        className="form-input"
                        placeholder="Your company name"
                        {...register("company")}
                      />
                    </div>
                  </div>

                  {/* Preferred City — commented out */}
                  {/* <div style={{ marginBottom: 20 }}>
                    <label className="form-label" htmlFor="reg-city">Preferred City *</label>
                    <select
                      id="reg-city"
                      className="form-input"
                      {...register("city", { required: "Please select a city" })}
                      defaultValue=""
                    >
                      <option value="" disabled>Select a city</option>
                      {cities.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                    {errors.city && <p className="form-error">{errors.city.message}</p>}
                  </div> */}

                  {/* Message */}
                  <div style={{ marginBottom: 28 }}>
                    <label className="form-label" htmlFor="reg-message">Message (optional)</label>
                    <textarea
                      id="reg-message"
                      className="form-input"
                      placeholder="Any specific requirements or questions..."
                      rows={4}
                      style={{ resize: "vertical" }}
                      {...register("message")}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary"
                    disabled={isSubmitting}
                    style={{
                      width: "100%",
                      justifyContent: "center",
                      fontSize: "1rem",
                      padding: "16px",
                      opacity: isSubmitting ? 0.7 : 1,
                    }}
                  >
                    {isSubmitting ? "Submitting..." : (
                      <>
                        Submit Registration <ArrowRight size={18} />
                      </>
                    )}
                  </button>

                  {submitError && (
                    <p
                      style={{
                        textAlign: "center",
                        marginTop: 12,
                        fontFamily: "var(--font-body)",
                        fontSize: "0.875rem",
                        color: "#c0392b",
                        background: "rgba(192,57,43,0.07)",
                        borderRadius: 8,
                        padding: "10px 16px",
                      }}
                    >
                      {submitError}
                    </p>
                  )}

                  <p
                    style={{
                      textAlign: "center",
                      marginTop: 16,
                      fontFamily: "var(--font-body)",
                      fontSize: "0.8125rem",
                      color: "var(--medium-gray)",
                    }}
                  >
                    By registering, you agree to receive updates about the Dholera Property Expo 2026.
                  </p>
                </form>
              </AnimatedSection>
            </>
          )}
        </div>
      </section>

     
    </>
  );
}
