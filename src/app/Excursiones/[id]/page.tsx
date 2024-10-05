"use client";
import Catamaran from "@/components/Excursiones/Catamaran/Catamaran";
import CerroCastor from "@/components/Excursiones/CerroCastor/CerroCastor";
import LagunaEsmeralda from "@/components/Excursiones/LagunaEsmeralda/LagunaEsmeralda";
import ParqueNacional from "@/components/Excursiones/ParqueNacional/ParqueNacional";
import TrasladoAeropuerto from "@/components/Excursiones/TrasladoAeropuerto/TrasladoAeropuerto";
import TrenFinMundo from "@/components/Excursiones/TrenFinMundo/TrenFinMundo";

export default function page({ params }: { params: { id: string } }) {
  return (
    <main>
      {params.id === "1" && <TrenFinMundo />}
      {params.id === "2" && <Catamaran />}
      {params.id === "3" && <CerroCastor />}
      {params.id === "4" && <LagunaEsmeralda />}
      {params.id === "5" && <ParqueNacional />}
      {params.id === "6" && <TrasladoAeropuerto />}
    </main>
  );
}
