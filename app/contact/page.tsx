"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

const subjects = [
  "Investor Enquiry",
  "Developer Partnership",
  "Channel Partner Registration",
  "Media & Press",
  "Sponsorship",
  "General Enquiry",
];

const contactInfo = [
  {
    icon: <Mail size={22} />,
    label: "Email",
    value: "info@expodholera.com",
    sub: "We'll respond within 24 hours",
  },
  {
    icon: <Phone size={22} />,
    label: "Phone",
    value: "+91 XXXXX XXXXX",
    sub: "Mon–Sat, 10 AM – 7 PM IST",
  },
  {
    icon: <MapPin size={22} />,
    label: "Office",
    value: "Ahmedabad, Gujarat",
    sub: "India",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>();

  const onSubmit = async () => {
    // Simulate submit
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
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
              Get In Touch
            </h1>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.0625rem",
                color: "rgba(255,255,255,0.65)",
                maxWidth: 520,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Have questions about the Dholera Property Expo? We&apos;d love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT INFO CARDS */}
      <section style={{ background: "var(--white)", padding: "80px 0 0" }}>
        <div className="container-main">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 24,
              marginTop: -60,
              position: "relative",
              zIndex: 2,
            }}
          >
            {contactInfo.map((info, i) => (
              <AnimatedSection key={info.label} delay={i * 0.1}>
                <div
                  className="card"
                  style={{
                    textAlign: "center",
                    padding: "36px 28px",
                    background: "var(--white)",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                  }}
                >
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 12,
                      background: "rgba(200, 145, 58, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--gold)",
                      margin: "0 auto 16px",
                    }}
                  >
                    {info.icon}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "var(--medium-gray)",
                      marginBottom: 8,
                    }}
                  >
                    {info.label}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "1.0625rem",
                      fontWeight: 600,
                      color: "var(--charcoal)",
                      marginBottom: 4,
                    }}
                  >
                    {info.value}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.8125rem",
                      color: "var(--medium-gray)",
                      margin: 0,
                    }}
                  >
                    {info.sub}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container-main" style={{ maxWidth: 720, margin: "0 auto", padding: "0 24px" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div className="accent-line-center" style={{ marginBottom: 20 }} />
              <h2
                className="heading-display"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "var(--navy)", marginBottom: 12 }}
              >
                Send Us a Message
              </h2>
              <p className="body-text" style={{ fontSize: "1rem" }}>
                Fill out the form below and our team will get back to you shortly.
              </p>
            </div>
          </AnimatedSection>

          {submitted ? (
            <AnimatedSection>
              <div
                style={{
                  textAlign: "center",
                  padding: "64px 32px",
                  background: "var(--off-white)",
                  borderRadius: 16,
                }}
              >
                <CheckCircle size={48} style={{ color: "var(--gold)", marginBottom: 20 }} />
                <h3
                  className="heading-display"
                  style={{ fontSize: "1.5rem", color: "var(--navy)", marginBottom: 12 }}
                >
                  Message Sent!
                </h3>
                <p className="body-text" style={{ fontSize: "1rem" }}>
                  Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            </AnimatedSection>
          ) : (
            <AnimatedSection delay={0.1}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                    gap: 20,
                    marginBottom: 20,
                  }}
                >
                  <div>
                    <label className="form-label" htmlFor="contact-name">Full Name</label>
                    <input
                      id="contact-name"
                      className="form-input"
                      placeholder="Your full name"
                      {...register("name", { required: "Name is required", minLength: { value: 2, message: "Min 2 characters" } })}
                    />
                    {errors.name && <p className="form-error">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="form-label" htmlFor="contact-email">Email Address</label>
                    <input
                      id="contact-email"
                      type="email"
                      className="form-input"
                      placeholder="you@example.com"
                      {...register("email", { required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" } })}
                    />
                    {errors.email && <p className="form-error">{errors.email.message}</p>}
                  </div>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                    gap: 20,
                    marginBottom: 20,
                  }}
                >
                  <div>
                    <label className="form-label" htmlFor="contact-phone">Phone Number</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      className="form-input"
                      placeholder="+91 XXXXX XXXXX"
                      {...register("phone", { required: "Phone is required", minLength: { value: 10, message: "Min 10 digits" } })}
                    />
                    {errors.phone && <p className="form-error">{errors.phone.message}</p>}
                  </div>
                  <div>
                    <label className="form-label" htmlFor="contact-subject">Subject</label>
                    <select
                      id="contact-subject"
                      className="form-input"
                      {...register("subject", { required: "Please select a subject" })}
                      defaultValue=""
                    >
                      <option value="" disabled>Select a subject</option>
                      {subjects.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    {errors.subject && <p className="form-error">{errors.subject.message}</p>}
                  </div>
                </div>
                <div style={{ marginBottom: 28 }}>
                  <label className="form-label" htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    className="form-input"
                    placeholder="Tell us how we can help..."
                    rows={5}
                    style={{ resize: "vertical" }}
                    {...register("message", { required: "Message is required", minLength: { value: 10, message: "Min 10 characters" } })}
                  />
                  {errors.message && <p className="form-error">{errors.message.message}</p>}
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
                  {isSubmitting ? "Sending..." : (
                    <>
                      Send Message <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </AnimatedSection>
          )}
        </div>
      </section>
    </>
  );
}
