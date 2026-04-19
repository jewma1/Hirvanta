"use client";

import Link from "next/link";

const plans = [
  {
    name: "Free",
    subtitle: "Get started",
    price: "Free",
    features: [
      "3 Resume generations",
      "2 Cover letters",
      "Unlimited chat interviews",
      "2 Voice interviews",
      "Unlimited job search",
    ],
    button: "Start Free",
    buttonStyle: "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50",
  },
  {
    name: "Weekly",
    subtitle: "Basic access",
    price: "₹7",
    suffix: "/week",
    features: [
      "10 Resumes",
      "10 Cover letters",
      "10 Voice interviews",
      "Resume optimizer",
    ],
    button: "Get Weekly",
    buttonStyle: "bg-[#2546A8] text-white hover:opacity-90",
  },
  {
    name: "Monthly",
    subtitle: "Advanced tools",
    price: "₹99",
    suffix: "/mo",
    features: [
      "40 Resumes",
      "30 Cover letters",
      "25 Voice interviews",
      "AI Career assistant",
      "Job tracker",
    ],
    button: "Get Monthly",
    featured: true,
    buttonStyle: "bg-white text-[#2446ad] hover:opacity-90",
  },
  {
    name: "Lifetime",
    subtitle: "Everything unlimited",
    price: "₹299",
    suffix: " once",
    features: [
      "Everything unlimited",
      "Full AI career counselor",
      "All premium templates",
      "Future features",
    ],
    button: "Get Lifetime",
    best: true,
    buttonStyle: "bg-emerald-500 text-white hover:opacity-90",
  },
];

export default function PricingPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-[28px] bg-white p-8 shadow-soft">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-5xl font-bold tracking-tight text-slate-900">
            Choose Your Plan
          </h1>
          <p className="mt-4 text-lg text-slate-500">
            Start free, upgrade when you need more power
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="inline-flex rounded-full bg-[#2546A8] px-4 py-2 text-sm font-semibold text-white">
            International Cards
          </div>
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl border p-6 shadow-sm ${
                plan.featured
                  ? "bg-[#2446ad] text-white border-[#2446ad] shadow-soft"
                  : plan.best
                  ? "border-2 border-emerald-500 bg-white"
                  : "border-slate-200 bg-white"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 right-5 rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold text-white">
                  Popular
                </div>
              )}

              {plan.best && (
                <div className="absolute -top-3 right-5 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white">
                  Best Value
                </div>
              )}

              <h2 className={`text-2xl font-bold ${plan.featured ? "text-white" : "text-slate-900"}`}>
                {plan.name}
              </h2>
              <p className={`mt-2 text-sm ${plan.featured ? "text-blue-100" : "text-slate-500"}`}>
                {plan.subtitle}
              </p>

              <div className={`mt-5 text-5xl font-extrabold ${plan.featured ? "text-white" : "text-slate-900"}`}>
                {plan.price}
                {plan.suffix ? <span className="text-lg font-medium">{plan.suffix}</span> : null}
              </div>

              <ul className={`mt-6 space-y-3 text-sm ${plan.featured ? "text-blue-50" : "text-slate-700"}`}>
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className={plan.featured ? "text-emerald-300" : "text-emerald-500"}>✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/signup"
                className={`mt-8 block rounded-2xl px-4 py-3 text-center text-sm font-semibold transition ${plan.buttonStyle}`}
              >
                {plan.button}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
