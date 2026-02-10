"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import searchFilters from "@/data/search-filters.json";
import { useRouter, useSearchParams } from "next/navigation";

export const SearchClient = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [filters, setFilters] = useState({
    location: searchParams.get('location') || '100',
    specialization: searchParams.get('specialization') || 'icu',
    experience: searchParams.get('experience') || '5+',
    availability: searchParams.get('availability') || 'immediate'
  });

  useEffect(() => {
    const params = new URLSearchParams(filters);
    router.replace(`/search?${params.toString()}`);
  }, []);

  const handleSubmit = () => {
    const params = new URLSearchParams(filters);
    router.push(`/search?${params.toString()}`);
  };

  return (
   <div className="w-full flex-shrink-0 group-data-[collapsible=icon]:hidden">
        <Card>
          <CardHeader>
            <CardTitle>Search Filters</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="location">Location</Label>
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
              <Label htmlFor="specialization">Specialization</Label>
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
              <Label htmlFor="experience">Experience</Label>
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
              <Label htmlFor="availability">Availability</Label>
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
            
            <Button onClick={handleSubmit} className="w-full bg-cyan-600 hover:bg-cyan-700">
              Apply Filters
            </Button>
          </CardContent>
        </Card>
      </div>
  );
};