import { QfsHeader } from "@/components/qfs/qfs-header";
import { QfsHero } from "@/components/qfs/qfs-hero";
import { QfsEcosystemGrid } from "@/components/qfs/qfs-ecosystem-grid";
import { QfsContractsTable } from "@/components/qfs/qfs-contracts-table";
import { QfsArchitecture } from "@/components/qfs/qfs-architecture";
import { QfsRoadmap } from "@/components/qfs/qfs-roadmap";
import { QfsFooter } from "@/components/qfs/qfs-footer";
import { Toaster } from "@/components/ui/sonner";

export default function Home() {
  return (
    <>
      <QfsHeader />
      <main className="flex-1">
        <QfsHero />
        <QfsEcosystemGrid />
        <QfsContractsTable />
        <QfsArchitecture />
        <QfsRoadmap />
      </main>
      <QfsFooter />
      <Toaster
        position="bottom-right"
        theme="dark"
        toastOptions={{
          style: {
            background: "#040a1c",
            border: "1px solid #1b3067",
            color: "#e2e8f0",
          },
        }}
      />
    </>
  );
}
