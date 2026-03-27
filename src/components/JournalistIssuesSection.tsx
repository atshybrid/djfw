const issueCategories = [
  {
    icon: "groups",
    tag: "Field Safety",
    title: "Physical Assault During Reporting",
    count: "89 cases",
    resolution: "Legal FIR filed + compensation secured",
    severity: "high",
    description:
      "Journalists attacked while covering protests, police operations, or political events. We file immediate FIRs, arrange legal bail, and pursue compensation claims.",
    outcome: "₹2.3 Cr total compensation won",
  },
  {
    icon: "policy",
    tag: "Legal Threat",
    title: "False FIRs & Defamation Notices",
    count: "127 cases",
    resolution: "All charges dropped / stayed",
    severity: "high",
    description:
      "Politicians and corporations weaponise defamation law against truthful reporting. Our legal cell deploys senior advocates within 24 hours to contest notices and FIRs.",
    outcome: "100% bail success rate",
  },
  {
    icon: "person_off",
    tag: "Employment Rights",
    title: "Illegal Termination & Unpaid Wages",
    count: "63 cases",
    resolution: "Labour court intervention",
    severity: "medium",
    description:
      "Media houses silencing journalists by illegal removal or salary withholding. We fight through labour courts and press regulatory bodies to recover dues and reinstate positions.",
    outcome: "₹87 Lakh wages recovered",
  },
  {
    icon: "computer",
    tag: "Online Safety",
    title: "Cyber Harassment & Doxing Attacks",
    count: "44 cases",
    resolution: "Platforms notified + police complaints",
    severity: "medium",
    description:
      "Coordinated online campaigns targeting journalists' personal information. We work with Cyber Crime cells and platform trust-and-safety teams to remove content and pursue perpetrators.",
    outcome: "38 arrest warrants obtained",
  },
  {
    icon: "no_cell",
    tag: "Access Denial",
    title: "Barred from Press Briefings & Events",
    count: "31 cases",
    resolution: "Press accreditation restored",
    severity: "low",
    description:
      "Arbitrary removal of press credentials or blacklisting from official events. Union intervenes with government press information offices and editorial accreditation bodies.",
    outcome: "All credentials restored",
  },
  {
    icon: "family_restroom",
    tag: "Gender Safety",
    title: "Sexual Harassment in Newsrooms",
    count: "18 cases",
    resolution: "ICC proceedings + employment protection",
    severity: "high",
    description:
      "We provide confidential support, POSH Act guidance, Internal Complaints Committee (ICC) filing assistance, and legal protection from retaliation.",
    outcome: "Full confidentiality guaranteed",
  },
];

const severityColor = {
  high: "bg-crimson/10 text-crimson",
  medium: "bg-saffron/15 text-saffron-dim",
  low: "bg-green-50 text-green-700",
};

export default function JournalistIssuesSection() {
  return (
    <section id="issues" className="py-24 bg-surface-low">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
          <div className="lg:col-span-8 space-y-4">
            <span className="inline-block px-4 py-1.5 bg-crimson/10 text-crimson text-xs font-body font-bold tracking-widest uppercase rounded-full">
              Real Cases · Real Help
            </span>
            <h2 className="font-headline text-4xl lg:text-5xl font-extrabold text-navy tracking-tight leading-tight">
              Issues We Fight for{" "}
              <span className="text-crimson italic">You</span>
            </h2>
            <p className="text-lg text-on-surface-muted font-body leading-relaxed max-w-2xl">
              When the field turns dangerous, the courtroom turns hostile, or
              the newsroom turns unfair — the DJF(W) legal cell has already
              won battles like yours. Here&apos;s the proof.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-2">
            <div className="text-right">
              <p className="font-headline text-5xl font-extrabold text-navy">372+</p>
              <p className="text-saffron-dim font-body text-sm font-bold uppercase tracking-wider">
                Total Cases Handled
              </p>
              <p className="text-on-surface-muted text-sm font-body mt-1">
                Since our founding in 2023
              </p>
            </div>
          </div>
        </div>

        {/* Issues Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {issueCategories.map((issue) => (
            <article
              key={issue.title}
              className="card-hover bg-surface-card rounded-2xl p-7 ghost-border flex flex-col gap-4"
            >
              {/* Top row */}
              <div className="flex items-start justify-between gap-3">
                <div className="w-12 h-12 bg-navy-800/8 rounded-xl flex items-center justify-center shrink-0">
                  <span
                    className="material-symbols-outlined text-navy text-2xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {issue.icon}
                  </span>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-body font-bold tracking-wide uppercase ${
                    severityColor[issue.severity as keyof typeof severityColor]
                  }`}
                >
                  {issue.tag}
                </span>
              </div>

              {/* Title */}
              <div>
                <h3 className="font-headline text-lg font-bold text-navy leading-snug">
                  {issue.title}
                </h3>
                <p className="text-xs font-body font-bold text-saffron-dim uppercase tracking-wider mt-1">
                  {issue.count}
                </p>
              </div>

              {/* Description */}
              <p className="text-sm font-body text-on-surface-muted leading-relaxed flex-1">
                {issue.description}
              </p>

              {/* Resolution strip */}
              <div className="flex items-center justify-between pt-3 border-t border-slate-100 gap-2">
                <div className="flex items-center gap-1.5">
                  <span
                    className="material-symbols-outlined text-sm text-green-600"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  <span className="text-xs font-body text-green-700 font-semibold">
                    {issue.resolution}
                  </span>
                </div>
                <span className="text-xs font-body text-crimson font-bold">
                  {issue.outcome}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-14 rounded-2xl bg-navy p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-headline text-2xl font-bold text-white">
              Facing an issue right now?
            </h3>
            <p className="text-slate-300 font-body mt-1">
              Our emergency legal line is live 24/7. No jargon, just action.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="tel:+919999999999"
              className="inline-flex items-center gap-2 bg-crimson hover:bg-crimson-dark text-white px-7 py-3.5 rounded-xl font-bold transition-all hover:-translate-y-0.5 shadow-lg shadow-crimson/30"
            >
              <span
                className="material-symbols-outlined text-base"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                phone_in_talk
              </span>
              Emergency Legal Line
            </a>
            <a
              href="/join"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-7 py-3.5 rounded-xl font-medium transition-all"
            >
              Report an Issue
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
