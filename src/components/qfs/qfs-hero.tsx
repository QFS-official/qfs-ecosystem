"use client";

import { ShieldCheck, Layers, Globe2, ArrowRight } from "lucide-react";
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
      {/* ====== PORTADA ANIMADA (VIDEO EN BUCLE) ======
          Video de fondo en bucle con poster mientras carga.
          Se funde con el fondo Quantum Glow mediante mask gradient. */}
      <div className="relative mx-auto max-w-7xl px-4 pt-6 sm:px-6 sm:pt-10 lg:px-8">
        <div
          className="relative overflow-hidden rounded-3xl"
          style={{
            WebkitMaskImage:
              "linear-gradient(180deg, black 0%, black 60%, transparent 100%)",
            maskImage:
              "linear-gradient(180deg, black 0%, black 60%, transparent 100%)",
            boxShadow:
              "0 30px 80px -20px rgba(212, 175, 55, 0.30), 0 0 0 1px rgba(212, 175, 55, 0.10)",
          }}
        >
          {/* Video portada en bucle (autoplay muted) */}
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/hero-portada-poster.jpg"
            className="h-auto w-full object-cover"
            style={{ display: "block" }}
          >
            <source src="/hero-portada-video-web.mp4" type="video/mp4" />
          </video>

          {/* Overlay sutil vertical para profundidad */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(3,8,22,0.0) 0%, rgba(3,8,22,0.10) 50%, rgba(3,8,22,0.45) 100%)",
            }}
            aria-hidden
          />

          {/* Ring dorado interior sutil */}
          <div
            className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-[#d4af37]/10"
            aria-hidden
          />
        </div>
      </div>

      {/* ====== CONTENIDO INSTITUCIONAL ======
          Estructura más profesional: pill → eyebrow → título →
          subtítulo → divisores finos → CTAs → feature chips → stats.
          Sin logo (ya está en header y footer). Espaciado generoso
          tipo landing page corporativa premium. */}
      <div className="relative mx-auto max-w-5xl px-4 pb-20 pt-10 sm:px-6 sm:pb-24 sm:pt-14 lg:px-8">
        {/* Pill institucional */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#1b3067] bg-[#040a1c]/70 px-4 py-1.5 text-[11px] font-medium text-slate-300 backdrop-blur-md">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            <span className="tracking-[0.22em] uppercase">{t("hero.pill")}</span>
          </div>
        </div>

        {/* Título principal — más grande y con mejor jerarquía */}
        <h1 className="mt-8 text-balance text-center text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-7xl">
          ECOSISTEMA <span className="qfs-text-gold">QFS</span>
        </h1>

        {/* Divisor fino dorado — separa título de subtítulo */}
        <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent" />

        {/* Subtítulo */}
        <p className="mx-auto mt-8 max-w-3xl text-center text-base leading-relaxed text-slate-300 sm:text-lg lg:text-xl">
          {t("hero.subtitle")}
        </p>

        {/* CTAs — más espaciados, con hover refinado */}
        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <a
            href="#ecosistema"
            className="group qfs-btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm"
          >
            {t("cta.explore")}
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contratos"
            className="qfs-btn-ghost inline-flex items-center gap-2 px-6 py-3 text-sm"
          >
            {t("cta.viewTable")}
          </a>
        </div>

        {/* Feature chips — separados por divisores verticales para look editorial */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs">
          <span className="inline-flex items-center gap-2 text-slate-300">
            <ShieldCheck className="h-4 w-4 text-[#d4af37]" />
            {t("chip.multichain")}
          </span>
          <span className="hidden h-3 w-px bg-[#1b3067] sm:inline-block" />
          <span className="inline-flex items-center gap-2 text-slate-300">
            <Layers className="h-4 w-4 text-[#3b82f6]" />
            {t("chip.verified")}
          </span>
          <span className="hidden h-3 w-px bg-[#1b3067] sm:inline-block" />
          <span className="inline-flex items-center gap-2 text-slate-300">
            <Globe2 className="h-4 w-4 text-emerald-400" />
            {t("chip.institutional")}
          </span>
        </div>

        {/* Divisor antes de stats */}
        <div className="mx-auto mt-16 h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-[#1b3067] to-transparent" />

        {/* Stats — sin cajas, números grandes con tipografía editorial */}
        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-4">
          {STATS.map((s, idx) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl font-bold qfs-text-gold sm:text-5xl">
                {s.value}
              </div>
              <div className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                {s.label}
              </div>
              <div className="mt-0.5 text-[10px] text-slate-500">{s.sub}</div>
              {/* Línea decorativa bajo cada stat */}
              <div
                className="mx-auto mt-3 h-0.5 w-8 rounded-full"
                style={{
                  background:
                    idx % 2 === 0
                      ? "linear-gradient(90deg, transparent, #d4af37, transparent)"
                      : "linear-gradient(90deg, transparent, #3b82f6, transparent)",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
