"use client";

import { ShieldCheck, Layers, Globe2 } from "lucide-react";
import { useLanguage } from "./language-context";

export function QfsHero() {
  const { t } = useLanguage();

  const STATS = [
    { label: t("stat.components"), value: "9", sub: t("stat.ecosystemSub") },
    { label: t("stat.networks"), value: "3", sub: "ETH · MATIC · BNB" },
    { label: t("stat.contracts"), value: "8", sub: t("stat.contracts") },
    { label: t("stat.dev"), value: "2", sub: t("stat.devSub") },
  ];

  return (
    <section
      id="inicio"
      className="qfs-grid-bg relative overflow-hidden border-b border-[#101f47]"
    >
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          {/* Pill */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1b3067] bg-[#040a1c]/70 px-4 py-1.5 text-xs font-medium text-slate-300 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="tracking-[0.18em] uppercase">{t("hero.pill")}</span>
          </div>

          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            ECOSISTEMA <span className="qfs-text-gold">QFS</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            {t("hero.subtitle")}
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#ecosistema" className="qfs-btn-primary">
              {t("cta.explore")}
            </a>
            <a href="#contratos" className="qfs-btn-ghost">
              {t("cta.viewTable")}
            </a>
          </div>

          {/* Feature chips */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#1b3067] bg-[#040a1c]/60 px-3 py-1.5 text-xs text-slate-300">
              <ShieldCheck className="h-3.5 w-3.5 text-[#d4af37]" />
              {t("chip.multichain")}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#1b3067] bg-[#040a1c]/60 px-3 py-1.5 text-xs text-slate-300">
              <Layers className="h-3.5 w-3.5 text-[#3b82f6]" />
              {t("chip.verified")}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#1b3067] bg-[#040a1c]/60 px-3 py-1.5 text-xs text-slate-300">
              <Globe2 className="h-3.5 w-3.5 text-emerald-400" />
              {t("chip.institutional")}
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="qfs-card p-5 text-center"
            >
              <div className="text-3xl font-bold qfs-text-gold">{s.value}</div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-200">
                {s.label}
              </div>
              <div className="text-[11px] text-slate-500">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
