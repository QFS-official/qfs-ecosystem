"use client";

import {
  Coins,
  Layers3,
  Landmark,
  Wallet,
  CreditCard,
  Boxes,
  CheckCircle2,
  Circle,
  Clock,
} from "lucide-react";

interface Step {
  icon: React.ElementType;
  title: string;
  desc: string;
  state: "done" | "current" | "future";
}

const STEPS: Step[] = [
  {
    icon: Coins,
    title: "GCRM · AlArab · TRAEX",
    desc: "Activos conectados al ecosistema QFS.",
    state: "current",
  },
  {
    icon: Layers3,
    title: "Integración de activos",
    desc: "Cohesión técnica y operativa entre los activos y la infraestructura.",
    state: "current",
  },
  {
    icon: Landmark,
    title: "Banco Cuántico QFS",
    desc: "Registro y establecimiento institucional en Medio Oriente.",
    state: "future",
  },
  {
    icon: Wallet,
    title: "Servicios financieros QFS",
    desc: "Operación financiera integral bajo el ecosistema.",
    state: "future",
  },
  {
    icon: Boxes,
    title: "QFS Blockchain",
    desc: "Migración a infraestructura propia.",
    state: "future",
  },
  {
    icon: CreditCard,
    title: "Tarjeta Cuántica QFS",
    desc: "Servicio previsto tras el cumplimiento de las condiciones necesarias.",
    state: "future",
  },
];

const STATE_META = {
  done: {
    icon: CheckCircle2,
    color: "text-emerald-400",
    ring: "border-emerald-500/40 bg-emerald-500/5",
    label: "Completado",
    labelColor: "text-emerald-400",
  },
  current: {
    icon: Circle,
    color: "text-[#d4af37]",
    ring: "border-[#d4af37]/40 bg-[#d4af37]/5",
    label: "En curso",
    labelColor: "text-[#d4af37]",
  },
  future: {
    icon: Clock,
    color: "text-slate-500",
    ring: "border-[#16295c] bg-[#040a1c]/40",
    label: "Previsto",
    labelColor: "text-slate-400",
  },
};

export function QfsRoadmap() {
  return (
    <section
      id="roadmap"
      className="relative border-t border-[#101f47] bg-[#040a1c]/40"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-10">
          <span className="qfs-pill">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3b82f6]" />
            Sección 04
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Secuencia de <span className="qfs-text-gold">liberación</span>
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-400">
            La Tarjeta Cuántica QFS está prevista para una etapa posterior al
            establecimiento del Banco Cuántico QFS en Medio Oriente y al
            cumplimiento de las condiciones necesarias para la liberación e
            integración de los activos contemplados en la iniciativa.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-[#3b82f6]/40 via-[#d4af37]/40 to-[#a855f7]/40 sm:left-1/2" />

          <ol className="space-y-6">
            {STEPS.map((step, i) => {
              const meta = STATE_META[step.state];
              const Icon = step.icon;
              const StateIcon = meta.icon;
              const isLeft = i % 2 === 0;

              return (
                <li
                  key={step.title}
                  className={`relative flex items-start gap-4 sm:gap-0 ${
                    isLeft ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Node */}
                  <div className="absolute left-4 top-6 z-10 -translate-x-1/2 sm:left-1/2">
                    <div
                      className={`grid h-8 w-8 place-items-center rounded-full border-2 ${meta.ring} bg-[#030816]`}
                    >
                      <StateIcon className={`h-4 w-4 ${meta.color}`} />
                    </div>
                  </div>

                  {/* Spacer for the other side on desktop */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Card */}
                  <div
                    className={`ml-12 w-full sm:ml-0 sm:w-1/2 ${
                      isLeft ? "sm:pr-12" : "sm:pl-12"
                    }`}
                  >
                    <div className={`qfs-card p-5 ${step.state === "future" ? "opacity-80" : ""}`}>
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <div className="grid h-9 w-9 place-items-center rounded-lg border border-[#16295c] bg-[#040a1c]/60">
                            <Icon
                              className={`h-4.5 w-4.5 ${meta.color}`}
                              strokeWidth={1.7}
                            />
                          </div>
                          <div>
                            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                              Paso {String(i + 1).padStart(2, "0")}
                            </div>
                            <h3 className="text-sm font-bold text-white">
                              {step.title}
                            </h3>
                          </div>
                        </div>
                        <span
                          className={`text-[10px] font-semibold uppercase tracking-wider ${meta.labelColor}`}
                        >
                          {meta.label}
                        </span>
                      </div>
                      <p className="mt-3 text-xs leading-relaxed text-slate-300">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
