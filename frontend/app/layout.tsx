"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const menu = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Resume Builder", path: "/resume" },
    { name: "Job Finder", path: "/jobs" },
    { name: "Interview Coach", path: "/interview" },
    { name: "Career Assistant", path: "/career-coach" },
    { name: "Cover Letter", path: "/cover-letter" },
    { name: "Recruiter Messages", path: "/recruiter" },
    { name: "Job Tracker", path: "/tracker" },
    { name: "Pricing", path: "/pricing" },
  ];

  return (
    <html lang="en">
      <body className="bg-gray-50">

        <div className="flex h-screen">

          {/* Sidebar */}
          <aside className="w-64 bg-white border-r p-6 flex flex-col">

            <h1 className="text-2xl font-bold mb-8">
              Hirvanta
            </h1>

            <nav className="flex flex-col gap-2">
              {menu.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`p-2 rounded-lg ${
                    pathname === item.path
                      ? "bg-blue-600 text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="mt-auto pt-6 border-t">
              <Link href="/profile" className="block p-2">
                Profile
              </Link>
              <Link href="/login" className="block p-2">
                Logout
              </Link>
            </div>

          </aside>

          {/* Main */}
          <div className="flex-1 flex flex-col">

            {/* Header */}
            <header className="bg-white border-b px-6 py-4 flex justify-between items-center">

              <div className="text-lg font-semibold">
                AI Career Platform
              </div>

              <div className="flex items-center gap-4">

                <input
                  placeholder="Search..."
                  className="border px-3 py-2 rounded-lg"
                />

                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center">
                  U
                </div>

              </div>

            </header>

            {/* Content */}
            <main className="p-6 overflow-auto">
              {children}
            </main>

          </div>

        </div>

      </body>
    </html>
  );
}
