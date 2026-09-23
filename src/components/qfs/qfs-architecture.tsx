"use client";

import {
  Network,
  Atom,
  Wallet,
  Coins,
  Landmark,
  Boxes,
  CreditCard,
} from "lucide-react";
import { useLanguage } from "./language-context";

interface NodeProps {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  variant?: "blue" | "gold" | "purple" | "amber";
  wide?: boolean;
}

function ArchNode({ icon: Icon, title, subtitle, variant = "blue", wide }: NodeProps) {
  const variants: Record<string, { wrap: string; icon: string; ring: string }> = {
    blue: {
      wrap: "border-[#1b3067] bg-gradient-to-br from-[#0a1840]/80 to-[#040a1c]/80",
      icon: "text-[#60a5fa]",
      ring: "ring-[#3b82f6]/20",
    },
    gold: {
      wrap: "border-[#5b4818] bg-gradient-to-br from-[#3a2f10]/80 to-[#040a1c]/80",
      icon: "text-[#d4af37]",
      ring: "ring-[#d4af37]/25",
    },
    purple: {
      wrap: "border-[#3b1a5e] bg-gradient-to-br from-[#1f0d3a]/80 to-[#040a1c]/80",
      icon: "text-[#c084fc]",
      ring: "ring-[#a855f7]/20",
    },
    amber: {
      wrap: "border-[#5b4818] bg-gradient-to-br from-[#3a2f10]/60 to-[#040a1c]/80",
      icon: "text-[#fcd34d]",
      ring: "ring-[#fbbf24]/25",
    },
  };
  const v = variants[variant];

  return (
    <div
      className={`relative grid place-items-center rounded-2xl border ${v.wrap} p-5 ring-1 ring-inset ${v.ring} ${
        wide ? "w-full max-w-md" : "w-full max-w-sm"
      } mx-auto`}
    >
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-white/5 bg-white/5">
          <Icon className={`h-5 w-5 ${v.icon}`} strokeWidth={1.7} />
        </div>
        <div className="text-left">
          <div className="text-sm font-bold text-white">{title}</div>
          <div className="text-[11px] text-slate-400">{subtitle}</div>
        </div>
      </div>
    </div>
  );
}

function Connector({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center py-2">
      {label && (
        <span className="mb-1.5 rounded-full border border-[#16295c] bg-[#040a1c]/70 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
          {label}
        </span>
      )}
      <div className="qfs-connector h-8" />
    </div>
  );
}

export function QfsArchitecture() {
  const { t } = useLanguage();

  return (
    <section
      id="arquitectura"
      className="qfs-section-bg relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mb-10 text-center">
        <span className="qfs-pill">
          <span className="h-1.5 w-1.5 rounded-full bg-[#a855f7]" />
          {t("section.03")}
        </span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {t("section.arch.title").split(" ").slice(0, -1).join(" ")}{" "}
          <span className="qfs-text-gold">
            {t("section.arch.title").split(" ").slice(-1)}
          </span>
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-400">
          {t("section.arch.desc")}
        </p>
      </div>

      <div className="qfs-card qfs-grid-bg relative overflow-hidden p-6 sm:p-10">
        {/* Column layout for vertical flow */}
        <div className="relative mx-auto flex max-w-3xl flex-col items-center">
          <ArchNode
            icon={Network}
            title="NESG"
            subtitle={t("node.nesg.sub")}
            variant="blue"
          />

          <Connector label={t("conn.institutional")} />

          <ArchNode
            icon={Atom}
            title="QFS"
            subtitle={t("node.qfs.sub")}
            variant="blue"
          />

          <Connector label={t("conn.connects")} />

          <ArchNode
            icon={Wallet}
            title="QFSpay"
            subtitle={t("node.qfspay.sub")}
            variant="gold"
          />

          <Connector label={t("conn.integrates")} />

          <ArchNode
            icon={Coins}
            title="GCRM · AlArab · TRAEX"
            subtitle={t("node.assets.sub")}
            variant="gold"
            wide
          />

          <Connector label={t("conn.bank")} />

          <ArchNode
            icon={Landmark}
            title="Banco Cuántico QFS"
            subtitle={t("node.bank.sub")}
            variant="purple"
          />

          <Connector label={t("conn.ownInfra")} />

          <ArchNode
            icon={Boxes}
            title="QFS Blockchain"
            subtitle={t("node.qfsblockchain.sub")}
            variant="amber"
          />

          <Connector label={t("conn.finalService")} />

          <ArchNode
            icon={CreditCard}
            title="Tarjeta Cuántica QFS"
            subtitle={t("node.card.sub")}
            variant="purple"
          />
        </div>
      </div>
    </section>
  );
}
