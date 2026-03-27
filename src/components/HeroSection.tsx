import Image from "next/image";
import { Shield, ChevronRight, PlayCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-navy"
    >
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,#001a5e_0%,#00072a_60%,#000510_100%)]" />

      {/* Decorative circles */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-saffron/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-crimson/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">

        {/* Left — Copy */}
        <div className="lg:col-span-7 space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-saffron opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-saffron" />
            </span>
            <span className="text-xs font-body font-bold tracking-widest uppercase text-saffron">
              REG NO: 343/2025 · Official Body
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-white">
            Your Pen is{" "}
            <span className="text-gradient-saffron">Protected.</span>
            <br />
            Your Family is{" "}
            <span className="text-white">Secure.</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-xl text-slate-300 max-w-xl font-body leading-relaxed">
            More than a union — we are your professional shield. The{" "}
            <strong className="text-white font-semibold">
              Democratic Journalist Federation (Working)
            </strong>{" "}
            stands between you and the risks of the field with ironclad legal
            and financial security.
          </p>

          {/* Pull-quote */}
          <div className="border-l-4 border-saffron pl-5 py-1">
            <p className="font-headline italic text-saffron/90 text-lg">
              &ldquo;అక్షర దివిటీలం...ప్రజాస్వామ్య వార్తులం&rdquo;
            </p>
            <p className="text-slate-400 text-sm font-body mt-1">
              — DJF(W) Motto
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="/join"
              className="inline-flex items-center gap-2 bg-crimson hover:bg-crimson-dark text-white px-8 py-4 rounded-xl text-base font-bold transition-all hover:-translate-y-1 shadow-2xl shadow-crimson/40"
            >
              <Shield size={18} />
              Think Deep, Join Union
            </a>
            <a
              href="#benefits"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-xl text-base font-medium transition-all"
            >
              <PlayCircle size={18} />
              View Benefits
            </a>
          </div>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-8 pt-4">
            {[
              { value: "1,240+", label: "Protected Members" },
              { value: "98%", label: "Cases Resolved" },
              { value: "₹5 లక్షలు", label: "జీవిత బీమా · Life Cover" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-headline font-bold text-saffron">{s.value}</p>
                <p className="text-xs font-body text-slate-400 uppercase tracking-wider mt-0.5">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Emblem */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
          {/* Outer glow ring */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-80 h-80 rounded-full bg-saffron/8 blur-3xl" />
          </div>

          <div className="relative">
            {/* Outermost slow-rotating dashed ring */}
            <div className="absolute -inset-6 rounded-full border-2 border-dashed border-saffron/25 animate-spin-slow" />
            {/* Second counter-rotating ring */}
            <div className="absolute -inset-3 rounded-full border border-dotted border-saffron/15 animate-spin-slow-rev" />
            {/* Decorative pulse ring */}
            <div className="absolute inset-0 rounded-full border-2 border-saffron/20 scale-110 animate-pulse" />

            {/* Main emblem */}
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-saffron/40 bg-white animate-glow-border">
              <Image
                src="/djfw_logo.jpeg"
                alt="DJF(W) Official Emblem"
                fill
                className="object-contain p-2"
                priority
              />
            </div>

            {/* Floating certified badge */}
            <div className="absolute -bottom-4 -left-8 bg-surface-card rounded-xl p-4 shadow-2xl ghost-border animate-float">
              <div className="flex items-center gap-3">
                <span
                  className="material-symbols-outlined text-3xl text-saffron"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified_user
                </span>
                <div>
                  <p className="text-xs font-body font-bold text-on-surface leading-tight">
                    Certified Union
                  </p>
                  <p className="text-[10px] text-on-surface-muted font-body">
                    REG NO: 343/2025
                  </p>
                </div>
              </div>
            </div>

            {/* Floating member badge */}
            <div className="absolute -top-4 -right-4 bg-navy rounded-xl p-3 shadow-xl border border-saffron/20 animate-float-delayed">
              <div className="flex items-center gap-2">
                <span
                  className="material-symbols-outlined text-saffron text-xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  groups
                </span>
                <div>
                  <p className="text-white text-xs font-bold font-headline">1,240</p>
                  <p className="text-slate-400 text-[10px]">Members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 animate-bounce">
        <span className="text-xs font-body tracking-widest uppercase">Scroll</span>
        <ChevronRight size={16} className="rotate-90" />
      </div>
    </section>
  );
}
