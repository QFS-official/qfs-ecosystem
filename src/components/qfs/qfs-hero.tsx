"use client";

import Image from "next/image";
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
      {/* Portada (banner) — imagen nueva */}
      <div className="relative mx-auto max-w-7xl px-4 pt-10 sm:px-6 sm:pt-14 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-[#1b3067]/60 shadow-[0_20px_60px_-20px_rgba(212,175,55,0.35)]">
          {/* Imagen portada */}
          <Image
            src="/hero-portada.jpg"
            alt="QFS — Portada institucional del ecosistema cuántico"
            width={1024}
            height={413}
            priority
            className="h-auto w-full object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 1024px"
          />
          {/* Overlay sutil para integrar con el tema oscuro */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(3,8,22,0.0) 0%, rgba(3,8,22,0.15) 60%, rgba(3,8,22,0.55) 100%)",
            }}
            aria-hidden
          />
          {/* Ring dorado interior */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-[#d4af37]/15" aria-hidden />
        </div>
      </div>

      {/* Contenido del hero */}
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          {/* Logo con aura cuántica rotatoria */}
          <div className="mb-7 flex justify-center">
            <div className="relative grid place-items-center">
              {/* Aura cuántica rotatoria (detrás) */}
              <div className="qfs-aura h-28 w-28 sm:h-32 sm:w-32" aria-hidden />
              {/* Logo */}
              <div className="relative h-24 w-24 overflow-hidden rounded-2xl ring-2 ring-[#d4af37]/40 shadow-[0_0_60px_-8px_rgba(212,175,55,0.7)] qfs-pulse sm:h-28 sm:w-28 z-10">
                <Image
                  src="/qfs-logo.png"
                  alt="Símbolo Cuántico QFS"
                  width={112}
                  height={112}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>

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
