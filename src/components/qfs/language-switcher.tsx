"use client";

import { useEffect, useRef, useState } from "react";
import { Globe, Check, ChevronDown } from "lucide-react";
import { useLanguage } from "./language-context";
import type { LangCode } from "./i18n";

interface Props {
  variant?: "header" | "mobile";
}

export function LanguageSwitcher({ variant = "header" }: Props) {
  const { lang, setLang, languages, current, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, [open]);

  const handleSelect = (code: LangCode) => {
    setLang(code);
    setOpen(false);
  };

  if (variant === "mobile") {
    return (
      <div ref={wrapRef} className="relative">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={t("lang.switch")}
          aria-expanded={open}
          className="flex w-full items-center justify-between gap-2 rounded-lg border border-[#1b2f63] bg-[#040a1c]/60 px-3 py-2.5 text-sm text-slate-300"
        >
          <span className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-[#d4af37]" />
            <span className="text-base">{current.flag}</span>
            <span>{current.label}</span>
          </span>
          <ChevronDown
            className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>
        {open && (
          <div className="mt-1 max-h-80 overflow-y-auto rounded-lg border border-[#1b3067] bg-[#040a1c]/95 p-1 shadow-2xl qfs-scroll">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => handleSelect(l.code)}
                className={`flex w-full items-center justify-between gap-2 rounded-md px-3 py-2 text-sm transition-colors ${
                  l.code === lang
                    ? "bg-blue-600/20 text-white"
                    : "text-slate-300 hover:bg-white/5"
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <span className="text-base">{l.flag}</span>
                  <span>{l.label}</span>
                </span>
                {l.code === lang && (
                  <Check className="h-3.5 w-3.5 text-[#d4af37]" />
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div ref={wrapRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={t("lang.switch")}
        aria-expanded={open}
        className="flex items-center gap-1.5 rounded-lg border border-[#1b2f63] bg-[#040a1c]/60 px-2.5 py-2 text-[13px] font-medium text-slate-300 transition-colors hover:border-[#3b82f6]/50 hover:text-white"
      >
        <Globe className="h-3.5 w-3.5 text-[#d4af37]" />
        <span className="text-sm leading-none">{current.flag}</span>
        <span className="hidden xl:inline">{current.label}</span>
        <ChevronDown
          className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          className={`absolute top-full z-50 mt-2 min-w-[200px] max-h-80 overflow-y-auto rounded-xl border border-[#1b3067] bg-[#040a1c]/95 p-1.5 shadow-2xl backdrop-blur-xl qfs-scroll ${
            current.rtl ? "left-0" : "right-0"
          }`}
        >
          <div className="px-2 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-500">
            {t("lang.switch")}
          </div>
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => handleSelect(l.code)}
              className={`flex w-full items-center justify-between gap-2 rounded-md px-2.5 py-2 text-sm transition-colors ${
                l.code === lang
                  ? "bg-blue-600/20 text-white"
                  : "text-slate-300 hover:bg-white/5"
              }`}
            >
              <span className="flex items-center gap-2.5">
                <span className="text-base">{l.flag}</span>
                <span className="flex flex-col items-start leading-tight">
                  <span>{l.label}</span>
                  <span className="text-[10px] text-slate-500">
                    {l.englishLabel}
                  </span>
                </span>
              </span>
              {l.code === lang && (
                <Check className="h-3.5 w-3.5 text-[#d4af37]" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
