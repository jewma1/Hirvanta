import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Hirvanta | Premium AI Career Copilot",
  description: "The professional choice for modern career growth.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ 
        margin: 0, 
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif", 
        backgroundColor: "#F8FAFC",
        color: "#1E293B"
      }}>
        {children}
      </body>
    </html>
  );
}
