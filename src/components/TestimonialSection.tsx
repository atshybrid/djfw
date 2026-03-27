import Image from "next/image";

const members = [
  {
    name: "Vikram Sethi",
    role: "Senior Correspondent",
    district: "Northern Province",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDh-PuCXMeAteYJHoI8PZmXT_UfeiMtNyjG6lT0nQU9-7HMU3ILmpIRDSrkYndeL-YBJK347Stib7xuB60Dvh3BZpJNBhE2xk4aNn5bf8AoNGtfffauP8zthGuxk9b_KzVZ4sBsGqH9qVFGSrYk6r2BF4RmRbSnvo_gfFQTjDxdkvO8FWG2Q50QVf402gpz5xUFM63hSliv-kkSZHe3XiSRGisV0NnJyu34ZYvcl_6rY3dORcUXyLW2CrOjMmQ5UTODBuV92_IGeHcK",
    quote:
      "When I faced a legal notice for my reportage, the Union advocates stepped in within hours. Knowing my family is insured for ₹10 Lakhs gives me the courage to pursue the truth without fear.",
    badge: "Union Helped: Legal Notice Defence",
  },
];

const spotlightStats = [
  { icon: "calendar_month", val: "2 hrs", sub: "Response time" },
  { icon: "gavel", val: "Free", sub: "Legal defence" },
  { icon: "verified_user", val: "Active", sub: "Insurance cover" },
];

export default function TestimonialSection() {
  return (
    <section className="py-24 bg-surface-low">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-16">
        {/* Member Spotlight */}
        {members.map((m) => (
          <div
            key={m.name}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Photo card */}
            <div className="lg:col-span-4">
              <div className="relative rounded-2xl overflow-hidden aspect-4/5 shadow-2xl shadow-navy/20 ghost-border">
                <Image
                  src={m.img}
                  alt={m.name}
                  fill
                  className="object-cover object-top"
                  unoptimized
                />
                {/* Bottom overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-navy via-navy/60 to-transparent p-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-saffron text-navy text-[10px] font-body font-bold tracking-widest uppercase rounded-full mb-3">
                    <span
                      className="material-symbols-outlined text-xs"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      verified
                    </span>
                    Verified Member
                  </span>
                  <h3 className="font-headline font-bold text-white text-lg">
                    {m.name}
                  </h3>
                  <p className="text-slate-300 text-sm font-body">
                    {m.role} · Insured &amp; Protected
                  </p>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="lg:col-span-8 space-y-8">
              <div className="flex items-start gap-4">
                <span
                  className="material-symbols-outlined text-saffron text-5xl mt-1 shrink-0"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  format_quote
                </span>
                <p className="font-headline italic text-3xl lg:text-4xl text-navy leading-snug tracking-tight">
                  &ldquo;{m.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-2">
                <div className="h-px flex-1 bg-saffron/30" />
                <p className="text-xs font-body font-bold text-saffron-dim tracking-widest uppercase">
                  Member Spotlight
                </p>
                <div className="h-px flex-1 bg-saffron/30" />
              </div>

              {/* Help received badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-crimson/8 rounded-xl border border-crimson/15">
                <span
                  className="material-symbols-outlined text-crimson text-base"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  shield_check
                </span>
                <p className="text-sm font-body font-semibold text-crimson">
                  {m.badge}
                </p>
              </div>

              {/* Mini stats */}
              <div className="flex flex-wrap gap-6">
                {spotlightStats.map((s) => (
                  <div key={s.sub} className="flex items-center gap-2">
                    <span
                      className="material-symbols-outlined text-xl text-saffron-dim"
                      style={{ fontVariationSettings: "'FILL' 0" }}
                    >
                      {s.icon}
                    </span>
                    <div>
                      <p className="text-base font-headline font-bold text-navy leading-none">
                        {s.val}
                      </p>
                      <p className="text-xs text-on-surface-muted font-body">
                        {s.sub}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Trust indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: "newspaper", label: "Press Freedom", sub: "Our core value" },
            { icon: "handshake", label: "Collective Strength", sub: "1,240 members united" },
            { icon: "lock", label: "Confidentiality", sub: "All cases fully private" },
            { icon: "star", label: "98% Satisfaction", sub: "Member survey 2024" },
          ].map((t) => (
            <div
              key={t.label}
              className="bg-surface-card rounded-xl p-5 text-center ghost-border card-hover"
            >
              <span
                className="material-symbols-outlined text-3xl text-navy block mb-2"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                {t.icon}
              </span>
              <p className="text-sm font-headline font-bold text-navy">{t.label}</p>
              <p className="text-xs text-on-surface-muted font-body mt-0.5">
                {t.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
