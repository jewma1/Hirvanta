"use client";

export default function DashboardPage() {
  const cards = [
    { title: "Resume Builder", desc: "Create AI resume", link: "/resume" },
    { title: "Job Finder", desc: "Find jobs instantly", link: "/jobs" },
    { title: "Interview Coach", desc: "Practice interviews", link: "/interview" },
    { title: "Career Assistant", desc: "AI voice guidance", link: "/career-coach" },
    { title: "Cover Letter", desc: "Generate cover letters", link: "/cover-letter" },
    { title: "Recruiter Messages", desc: "Message recruiters", link: "/recruiter" },
    { title: "Job Tracker", desc: "Track applications", link: "/tracker" },
    { title: "Pricing", desc: "View plans", link: "/pricing" },
  ];

  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-6">

        {cards.map((card, i) => (
          <a
            key={i}
            href={card.link}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >

            <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4"></div>

            <h2 className="font-semibold text-lg mb-2">
              {card.title}
            </h2>

            <p className="text-gray-500 text-sm">
              {card.desc}
            </p>

          </a>
        ))}

      </div>

    </div>
  );
}
