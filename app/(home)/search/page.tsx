"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState, useEffect, Suspense } from "react";
import { SearchWrapper } from "./search-wrapper";
import { useApiData } from "@/hooks/useApiData";
import { Nurse } from "./search.constant";
import { Loader2 } from "lucide-react";

 const NurseSearchPageInner = () => {
  const searchParams = useSearchParams();
  const { data: nursesData, loading: apiLoading } = useApiData<Nurse>('nurses');
  const [isLoading, setIsLoading] = useState(false);
  const [displayedNurses, setDisplayedNurses] = useState<Nurse[]>([]);
  const [loadingStep, setLoadingStep] = useState(0);
  
  const filteredNurses = useMemo(() => {
    if (!nursesData || nursesData.length === 0) return [];
    
    const location = searchParams.get('location') || '100';
    const specialization = searchParams.get('specialization') || 'icu';
    const experience = searchParams.get('experience') || '5+';
    const availability = searchParams.get('availability') || 'immediate';
    
    const locationMiles = Number.parseInt(location);
    const experienceYears = Number.parseInt(experience);
    
    return nursesData.filter((nurse) => {
      if (nurse.deployed) return false;
      
      const matchesLocation = nurse.distance_miles <= locationMiles;
      const matchesSpecialization = nurse.specialty.toLowerCase() === specialization.toLowerCase();
      const matchesExperience = nurse.experience_years >= experienceYears;
      const matchesAvailability = availability === 'immediate' 
        ? nurse.availability_status === 'Available' 
        : true;
      
      return matchesLocation && matchesSpecialization && matchesExperience && matchesAvailability;
    });
  }, [searchParams, nursesData]);

  useEffect(() => {
    setIsLoading(true);
    setLoadingStep(0);
    
    const step1 = setTimeout(() => setLoadingStep(1), 1000);
    const step2 = setTimeout(() => setLoadingStep(2), 2000);
    const step3 = setTimeout(() => setLoadingStep(3), 3000);
    const final = setTimeout(() => {
      setDisplayedNurses(filteredNurses);
      setIsLoading(false);
    }, 4000);
    
    return () => {
      clearTimeout(step1);
      clearTimeout(step2);
      clearTimeout(step3);
      clearTimeout(final);
    };
  }, [filteredNurses]);
  
  const loadingMessages = [
    "Searching 2,847 registered nurses...",
    "Analyzing qualifications...",
    "Calculating match scores...",
    `Found ${filteredNurses?.length} qualified nurses`
  ];
  
  if (isLoading || apiLoading) {
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