"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReporterMicSVG from "@/components/ReporterMicSVG";
import { Search, X } from "lucide-react";

interface Member {
  id: string;
  name: string;
  nameEn: string;
  position: string;
  positionTe: string;
  district: string;
  districtEn: string;
  state: string;
  joined: string;
  lifeInsurance: boolean;
  healthInsurance: boolean;
  image: string | null; // backend image URL or null for avatar
}

const members: Member[] = [
  // Hyderabad
  { id: "DJF-0001", name: "రవి కుమార్", nameEn: "Ravi Kumar", position: "Bureau Chief", positionTe: "బ్యూరో చీఫ్", district: "హైదరాబాద్", districtEn: "Hyderabad", state: "తెలంగాణ", joined: "జన 2024", lifeInsurance: true, healthInsurance: true, image: null },
  { id: "DJF-0002", name: "సుమిత రెడ్డి", nameEn: "Sumitha Reddy", position: "Senior Reporter", positionTe: "సీనియర్ రిపోర్టర్", district: "హైదరాబాద్", districtEn: "Hyderabad", state: "తెలంగాణ", joined: "ఫిబ్ 2024", lifeInsurance: true, healthInsurance: true, image: null },
  { id: "DJF-0003", name: "ప్రభాత్ సింగ్", nameEn: "Prabhat Singh", position: "Anchor", positionTe: "యాంకర్", district: "హైదరాబాద్", districtEn: "Hyderabad", state: "తెలంగాణ", joined: "మార్చి 2024", lifeInsurance: true, healthInsurance: false, image: null },
  // Warangal
  { id: "DJF-0004", name: "కృష్ణ మూర్తి", nameEn: "Krishna Murthy", position: "Correspondent", positionTe: "కరస్పాండెంట్", district: "వరంగల్", districtEn: "Warangal", state: "తెలంగాణ", joined: "జన 2024", lifeInsurance: true, healthInsurance: true, image: null },
  { id: "DJF-0005", name: "అనీల్ కుమార్", nameEn: "Anil Kumar", position: "Video Journalist", positionTe: "వీడియో జర్నలిస్ట్", district: "వరంగల్", districtEn: "Warangal", state: "తెలంగాణ", joined: "ఏప్రి 2024", lifeInsurance: false, healthInsurance: true, image: null },
  // Karimnagar
  { id: "DJF-0006", name: "వెంకట్ రావు", nameEn: "Venkat Rao", position: "Senior Reporter", positionTe: "సీనియర్ రిపోర్టర్", district: "కరీంనగర్", districtEn: "Karimnagar", state: "తెలంగాణ", joined: "ఫిబ్ 2024", lifeInsurance: true, healthInsurance: true, image: null },
  { id: "DJF-0007", name: "శ్రీలక్ష్మి", nameEn: "Srilakshmi", position: "Photographer", positionTe: "ఫోటోగ్రాఫర్", district: "కరీంనగర్", districtEn: "Karimnagar", state: "తెలంగాణ", joined: "మే 2024", lifeInsurance: true, healthInsurance: true, image: null },
  // Nizamabad
  { id: "DJF-0008", name: "మహేష్ పటేల్", nameEn: "Mahesh Patel", position: "Journalist", positionTe: "జర్నలిస్ట్", district: "నిజామాబాద్", districtEn: "Nizamabad", state: "తెలంగాణ", joined: "జన 2024", lifeInsurance: true, healthInsurance: false, image: null },
  { id: "DJF-0009", name: "రాజేశ్వరి దేవి", nameEn: "Rajeswari Devi", position: "Sub-Editor", positionTe: "సబ్-ఎడిటర్", district: "నిజామాబాద్", districtEn: "Nizamabad", state: "తెలంగాణ", joined: "జూన్ 2024", lifeInsurance: false, healthInsurance: false, image: null },
  // Khammam
  { id: "DJF-0010", name: "సాయి కిరణ్", nameEn: "Sai Kiran", position: "Video Journalist", positionTe: "వీడియో జర్నలిస్ట్", district: "ఖమ్మం", districtEn: "Khammam", state: "తెలంగాణ", joined: "మార్చి 2024", lifeInsurance: true, healthInsurance: true, image: null },
  { id: "DJF-0011", name: "దీపిక రెడ్డి", nameEn: "Deepika Reddy", position: "Reporter", positionTe: "రిపోర్టర్", district: "ఖమ్మం", districtEn: "Khammam", state: "తెలంగాణ", joined: "జులై 2024", lifeInsurance: true, healthInsurance: true, image: null },
  // Nalgonda
  { id: "DJF-0012", name: "నాగేశ్వర రావు", nameEn: "Nageswara Rao", position: "Bureau Chief", positionTe: "బ్యూరో చీఫ్", district: "నల్గొండ", districtEn: "Nalgonda", state: "తెలంగాణ", joined: "ఫిబ్ 2024", lifeInsurance: true, healthInsurance: true, image: null },
  { id: "DJF-0013", name: "ఉమా శంకర్", nameEn: "Uma Shankar", position: "Correspondent", positionTe: "కరస్పాండెంట్", district: "నల్గొండ", districtEn: "Nalgonda", state: "తెలంగాణ", joined: "ఆగస్టు 2024", lifeInsurance: true, healthInsurance: false, image: null },
  // Adilabad
  { id: "DJF-0014", name: "సుధాకర్ నాయక్", nameEn: "Sudhakar Nayak", position: "Correspondent", positionTe: "కరస్పాండెంట్", district: "ఆదిలాబాద్", districtEn: "Adilabad", state: "తెలంగాణ", joined: "ఏప్రి 2024", lifeInsurance: true, healthInsurance: false, image: null },
  { id: "DJF-0015", name: "అమర్ సింగ్", nameEn: "Amar Singh", position: "Cameraman", positionTe: "కామెరామన్", district: "ఆదిలాబాద్", districtEn: "Adilabad", state: "తెలంగాణ", joined: "మే 2024", lifeInsurance: false, healthInsurance: true, image: null },
  // Rangareddy
  { id: "DJF-0016", name: "పవన్ శేఖర్", nameEn: "Pavan Shekhar", position: "Senior Reporter", positionTe: "సీనియర్ రిపోర్టర్", district: "రంగారెడ్డి", districtEn: "Rangareddy", state: "తెలంగాణ", joined: "జన 2024", lifeInsurance: true, healthInsurance: true, image: null },
  { id: "DJF-0017", name: "మీనాక్షి రావు", nameEn: "Meenakshi Rao", position: "Anchor", positionTe: "యాంకర్", district: "రంగారెడ్డి", districtEn: "Rangareddy", state: "తెలంగాణ", joined: "ఆగస్టు 2024", lifeInsurance: true, healthInsurance: true, image: null },
  // Mahabubnagar
  { id: "DJF-0018", name: "బాల కిషన్", nameEn: "Bala Kishan", position: "Journalist", positionTe: "జర్నలిస్ట్", district: "మహబూబ్‌నగర్", districtEn: "Mahabubnagar", state: "తెలంగాణ", joined: "జూన్ 2024", lifeInsurance: false, healthInsurance: false, image: null },
  { id: "DJF-0019", name: "లత కుమారి", nameEn: "Latha Kumari", position: "Reporter", positionTe: "రిపోర్టర్", district: "మహబూబ్‌నగర్", districtEn: "Mahabubnagar", state: "తెలంగాణ", joined: "సెప్టె 2024", lifeInsurance: true, healthInsurance: true, image: null },
  // Sangareddy
  { id: "DJF-0020", name: "సతీష్ వర్మ", nameEn: "Satish Varma", position: "Photographer", positionTe: "ఫోటోగ్రాఫర్", district: "సంగారెడ్డి", districtEn: "Sangareddy", state: "తెలంగాణ", joined: "జులై 2024", lifeInsurance: true, healthInsurance: true, image: null },
  // Siddipet
  { id: "DJF-0021", name: "హరి కిషన్", nameEn: "Hari Kishan", position: "Reporter", positionTe: "రిపోర్టర్", district: "సిద్దిపేట", districtEn: "Siddipet", state: "తెలంగాణ", joined: "సెప్టె 2024", lifeInsurance: true, healthInsurance: false, image: null },
  // Mancherial
  { id: "DJF-0022", name: "లావణ్య శ్రీ", nameEn: "Lavanya Sri", position: "Video Journalist", positionTe: "వీడియో జర్నలిస్ట్", district: "మంచిర్యాల", districtEn: "Mancherial", state: "తెలంగాణ", joined: "అక్టో 2024", lifeInsurance: true, healthInsurance: true, image: null },
  // Yadadri
  { id: "DJF-0023", name: "ప్రకాశ్ రెడ్డి", nameEn: "Prakash Reddy", position: "Journalist", positionTe: "జర్నలిస్ట్", district: "యాదాద్రి", districtEn: "Yadadri", state: "తెలంగాణ", joined: "నవం 2024", lifeInsurance: true, healthInsurance: true, image: null },
  // Medak
  { id: "DJF-0024", name: "రమేష్ బాబు", nameEn: "Ramesh Babu", position: "Correspondent", positionTe: "కరస్పాండెంట్", district: "మెదక్", districtEn: "Medak", state: "తెలంగాణ", joined: "డిసెం 2024", lifeInsurance: false, healthInsurance: true, image: null },
];

function getInitials(nameEn: string): string {
  return nameEn
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

const positionStyleMap: Record<string, string> = {
  "Bureau Chief": "bg-crimson/10 text-crimson border border-crimson/20",
  "Senior Reporter": "bg-navy/10 text-navy border border-navy/20",
  "Anchor": "bg-purple-100 text-purple-800 border border-purple-200",
  "Correspondent": "bg-blue-50 text-blue-700 border border-blue-200",
  "Video Journalist": "bg-teal-50 text-teal-700 border border-teal-200",
  "Photographer": "bg-cyan-50 text-cyan-700 border border-cyan-200",
  "Reporter": "bg-slate-100 text-slate-600 border border-slate-200",
  "Journalist": "bg-slate-100 text-slate-600 border border-slate-200",
  "Cameraman": "bg-teal-50 text-teal-700 border border-teal-200",
  "Sub-Editor": "bg-amber-50 text-amber-700 border border-amber-200",
};

const avatarBgMap: Record<string, string> = {
  "Bureau Chief": "from-crimson/80 to-crimson",
  "Senior Reporter": "from-navy-700 to-navy",
  "Anchor": "from-purple-700 to-purple-900",
  "Correspondent": "from-blue-600 to-blue-800",
  "Video Journalist": "from-teal-600 to-teal-800",
  "Photographer": "from-cyan-600 to-cyan-800",
  "Reporter": "from-slate-500 to-slate-700",
  "Journalist": "from-slate-500 to-slate-700",
  "Cameraman": "from-teal-600 to-teal-800",
  "Sub-Editor": "from-amber-600 to-amber-800",
};

function MemberCard({ member }: { member: Member }) {
  const initials = getInitials(member.nameEn);
  const posStyle = positionStyleMap[member.position] ?? "bg-slate-100 text-slate-600 border border-slate-200";
  const avatarBg = avatarBgMap[member.position] ?? "from-navy to-navy-700";
  const hasAnyInsurance = member.lifeInsurance || member.healthInsurance;

  return (
    <div className="relative bg-surface-card rounded-2xl overflow-hidden ghost-border card-hover flex flex-col">
      {/* Insurance status strip */}
      <div className={`h-1.5 w-full ${hasAnyInsurance ? "bg-linear-to-r from-crimson via-saffron to-saffron" : "bg-slate-200"}`} />

      {/* Insurance tags */}
      <div className="absolute top-4 right-3 flex flex-col gap-1 z-10">
        {member.lifeInsurance && (
          <span className="flex items-center gap-1 px-2 py-0.5 bg-crimson/10 text-crimson text-[9px] font-bold rounded-full border border-crimson/20 whitespace-nowrap">
            <span className="material-symbols-outlined text-[11px]" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
            జీవిత బీమా ✓
          </span>
        )}
        {member.healthInsurance && (
          <span className="flex items-center gap-1 px-2 py-0.5 bg-green-50 text-green-700 text-[9px] font-bold rounded-full border border-green-200 whitespace-nowrap">
            <span className="material-symbols-outlined text-[11px]" style={{ fontVariationSettings: "'FILL' 1" }}>health_and_safety</span>
            ఆరోగ్య బీమా ✓
          </span>
        )}
        {!hasAnyInsurance && (
          <span className="flex items-center gap-1 px-2 py-0.5 bg-slate-100 text-slate-500 text-[9px] font-bold rounded-full border border-slate-200 whitespace-nowrap">
            <span className="material-symbols-outlined text-[11px]">info</span>
            Pending
          </span>
        )}
      </div>

      {/* Avatar */}
      <div className="pt-6 pb-3 flex justify-center">
        <div className={`relative w-20 h-20 rounded-full overflow-hidden border-3 border-white shadow-lg shadow-navy/15 bg-linear-to-br ${avatarBg}`}>
          {member.image ? (
            <Image
              src={member.image}
              alt={member.nameEn}
              fill
              className="object-cover"
              unoptimized
            />
          ) : (
            /* Placeholder — shows reporter silhouette icon or initials */
            <div className="w-full h-full flex flex-col items-center justify-center gap-0.5">
              <span
                className="material-symbols-outlined text-3xl text-white/70"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                account_circle
              </span>
              <span className="text-xs font-headline font-bold text-white/90 leading-none">
                {initials}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="px-4 pb-5 text-center flex flex-col items-center gap-2 flex-1">
        <div>
          <h3 className="font-headline font-bold text-navy text-base leading-tight">{member.name}</h3>
          <p className="text-navy/40 text-[11px] font-body mt-0.5">{member.nameEn}</p>
        </div>

        <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold ${posStyle}`}>
          {member.positionTe}
        </span>

        <div className="flex items-center justify-center gap-1 text-on-surface-muted text-xs font-body">
          <span className="material-symbols-outlined text-sm text-saffron-dim" style={{ fontVariationSettings: "'FILL' 0" }}>
            location_on
          </span>
          <span>{member.district}</span>
          <span className="text-slate-300">·</span>
          <span className="text-slate-400">{member.state}</span>
        </div>

        <div className="w-full flex items-center justify-between pt-2 mt-auto border-t border-slate-100">
          <span className="text-[10px] text-slate-400 font-body font-semibold">{member.id}</span>
          <span className="text-[10px] text-slate-400 font-body">
            <span className="text-slate-300">చేరిన:</span> {member.joined}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function MembersPage() {
  const [search, setSearch] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("all");

  const districtOptions = useMemo(() => {
    const all = [...new Set(members.map((m) => m.districtEn))].sort();
    return all;
  }, []);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return members.filter((m) => {
      const matchSearch =
        !q ||
        m.name.includes(search) ||
        m.nameEn.toLowerCase().includes(q) ||
        m.id.toLowerCase().includes(q) ||
        m.positionTe.includes(search) ||
        m.position.toLowerCase().includes(q);
      const matchDistrict =
        selectedDistrict === "all" || m.districtEn === selectedDistrict;
      return matchSearch && matchDistrict;
    });
  }, [search, selectedDistrict]);

  const grouped = useMemo(() => {
    const groups: Record<string, Member[]> = {};
    filtered.forEach((m) => {
      if (!groups[m.district]) groups[m.district] = [];
      groups[m.district].push(m);
    });
    return groups;
  }, [filtered]);

  const totalLife = members.filter((m) => m.lifeInsurance).length;
  const totalHealth = members.filter((m) => m.healthInsurance).length;
  const totalDistricts = new Set(members.map((m) => m.districtEn)).size;

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-surface">
        {/* ── Page Header ──────────────────────────────── */}
        <section className="relative bg-navy overflow-hidden pt-24 pb-16">
          {/* Radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,#001a5e_0%,#00072a_65%,#000510_100%)]" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-saffron/5 rounded-full blur-3xl pointer-events-none" />

          {/* Reporter SVG — right side decoration */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.12] hidden xl:block pointer-events-none">
            <ReporterMicSVG width={480} height={500} />
          </div>
          <div className="absolute inset-0 bg-linear-to-r from-navy via-navy/90 to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-saffron/70 font-body mb-6">
              <Link href="/" className="hover:text-saffron transition-colors">Home</Link>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span className="text-saffron">సభ్యుల జాబితా</span>
            </div>

            <div className="max-w-2xl space-y-4">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-saffron opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-saffron" />
                </span>
                <span className="text-[11px] font-body font-bold tracking-widest uppercase text-saffron">
                  DJF(W) · REG NO: 343/2025
                </span>
              </div>

              <h1 className="font-headline text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
                సభ్యుల{" "}
                <span className="text-gradient-saffron">జాబితా</span>
              </h1>
              <p className="text-navy-100 font-headline text-lg font-semibold text-white/80">
                Member Directory — District-wise, Telangana
              </p>
              <p className="text-slate-400 font-body text-sm leading-relaxed max-w-lg">
                DJF(W) అన్ని జిల్లాల సభ్యుల వివరాలు ఇక్కడ ఉన్నాయి. బీమా స్థితి, పదవి మరియు జిల్లావారీ వివరాలు చూడండి.
              </p>
            </div>

            {/* Stats strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
              {[
                { icon: "groups", val: members.length, label: "మొత్తం సభ్యులు", sub: "Total Members" },
                { icon: "favorite", val: totalLife, label: "జీవిత బీమా Active", sub: "Life Insurance" },
                { icon: "health_and_safety", val: totalHealth, label: "ఆరోగ్య బీమా Active", sub: "Health Insurance" },
                { icon: "location_on", val: totalDistricts, label: "జిల్లాలు", sub: "Districts" },
              ].map((s) => (
                <div key={s.label} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="material-symbols-outlined text-saffron text-xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {s.icon}
                    </span>
                    <span className="font-headline text-2xl font-bold text-white">{s.val}</span>
                  </div>
                  <p className="text-saffron text-xs font-body font-semibold">{s.label}</p>
                  <p className="text-slate-500 text-[10px] font-body">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Search + District Filter ──────────────────── */}
        <div className="sticky top-[60px] z-40 bg-surface/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-3 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            {/* Search */}
            <div className="relative flex-1 min-w-0 max-w-xs">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="పేరు, ID, పదవి వెతుకు..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-8 py-2 rounded-xl border border-slate-200 bg-white text-sm font-body text-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-saffron/30 focus:border-saffron/60"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* District chips */}
            <div className="flex gap-2 overflow-x-auto pb-0.5 scrollbar-hide flex-1">
              <button
                onClick={() => setSelectedDistrict("all")}
                className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-body font-bold transition-all ${
                  selectedDistrict === "all"
                    ? "bg-navy text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                అన్నీ ({members.length})
              </button>
              {districtOptions.map((d) => {
                const count = members.filter((m) => m.districtEn === d).length;
                const telugu = members.find((m) => m.districtEn === d)?.district ?? d;
                return (
                  <button
                    key={d}
                    onClick={() => setSelectedDistrict(selectedDistrict === d ? "all" : d)}
                    className={`shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-body font-bold transition-all ${
                      selectedDistrict === d
                        ? "bg-saffron text-navy"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {telugu}
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                      selectedDistrict === d ? "bg-navy/20 text-navy" : "bg-white text-slate-500"
                    }`}>{count}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Members Grid ─────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
          {/* Result count */}
          <p className="text-sm text-on-surface-muted font-body mb-8">
            <span className="font-bold text-navy">{filtered.length}</span> సభ్యులు చూపిస్తున్నాం
            {selectedDistrict !== "all" && (
              <span> · <span className="text-saffron-dim font-semibold">{members.find(m => m.districtEn === selectedDistrict)?.district}</span></span>
            )}
          </p>

          {filtered.length === 0 ? (
            <div className="text-center py-20 space-y-4">
              <div className="flex justify-center opacity-30">
                <ReporterMicSVG width={160} height={170} />
              </div>
              <p className="font-headline text-xl text-navy font-bold">సభ్యులు కనుగొనబడలేదు</p>
              <p className="text-on-surface-muted text-sm font-body">No members found for this search</p>
              <button
                onClick={() => { setSearch(""); setSelectedDistrict("all"); }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-navy text-white text-sm font-bold rounded-xl"
              >
                <X size={14} /> Clear filters
              </button>
            </div>
          ) : (
            <div className="space-y-12">
              {Object.entries(grouped).map(([districtTe, districtMembers]) => (
                <div key={districtTe}>
                  {/* District heading */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex items-center gap-2">
                      <span
                        className="material-symbols-outlined text-xl text-saffron-dim"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        location_city
                      </span>
                      <h2 className="font-headline text-xl font-extrabold text-navy">
                        {districtTe}
                      </h2>
                      <span className="text-navy/40 font-headline text-sm">
                        · {districtMembers[0].districtEn}
                      </span>
                    </div>
                    <span className="px-2.5 py-0.5 bg-saffron/15 text-saffron-dim text-xs font-bold rounded-full border border-saffron/20">
                      {districtMembers.length} సభ్యులు
                    </span>
                    <div className="flex-1 h-px bg-slate-200" />
                    {/* District insurance breakdown */}
                    <div className="hidden sm:flex items-center gap-3 text-[11px] text-on-surface-muted font-body">
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-crimson" />
                        జీవిత: {districtMembers.filter(m => m.lifeInsurance).length}
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-green-500" />
                        ఆరోగ్య: {districtMembers.filter(m => m.healthInsurance).length}
                      </span>
                    </div>
                  </div>

                  {/* Cards grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {districtMembers.map((member) => (
                      <MemberCard key={member.id} member={member} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Bottom CTA */}
          <div className="mt-16 bg-navy rounded-2xl p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,#001a5e_0%,#00072a_100%)]" />
            <div className="relative z-10 space-y-4">
              <span
                className="material-symbols-outlined text-5xl text-saffron"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                groups
              </span>
              <h3 className="font-headline text-2xl font-extrabold text-white">
                మీరు ఇంకా సభ్యుడు కాలేదా?
              </h3>
              <p className="text-slate-400 font-body text-sm">
                Not a member yet? Join DJF(W) and get Life + Family Health Insurance from day one.
              </p>
              <Link
                href="/join"
                className="inline-flex items-center gap-2 bg-saffron hover:bg-saffron/90 text-navy px-8 py-3 rounded-xl font-bold font-headline transition-all hover:-translate-y-0.5 shadow-lg shadow-saffron/20"
              >
                <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                ఇప్పుడే చేరండి · Join Now
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
