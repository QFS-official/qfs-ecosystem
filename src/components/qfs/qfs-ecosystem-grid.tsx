"use client";

import { ECOSYSTEM_COMPONENTS } from "./data";
import { QfsComponentCard } from "./qfs-component-card";
import { useLanguage } from "./language-context";

export function QfsEcosystemGrid() {
  const { t } = useLanguage();

  return (
    <section
      id="ecosistema"
      className="qfs-section-bg relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
    >
      {/* Section header */}
      <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <span className="qfs-pill">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3b82f6]" />
            {t("section.01")}
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t("section.components.title").split(" ").slice(0, -1).join(" ")}{" "}
            <span className="qfs-text-gold">
              {t("section.components.title").split(" ").slice(-1)}
            </span>
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-400">
            {t("section.components.desc")}
          </p>
        </div>
        <div className="hidden text-right text-xs text-slate-500 sm:block">
          <div>
            <span className="font-bold text-slate-300">
              {ECOSYSTEM_COMPONENTS.length}
            </span>{" "}
            {t("section.components.right")}
          </div>
          <div>
            <span className="font-bold text-slate-300">3</span>{" "}
            {t("section.components.networks")}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {ECOSYSTEM_COMPONENTS.map((c) => (
          <QfsComponentCard key={c.id} component={c} />
        ))}
      </div>
    </section>
  );
}
