"use client";

import { useState } from "react";
import { Copy, Check, ExternalLink, Search } from "lucide-react";
import {
  CONTRACTS_TABLE,
  NETWORKS,
  shortAddress,
  type NetworkId,
} from "./data";
import { toast } from "sonner";

const FILTERS: { id: "all" | NetworkId; label: string }[] = [
  { id: "all", label: "Todas" },
  { id: "ethereum", label: "Ethereum" },
  { id: "polygon", label: "Polygon" },
  { id: "bnb", label: "BNB Chain" },
];

export function QfsContractsTable() {
  const [copied, setCopied] = useState<string | null>(null);
  const [filter, setFilter] = useState<"all" | NetworkId>("all");
  const [query, setQuery] = useState("");

  const rows = CONTRACTS_TABLE.filter((r) => {
    if (filter !== "all" && r.network !== filter) return false;
    if (query) {
      const q = query.toLowerCase();
      return (
        r.component.toLowerCase().includes(q) ||
        r.fn.toLowerCase().includes(q) ||
        r.address.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const handleCopy = async (addr: string) => {
    try {
      await navigator.clipboard.writeText(addr);
      setCopied(addr);
      toast.success("Contrato copiado", {
        description: shortAddress(addr),
      });
      setTimeout(() => setCopied(null), 2000);
    } catch {
      toast.error("No se pudo copiar el contrato");
    }
  };

  return (
    <section
      id="contratos"
      className="relative border-y border-[#101f47] bg-[#040a1c]/30 backdrop-blur-sm"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {/* Header */}
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="qfs-pill">
              <span className="h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
              Sección 02
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Tabla general de <span className="qfs-text-gold">contratos</span>
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-400">
              Vista unificada de componentes, redes, funciones y direcciones de
              contratos inteligentes publicados.
            </p>
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar componente, función o dirección…"
              className="qfs-mono w-full rounded-lg border border-[#1b3067] bg-[#040a1c]/60 py-2 pl-9 pr-3 text-xs text-slate-200 placeholder:text-slate-500 focus:border-[#3b82f6]/60 focus:outline-none focus:ring-1 focus:ring-[#3b82f6]/40"
            />
          </div>
        </div>

        {/* Filter chips */}
        <div className="mb-6 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                filter === f.id
                  ? "border border-blue-500/40 bg-blue-600/20 text-white"
                  : "border border-[#1b3067] bg-[#040a1c]/40 text-slate-400 hover:text-slate-200"
              }`}
            >
              {f.label}
            </button>
          ))}
          <span className="ml-auto self-center text-xs text-slate-500">
            {rows.length} resultado{rows.length === 1 ? "" : "s"}
          </span>
        </div>

        {/* Table — desktop */}
        <div className="qfs-card overflow-hidden">
          <div className="hidden overflow-x-auto md:block qfs-scroll">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-[#16295c] bg-[#040a1c]/60">
                  <th className="px-5 py-3 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Componente
                  </th>
                  <th className="px-5 py-3 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Red
                  </th>
                  <th className="px-5 py-3 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Función
                  </th>
                  <th className="px-5 py-3 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Contrato
                  </th>
                  <th className="px-5 py-3 text-right text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => {
                  const net = NETWORKS[r.network];
                  return (
                    <tr
                      key={`${r.component}-${r.address}`}
                      className={`border-b border-[#101f47] transition-colors hover:bg-[#0a1840]/30 ${
                        i === rows.length - 1 ? "border-b-0" : ""
                      }`}
                    >
                      <td className="px-5 py-4">
                        <span className="font-semibold text-white">
                          {r.component}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <span
                          className="inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 text-[11px] font-semibold"
                          style={{
                            color: net.color,
                            borderColor: `${net.color}55`,
                            background: `${net.color}18`,
                          }}
                        >
                          {net.glyph} {net.name}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-slate-300">{r.fn}</td>
                      <td className="px-5 py-4">
                        <span className="qfs-mono text-xs text-slate-300">
                          {shortAddress(r.address, 6, 4)}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => handleCopy(r.address)}
                            className="grid h-7 w-7 place-items-center rounded-md border border-[#1b3067] bg-[#040a1c]/60 text-slate-400 hover:border-[#3b82f6]/50 hover:text-white"
                            aria-label="Copiar contrato"
                          >
                            {copied === r.address ? (
                              <Check className="h-3.5 w-3.5 text-emerald-400" />
                            ) : (
                              <Copy className="h-3.5 w-3.5" />
                            )}
                          </button>
                          <a
                            href={`${net.explorerBaseUrl}${r.address}`}
                            target="_blank"
                            rel="noreferrer"
                            className="grid h-7 w-7 place-items-center rounded-md border border-[#5b4818] bg-[#3a2f10]/40 text-[#d4af37] hover:border-[#d4af37] hover:bg-[#3a2f10]/70"
                            aria-label="Ver en explorador"
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        </div>
                      </td>
                    </tr>
                  );
                })}
                {rows.length === 0 && (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-5 py-10 text-center text-sm text-slate-500"
                    >
                      No se encontraron contratos con ese criterio.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="block divide-y divide-[#101f47] md:hidden">
            {rows.map((r) => {
              const net = NETWORKS[r.network];
              return (
                <div key={`${r.component}-${r.address}`} className="p-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-semibold text-white">
                      {r.component}
                    </span>
                    <span
                      className="inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[10px] font-semibold"
                      style={{
                        color: net.color,
                        borderColor: `${net.color}55`,
                        background: `${net.color}18`,
                      }}
                    >
                      {net.glyph} {net.name}
                    </span>
                  </div>
                  <div className="mt-1 text-xs text-slate-400">{r.fn}</div>
                  <div className="qfs-mono mt-2 break-all text-[11px] text-slate-300">
                    {r.address}
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleCopy(r.address)}
                      className="qfs-btn-ghost w-full"
                    >
                      {copied === r.address ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-emerald-400" />
                          Copiado
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" />
                          Copy
                        </>
                      )}
                    </button>
                    <a
                      href={`${net.explorerBaseUrl}${r.address}`}
                      target="_blank"
                      rel="noreferrer"
                      className="qfs-btn-primary w-full"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Explorer
                    </a>
                  </div>
                </div>
              );
            })}
            {rows.length === 0 && (
              <div className="p-8 text-center text-sm text-slate-500">
                Sin resultados.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
