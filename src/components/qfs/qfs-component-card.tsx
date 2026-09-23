"use client";

import { useState } from "react";
import {
  Copy,
  Check,
  ExternalLink,
  AlertCircle,
  ArrowRight,
} from "lucide-react";
import {
  type EcosystemComponent,
  NETWORKS,
  shortAddress,
} from "./data";
import { toast } from "sonner";
import { useLanguage } from "./language-context";

interface Props {
  component: EcosystemComponent;
}

export function QfsComponentCard({ component }: Props) {
  const [copied, setCopied] = useState<string | null>(null);
  const { t } = useLanguage();
  const Icon = component.icon;

  const STATUS_LABELS: Record<string, string> = {
    live: t("status.live"),
    development: t("status.development"),
    integration: t("status.integration"),
    future: t("status.future"),
  };

  const STATUS_PILLS: Record<string, string> = {
    live: "qfs-pill",
    development: "qfs-pill-dev",
    integration: "qfs-pill-dev",
    future: "qfs-pill-future",
  };

  const STATUS_DOTS: Record<string, string> = {
    live: "bg-emerald-400",
    development: "bg-amber-400",
    integration: "bg-amber-400",
    future: "bg-purple-400",
  };

  const variantClass =
    component.variant === "gold"
      ? "qfs-card-gold"
      : component.variant === "blue"
        ? "qfs-card"
        : "qfs-card";

  const iconWrapClass =
    component.variant === "gold"
      ? "from-[#3a2f10] to-[#040a1c] border-[#5b4818]"
      : component.variant === "blue"
        ? "from-[#0a1840] to-[#040a1c] border-[#1b3067]"
        : "from-[#0a1840] to-[#040a1c] border-[#1b3067]";

  const iconColor =
    component.variant === "gold" ? "text-[#d4af37]" : "text-[#60a5fa]";

  const handleCopy = async (addr: string) => {
    try {
      await navigator.clipboard.writeText(addr);
      setCopied(addr);
      toast.success(t("toast.copied.title"), {
        description: shortAddress(addr),
      });
      setTimeout(() => setCopied(null), 2000);
    } catch {
      toast.error(t("toast.copy.error"));
    }
  };

  return (
    <article
      id={component.id}
      className={`${variantClass} qfs-fade-in-up flex flex-col overflow-hidden p-6`}
      style={{ animationDelay: `${component.index * 60}ms` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3.5">
          <div
            className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl border bg-gradient-to-br ${iconWrapClass}`}
          >
            <Icon className={`h-6 w-6 ${iconColor}`} strokeWidth={1.7} />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold tracking-[0.18em] text-slate-500">
                {String(component.index).padStart(2, "0")}
              </span>
              <h3 className="truncate text-lg font-bold tracking-tight text-white">
                {component.name}
              </h3>
            </div>
            <p className="mt-0.5 text-xs font-medium text-slate-400">
              {component.concept}
            </p>
          </div>
        </div>

        {/* Status pill */}
        <span className={`${STATUS_PILLS[component.status]} shrink-0`}>
          <span
            className={`h-1.5 w-1.5 rounded-full ${STATUS_DOTS[component.status]}`}
          />
          {STATUS_LABELS[component.status]}
        </span>
      </div>

      {/* Description */}
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        {component.description}
      </p>

      <div className="my-5 qfs-divider" />

      {/* Contracts */}
      {component.contracts.length > 0 ? (
        <div className="space-y-3">
          {component.contracts.map((c, idx) => {
            const net = NETWORKS[c.network];
            return (
              <div
                key={`${c.address}-${idx}`}
                className="rounded-xl border border-[#16295c]/70 bg-[#040a1c]/60 p-3.5"
              >
                {/* Network + label */}
                <div className="mb-2 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span
                      className="grid h-5 w-5 place-items-center rounded-md text-[10px] font-bold"
                      style={{
                        background: `${net.color}22`,
                        color: net.color,
                        border: `1px solid ${net.color}55`,
                      }}
                    >
                      {net.short.slice(0, 1)}
                    </span>
                    <span className="text-xs font-semibold text-slate-200">
                      {net.name}
                    </span>
                    {c.label && (
                      <span className="text-[10px] uppercase tracking-wider text-slate-500">
                        · {c.label}
                      </span>
                    )}
                  </div>
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider"
                    style={{ color: net.color }}
                  >
                    {net.glyph} {net.short}
                  </span>
                </div>

                {/* Address */}
                <div className="qfs-mono flex items-center gap-2 rounded-lg border border-[#101f47] bg-[#030816]/80 px-3 py-2 text-xs text-slate-300">
                  <span className="truncate">{c.address}</span>
                </div>

                {/* Buttons */}
                <div className="mt-2.5 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => handleCopy(c.address)}
                    className="qfs-btn-ghost w-full"
                    aria-label={`${t("card.copy")} — ${component.name} · ${net.name}`}
                  >
                    {copied === c.address ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                        {t("card.copied")}
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        {t("card.copy")}
                      </>
                    )}
                  </button>
                  <a
                    href={`${net.explorerBaseUrl}${c.address}`}
                    target="_blank"
                    rel="noreferrer"
                    className="qfs-btn-primary w-full"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    {t("card.explorer")}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-[#16295c] bg-[#040a1c]/40 px-4 py-5 text-center">
          <AlertCircle className="mx-auto h-5 w-5 text-slate-500" />
          <p className="mt-2 text-xs text-slate-400">
            {component.status === "development" && t("card.dev.empty")}
            {component.status === "integration" && t("card.integration.empty")}
            {component.status === "future" && t("card.future.empty")}
          </p>
        </div>
      )}

      {/* Footer mini */}
      <div className="mt-auto pt-4">
        <a
          href={`#${component.id}`}
          className="inline-flex items-center gap-1 text-[11px] font-medium uppercase tracking-wider text-slate-500 hover:text-[#d4af37]"
        >
          {t("card.component")} {String(component.index).padStart(2, "0")}
          <ArrowRight className="h-3 w-3" />
        </a>
      </div>
    </article>
  );
}
