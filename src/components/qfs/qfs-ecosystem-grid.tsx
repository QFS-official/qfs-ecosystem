"use client";

import { ECOSYSTEM_COMPONENTS } from "./data";
import { QfsComponentCard } from "./qfs-component-card";

export function QfsEcosystemGrid() {
  return (
    <section
      id="ecosistema"
      className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
    >
      {/* Section header */}
      <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <span className="qfs-pill">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3b82f6]" />
            Sección 01
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Componentes del <span className="qfs-text-gold">ecosistema</span>
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-400">
            Nueve componentes interconectados: infraestructura, activos,
            servicios financieros y etapas institucionales previstas. Cada
            tarjeta muestra nombre, concepto, red y contrato correspondiente.
          </p>
        </div>
        <div className="hidden text-right text-xs text-slate-500 sm:block">
          <div>
            <span className="font-bold text-slate-300">
              {ECOSYSTEM_COMPONENTS.length}
            </span>{" "}
            componentes
          </div>
          <div>
            <span className="font-bold text-slate-300">3</span> redes blockchain
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
