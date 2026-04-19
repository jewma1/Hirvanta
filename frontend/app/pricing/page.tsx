"use client";

const plans = [
  {
    name: "Free",
    price: "₹0",
    description: "Best for trying the platform",
    features: [
      "1 Resume",
      "1 Cover Letter",
      "Basic Job Search",
      "Basic Interview Practice",
    ],
    button: "Get Started",
    highlighted: false,
  },
  {
    name: "Weekly",
    price: "₹7",
    description: "Best for short-term job applications",
    features: [
      "Unlimited Resume Edits",
      "Unlimited Cover Letters",
      "AI Career Assistant",
      "Recruiter Messages",
      "Job Tracker",
    ],
    button: "Choose Weekly",
    highlighted: false,
  },
  {
    name: "Monthly",
    price: "₹99",
    description: "Best value for active job seekers",
    features: [
      "Everything in Weekly",
      "Unlimited Job Search",
      "Unlimited Interview Practice",
      "Priority Access",
      "Faster Support",
    ],
    button: "Choose Monthly",
    highlighted: true,
  },
  {
    name: "Lifetime",
    price: "₹299",
    description: "Pay once and use forever",
    features: [
      "Everything in Monthly",
      "Lifetime Access",
      "No Renewal Needed",
      "Priority Support",
      "Best Long-Term Value",
    ],
    button: "Get Lifetime",
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl bg-white p-8 shadow-sm">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">
            Simple Pricing
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Choose the plan that fits your job search journey.
          </p>
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl border bg-white p-6 shadow-sm ${
                plan.highlighted
                  ? "border-brand-600 ring-2 ring-brand-100"
                  : "border-slate-200"
              }`}
            >
              {plan.highlighted && (
                <div className="mb-4 inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                  Most Popular
                </div>
              )}

              <h2 className="text-2xl font-bold text-slate-900">{plan.name}</h2>
              <p className="mt-2 text-sm text-slate-500">{plan.description}</p>

              <div className="mt-5 text-4xl font-extrabold text-slate-900">
                {plan.price}
              </div>

              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-0.5 text-brand-600">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                  plan.highlighted
                    ? "bg-brand-600 text-white hover:opacity-90"
                    : "bg-slate-900 text-white hover:opacity-90"
                }`}
              >
                {plan.button}
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
