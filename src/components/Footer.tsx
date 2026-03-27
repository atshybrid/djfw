import Image from "next/image";
import Link from "next/link";

type FooterLink = string | { label: string; href: string };

const footerLinks: Record<string, FooterLink[]> = {
  Union: ["About DJF(W)", "Leadership", "History", "REG NO: 343/2025"],
  Benefits: ["Life Insurance", "Health Cover", "Legal Cell", "Accident Cover"],
  Members: [{ label: "Join Now", href: "/join" }, { label: "Member Directory", href: "/members" }, "District Office", "Annual Report"],
  Legal: ["Privacy Policy", "Terms of Service", "Contact Support", "Press Office"],
};

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/8">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-saffron/30">
                <Image
                  src="/djfw_logo.png"
                  alt="DJF(W) Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <p className="font-headline font-bold text-white text-lg leading-tight">
                  DJF(W)
                </p>
                <p className="text-saffron text-[10px] font-body font-bold tracking-widest uppercase">
                  Democratic Journalist Federation
                </p>
              </div>
            </div>
            <p className="text-slate-400 text-sm font-body leading-relaxed">
              The official institutional body for the protection, welfare, and
              legal defence of journalists in Telangana.
            </p>
            <div className="space-y-1.5">
              <p className="text-saffron font-body text-xs font-bold tracking-wider uppercase">
                REG NO: 343/2025
              </p>
              <p className="text-slate-500 font-body text-xs italic">
                అక్షర దివిటీలం...ప్రజాస్వామ్య వార్తులం
              </p>
            </div>
            {/* Social */}
            <div className="flex gap-3">
              {[
                { icon: "share", label: "Social" },
                { icon: "mail", label: "Email" },
                { icon: "phone", label: "Phone" },
              ].map((s) => (
                <button
                  key={s.label}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/8 hover:bg-white/15 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                >
                  <span
                    className="material-symbols-outlined text-[18px]"
                    style={{ fontVariationSettings: "'FILL' 0" }}
                  >
                    {s.icon}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Nav link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="space-y-4">
              <h4 className="text-xs font-body font-bold text-saffron uppercase tracking-widest">
                {heading}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => {
                  const label = typeof link === "string" ? link : link.label;
                  const href = typeof link === "string" ? "#" : link.href;
                  return (
                    <li key={label}>
                      <Link
                        href={href}
                        className="text-slate-400 hover:text-white text-sm font-body transition-colors"
                      >
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8 max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-slate-500 text-xs font-body text-center sm:text-left">
          © 2025 DJF(W) · Democratic Journalist Federation (Working). All Rights Reserved.{" "}
          REG NO: 343/2025
        </p>
        <div className="flex items-center gap-2">
          <span
            className="material-symbols-outlined text-saffron text-base"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            verified_user
          </span>
          <span className="text-saffron text-xs font-body font-bold tracking-wider uppercase">
            Official Protection Bureau
          </span>
        </div>
      </div>
    </footer>
  );
}
