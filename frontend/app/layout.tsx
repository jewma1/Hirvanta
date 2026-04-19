import "./globals.css";
import DashboardShell from "../components/dashboard-shell";

export const metadata = {
  title: "Hirvanta",
  description: "AI Career Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#f5f7fc] text-slate-900">
        <DashboardShell>{children}</DashboardShell>
      </body>
    </html>
  );
}
