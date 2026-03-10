"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useAppData } from "@/contexts/AppDataContext";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import "leaflet/dist/leaflet.css";

interface DeploymentMapDialogProps {
  readonly open: boolean;
  readonly onOpenChange: (open: boolean) => void;
}

const RENTON_CENTER = [47.4829, -122.2171] as [number, number]; // Powell Ave SW, Renton, WA

const MapComponent = dynamic(
  () => import("./map-component"),
  { ssr: false }
);

export function DeploymentMapDialog({ open, onOpenChange }: DeploymentMapDialogProps) {
  const { nurses } = useAppData();
  const availableNurses = useMemo(() => nurses.filter(n => !n.deployed), [nurses]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Deployment Map - Available Nurses</DialogTitle>
        </DialogHeader>
        <div className="flex-1 min-h-0">
          {open && <MapComponent center={RENTON_CENTER} nurses={availableNurses} />}
        </div>
      </DialogContent>
    </Dialog>
  );
}
