// Centralized data for the QFS Ecosystem section
import type { LucideIcon } from "lucide-react";
import {
  Wallet,
  Atom,
  Boxes,
  Coins,
  Globe2,
  Layers3,
  Landmark,
  CreditCard,
  Network,
} from "lucide-react";

export type NetworkId = "ethereum" | "polygon" | "bnb" | "qfs-blockchain";

export interface NetworkInfo {
  id: NetworkId;
  name: string;
  short: string;
  explorerBaseUrl: string;
  color: string;
  glyph: string;
}

export const NETWORKS: Record<NetworkId, NetworkInfo> = {
  ethereum: {
    id: "ethereum",
    name: "Ethereum",
    short: "ETH",
    explorerBaseUrl: "https://etherscan.io/address/",
    color: "#627eea",
    glyph: "◆",
  },
  polygon: {
    id: "polygon",
    name: "Polygon",
    short: "MATIC",
    explorerBaseUrl: "https://polygonscan.com/address/",
    color: "#8247e5",
    glyph: "🔷",
  },
  bnb: {
    id: "bnb",
    name: "BNB Chain",
    short: "BNB",
    explorerBaseUrl: "https://bscscan.com/address/",
    color: "#f0b90b",
    glyph: "🟡",
  },
  "qfs-blockchain": {
    id: "qfs-blockchain",
    name: "QFS Blockchain",
    short: "QFS",
    explorerBaseUrl: "#",
    color: "#d4af37",
    glyph: "⬡",
  },
};

export type ComponentStatus = "live" | "development" | "future" | "integration";

export interface ContractEntry {
  network: NetworkId;
  address: string;
  label?: string;
}

export interface EcosystemComponent {
  id: string;
  index: number;
  name: string;
  concept: string;
  description: string;
  icon: LucideIcon;
  status: ComponentStatus;
  contracts: ContractEntry[];
  variant?: "default" | "gold" | "blue";
  accentColor?: string;
}

export const STATUS_META: Record<
  ComponentStatus,
  { label: string; pillClass: string; dotClass: string }
> = {
  live: {
    label: "Operativo",
    pillClass: "qfs-pill",
    dotClass: "bg-emerald-400",
  },
  development: {
    label: "In Development",
    pillClass: "qfs-pill-dev",
    dotClass: "bg-amber-400",
  },
  integration: {
    label: "Integración / Desarrollo",
    pillClass: "qfs-pill-dev",
    dotClass: "bg-amber-400",
  },
  future: {
    label: "Etapa prevista",
    pillClass: "qfs-pill-future",
    dotClass: "bg-purple-400",
  },
};

export const ECOSYSTEM_COMPONENTS: EcosystemComponent[] = [
  {
    id: "qfspay",
    index: 1,
    name: "QFSpay",
    concept: "Servicios financieros",
    description:
      "Plataforma de servicios financieros del ecosistema QFS. Integra la Tarjeta Cuántica y los Bonos y Acciones digitales.",
    icon: Wallet,
    status: "live",
    variant: "gold",
    contracts: [
      {
        network: "ethereum",
        address: "0x7C670A7EBa354E0d22F0ecBBE7A36BF10dCE305E",
        label: "Tarjeta Cuántica QFS",
      },
      {
        network: "polygon",
        address: "0xb5787DA56A4eaF11864696d8B5C6671aDF3449E7",
        label: "Bonos y Acciones QFS",
      },
    ],
  },
  {
    id: "qfs",
    index: 2,
    name: "QFS",
    concept: "Sistema Financiero Cuántico",
    description:
      "Infraestructura que conecta los diferentes componentes y activos del ecosistema. Opera temporalmente sobre Polygon mientras se desarrolla la QFS Blockchain.",
    icon: Atom,
    status: "live",
    variant: "blue",
    contracts: [
      {
        network: "polygon",
        address: "0x2298c6fE2E74828461C52FC58e85F2C17aa69ba0",
        label: "Sistema QFS",
      },
    ],
  },
  {
    id: "qfs-blockchain",
    index: 3,
    name: "QFS Blockchain",
    concept: "Infraestructura propia en desarrollo",
    description:
      "Blockchain propia proyectada para el ecosistema QFS. Actualmente la red operativa es Polygon; la migración a QFS Blockchain está en desarrollo.",
    icon: Boxes,
    status: "development",
    variant: "default",
    contracts: [],
  },
  {
    id: "gcrm",
    index: 4,
    name: "GCRM",
    concept: "Global Currency Reset Master",
    description:
      "Activo digital conectado al ecosistema QFS, vinculado a la iniciativa de reordenamiento monetario global.",
    icon: Coins,
    status: "live",
    contracts: [
      {
        network: "polygon",
        address: "0x11175910c6F02913782777840ac008F30720046f",
        label: "GCRM Token",
      },
    ],
  },
  {
    id: "alarab",
    index: 5,
    name: "AlArab",
    concept: "Al Arab Coin — ALA",
    description:
      "Activo digital conectado al ecosistema QFS, orientado al Medio Oriente y a la integración regional.",
    icon: Globe2,
    status: "live",
    contracts: [
      {
        network: "polygon",
        address: "0xF5c068f28eBF91b22e52C2ecD230621879e914B8",
        label: "AlArab Coin",
      },
    ],
  },
  {
    id: "traex",
    index: 6,
    name: "TRAEX",
    concept: "Activo en integración",
    description:
      "Activo contemplado dentro de la iniciativa para integración con el ecosistema QFS. El contrato público se publicará cuando esté disponible la dirección oficial.",
    icon: Layers3,
    status: "integration",
    contracts: [],
  },
  {
    id: "nesg",
    index: 7,
    name: "NESG",
    concept: "Ecosistema Global Legal, Corporativo, Financiero y de Activos",
    description:
      "Integra el conocimiento jurídico, el desarrollo corporativo, las finanzas estructuradas, los activos reales y la infraestructura digital en un ecosistema institucional orientado al desarrollo productivo, la transparencia y la cooperación internacional.",
    icon: Network,
    status: "live",
    variant: "blue",
    contracts: [
      {
        network: "polygon",
        address: "0xE64ceD357672e70fA5cE1fCAEc52c8F690528bcC",
        label: "NESG — Polygon",
      },
      {
        network: "ethereum",
        address: "0x1Ac1FB7CA22C7836ce7D553bE992c318fe2477CD",
        label: "NESG — Ethereum",
      },
      {
        network: "bnb",
        address: "0xFCcf5Becfcc0978A3A766476Bb58d5F13565d999",
        label: "NESG — BNB Chain",
      },
    ],
  },
  {
    id: "banco-cuantico",
    index: 8,
    name: "Banco Cuántico QFS",
    concept: "Etapa institucional",
    description:
      "Se contempla el registro y establecimiento del Banco Cuántico QFS en Medio Oriente como parte de la evolución institucional del ecosistema.",
    icon: Landmark,
    status: "future",
    variant: "gold",
    contracts: [],
  },
  {
    id: "tarjeta-cuantica",
    index: 9,
    name: "Tarjeta Cuántica QFS",
    concept: "Servicio previsto",
    description:
      "La Tarjeta Cuántica QFS está prevista para una etapa posterior al establecimiento del Banco Cuántico QFS en Medio Oriente y al cumplimiento de las condiciones necesarias para la liberación e integración de los activos.",
    icon: CreditCard,
    status: "future",
    variant: "gold",
    contracts: [],
  },
];

export interface TableRow {
  component: string;
  network: NetworkId;
  fn: string;
  address: string;
}

export const CONTRACTS_TABLE: TableRow[] = [
  {
    component: "QFSpay",
    network: "ethereum",
    fn: "Tarjeta Cuántica",
    address: "0x7C670A7EBa354E0d22F0ecBBE7A36BF10dCE305E",
  },
  {
    component: "QFSpay",
    network: "polygon",
    fn: "Bonos y Acciones",
    address: "0xb5787DA56A4eaF11864696d8B5C6671aDF3449E7",
  },
  {
    component: "QFS",
    network: "polygon",
    fn: "Sistema QFS",
    address: "0x2298c6fE2E74828461C52FC58e85F2C17aa69ba0",
  },
  {
    component: "GCRM",
    network: "polygon",
    fn: "Activo conectado",
    address: "0x11175910c6F02913782777840ac008F30720046f",
  },
  {
    component: "AlArab",
    network: "polygon",
    fn: "Activo conectado",
    address: "0xF5c068f28eBF91b22e52C2ecD230621879e914B8",
  },
  {
    component: "NESG",
    network: "polygon",
    fn: "Legal / Corporativo / Financiero",
    address: "0xE64ceD357672e70fA5cE1fCAEc52c8F690528bcC",
  },
  {
    component: "NESG",
    network: "ethereum",
    fn: "Legal / Corporativo / Financiero",
    address: "0x1Ac1FB7CA22C7836ce7D553bE992c318fe2477CD",
  },
  {
    component: "NESG",
    network: "bnb",
    fn: "Legal / Corporativo / Financiero",
    address: "0xFCcf5Becfcc0978A3A766476Bb58d5F13565d999",
  },
];

export function shortAddress(addr: string, head = 6, tail = 4): string {
  if (!addr) return "";
  if (addr.length <= head + tail) return addr;
  return `${addr.slice(0, head + 2)}...${addr.slice(-tail)}`;
}
