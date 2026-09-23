"use client";

import { Atom, ShieldCheck, Globe2, ExternalLink } from "lucide-react";
import { useLanguage } from "./language-context";

export function QfsFooter() {
  const { t } = useLanguage();

  return (
    <footer className="mt-auto border-t border-[#101f47] bg-gradient-to-b from-[#040a1c]/60 to-[#030816]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-lg border border-[#1b3067] bg-gradient-to-br from-[#0a1840] to-[#040a1c]">
                <Atom className="h-4 w-4 text-[#d4af37]" strokeWidth={1.8} />
              </div>
              <div>
                <div className="text-sm font-bold text-white">
                  QFS<span className="qfs-text-gold">pay</span>
                </div>
                <div className="text-[10px] uppercase tracking-wider text-slate-500">
                  {t("brand.suffix")}
                </div>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-xs leading-relaxed text-slate-400">
              {t("footer.brandDesc")}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-md border border-[#16295c] bg-[#040a1c]/60 px-2.5 py-1 text-[10px] text-slate-400">
                <ShieldCheck className="h-3 w-3 text-emerald-400" />
                {t("chip.multichain")}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md border border-[#16295c] bg-[#040a1c]/60 px-2.5 py-1 text-[10px] text-slate-400">
                <Globe2 className="h-3 w-3 text-[#3b82f6]" />
                Polygon · Ethereum · BNB
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="md:justify-self-center">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              {t("footer.ecosystem")}
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              {[
                { label: "QFSpay", href: "#qfspay" },
                { label: "QFS", href: "#qfs" },
                { label: "QFS Blockchain", href: "#qfs-blockchain" },
                { label: "GCRM", href: "#gcrm" },
                { label: "AlArab", href: "#alarab" },
                { label: "TRAEX", href: "#traex" },
                { label: "NESG", href: "#nesg" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-slate-400 transition-colors hover:text-[#d4af37]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* External */}
          <div className="md:justify-self-end">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              {t("footer.resources")}
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href="https://explorer.qfspay.org"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-400 transition-colors hover:text-[#d4af37]"
                >
                  QFS Explorer
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://etherscan.io"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-400 transition-colors hover:text-[#d4af37]"
                >
                  Etherscan
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://polygonscan.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-400 transition-colors hover:text-[#d4af37]"
                >
                  PolygonScan
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://bscscan.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-400 transition-colors hover:text-[#d4af37]"
                >
                  BscScan
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="my-8 qfs-divider" />

        <div className="flex flex-col items-center justify-between gap-3 text-xs text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {t("footer.copyright")}
          </p>
          <p className="text-[11px]">{t("footer.disclaimer")}</p>
        </div>
      </div>
    </footer>
  );
}
