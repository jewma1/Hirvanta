import './globals.css'
import Link from 'next/link'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#f5f7fc]">
        <header className="w-full border-b bg-white">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

            {/* LOGO HERE */}
            <Link href="/">
              <img 
                src="/hirvanta-logo.png" 
                alt="Hirvanta" 
                className="h-10 w-auto"
              />
            </Link>

            <div className="flex gap-6">
              <a href="#">Features</a>
              <a href="#">How it Works</a>
              <a href="#">Pricing</a>
            </div>

            <a href="/dashboard" className="bg-blue-600 text-white px-4 py-2 rounded-lg">
              Dashboard
            </a>
          </div>
        </header>

        {children}
      </body>
    </html>
  )
}
