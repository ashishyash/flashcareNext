"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState, useEffect, Suspense } from "react";
import { SearchWrapper } from "./search-wrapper";
import { Nurse } from "./search.constant";
import { Loader2 } from "lucide-react";
import { useAppData } from "@/contexts/AppDataContext";

 const NurseSearchPageInner = () => {
  const searchParams = useSearchParams();
  const { nurses: nursesData } = useAppData();
  const [isLoading, setIsLoading] = useState(false);
  const [displayedNurses, setDisplayedNurses] = useState<Nurse[]>([]);
  const [loadingStep, setLoadingStep] = useState(0);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  
  const filteredNurses = useMemo(() => {
    if (!nursesData || nursesData.length === 0) return [];
    
    const location = searchParams.get('location') || '100';
    const specialization = searchParams.get('specialization') || 'icu';
    const experience = searchParams.get('experience') || 'all';
    const availability = searchParams.get('availability') || 'all';
    
    return nursesData.filter((nurse) => {
      if (nurse.deployed) return false;
      
      const matchesLocation = location === 'all' || nurse.distance_miles <= Number.parseInt(location);
      const matchesSpecialization = specialization === 'all' || nurse.specialty.toLowerCase() === specialization.toLowerCase();
      const matchesExperience = experience === 'all' || nurse.experience_years >= Number.parseInt(experience);
      const matchesAvailability = availability === 'all' || nurse.availability_status === availability;
      
      return matchesLocation && matchesSpecialization && matchesExperience && matchesAvailability;
    });
  }, [searchParams, nursesData]);

  useEffect(() => {
    if (isInitialLoad) {
      setIsLoading(true);
      setLoadingStep(0);
      
      const step1 = setTimeout(() => setLoadingStep(1), 1500);
      const step2 = setTimeout(() => setLoadingStep(2), 3000);
      const step3 = setTimeout(() => setLoadingStep(3), 4500);
      const step4 = setTimeout(() => setLoadingStep(4), 6000);
      const final = setTimeout(() => {
        setDisplayedNurses(filteredNurses);
        setIsLoading(false);
        setIsInitialLoad(false);
      }, 7500);
      
      return () => {
        clearTimeout(step1);
        clearTimeout(step2);
        clearTimeout(step3);
        clearTimeout(step4);
        clearTimeout(final);
      };
    } else {
      setDisplayedNurses(filteredNurses);
      return undefined;
    }
  }, [filteredNurses, isInitialLoad]);
  
  const loadingMessages = [
    "Searching 2,847 registered nurses...",
    "Analyzing qualifications...",
    "Finding matching profiles using AI...",
    "Calculating match scores...",
    `Found ${filteredNurses?.length} qualified nurses`
  ];
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-cyan-600 mx-auto mb-4" />
          <p className="text-lg text-gray-600">{loadingMessages[loadingStep]}</p>
        </div>
      </div>
    );
  }
  
  return (
    <div>
      <SearchWrapper nurses={displayedNurses} />
    </div>
  );
};

export default function NurseSearchPage() {
  return (
    <Suspense>
      <NurseSearchPageInner />
    </Suspense>
  );
}