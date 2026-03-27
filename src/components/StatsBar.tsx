const stats = [
  {
    icon: "groups",
    value: "1,240+",
    label: "Active Members",
    sub: "Across Telangana",
  },
  {
    icon: "gavel",
    value: "347",
    label: "Legal Cases Won",
    sub: "Since 2023",
  },
  {
    icon: "health_and_safety",
    value: "₹10 Lakh",
    label: "Life Cover Per Member",
    sub: "Fully Funded by Union",
  },
  {
    icon: "verified",
    value: "343/2025",
    label: "Registration No.",
    sub: "Official & Govt. Recognised",
  },
  {
    icon: "support_agent",
    value: "24/7",
    label: "Emergency Legal Line",
    sub: "Always Available",
  },
];

export default function StatsBar() {
  return (
    <section className="bg-navy-800 border-y border-white/8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center text-center gap-2 group"
            >
              <span
                className="material-symbols-outlined text-saffron text-2xl group-hover:scale-110 transition-transform"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {s.icon}
              </span>
              <div>
                <p className="text-2xl font-headline font-bold text-white leading-none">
                  {s.value}
                </p>
                <p className="text-xs font-body font-semibold text-saffron uppercase tracking-wider mt-1">
                  {s.label}
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5">{s.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
