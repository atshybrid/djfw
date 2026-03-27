"use client";
import { useState } from "react";
import { Send, Paperclip, Shield } from "lucide-react";

export default function JoinCTASection() {
  const [form, setForm] = useState({
    name: "",
    memberId: "",
    phone: "",
    district: "",
    incident: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would POST to an API route
    setSubmitted(true);
  };

  return (
    <section id="join" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 bg-navy/8 text-navy text-xs font-body font-bold tracking-widest uppercase rounded-full">
            Join · Report · Connect
          </span>
          <h2 className="font-headline text-4xl lg:text-5xl font-extrabold text-navy tracking-tight">
            Emergency Support Request
          </h2>
          <p className="text-lg text-on-surface-muted font-body leading-relaxed">
            What happened? Describe your trouble here. No jargon, just the
            facts. Our team responds within 2 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center space-y-4">
                <span
                  className="material-symbols-outlined text-6xl text-green-600 block"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                <h3 className="font-headline text-2xl font-bold text-green-800">
                  Request Received!
                </h3>
                <p className="text-green-700 font-body">
                  Our legal team will contact you within 2 hours. Your case is
                  confidential and protected.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-sm text-green-700 underline font-body"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-surface-card rounded-2xl p-8 ghost-border space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-body font-bold text-on-surface-muted uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Journalist Name"
                      className="w-full px-4 py-3 bg-surface-low rounded-xl text-on-surface font-body placeholder-on-surface-muted/50 focus:outline-none focus:ring-2 focus:ring-navy/30 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-body font-bold text-on-surface-muted uppercase tracking-wider mb-2">
                      Membership ID
                    </label>
                    <input
                      type="text"
                      name="memberId"
                      value={form.memberId}
                      onChange={handleChange}
                      placeholder="DJFW-0000"
                      className="w-full px-4 py-3 bg-surface-low rounded-xl text-on-surface font-body placeholder-on-surface-muted/50 focus:outline-none focus:ring-2 focus:ring-navy/30 transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-body font-bold text-on-surface-muted uppercase tracking-wider mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 90000 00000"
                      className="w-full px-4 py-3 bg-surface-low rounded-xl text-on-surface font-body placeholder-on-surface-muted/50 focus:outline-none focus:ring-2 focus:ring-navy/30 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-body font-bold text-on-surface-muted uppercase tracking-wider mb-2">
                      District / Area
                    </label>
                    <select
                      name="district"
                      value={form.district}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-surface-low rounded-xl text-on-surface font-body focus:outline-none focus:ring-2 focus:ring-navy/30 transition appearance-none"
                    >
                      <option value="">Select District</option>
                      <option>Hyderabad</option>
                      <option>Warangal</option>
                      <option>Karimnagar</option>
                      <option>Nizamabad</option>
                      <option>Khammam</option>
                      <option>Nalgonda</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-body font-bold text-on-surface-muted uppercase tracking-wider mb-2">
                    Incident Description *
                  </label>
                  <textarea
                    name="incident"
                    value={form.incident}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Briefly explain what happened (Harassment, Legal Threat, Health Emergency, Salary Issue…)"
                    className="w-full px-4 py-3 bg-surface-low rounded-xl text-on-surface font-body placeholder-on-surface-muted/50 focus:outline-none focus:ring-2 focus:ring-navy/30 transition resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <label className="flex items-center justify-center gap-2 flex-1 py-3 rounded-xl border-2 border-dashed border-slate-200 text-on-surface-muted hover:border-navy/40 hover:text-navy transition-colors cursor-pointer text-sm font-body font-medium">
                    <Paperclip size={16} />
                    Upload Proof / Docs
                    <input type="file" className="hidden" />
                  </label>
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 flex-1 bg-navy hover:bg-navy-800 text-white py-3 rounded-xl font-bold transition-all hover:-translate-y-0.5 shadow-lg shadow-navy/20"
                  >
                    <Send size={16} />
                    Submit For Review
                  </button>
                </div>

                <p className="text-xs text-on-surface-muted font-body text-center">
                  🔒 All submissions are 100% confidential. Only assigned legal
                  counsel can view your case.
                </p>
              </form>
            )}
          </div>

          {/* Side info */}
          <div className="lg:col-span-5 space-y-6">
            {/* Join card */}
            <div className="bg-navy rounded-2xl p-8 space-y-5">
              <div className="flex items-center gap-3">
                <Shield size={28} className="text-saffron" />
                <div>
                  <h3 className="font-headline font-bold text-white text-xl">
                    Become a Member
                  </h3>
                  <p className="text-slate-400 text-sm font-body">
                    Full protection from Day 1
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  "Life insurance activated immediately",
                  "Health insurance card within 7 days",
                  "Legal cell access from day 1",
                  "Monthly member newsletter",
                  "Voting rights in union elections",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-300 font-body">
                    <span
                      className="material-symbols-outlined text-saffron text-base shrink-0"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <p className="text-saffron font-headline font-bold text-2xl">₹0</p>
                <p className="text-slate-400 text-xs font-body">
                  Joining fee for active journalists
                </p>
              </div>
              <a
                href="mailto:join@djfw.org"
                className="flex items-center justify-center gap-2 w-full bg-saffron hover:bg-saffron-dim text-navy py-3.5 rounded-xl font-bold transition-all hover:-translate-y-0.5 shadow-lg shadow-saffron/20"
              >
                <Shield size={16} />
                Apply for Membership
              </a>
            </div>

            {/* Contact card */}
            <div className="bg-surface-card rounded-2xl p-6 ghost-border space-y-4">
              <h3 className="font-headline font-bold text-navy">
                Reach Us Directly
              </h3>
              {[
                { icon: "phone_in_talk", label: "Emergency Legal Line", val: "+91 99999 99999", sub: "24/7 Available" },
                { icon: "mail", label: "General Enquiries", val: "info@djfw.org", sub: "Reply within 4 hrs" },
                { icon: "location_on", label: "Head Office", val: "Hyderabad, Telangana", sub: "DJF(W) Secretariat" },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-3">
                  <span
                    className="material-symbols-outlined text-xl text-saffron-dim shrink-0"
                    style={{ fontVariationSettings: "'FILL' 0" }}
                  >
                    {c.icon}
                  </span>
                  <div>
                    <p className="text-xs font-body text-on-surface-muted uppercase tracking-wider">
                      {c.label}
                    </p>
                    <p className="text-sm font-body font-bold text-navy">{c.val}</p>
                    <p className="text-xs font-body text-on-surface-muted">{c.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
