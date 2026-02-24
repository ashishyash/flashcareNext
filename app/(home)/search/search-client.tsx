"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Funnel } from "lucide-react";
import searchFilters from "@/data/search-filters.json";
import { useRouter, useSearchParams } from "next/navigation";

export const SearchClient = ({ filteredNursesCount = 0 }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);

  const [filters, setFilters] = useState({
    location: searchParams.get("location") || "100",
    specialization: searchParams.get("specialization") || "icu",
    experience: searchParams.get("experience") || "5+",
    availability: searchParams.get("availability") || "immediate",
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
    <div
      data-testid="filters-section"
      className="bg-white border border-[#E5E7EB] rounded-lg"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-5 py-4">
        <div className="flex flex-col">
          <h3 className="text-lg font-normal text-brand-black1">Filters</h3>
          <hr />
          {/* Results count */}
          <p
            data-testid="results-count"
            className=" pb-1 text-sm font-normal text-brand-black2"
          >
            {filteredNursesCount} nurses match your criteria
          </p>
        </div>{" "}
        <button
          data-testid="toggle-filters-btn"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1.5 text-base font-normal text-brand-cyan3 hover:opacity-90 transition-opacity justify-start sm:justify-end"
        >
          {/* <Filter className="w-4 h-4" /> */}
          <Funnel className="text-brand-cyan3 w-5 h-5 hover:opacity-90 transition-opacity" />{" "}
          {isOpen ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      {isOpen && (
        <>
          <div className="px-5 pb-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div>
              <label className="block text-sm text-brand-black2 font-normal mb-1.5">
                Location
              </label>
              <Select
                value={filters.location}
                onValueChange={(value) =>
                  setFilters({ ...filters, location: value })
                }
              >
                <SelectTrigger
                  data-testid="filter-location"
                  className="h-10 bg-white border-sidebar-border text-sm font-normal "
                >
                  <SelectValue placeholder="All Locations" />
                </SelectTrigger>
                <SelectContent>
                  {searchFilters.location.map((item) => (
                    <SelectItem
                      key={item.value}
                      value={item.value}
                      className="data-[highlighted]:bg-brand-cyan1 data-[highlighted]:text-white"
                    >
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm text-brand-black2 font-normal mb-1.5">
                Specialty
              </label>
              <Select
                value={filters.specialization}
                onValueChange={(value) =>
                  setFilters({ ...filters, specialization: value })
                }
              >
                <SelectTrigger
                  data-testid="filter-specialty"
                  className="h-10 bg-white border-[#E5E7EB] text-sm"
                >
                  <SelectValue placeholder="All Specialties" />
                </SelectTrigger>
                <SelectContent>
                  {searchFilters.specialization.map((item) => (
                    <SelectItem
                      key={item.value}
                      value={item.value}
                      className="data-[highlighted]:bg-brand-cyan1 data-[highlighted]:text-white"
                    >
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm text-brand-black2 font-normal mb-1.5">
                Experience
              </label>
              <Select
                value={filters.experience}
                onValueChange={(value) =>
                  setFilters({ ...filters, experience: value })
                }
              >
                <SelectTrigger
                  data-testid="filter-experience"
                  className="h-10 bg-white border-[#E5E7EB] text-sm"
                >
                  <SelectValue placeholder="All Experience" />
                </SelectTrigger>
                <SelectContent>
                  {searchFilters.experience.map((item) => (
                    <SelectItem
                      key={item.value}
                      value={item.value}
                      className="data-[highlighted]:bg-brand-cyan1 data-[highlighted]:text-white"
                    >
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="">
              <label className="block text-sm text-brand-black2 font-normal mb-1.5">
                Availability
              </label>
              <Select
                value={filters.availability}
                onValueChange={(value) =>
                  setFilters({ ...filters, availability: value })
                }
              >
                <SelectTrigger
                  data-testid="filter-availability"
                  className="h-10 bg-white border-[#E5E7EB] text-sm"
                >
                  <SelectValue placeholder="All" />
                </SelectTrigger>
                <SelectContent>
                  {searchFilters.availability.map((item) => (
                    <SelectItem
                      key={item.value}
                      value={item.value}
                      className="data-[highlighted]:bg-brand-cyan1 data-[highlighted]:text-white"
                    >
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex  items-end">
              <Button
                onClick={handleSubmit}
                className="bg-brand-cyan3 hover:opacity-90  sm:w-auto"
              >
                Apply Filters
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
