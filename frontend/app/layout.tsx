import "./globals.css";
import type { Metadata } from "next";
import DashboardShell from "../components/dashboard-shell";

export const metadata: Metadata = {
  title: "Hirvanta",
  description: "AI Career Platform"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <DashboardShell>{children}</DashboardShell>
      </body>
    </html>
  );
}
