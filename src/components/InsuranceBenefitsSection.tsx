import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import ReporterMicSVG from "@/components/ReporterMicSVG";

const plans = [
  {
    id: "life",
    tag: "జీవిత బీమా · Life Insurance",
    icon: "favorite",
    title: "జీవిత బీమా",
    titleEn: "Life Insurance",
    subtitle: "₹5 లక్షల కవరేజ్ · ₹5 Lakh Coverage",
    tagColor: "bg-crimson/10 text-crimson",
    accentColor: "border-crimson",
    imgSrc: "",
    imgAlt: "Life insurance for journalists",
    useSvg: true,
    description:
      "మీరు యూనియన్ సభ్యుడు అయిన వెంటనే ₹5 లక్షల జీవిత బీమా ఆటోమేటిగ్గా వర్తిస్తుంది — ఏ మెడికల్ టెస్ట్ లేకుండా, ఏ ఫీజు లేకుండా. మీకు ఏమైనా జరిగినా మీ కుటుంబం ఒంటరిగా ఉండదు.",
    descriptionEn: "Automatic ₹5 Lakh life cover from day one of membership — no medical test, no premium, fully union-funded.",
    perks: [
      "₹5 లక్షలు నేరుగా కుటుంబానికి · ₹5 Lakh to family",
      "సభ్యత్వం రోజే వర్తిస్తుంది · Active from day 1",
      "మెడికల్ టెస్ట్ అవసరం లేదు · No medical test",
      "ప్రమాద మరణంలో రెండింతలు · Accidental death: 2×",
      "శాశ్వత వికలాంగత కవర్ · Disability cover",
    ],
    stat: { val: "₹5 లక్షలు", label: "కుటుంబానికి · Sum Assured" },
    funded: "యూనియన్ చెల్లిస్తుంది · 100% Union Funded",
  },
  {
    id: "health",
    tag: "కుటుంబ ఆరోగ్య బీమా · Family Health",
    icon: "family_restroom",
    title: "కుటుంబ ఆరోగ్య బీమా",
    titleEn: "Family Health Insurance",
    subtitle: "భర్త + భార్య + 2 పిల్లలు · ₹3 లక్షలు",
    tagColor: "bg-saffron/15 text-saffron-dim",
    accentColor: "border-saffron",
    imgSrc: "",
    imgAlt: "Family health insurance for journalists",
    useFamilySvg: true,
    description:
      "మీరు మాత్రమే కాదు — మీ భార్య/భర్త మరియు 2 పిల్లలతో సహా మొత్తం కుటుంబానికి ₹3 లక్షల క్యాష్‌లెస్ బీమా. ఆసుపత్రిలో చేరిన రోజు నుండి ఒక్క రూపాయి కూడా మీరు చెల్లించాల్సిన అవసరం లేదు.",
    descriptionEn: "₹3 Lakh cashless cover for your entire family — self, spouse, and 2 children. Walk into 2,000+ hospitals without paying a single rupee.",
    perks: [
      "భర్త/భార్య కవర్ అవుతారు · Spouse covered",
      "2 పిల్లలు కవర్ అవుతారు · 2 children covered",
      "2,000+ ఆసుపత్రులలో క్యాష్‌లెస్ · Cashless hospitals",
      "ఒక్క రూపాయి చెల్లింపు లేదు · Zero out-of-pocket",
      "మానసిక ఆరోగ్య సహాయం · Mental health cover",
    ],
    stat: { val: "₹3 లక్షలు", label: "4 మంది కుటుంబానికి · Family of 4" },
    funded: "యూనియన్ చెల్లిస్తుంది · Zero Cost",
  },
  {
    id: "accident",
    tag: "Accident & Disability",
    icon: "personal_injury",
    title: "Field Accident Cover",
    subtitle: "High-Risk Assignment Shield",
    tagColor: "bg-navy-800/10 text-navy",
    accentColor: "border-navy-700",
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDh-PuCXMeAteYJHoI8PZmXT_UfeiMtNyjG6lT0nQU9-7HMU3ILmpIRDSrkYndeL-YBJK347Stib7xuB60Dvh3BZpJNBhE2xk4aNn5bf8AoNGtfffauP8zthGuxk9b_KzVZ4sBsGqH9qVFGSrYk6r2BF4RmRbSnvo_gfFQTjDxdkvO8FWG2Q50QVf402gpz5xUFM63hSliv-kkSZHe3XiSRGisV0NnJyu34ZYvcl_6rY3dORcUXyLW2CrOjMmQ5UTODBuV92_IGeHcK",
    imgAlt: "Field accident coverage for journalists",
    description:
      "Injury on the field — during protests, conflicts, or natural disasters — triggers immediate claim settlement. Permanent disability benefits ensure your income never stops even when you can't work.",
    perks: [
      "₹5 Lakh accidental disability cover",
      "Temporary disability income replacement",
      "Hospitalisation expenses covered",
      "Field equipment damage compensation",
      "Riot & civil unrest inclusion",
    ],
    stat: { val: "72 hrs", label: "Claim Settlement" },
    funded: "Fast-Track Claims",
  },
];

const additionalPerks = [
  { icon: "school", label: "విద్యా స్కాలర్‌షిప్", sub: "Children of martyred journalists" },
  { icon: "home", label: "గృహ సహాయం", sub: "Emergency rental support" },
  { icon: "airline_seat_flat_angled", label: "పదవీ విరమణ ప్రయోజనాలు", sub: "Post-career pension support" },
  { icon: "medication", label: "మందుల కవర్", sub: "Chronic illness medications" },
  { icon: "flight", label: "ట్రావెల్ ఇన్సూరెన్స్", sub: "International assignments" },
  { icon: "groups", label: "కుటుంబ సహాయం", sub: "Spouse & dependent children" },
];

export default function InsuranceBenefitsSection() {
  return (
    <section id="insurance" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 bg-saffron/15 text-saffron-dim text-xs font-body font-bold tracking-widest uppercase rounded-full">
            Insurance Benefits
          </span>
          <h2 className="font-headline text-4xl lg:text-5xl font-extrabold text-navy tracking-tight">
            మీ కుటుంబం{" "}
            <span className="text-crimson italic">సురక్షితం</span>
          </h2>
          <p className="text-base text-navy font-headline font-bold mt-1">మీరు చేరిన రోజు నుండే బీమా వర్తిస్తుంది — ఒక్క రూపాయి మీరు చెల్లించాల్సిన అవసరం లేదు.</p>
          <p className="text-lg text-on-surface-muted font-body leading-relaxed">
            Your Family is Secure — Insurance starts from day one of membership. Every premium is paid by the Union.
          </p>
        </div>

        {/* Main insurance plan cards */}
        <div className="space-y-10">
          {plans.map((plan, i) => (
            <div
              key={plan.id}
              className={`card-hover bg-surface-card rounded-2xl overflow-hidden ghost-border border-l-4 ${plan.accentColor} grid grid-cols-1 lg:grid-cols-12 ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image side */}
              <div
                className={`lg:col-span-4 relative min-h-56 ${
                  i % 2 === 1 ? "lg:order-2" : "lg:order-1"
                }`}
              >
                {plan.useSvg ? (
                  <div className="absolute inset-0 bg-navy flex items-center justify-center overflow-hidden">
                    <ReporterMicSVG width={260} height={270} />
                  </div>
                ) : "useFamilySvg" in plan ? (
                  <div className="absolute inset-0 bg-linear-to-br from-saffron/20 via-navy to-navy flex flex-col items-center justify-center gap-3 p-6">
                    {/* Family icon group */}
                    <div className="flex items-end justify-center gap-2">
                      <div className="flex flex-col items-center gap-1">
                        <span className="material-symbols-outlined text-5xl text-saffron" style={{ fontVariationSettings: "'FILL' 1" }}>man</span>
                        <span className="text-[10px] text-saffron font-bold tracking-wide">భర్త</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <span className="material-symbols-outlined text-5xl text-white" style={{ fontVariationSettings: "'FILL' 1" }}>woman</span>
                        <span className="text-[10px] text-white font-bold tracking-wide">భార్య</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <span className="material-symbols-outlined text-3xl text-saffron/70" style={{ fontVariationSettings: "'FILL' 1" }}>child_care</span>
                        <span className="text-[10px] text-saffron/70 font-bold tracking-wide">పిల్లలు</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <span className="material-symbols-outlined text-3xl text-saffron/70" style={{ fontVariationSettings: "'FILL' 1" }}>child_care</span>
                        <span className="text-[10px] text-saffron/70 font-bold tracking-wide">2</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-saffron font-headline font-extrabold text-2xl">4 మంది</p>
                      <p className="text-white/70 text-xs font-body">Family of 4 covered</p>
                    </div>
                  </div>
                ) : (
                  <Image
                    src={plan.imgSrc}
                    alt={plan.imgAlt}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                )}
                <div className="absolute inset-0 bg-linear-to-r from-transparent to-surface-card/10" />
                {/* Stat badge */}
                <div className="absolute bottom-4 left-4 bg-navy/90 backdrop-blur-sm rounded-xl px-4 py-3 text-white">
                  <p className="font-headline text-2xl font-bold">{plan.stat.val}</p>
                  <p className="text-xs text-saffron font-body font-semibold tracking-wider uppercase">
                    {plan.stat.label}
                  </p>
                </div>
              </div>

              {/* Content side */}
              <div
                className={`lg:col-span-8 p-8 lg:p-10 space-y-5 ${
                  i % 2 === 1 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex items-center gap-3">
                    <span
                      className="material-symbols-outlined text-3xl text-on-surface-muted"
                      style={{ fontVariationSettings: "'FILL' 0" }}
                    >
                      {plan.icon}
                    </span>
                    <div>
                      <h3 className="font-headline text-2xl font-bold text-navy">
                        {plan.title}
                      </h3>
                      {"titleEn" in plan && (
                        <p className="text-navy/50 font-body text-xs font-medium">{(plan as {titleEn: string}).titleEn}</p>
                      )}
                      <p className="text-saffron-dim font-body text-sm font-semibold mt-0.5">
                        {plan.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-body font-bold tracking-wide uppercase ${plan.tagColor}`}
                    >
                      {plan.tag}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-body font-bold tracking-wide uppercase bg-green-50 text-green-700">
                      {plan.funded}
                    </span>
                  </div>
                </div>

                <p className="text-navy font-body font-medium text-base leading-relaxed">
                  {plan.description}
                </p>
                {"descriptionEn" in plan && (
                  <p className="text-on-surface-muted font-body text-sm leading-relaxed italic border-l-2 border-saffron/40 pl-3">
                    {(plan as {descriptionEn: string}).descriptionEn}
                  </p>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {plan.perks.map((perk) => (
                    <div key={perk} className="flex items-center gap-2">
                      <CheckCircle2
                        size={15}
                        className="text-saffron-dim shrink-0"
                      />
                      <span className="text-sm font-body text-on-surface">
                        {perk}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href="/join"
                  className="inline-flex items-center gap-2 bg-saffron hover:bg-saffron-dim text-navy px-6 py-3 rounded-xl font-bold text-sm transition-all hover:-translate-y-0.5 shadow-md shadow-saffron/20"
                >
                  <span
                    className="material-symbols-outlined text-base"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    verified_user
                  </span>
                  ఇప్పుడే సభ్యత్వం తీసుకోండి · Join Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Perks Grid */}
        <div className="mt-16">
          <h3 className="font-headline text-2xl font-bold text-navy text-center mb-1">
            మరిన్ని సభ్య ప్రయోజనాలు…
          </h3>
          <p className="text-center text-on-surface-muted text-sm font-body mb-8">And Many More Member Perks</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {additionalPerks.map((perk) => (
              <div
                key={perk.label}
                className="bg-surface-card rounded-xl p-5 text-center ghost-border card-hover"
              >
                <span
                  className="material-symbols-outlined text-3xl text-saffron-dim block mb-2"
                  style={{ fontVariationSettings: "'FILL' 0" }}
                >
                  {perk.icon}
                </span>
                <p className="text-sm font-body font-bold text-navy leading-tight">
                  {perk.label}
                </p>
                <p className="text-[11px] text-on-surface-muted font-body mt-1">
                  {perk.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
