"use client";

import { useState, useEffect } from "react";
import { Menu, X, Atom, ExternalLink } from "lucide-react";
import { useLanguage } from "./language-context";
import { LanguageSwitcher } from "./language-switcher";

export function QfsHeader() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const NAV_ITEMS = [
    { label: t("nav.home"), href: "#inicio" },
    { label: t("nav.ecosystem"), href: "#ecosistema", active: true },
    { label: t("nav.contracts"), href: "#contratos" },
    { label: t("nav.architecture"), href: "#arquitectura" },
    { label: t("nav.roadmap"), href: "#roadmap" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors duration-300 ${
        scrolled
          ? "border-[#101f47] bg-[#040a1c]/95 backdrop-blur-xl"
          : "border-transparent bg-[#040a1c]/70 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <a href="#inicio" className="flex shrink-0 items-center gap-3">
          <div className="relative grid h-10 w-10 place-items-center rounded-xl border border-[#1b3067] bg-gradient-to-br from-[#0a1840] to-[#040a1c]">
            <Atom
              className="h-5 w-5 text-[#d4af37] qfs-pulse"
              strokeWidth={1.8}
            />
            <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-[#3b82f6]/20" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-[15px] font-bold tracking-tight text-white">
              QFS<span className="qfs-text-gold">pay</span>
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">
              {t("brand.suffix")}
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg px-3 py-2 text-[13px] font-medium transition-colors ${
                item.active
                  ? "border border-blue-500/40 bg-blue-600/20 text-white"
                  : "border border-transparent text-slate-400 hover:bg-white/5 hover:text-slate-200"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="hidden items-center gap-2 lg:flex">
          <LanguageSwitcher variant="header" />
          <a
            href="https://explorer.qfspay.org"
            target="_blank"
            rel="noreferrer"
            className="qfs-btn-ghost"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            {t("nav.explorer")}
          </a>
          <a href="#ecosistema" className="qfs-btn-primary">
            {t("cta.viewEcosystem")}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="Open menu"
          className="grid h-10 w-10 place-items-center rounded-lg border border-[#1b2f63] text-slate-300 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-[#101f47] bg-[#040a1c]/95 px-4 py-3 lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-sm font-medium ${
                  item.active
                    ? "border border-blue-500/40 bg-blue-600/20 text-white"
                    : "text-slate-300 hover:bg-white/5"
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="my-2 qfs-divider" />
            <LanguageSwitcher variant="mobile" />
            <a
              href="https://explorer.qfspay.org"
              target="_blank"
              rel="noreferrer"
              className="mt-2 qfs-btn-ghost w-full"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              {t("nav.explorer")}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
