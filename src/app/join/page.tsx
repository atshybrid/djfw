"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import ReporterMicSVG from "@/components/ReporterMicSVG";
import {
  User, Phone, Newspaper, Briefcase, MapPin, Home,
  CreditCard, Upload, CheckCircle2, ChevronDown, ArrowLeft,
  Shield, AlertCircle,
} from "lucide-react";

/* ─── DATA ─────────────────────────────────────── */
const newspapers = [
  "Eenadu",
  "Sakshi",
  "Andhra Jyothi",
  "Vaartha",
  "Namaste Telangana",
  "Prabha",
  "Hans India",
  "Deccan Chronicle",
  "The Hindu (Telugu)",
  "TV9 Telugu",
  "NTV Telugu",
  "ABN Andhra Jyothi TV",
  "V6 News",
  "10TV News",
  "Raj News Telugu",
  "ZEE Telugu",
  "Gemini TV News",
  "Star Maa News",
  "PTI (Press Trust of India)",
  "ANI",
  "Other",
];

const locations = [
  "Hyderabad",
  "Warangal",
  "Karimnagar",
  "Nizamabad",
  "Khammam",
  "Nalgonda",
  "Mahabubnagar",
  "Adilabad",
  "Medak",
  "Rangareddy",
  "Suryapet",
  "Siddipet",
  "Sangareddy",
  "Vikarabad",
  "Yadadri Bhuvanagiri",
  "Jangaon",
  "Jayashankar Bhupalpally",
  "Kumuram Bheem Asifabad",
  "Mancherial",
  "Nagarkurnool",
  "Narayanpet",
  "Nirmal",
  "Peddapalli",
  "Mulugu",
  "Other",
];

const experienceLevels = [
  "Less than 1 year",
  "1–2 years",
  "3–5 years",
  "6–10 years",
  "11–15 years",
  "15–20 years",
  "20+ years",
];

/* ─── TYPES ─────────────────────────────────────── */
interface FileUpload {
  file: File | null;
  preview: string | null;
  error: string;
}

interface FormData {
  name: string;
  mobile: string;
  newspaper: string;
  otherNewspaper: string;
  experience: string;
  workLocation: string;
  otherLocation: string;
  address: string;
  aadhaar: FileUpload;
  pan: FileUpload;
  reporterId: FileUpload;
}

const emptyFile: FileUpload = { file: null, preview: null, error: "" };

/* ─── FILE UPLOAD FIELD ─────────────────────────── */
function FileField({
  label,
  icon,
  accept,
  value,
  required,
  hint,
  onChange,
}: {
  label: string;
  icon: React.ReactNode;
  accept: string;
  value: FileUpload;
  required?: boolean;
  hint?: string;
  onChange: (val: FileUpload) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const MAX_MB = 5;

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > MAX_MB * 1024 * 1024) {
      onChange({ file: null, preview: null, error: `File must be under ${MAX_MB}MB` });
      return;
    }
    const preview = file.type.startsWith("image/") ? URL.createObjectURL(file) : null;
    onChange({ file, preview, error: "" });
  };

  return (
    <div className="space-y-2">
      <label className="flex items-center gap-2 text-xs font-body font-bold text-on-surface-muted uppercase tracking-wider">
        {icon}
        {label}
        {required && <span className="text-crimson">*</span>}
      </label>

      <div
        onClick={() => inputRef.current?.click()}
        className={`relative border-2 border-dashed rounded-xl p-5 cursor-pointer transition-all group hover:border-navy/40 hover:bg-navy/3 ${
          value.file
            ? "border-green-400 bg-green-50"
            : value.error
            ? "border-crimson/50 bg-crimson/5"
            : "border-slate-200 bg-surface-low"
        }`}
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          className="hidden"
          onChange={handleFile}
        />

        {value.file ? (
          <div className="flex items-center gap-3">
            {value.preview ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={value.preview}
                alt="preview"
                className="w-14 h-14 rounded-lg object-cover border border-green-200"
              />
            ) : (
              <div className="w-14 h-14 rounded-lg bg-green-100 flex items-center justify-center">
                <CreditCard size={24} className="text-green-600" />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-body font-bold text-green-700 truncate">
                {value.file.name}
              </p>
              <p className="text-xs text-green-600 font-body mt-0.5">
                {(value.file.size / 1024).toFixed(0)} KB · Uploaded ✓
              </p>
            </div>
            <CheckCircle2 size={20} className="text-green-500 shrink-0" />
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2 py-2 text-center">
            <Upload
              size={28}
              className={`transition-colors ${
                value.error ? "text-crimson" : "text-slate-400 group-hover:text-navy"
              }`}
            />
            <div>
              <p className="text-sm font-body font-semibold text-on-surface-muted">
                Click to upload {label}
              </p>
              <p className="text-xs text-slate-400 font-body mt-0.5">
                {hint || "JPG, PNG or PDF · Max 5 MB"}
              </p>
            </div>
          </div>
        )}
      </div>

      {value.error && (
        <p className="flex items-center gap-1 text-xs text-crimson font-body">
          <AlertCircle size={12} />
          {value.error}
        </p>
      )}
    </div>
  );
}

/* ─── MAIN PAGE ─────────────────────────────────── */
export default function JoinPage() {
  const [form, setForm] = useState<FormData>({
    name: "",
    mobile: "",
    newspaper: "",
    otherNewspaper: "",
    experience: "",
    workLocation: "",
    otherLocation: "",
    address: "",
    aadhaar: { ...emptyFile },
    pan: { ...emptyFile },
    reporterId: { ...emptyFile },
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [step, setStep] = useState(1); // 1 = personal, 2 = professional, 3 = documents

  const set = (key: keyof FormData, val: string) => {
    setForm((p) => ({ ...p, [key]: val }));
    setErrors((p) => ({ ...p, [key]: "" }));
  };

  const validate = (): boolean => {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!form.name.trim()) e.name = "Full name is required";
    if (!/^[6-9]\d{9}$/.test(form.mobile)) e.mobile = "Enter a valid 10-digit Indian mobile number";
    if (!form.newspaper) e.newspaper = "Please select your newspaper / channel";
    if (form.newspaper === "Other" && !form.otherNewspaper.trim())
      e.otherNewspaper = "Please enter the newspaper / channel name";
    if (!form.experience) e.experience = "Please select your experience";
    if (!form.workLocation) e.workLocation = "Please select your work location";
    if (form.workLocation === "Other" && !form.otherLocation.trim())
      e.otherLocation = "Please enter your work location";
    if (!form.address.trim()) e.address = "Full address is required";
    if (!form.aadhaar.file) e.aadhaar = "Aadhaar card is required";
    if (!form.pan.file) e.pan = "PAN card is required";
    if (!form.reporterId.file) e.reporterId = "Reporter ID card is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      // scroll to first error
      const firstError = document.querySelector("[data-error]");
      firstError?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1800)); // simulate API
    setSubmitting(false);
    setSubmitted(true);
  };

  const inputClass = (errorKey: keyof FormData) =>
    `w-full px-4 py-3 rounded-xl font-body text-on-surface placeholder-slate-400 focus:outline-none focus:ring-2 transition text-sm ${
      errors[errorKey]
        ? "bg-crimson/5 ring-2 ring-crimson/40 focus:ring-crimson/60"
        : "bg-surface-low focus:ring-navy/30"
    }`;

  if (submitted) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center px-6">
        <div className="max-w-md w-full bg-surface-card rounded-3xl p-10 text-center shadow-2xl shadow-navy/10 ghost-border space-y-6">
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 size={40} className="text-green-500" />
          </div>
          <div className="space-y-3">
            <h1 className="font-headline text-3xl font-extrabold text-navy">
              Application Received!
            </h1>
            <p className="text-on-surface-muted font-body leading-relaxed">
              Welcome to{" "}
              <strong className="text-navy">DJF(W)</strong>. Your membership
              application has been submitted successfully. Our team will verify
              your documents and activate your benefits within{" "}
              <strong className="text-crimson">3–5 working days</strong>.
            </p>
          </div>
          <div className="bg-saffron/10 rounded-xl p-4 text-left space-y-2">
            <p className="text-xs font-body font-bold text-saffron-dim uppercase tracking-wider">
              What happens next?
            </p>
            {[
              "Document verification by union officials",
              "Member ID card issued (DJFW-XXXX)",
              "Life & health insurance activated",
              "You're officially protected!",
            ].map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-saffron text-navy text-[10px] font-bold flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <p className="text-sm font-body text-on-surface">{s}</p>
              </div>
            ))}
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-navy text-white px-8 py-3.5 rounded-xl font-bold transition-all hover:-translate-y-0.5 shadow-lg shadow-navy/20"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface">
      {/* ── Top Nav bar ── */}
      <nav className="bg-navy sticky top-0 z-50 shadow-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-white hover:text-saffron transition-colors">
            <ArrowLeft size={18} />
            <span className="font-headline font-bold text-lg">DJF(W)</span>
          </Link>
          <div className="flex items-center gap-2">
            <Shield size={16} className="text-saffron" />
            <span className="text-saffron text-xs font-body font-bold tracking-widest uppercase">
              Membership Application
            </span>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* ── LEFT — Illustration & info ── */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-8">
            {/* SVG Illustration */}
            <div className="flex justify-center lg:justify-start">
              <ReporterMicSVG width={340} height={360} className="drop-shadow-xl" />
            </div>

            {/* Copy */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-saffron/15 rounded-full">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-saffron opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-saffron" />
                </span>
                <span className="text-xs font-body font-bold text-saffron-dim tracking-widest uppercase">
                  REG NO: 343/2025
                </span>
              </div>
              <h1 className="font-headline text-4xl lg:text-5xl font-extrabold text-navy leading-tight tracking-tight">
                Join the Union.
                <br />
                <span className="text-crimson italic">Own Your Protection.</span>
              </h1>
              <p className="text-on-surface-muted font-body leading-relaxed">
                Fill the form to become an official member of the{" "}
                <strong className="text-navy">Democratic Journalist Federation (Working)</strong>.
                Your insurance, legal defence, and union rights activate from Day 1.
              </p>
            </div>

            {/* Perks quick list */}
            <div className="bg-navy rounded-2xl p-6 space-y-3">
              <p className="text-saffron text-xs font-body font-bold uppercase tracking-widest mb-1">
                Member Benefits — Active from Day 1
              </p>
              {[
                { icon: "favorite", text: "₹10 Lakh Life Insurance — FREE" },
                { icon: "medical_services", text: "Cashless Health Insurance" },
                { icon: "balance", text: "24/7 Legal Defence Support" },
                { icon: "verified_user", text: "Official Member ID Card" },
                { icon: "lock", text: "100% Document Confidentiality" },
              ].map((p) => (
                <div key={p.text} className="flex items-center gap-3">
                  <span
                    className="material-symbols-outlined text-saffron text-lg shrink-0"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {p.icon}
                  </span>
                  <p className="text-slate-200 text-sm font-body">{p.text}</p>
                </div>
              ))}
            </div>

            {/* Trust note */}
            <div className="flex items-start gap-3 bg-green-50 rounded-xl p-4 ghost-border">
              <CheckCircle2 size={18} className="text-green-600 shrink-0 mt-0.5" />
              <p className="text-sm font-body text-green-800 leading-relaxed">
                Your personal data and uploaded documents are encrypted and shared
                only with authorised union officials. We never sell or share member
                information with third parties.
              </p>
            </div>
          </div>

          {/* ── RIGHT — Form ── */}
          <div className="lg:col-span-7">
            {/* Step indicator */}
            <div className="flex items-center gap-2 mb-8">
              {[
                { num: 1, label: "Personal" },
                { num: 2, label: "Professional" },
                { num: 3, label: "Documents" },
              ].map((s, i) => (
                <div key={s.num} className="flex items-center gap-2 flex-1">
                  <button
                    type="button"
                    onClick={() => setStep(s.num)}
                    className={`flex items-center gap-2 group transition-all`}
                  >
                    <span
                      className={`w-8 h-8 rounded-full text-sm font-bold font-body flex items-center justify-center transition-all ${
                        step === s.num
                          ? "bg-navy text-white"
                          : step > s.num
                          ? "bg-green-500 text-white"
                          : "bg-slate-200 text-slate-500"
                      }`}
                    >
                      {step > s.num ? <CheckCircle2 size={14} /> : s.num}
                    </span>
                    <span
                      className={`text-xs font-body font-bold uppercase tracking-wider hidden sm:block transition-colors ${
                        step === s.num ? "text-navy" : step > s.num ? "text-green-600" : "text-slate-400"
                      }`}
                    >
                      {s.label}
                    </span>
                  </button>
                  {i < 2 && (
                    <div
                      className={`flex-1 h-0.5 rounded mx-1 transition-colors ${
                        step > s.num ? "bg-green-400" : "bg-slate-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-5">

              {/* ════ STEP 1 — PERSONAL ════ */}
              {step === 1 && (
                <div className="bg-surface-card rounded-2xl p-7 lg:p-9 ghost-border space-y-6 animate-fade-up">
                  <div className="border-b border-slate-100 pb-4">
                    <h2 className="font-headline text-2xl font-bold text-navy">
                      Personal Information
                    </h2>
                    <p className="text-on-surface-muted font-body text-sm mt-1">
                      Your basic details for membership registration.
                    </p>
                  </div>

                  {/* Full Name */}
                  <div data-error={errors.name || undefined}>
                    <label className="flex items-center gap-2 text-xs font-body font-bold text-on-surface-muted uppercase tracking-wider mb-2">
                      <User size={13} />
                      Full Name <span className="text-crimson">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. రాజేశ్వర్ రెడ్డి / Rajeshwar Reddy"
                      value={form.name}
                      onChange={(e) => set("name", e.target.value)}
                      className={inputClass("name")}
                      autoComplete="name"
                    />
                    {errors.name && (
                      <p className="flex items-center gap-1 text-xs text-crimson font-body mt-1">
                        <AlertCircle size={12} /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Mobile */}
                  <div data-error={errors.mobile || undefined}>
                    <label className="flex items-center gap-2 text-xs font-body font-bold text-on-surface-muted uppercase tracking-wider mb-2">
                      <Phone size={13} />
                      Mobile Number <span className="text-crimson">*</span>
                    </label>
                    <div className="flex gap-2">
                      <span className="flex items-center px-4 py-3 bg-surface-low rounded-xl text-on-surface-muted font-body text-sm font-bold shrink-0">
                        🇮🇳 +91
                      </span>
                      <input
                        type="tel"
                        placeholder="9876543210"
                        maxLength={10}
                        value={form.mobile}
                        onChange={(e) => set("mobile", e.target.value.replace(/\D/g, ""))}
                        className={inputClass("mobile")}
                        autoComplete="tel"
                      />
                    </div>
                    {errors.mobile && (
                      <p className="flex items-center gap-1 text-xs text-crimson font-body mt-1">
                        <AlertCircle size={12} /> {errors.mobile}
                      </p>
                    )}
                  </div>

                  {/* Full Address */}
                  <div data-error={errors.address || undefined}>
                    <label className="flex items-center gap-2 text-xs font-body font-bold text-on-surface-muted uppercase tracking-wider mb-2">
                      <Home size={13} />
                      Full Address <span className="text-crimson">*</span>
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Door No., Street, Village/City, Mandal, District, State, PIN Code"
                      value={form.address}
                      onChange={(e) => set("address", e.target.value)}
                      className={`${inputClass("address")} resize-none`}
                      autoComplete="street-address"
                    />
                    {errors.address && (
                      <p className="flex items-center gap-1 text-xs text-crimson font-body mt-1">
                        <AlertCircle size={12} /> {errors.address}
                      </p>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      const e: Partial<Record<keyof FormData, string>> = {};
                      if (!form.name.trim()) e.name = "Full name is required";
                      if (!/^[6-9]\d{9}$/.test(form.mobile))
                        e.mobile = "Enter a valid 10-digit mobile number";
                      if (!form.address.trim()) e.address = "Full address is required";
                      setErrors(e);
                      if (Object.keys(e).length === 0) setStep(2);
                    }}
                    className="w-full bg-navy hover:bg-navy-800 text-white py-4 rounded-xl font-bold transition-all hover:-translate-y-0.5 shadow-lg shadow-navy/15"
                  >
                    Continue to Professional Details →
                  </button>
                </div>
              )}

              {/* ════ STEP 2 — PROFESSIONAL ════ */}
              {step === 2 && (
                <div className="bg-surface-card rounded-2xl p-7 lg:p-9 ghost-border space-y-6 animate-fade-up">
                  <div className="border-b border-slate-100 pb-4">
                    <h2 className="font-headline text-2xl font-bold text-navy">
                      Professional Details
                    </h2>
                    <p className="text-on-surface-muted font-body text-sm mt-1">
                      Your journalism career information for member classification.
                    </p>
                  </div>

                  {/* Newspaper / Channel */}
                  <div data-error={errors.newspaper || undefined}>
                    <label className="flex items-center gap-2 text-xs font-body font-bold text-on-surface-muted uppercase tracking-wider mb-2">
                      <Newspaper size={13} />
                      Newspaper / Channel Name <span className="text-crimson">*</span>
                    </label>
                    <div className="relative">
                      <select
                        value={form.newspaper}
                        onChange={(e) => set("newspaper", e.target.value)}
                        className={`${inputClass("newspaper")} appearance-none pr-10`}
                      >
                        <option value="">-- Select Newspaper / Channel --</option>
                        {newspapers.map((n) => (
                          <option key={n} value={n}>
                            {n}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        size={16}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                      />
                    </div>
                    {errors.newspaper && (
                      <p className="flex items-center gap-1 text-xs text-crimson font-body mt-1">
                        <AlertCircle size={12} /> {errors.newspaper}
                      </p>
                    )}
                    {/* Other — reveal text field */}
                    {form.newspaper === "Other" && (
                      <div className="mt-3" data-error={errors.otherNewspaper || undefined}>
                        <input
                          type="text"
                          placeholder="Enter newspaper / channel name"
                          value={form.otherNewspaper}
                          onChange={(e) => set("otherNewspaper", e.target.value)}
                          className={inputClass("otherNewspaper")}
                        />
                        {errors.otherNewspaper && (
                          <p className="flex items-center gap-1 text-xs text-crimson font-body mt-1">
                            <AlertCircle size={12} /> {errors.otherNewspaper}
                          </p>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Experience */}
                  <div data-error={errors.experience || undefined}>
                    <label className="flex items-center gap-2 text-xs font-body font-bold text-on-surface-muted uppercase tracking-wider mb-2">
                      <Briefcase size={13} />
                      Total Experience in Journalism <span className="text-crimson">*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {experienceLevels.map((level) => (
                        <button
                          key={level}
                          type="button"
                          onClick={() => set("experience", level)}
                          className={`py-3 px-3 rounded-xl text-sm font-body font-semibold border-2 transition-all text-center ${
                            form.experience === level
                              ? "border-navy bg-navy text-white shadow-md shadow-navy/20"
                              : "border-slate-200 bg-surface-low text-on-surface hover:border-navy/40"
                          }`}
                        >
                          {level}
                        </button>
                      ))}
                    </div>
                    {errors.experience && (
                      <p className="flex items-center gap-1 text-xs text-crimson font-body mt-1">
                        <AlertCircle size={12} /> {errors.experience}
                      </p>
                    )}
                  </div>

                  {/* Work Location */}
                  <div data-error={errors.workLocation || undefined}>
                    <label className="flex items-center gap-2 text-xs font-body font-bold text-on-surface-muted uppercase tracking-wider mb-2">
                      <MapPin size={13} />
                      Work Location (District) <span className="text-crimson">*</span>
                    </label>
                    <div className="relative">
                      <select
                        value={form.workLocation}
                        onChange={(e) => set("workLocation", e.target.value)}
                        className={`${inputClass("workLocation")} appearance-none pr-10`}
                      >
                        <option value="">-- Select District --</option>
                        {locations.map((l) => (
                          <option key={l} value={l}>
                            {l}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        size={16}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                      />
                    </div>
                    {errors.workLocation && (
                      <p className="flex items-center gap-1 text-xs text-crimson font-body mt-1">
                        <AlertCircle size={12} /> {errors.workLocation}
                      </p>
                    )}
                    {form.workLocation === "Other" && (
                      <div className="mt-3" data-error={errors.otherLocation || undefined}>
                        <input
                          type="text"
                          placeholder="Enter your district / work location"
                          value={form.otherLocation}
                          onChange={(e) => set("otherLocation", e.target.value)}
                          className={inputClass("otherLocation")}
                        />
                        {errors.otherLocation && (
                          <p className="flex items-center gap-1 text-xs text-crimson font-body mt-1">
                            <AlertCircle size={12} /> {errors.otherLocation}
                          </p>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex-1 border-2 border-slate-200 hover:border-navy/40 text-on-surface-muted hover:text-navy py-4 rounded-xl font-bold transition-all"
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        const e: Partial<Record<keyof FormData, string>> = {};
                        if (!form.newspaper) e.newspaper = "Please select your newspaper / channel";
                        if (form.newspaper === "Other" && !form.otherNewspaper.trim())
                          e.otherNewspaper = "Please enter the name";
                        if (!form.experience) e.experience = "Please select your experience";
                        if (!form.workLocation) e.workLocation = "Please select your work location";
                        if (form.workLocation === "Other" && !form.otherLocation.trim())
                          e.otherLocation = "Please enter your location";
                        setErrors(e);
                        if (Object.keys(e).length === 0) setStep(3);
                      }}
                      className="flex-2 bg-navy hover:bg-navy-800 text-white py-4 rounded-xl font-bold transition-all hover:-translate-y-0.5 shadow-lg shadow-navy/15"
                    >
                      Continue to Documents →
                    </button>
                  </div>
                </div>
              )}

              {/* ════ STEP 3 — DOCUMENTS ════ */}
              {step === 3 && (
                <div className="bg-surface-card rounded-2xl p-7 lg:p-9 ghost-border space-y-6 animate-fade-up">
                  <div className="border-b border-slate-100 pb-4">
                    <h2 className="font-headline text-2xl font-bold text-navy">
                      Upload Documents
                    </h2>
                    <p className="text-on-surface-muted font-body text-sm mt-1">
                      Required for identity verification. All files are encrypted and
                      confidential. JPG, PNG, or PDF · Max 5 MB each.
                    </p>
                  </div>

                  {/* Aadhaar */}
                  <div data-error={errors.aadhaar || undefined}>
                    <FileField
                      label="Aadhaar Card"
                      icon={<CreditCard size={13} />}
                      accept="image/*,application/pdf"
                      value={form.aadhaar}
                      required
                      hint="Front side of Aadhaar card · JPG, PNG or PDF"
                      onChange={(v) => {
                        setForm((p) => ({ ...p, aadhaar: v }));
                        setErrors((p) => ({ ...p, aadhaar: v.error || "" }));
                      }}
                    />
                    {errors.aadhaar && !form.aadhaar.error && (
                      <p className="flex items-center gap-1 text-xs text-crimson font-body mt-1">
                        <AlertCircle size={12} /> {errors.aadhaar}
                      </p>
                    )}
                  </div>

                  {/* PAN */}
                  <div data-error={errors.pan || undefined}>
                    <FileField
                      label="PAN Card"
                      icon={<CreditCard size={13} />}
                      accept="image/*,application/pdf"
                      value={form.pan}
                      required
                      hint="PAN card (both sides if applicable) · JPG, PNG or PDF"
                      onChange={(v) => {
                        setForm((p) => ({ ...p, pan: v }));
                        setErrors((p) => ({ ...p, pan: v.error || "" }));
                      }}
                    />
                    {errors.pan && !form.pan.error && (
                      <p className="flex items-center gap-1 text-xs text-crimson font-body mt-1">
                        <AlertCircle size={12} /> {errors.pan}
                      </p>
                    )}
                  </div>

                  {/* Reporter ID */}
                  <div data-error={errors.reporterId || undefined}>
                    <FileField
                      label="Reporter ID Card"
                      icon={<CreditCard size={13} />}
                      accept="image/*,application/pdf"
                      value={form.reporterId}
                      required
                      hint="Press/Reporter ID issued by your organisation · JPG, PNG or PDF"
                      onChange={(v) => {
                        setForm((p) => ({ ...p, reporterId: v }));
                        setErrors((p) => ({ ...p, reporterId: v.error || "" }));
                      }}
                    />
                    {errors.reporterId && !form.reporterId.error && (
                      <p className="flex items-center gap-1 text-xs text-crimson font-body mt-1">
                        <AlertCircle size={12} /> {errors.reporterId}
                      </p>
                    )}
                  </div>

                  {/* Summary Preview */}
                  <div className="bg-surface-low rounded-xl p-5 space-y-3">
                    <p className="text-xs font-body font-bold text-on-surface-muted uppercase tracking-wider">
                      Application Summary
                    </p>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                      {[
                        { label: "Name", val: form.name || "—" },
                        { label: "Mobile", val: form.mobile ? `+91 ${form.mobile}` : "—" },
                        {
                          label: "Newspaper",
                          val:
                            form.newspaper === "Other"
                              ? form.otherNewspaper || "—"
                              : form.newspaper || "—",
                        },
                        { label: "Experience", val: form.experience || "—" },
                        {
                          label: "Location",
                          val:
                            form.workLocation === "Other"
                              ? form.otherLocation || "—"
                              : form.workLocation || "—",
                        },
                        {
                          label: "Docs",
                          val: [
                            form.aadhaar.file ? "Aadhaar ✓" : null,
                            form.pan.file ? "PAN ✓" : null,
                            form.reporterId.file ? "ID ✓" : null,
                          ]
                            .filter(Boolean)
                            .join(", ") || "—",
                        },
                      ].map((r) => (
                        <div key={r.label}>
                          <p className="text-[10px] text-on-surface-muted font-body uppercase tracking-wider">
                            {r.label}
                          </p>
                          <p className="text-sm font-body font-semibold text-navy truncate">
                            {r.val}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Privacy note */}
                  <p className="text-xs text-slate-400 font-body text-center leading-relaxed">
                    🔒 By submitting, you confirm your details are accurate. Documents are
                    encrypted and accessible only to authorised DJF(W) officials.
                    REG NO: 343/2025.
                  </p>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="flex-1 border-2 border-slate-200 hover:border-navy/40 text-on-surface-muted hover:text-navy py-4 rounded-xl font-bold transition-all"
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="flex-2 flex items-center justify-center gap-2 bg-crimson hover:bg-crimson-dark text-white py-4 rounded-xl font-bold transition-all hover:-translate-y-0.5 shadow-xl shadow-crimson/30 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {submitting ? (
                        <>
                          <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Submitting…
                        </>
                      ) : (
                        <>
                          <Shield size={17} />
                          Submit Membership Application
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
