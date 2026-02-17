"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import searchFilters from "@/data/search-filters.json";
import { useRouter, useSearchParams } from "next/navigation";

export const SearchClient = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(true);
  
  const [filters, setFilters] = useState({
    location: searchParams.get('location') || '100',
    specialization: searchParams.get('specialization') || 'icu',
    experience: searchParams.get('experience') || '5+',
    availability: searchParams.get('availability') || 'immediate'
  });

  // useEffect(() => {
  //   const params = new URLSearchParams(filters);
  //   router.replace(`/search?${params.toString()}`);
  // }, []);

  const handleSubmit = () => {
    const params = new URLSearchParams(filters);
    router.push(`/search?${params.toString()}`);
  };

  return (
   <div className="w-full flex-shrink-0">
        <Card>
          <CardHeader className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <div className="flex items-center justify-between">
              <CardTitle>Search Filters</CardTitle>
              {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </div>
          </CardHeader>
          {isOpen && (
          <CardContent className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
            <div>
              <Label htmlFor="location" className="text-gray-900">Location</Label>
              <Select value={filters.location} onValueChange={(value) => setFilters({...filters, location: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  {searchFilters.location.map((item) => (
                    <SelectItem key={item.value} value={item.value}>{item.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="specialization" className="text-gray-900">Specialization</Label>
              <Select value={filters.specialization} onValueChange={(value) => setFilters({...filters, specialization: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select specialization" />
                </SelectTrigger>
                <SelectContent>
                  {searchFilters.specialization.map((item) => (
                    <SelectItem key={item.value} value={item.value}>{item.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="experience" className="text-gray-900">Experience</Label>
              <Select value={filters.experience} onValueChange={(value) => setFilters({...filters, experience: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select experience" />
                </SelectTrigger>
                <SelectContent>
                  {searchFilters.experience.map((item) => (
                    <SelectItem key={item.value} value={item.value}>{item.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="availability" className="text-gray-900">Availability</Label>
              <Select value={filters.availability} onValueChange={(value) => setFilters({...filters, availability: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select availability" />
                </SelectTrigger>
                <SelectContent>
                  {searchFilters.availability.map((item) => (
                    <SelectItem key={item.value} value={item.value}>{item.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <Button onClick={handleSubmit} className="bg-cyan-600 hover:bg-cyan-700">
              Apply Filters
            </Button>
          </CardContent>
          )}
        </Card>
      </div>
  );
};