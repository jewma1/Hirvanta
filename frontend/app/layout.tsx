import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hirvanta - AI Career Assistant',
  description: 'Build resumes, practice interviews, and advance your career with AI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://accounts.google.com/gsi/client" async defer></script>
      </head>
      <body className="bg-white text-gray-900">
        <div className="flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}