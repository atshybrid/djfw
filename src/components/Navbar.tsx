"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Shield } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Benefits", href: "/#benefits" },
  { label: "Issues Helped", href: "/#issues" },
  { label: "Insurance", href: "/#insurance" },
  { label: "Legal Cell", href: "/#legal" },
  { label: "సభ్యులు", href: "/members" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-2xl shadow-navy/50"
          : "bg-navy"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 py-3.5 flex items-center justify-between">
        {/* Logo + Name */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-saffron/40 group-hover:border-saffron transition-colors">
            <Image
              src="/djfw_logo.jpeg"
              alt="DJF(W) Logo"
              fill
              className="object-contain"
            />
          </div>
          <div>
            <span className="block text-white font-headline text-lg font-bold leading-tight tracking-tight">
              DJF(W)
            </span>
            <span className="block text-saffron text-[10px] font-body font-semibold tracking-widest uppercase leading-none">
              REG NO: 343/2025
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 font-headline tracking-tight">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActive(link.label)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                active === link.label
                  ? "text-saffron border-b-2 border-saffron pb-1"
                  : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Link
            href="/join"
            className="hidden md:flex items-center gap-2 bg-crimson hover:bg-crimson-dark text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all hover:-translate-y-0.5 shadow-lg shadow-crimson/20"
          >
            <Shield size={15} />
            Join Now
          </Link>
          {/* Mobile menu toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden bg-navy-800 border-t border-white/10 px-6 py-4 space-y-1 font-headline">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 px-4 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-all text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-white/10">
            <Link
              href="/join"
              className="flex items-center justify-center gap-2 bg-crimson text-white py-3 rounded-xl font-bold"
            >
              <Shield size={15} />
              Join The Union
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
