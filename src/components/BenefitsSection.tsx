import { CheckCircle2, ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: "favorite",
    title: "జీవిత బీమా",
    subtitle: "₹5 లక్షలు · Life Insurance",
    color: "border-crimson",
    iconBg: "bg-crimson/10",
    iconColor: "text-crimson",
    description:
      "మీరు చనిపోయినా లేదా శాశ్వత వికలాంగత వచ్చినా — ₹5 లక్షలు నేరుగా మీ కుటుంబానికి అందుతాయి. సభ్యత్వం తీసుకున్న రోజే వర్తిస్తుంది, మెడికల్ టెస్ట్ లేదు.",
    features: [
      "₹5 లక్షలు కుటుంబానికి · ₹5L to family",
      "హై-రిస్క్ అసైన్‌మెంట్ కవర్",
      "మెడికల్ టెస్ట్ లేదు · No medical test",
      "సభ్యత్వం రోజే వర్తిస్తుంది · From day 1",
    ],
    cta: "సభ్యత్వం తీసుకోండి",
  },
  {
    icon: "family_restroom",
    title: "కుటుంబ ఆరోగ్య బీమా",
    subtitle: "భార్య + భర్త + 2 పిల్లలు · ₹3 లక్షలు",
    color: "border-saffron",
    iconBg: "bg-saffron/10",
    iconColor: "text-saffron",
    description:
      "మీ మొత్తం కుటుంబానికి ₹3 లక్షల క్యాష్‌లెస్ బీమా. 2,000+ ఆసుపత్రులలో ఒక్క రూపాయి అడ్వాన్స్ లేకుండా చికిత్స పొందండి. Family of 4 covered — spouse + 2 children.",
    features: [
      "భార్య/భర్త కవర్ · Spouse covered",
      "2 పిల్లలు కవర్ · 2 children covered",
      "2,000+ క్యాష్‌లెస్ ఆసుపత్రులు",
      "మానసిక ఆరోగ్య సహాయం · Mental health",
    ],
    cta: "ఆసుపత్రుల జాబితా చూడండి",
  },
  {
    icon: "shield_person",
    title: "Legal Defense Fund",
    subtitle: "Unlimited Litigation Support",
    color: "border-navy-700",
    iconBg: "bg-navy-800",
    iconColor: "text-navy-600",
    description:
      "Facing harassment or a defamation case? Our senior trial attorneys specialising in media law and civil rights take over the paperwork, hearings, and defence costs — free for members.",
    features: [
      "Senior Media Law Attorneys",
      "Anti-Harassment Shield",
      "FIR Defence & Bail Support",
      "Free for All Members",
    ],
    cta: "Get Legal Help",
  },
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 bg-saffron/15 text-saffron-dim text-xs font-body font-bold tracking-widest uppercase rounded-full">
            The Policy Shield
          </span>
          <h2 className="font-headline text-4xl lg:text-5xl font-extrabold text-navy tracking-tight">
            మీ రక్షణ,{" "}<span className="text-crimson italic">మా బాధ్యత</span>
          </h2>
          <p className="text-base text-navy font-headline font-semibold">Your Protection, Our Responsibility</p>
          <p className="text-lg text-on-surface-muted font-body leading-relaxed">
            యూనియన్ ప్రీమియం చెల్లిస్తుంది — మీరు పని చేయండి. మీరు, మీ కుటుంబం అందరూ సురక్షితంగా ఉంటారు.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((b) => (
            <div
              key={b.title}
              className={`card-hover bg-surface-card rounded-2xl p-8 relative overflow-hidden ghost-border border-b-4 ${b.color}`}
            >
              {/* Watermark shield */}
              <span
                className="material-symbols-outlined absolute -bottom-6 -right-6 text-[8rem] text-slate-100 pointer-events-none select-none"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                shield
              </span>

              <div className="relative z-10 space-y-5">
                {/* Icon */}
                <div
                  className={`w-14 h-14 ${b.iconBg} rounded-xl flex items-center justify-center`}
                >
                  <span
                    className={`material-symbols-outlined text-3xl ${b.iconColor}`}
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {b.icon}
                  </span>
                </div>

                <div>
                  <h3 className="font-headline text-2xl font-bold text-navy">
                    {b.title}
                  </h3>
                  <p className="text-saffron-dim font-body text-sm font-semibold mt-0.5">
                    {b.subtitle}
                  </p>
                </div>

                <p className="text-on-surface-muted font-body leading-relaxed text-sm">
                  {b.description}
                </p>

                <ul className="space-y-2">
                  {b.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm font-body text-on-surface"
                    >
                      <CheckCircle2
                        size={15}
                        className="text-saffron-dim shrink-0"
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="/join"
                  className="inline-flex items-center gap-1.5 text-sm font-body font-bold text-crimson hover:gap-3 transition-all"
                >
                  {b.cta} <ArrowRight size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
