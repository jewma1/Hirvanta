"use client";

import {
  FileText,
  Briefcase,
  Mic,
  Bot,
  Mail,
  MessageSquare,
  BarChart,
  CreditCard,
} from "lucide-react";

export default function DashboardPage() {
  const cards = [
    { title: "Resume Builder", desc: "Create AI resume", link: "/resume", icon: FileText },
    { title: "Job Finder", desc: "Find jobs instantly", link: "/jobs", icon: Briefcase },
    { title: "Interview Coach", desc: "Practice interviews", link: "/interview", icon: Mic },
    { title: "Career Assistant", desc: "AI voice guidance", link: "/career-coach", icon: Bot },
    { title: "Cover Letter", desc: "Generate cover letters", link: "/cover-letter", icon: Mail },
    { title: "Recruiter Messages", desc: "Message recruiters", link: "/recruiter", icon: MessageSquare },
    { title: "Job Tracker", desc: "Track applications", link: "/tracker", icon: BarChart },
    { title: "Pricing", desc: "View plans", link: "/pricing", icon: CreditCard },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-6">
        {cards.map((card, i) => {
          const Icon = card.icon;
          return (
            <a
              key={i}
              href={card.link}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-blue-600" />
              </div>

              <h2 className="font-semibold text-lg mb-2">
                {card.title}
              </h2>

              <p className="text-gray-500 text-sm">
                {card.desc}
              </p>
            </a>
          );
        })}
      </div>
    </div>
  );
}
