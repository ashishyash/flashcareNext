"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import nursesJson from "@/data/nurses.json";
import metricsJson from "@/data/metrics.json";
import unitsJson from "@/data/units.json";
import activitiesJson from "@/data/activities.json";
import { Nurse } from "@/app/(home)/search/search.constant";

interface Metric {
  id: number;
  label: string;
  value: string;
  [key: string]: any;
}

interface Unit {
  id: number;
  name: string;
  current: number;
  capacity: number;
  needed: number;
  staffed: number;
  [key: string]: any;
}

interface Activity {
  id: number;
  time: string;
  text: string;
  [key: string]: any;
}

interface AppDataContextType {
  nurses: Nurse[];
  metrics: Metric[];
  units: Unit[];
  activities: Activity[];
  deployNurses: (nurseIds: number[]) => void;
}

const AppDataContext = createContext<AppDataContextType | undefined>(undefined);

export function AppDataProvider({ children }: { children: ReactNode }) {
  const [nurses, setNurses] = useState<Nurse[]>(nursesJson as any);
  const [metrics, setMetrics] = useState<Metric[]>(metricsJson as Metric[]);
  const [units, setUnits] = useState<Unit[]>(unitsJson as Unit[]);
  const [activities, setActivities] = useState<Activity[]>(activitiesJson as Activity[]);

  const deployNurses = (nurseIds: number[]) => {
    console.log('deployNurses called with:', nurseIds);
    const deployedNurses = nurses.filter(n => nurseIds.includes(n.id));
    const deployedCount = deployedNurses.length;
    console.log("Deploying", deployedCount, "nurses", deployedNurses);

    setNurses(prev => prev.map(n => 
      nurseIds.includes(n.id) ? { ...n, deployed: true } : n
    ));

    setMetrics(prev => {
      const updated = prev.map(m => {
        if (m.label === "Deployed") {
          const newValue = String(Number.parseInt(m.value) + deployedCount);
          console.log('Updating Deployed from', m.value, 'to', newValue);
          return { ...m, value: newValue };
        }
        if (m.label === "Nurses Needed") {
          const newValue = String(Math.max(0, Number.parseInt(m.value) - deployedCount));
          console.log('Updating Nurses Needed from', m.value, 'to', newValue);
          return { ...m, value: newValue };
        }
        return m;
      });
      console.log('Updated metrics:', updated);
      return updated;
    });

<<<<<<< HEAD
    const nursesBySpecialty = deployedNurses.reduce((acc, nurse) => {
      acc[nurse.specialty] = (acc[nurse.specialty] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    console.log('Nurses by specialty:', nursesBySpecialty);

    setUnits(prev => {
      const updated = prev.map(unit => {
        const matchingCount = nursesBySpecialty[unit.name] || 0;
        if (matchingCount > 0) {
          const newCurrent = Math.min(unit.capacity, unit.current + matchingCount);
          const newNeeded = Math.max(0, unit.capacity - newCurrent);
          const newStaffed = Math.round((newCurrent / unit.capacity) * 100);
          console.log(`Updating unit ${unit.name}: current ${unit.current} -> ${newCurrent}, needed ${unit.needed} -> ${newNeeded}, staffed ${unit.staffed}% -> ${newStaffed}%`);
          return { ...unit, current: newCurrent, needed: newNeeded, staffed: newStaffed };
        }
        return unit;
      });
      console.log('Updated units:', updated);
      return updated;
=======
    setUnits(prev => {
      const nursesPerUnit = Math.floor(deployedCount / prev.length);
      const remainder = deployedCount % prev.length;
      
      return prev.map((unit, index) => {
        const additionalNurses = nursesPerUnit + (index < remainder ? 1 : 0);
        const newCurrent = Math.min(unit.capacity, unit.current + additionalNurses);
        const newNeeded = Math.max(0, unit.capacity - newCurrent);
        const newStaffed = Math.round((newCurrent / unit.capacity) * 100);
        
        let status = "Critical";
        let color = "text-red-600";
        let bg = "bg-red-100";
        let border = "border-red-300";
        
        if (newStaffed >= 80) {
          status = "Stable";
          color = "text-green-600";
          bg = "bg-green-100";
          border = "border-green-300";
        } else if (newStaffed >= 50) {
          status = "Warning";
          color = "text-amber-600";
          bg = "bg-amber-100";
          border = "border-amber-300";
        }
        
        return { ...unit, current: newCurrent, needed: newNeeded, staffed: newStaffed, status, color, bg, border };
      });
>>>>>>> 3bd40637b7f91081a44bce23b911646c36e7fe0e
    });

    const time = new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    const newActivity = {
      id: activities.length + 1,
      time,
      text: `${deployedCount} nurse${deployedCount > 1 ? "s" : ""} deployed to Memorial Hospital`,
      color: "",
      status: "",
      bg: "",
      bg2: "bg-green-600"
    };
    console.log('Adding new activity:', newActivity);
    setActivities(prev => [newActivity, ...prev]);
  };

  return (
    <AppDataContext.Provider value={{ nurses, metrics, units, activities, deployNurses }}>
      {children}
    </AppDataContext.Provider>
  );
}

export function useAppData() {
  const context = useContext(AppDataContext);
  if (!context) {
    throw new Error("useAppData must be used within AppDataProvider");
  }
  return context;
}
