import type { Metadata } from "next";
import { Inter, Playfair_Display, Poppins /*, Raleway */ } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ComingSoon from "./components/ComingSoon";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

// const raleway = Raleway({
//   subsets: ["latin"],
//   variable: "--font-raleway",
//   display: "swap",
// });

export const metadata: Metadata = {
  title: {
    default: "Expodholera - Dholera Property Expo India 2026",
    template: "%s | Expodholera",
  },
  description:
    "India's first dedicated Dholera Property Expo roadshow - connecting investors, developers, and partners across major Indian cities. From Vision to Value.",
  keywords: [
    "Dholera",
    "Property Expo",
    "Dholera SIR",
    "Smart City",
    "Real Estate",
    "Investment",
    "India",
    "2026",
  ],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${poppins.variable} antialiased`}>
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        {/* <Header />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer /> */}
        <ComingSoon />
      </body>
    </html>
  );
}
