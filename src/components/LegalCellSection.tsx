const services = [
  {
    icon: "balance",
    title: "Unlimited Litigation Support",
    description:
      "We handle paperwork, hearings, and defence costs — completely free for members. Senior media law attorneys fight your case to the end.",
  },
  {
    icon: "personal_injury",
    title: "Anti-Harassment Shield",
    description:
      "Immediate intervention for online targeted harassment, physical intimidation, or workplace bullying. Response within 2 hours of alert.",
  },
  {
    icon: "document_scanner",
    title: "FIR & Legal Notice Defence",
    description:
      "Wrongful FIRs and defamation notices dealt with by our 24/7 emergency legal team. Bail secured, charges contested, reputation defended.",
  },
  {
    icon: "policy",
    title: "Press Freedom Advocacy",
    description:
      "We engage with government bodies, press councils, and media regulators to push back against systemic threats to freedom of the press.",
  },
];

export default function LegalCellSection() {
  return (
    <section id="legal" className="py-24 bg-navy relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(246,190,59,0.3) 40px, rgba(246,190,59,0.3) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(246,190,59,0.3) 40px, rgba(246,190,59,0.3) 41px)",
          }}
        />
      </div>
      {/* Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-crimson/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-saffron/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-crimson/20 text-crimson text-xs font-body font-bold tracking-widest uppercase rounded-full border border-crimson/30">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-crimson opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-crimson" />
            </span>
            24/7 Emergency Response
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left */}
          <div className="lg:col-span-6 space-y-8">
            <h2 className="font-headline text-4xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
              The Legal Cell:{" "}
              <span className="text-saffron italic">Defending the Truth.</span>
            </h2>
            <p className="text-slate-300 text-lg font-body leading-relaxed">
              Facing Harassment or Defamation? We Fight for You. Our internal
              legal team consists of senior trial attorneys who specialise in{" "}
              <strong className="text-saffron">media law</strong> and{" "}
              <strong className="text-saffron">civil rights</strong>.
            </p>

            {/* Service list */}
            <div className="space-y-4">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="flex gap-4 p-5 rounded-xl glass card-hover"
                >
                  <span
                    className="material-symbols-outlined text-2xl text-saffron shrink-0 mt-0.5"
                    style={{ fontVariationSettings: "'FILL' 0" }}
                  >
                    {s.icon}
                  </span>
                  <div>
                    <h3 className="font-headline font-bold text-white text-base leading-tight">
                      {s.title}
                    </h3>
                    <p className="text-slate-400 text-sm font-body mt-1 leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Pull quote + CTA */}
          <div className="lg:col-span-6 space-y-6">
            {/* Quote card */}
            <div className="glass rounded-2xl p-8 space-y-4">
              <span
                className="material-symbols-outlined text-saffron text-4xl block"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                format_quote
              </span>
              <p className="font-headline italic text-2xl text-white leading-relaxed">
                &ldquo;Freedom of the press is not a luxury; it is a right we
                defend with every legal resource available.&rdquo;
              </p>
              <div>
                <p className="text-saffron text-xs font-body font-bold tracking-widest uppercase">
                  Chief Counsel Office · DJF(W)
                </p>
              </div>
            </div>

            {/* Emergency CTA */}
            <a
              href="tel:+919999999999"
              className="group flex items-center justify-center gap-3 w-full bg-crimson hover:bg-crimson-dark text-white py-5 rounded-xl font-bold text-lg transition-all hover:-translate-y-1 shadow-2xl shadow-crimson/40"
            >
              <span
                className="material-symbols-outlined text-xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                phone_in_talk
              </span>
              Emergency Legal Line
              <span className="text-xs bg-white/20 px-2 py-0.5 rounded-md font-body">
                OPEN 24/7
              </span>
            </a>

            {/* Process steps */}
            <div className="glass rounded-2xl p-6">
              <p className="text-white font-headline font-bold mb-4">
                How it works:
              </p>
              <div className="space-y-3">
                {[
                  "Call or report online — response in under 2 hours",
                  "Assigned a dedicated advocate from our legal cell",
                  "We handle everything — you focus on your work",
                  "Zero legal fees for all registered members",
                ].map((step, i) => (
                  <div key={step} className="flex items-start gap-3">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-saffron text-navy text-xs font-bold flex items-center justify-center font-body">
                      {i + 1}
                    </span>
                    <p className="text-slate-300 text-sm font-body leading-relaxed">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
