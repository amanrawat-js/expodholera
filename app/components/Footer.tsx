"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const footerLinks = {
  "Quick Links": [
    { href: "/", label: "Home" },
    // { href: "/about", label: "About" },
    { href: "/events", label: "Events" },
    // { href: "/contact", label: "Contact" },
    { href: "/register", label: "Register" },
  ],
  Participants: [
    { href: "/register", label: "Developers" },
    { href: "/register", label: "Investors" },
    { href: "/register", label: "Channel Partners" },
    { href: "/register", label: "Financial Institutions" },
  ],
};

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--navy-dark)",
        color: "var(--white)",
        padding: "80px 0 0",
      }}
    >
      <div className="container-main">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 48,
            paddingBottom: 60,
            borderBottom: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {/* Brand */}
          <div>
            <Image
              src="/logo.png"
              alt="Expodholera"
              width={260}
              height={100}
              style={{ height: 70, width: "auto", objectFit: "contain", filter: "brightness(1.5)" }}
            />
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.9375rem",
                color: "rgba(255,255,255,0.6)",
                lineHeight: 1.7,
                maxWidth: 280,
                marginBottom: 24,
              }}
            >
              India&apos;s first dedicated Dholera Property Expo roadshow - bringing investment opportunities directly to you across major cities.
            </p>
            <Link href="/register" className="btn-primary" style={{ fontSize: "0.8125rem", padding: "10px 20px" }}>
              Register Now <ArrowRight size={14} />
            </Link>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--gold)",
                  marginBottom: 20,
                }}
              >
                {title}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.9375rem",
                        color: "rgba(255,255,255,0.6)",
                        textDecoration: "none",
                        transition: "color 0.3s ease",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--white)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.8125rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--gold)",
                marginBottom: 20,
              }}
            >
              Contact
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.6)", margin: 0 }}>
                info@expodholera.com
              </p>
              <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.6)", margin: 0 }}>
                +91 98101 52798
              </p>
              <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.6)", margin: 0 }}>
                2319, Wave One, Noida 201301, Uttar Pradesh
              </p>
            </div>

            {/* Social icons placeholder */}
            <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
              {["LinkedIn", "Instagram", "YouTube", "X"].map((name) => (
                <a
                  key={name}
                  href="#"
                  aria-label={name}
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    border: "1px solid rgba(255,255,255,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.5)",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    fontFamily: "var(--font-body)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--gold)";
                    e.currentTarget.style.color = "var(--gold)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                  }}
                >
                  {name[0]}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
            padding: "24px 0",
          }}
        >
          <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.4)", margin: 0 }}>
            © 2026 Expodholera. All rights reserved.
          </p>
          <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.4)", margin: 0 }}>
            Dholera Property Expo India 2026 — From Vision to Value
          </p>
        </div>
      </div>
    </footer>
  );
}
