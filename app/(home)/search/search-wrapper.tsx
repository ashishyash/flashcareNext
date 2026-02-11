"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Nurse } from "./search.constant";
import { NurseDetailDialog } from "./nurse-detail-dialog";


interface NursesTableProps {
  readonly nurses: readonly Nurse[];
  // readonly onCheckedNursesChange?: (nurses: Nurse[]) => void;
}

export function SearchWrapper({
  nurses
}: NursesTableProps) {
  const [checkedIds, setCheckedIds] = useState<Set<number>>(new Set());
  const [sortBy, setSortBy] = useState<string>("name");
  const [filterAvailability, setFilterAvailability] = useState<string>("all");
  const [selectedNurse, setSelectedNurse] = useState<Nurse | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);


  const filteredAndSortedNurses = useMemo(() => {
    let filtered = nurses.filter((nurse) => {
 
      const availabilityMatch =
        filterAvailability === "all" ||
        nurse.availability_status === filterAvailability;
      return  availabilityMatch;
    });

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "experience":
          return b.experience_years - a.experience_years;
        case "rating":
          return b.previous_rating - a.previous_rating;
        case "match_score":
          return b.match_score - a.match_score;
        case "rate":
          return a.rate_per_hour - b.rate_per_hour;
        default:
          return 0;
      }
    });
  }, [nurses, sortBy, filterAvailability]);

  const checkedNurses = useMemo(
    () => filteredAndSortedNurses.filter((n) => checkedIds.has(n.id)),
    [filteredAndSortedNurses, checkedIds]
  );

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      const newSet = new Set(
        filteredAndSortedNurses.map((n) => n.id)
      );
      setCheckedIds(newSet);
    } else {
      setCheckedIds(new Set());
    }
  };

  const handleCheckboxChange = (id: number, checked: boolean) => {
    const newSet = new Set(checkedIds);
    if (checked) {
      newSet.add(id);
    } else {
      newSet.delete(id);
    }
    setCheckedIds(newSet);
  };

  const toggleSelectAll = () => {
    handleSelectAll(checkedIds.size !== filteredAndSortedNurses.length);
  };

  const exportCheckedData = () => {
    const dataStr = JSON.stringify(checkedNurses, null, 2);
    const dataBlob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `checked-nurses-${new Date().toISOString().split("T")[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleDeploy = (nurse: Nurse) => {
    console.log('Deploying nurse:', nurse);
    alert(`Deploying ${nurse.name} to Memorial Hospital`);
  };

  const handleNurseClick = (nurse: Nurse) => {
    setSelectedNurse(nurse);
    setIsDialogOpen(true);
  };

  // Call the callback when checked nurses change
//   if (onCheckedNursesChange) {
//     // onCheckedNursesChange(checkedNurses);
//   }

  return (
    <div className="w-full space-y-4 p-4">
      <div className="flex flex-wrap items-center gap-4 bg-slate-50 p-4 rounded-lg">
        <div className="flex-1 min-w-[200px]">
          <label htmlFor="sort-by" className="text-sm font-medium text-slate-700 block mb-2">
            Sort By
          </label>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger id="sort-by">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Name</SelectItem>
              <SelectItem value="experience">Experience</SelectItem>
              <SelectItem value="rating">Rating</SelectItem>
              <SelectItem value="match_score">Match Score</SelectItem>
              <SelectItem value="rate">Hourly Rate</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex-1 min-w-[200px]">
          <label htmlFor="availability" className="text-sm font-medium text-slate-700 block mb-2">
            Availability
          </label>
          <Select
            value={filterAvailability}
            onValueChange={setFilterAvailability}
          >
            <SelectTrigger id="availability">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="Available">Available</SelectItem>
              <SelectItem value="Busy">Busy</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="pt-6">
          <Button
            onClick={exportCheckedData}
            disabled={checkedNurses.length === 0}
            className="w-full"
          >
            Export ({checkedNurses.length})
          </Button>
        </div>
      </div>

      <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
        <p className="text-sm text-slate-700">
          Selected: <strong>{checkedNurses.length}</strong> of{" "}
          <strong>{filteredAndSortedNurses.length}</strong> nurses
        </p>
      </div>

      <div className="rounded-lg border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-slate-100">
              <TableHead className="w-12">
                <Checkbox
                  checked={
                    filteredAndSortedNurses.length > 0 &&
                    checkedIds.size === filteredAndSortedNurses.length
                  }
                  onCheckedChange={toggleSelectAll}
                  aria-label="Select all nurses"
                />
              </TableHead>
              <TableHead>Photo</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Credentials</TableHead>
              <TableHead>Specialty</TableHead>
              <TableHead className="text-right">Experience</TableHead>
              <TableHead>Location</TableHead>
              <TableHead className="text-right">Distance (mi)</TableHead>
              <TableHead className="text-center">Match Score</TableHead>
              <TableHead>Availability</TableHead>
              <TableHead className="text-right">Rate/hr</TableHead>
              <TableHead className="text-right">Rating</TableHead>
              <TableHead>Certifications</TableHead>
              <TableHead className="text-center">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAndSortedNurses.map((nurse) => (
              <TableRow key={nurse.id} className="hover:bg-slate-50">
                <TableCell>
                  <Checkbox
                    checked={checkedIds.has(nurse.id)}
                    onCheckedChange={(checked) =>
                      handleCheckboxChange(nurse.id, checked as boolean)
                    }
                    aria-label={`Select ${nurse.name}`}
                  />
                </TableCell>
                <TableCell>
                  <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={nurse.photo}
                      alt={nurse.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </TableCell>
                <TableCell className="font-medium cursor-pointer text-cyan-600 hover:text-cyan-700" onClick={() => handleNurseClick(nurse)}>{nurse.name}</TableCell>
                <TableCell className="text-sm">{nurse.credentials}</TableCell>
                <TableCell className="text-sm">{nurse.specialty}</TableCell>
                <TableCell className="text-right text-sm">
                  {nurse.experience_years} yrs
                </TableCell>
                <TableCell className="text-sm">{nurse.location}</TableCell>
                <TableCell className="text-right text-sm">
                  {nurse.distance_miles.toFixed(1)}
                </TableCell>
                <TableCell className="text-center">
                  <Badge
                    variant={
                      nurse.match_score >= 90 ? "default" : "secondary"
                    }
                    className="text-xs"
                  >
                    {nurse.match_score}%
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      nurse.availability_status === "Available"
                        ? "default"
                        : "secondary"
                    }
                    className={`text-xs ${
                      nurse.availability_status === "Available"
                        ? "bg-green-100 text-green-800 hover:bg-green-200"
                        : "bg-amber-100 text-amber-800 hover:bg-amber-200"
                    }`}
                  >
                    {nurse.availability_status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right text-sm font-medium">
                  ${nurse.rate_per_hour}
                </TableCell>
                <TableCell className="text-right text-sm">
                  ⭐ {nurse.previous_rating}
                </TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {nurse.certifications.map((cert) => (
                      <Badge key={cert} variant="outline" className="text-xs">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  <Button 
                    size="sm" 
                    onClick={() => handleDeploy(nurse)}
                    className="bg-cyan-600 hover:bg-cyan-700"
                  >
                    Deploy
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {filteredAndSortedNurses.length === 0 && (
        <div className="text-center py-8 text-slate-500">
          No nurses found matching your filters.
        </div>
      )}

      {checkedNurses.length > 0 && (
        <div className="mt-6 p-4 bg-slate-50 rounded-lg border">
          <h3 className="font-semibold mb-3 text-slate-900">
            Selected Nurses ({checkedNurses.length})
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {checkedNurses.map((nurse) => (
              <div
                key={nurse.id}
                className="p-3 bg-white border rounded-lg text-sm"
              >
                <div className="font-medium text-slate-900">{nurse.name}</div>
                <div className="text-slate-600">{nurse.specialty}</div>
                <div className="text-slate-500 text-xs mt-1">
                  {nurse.credentials} • ${nurse.rate_per_hour}/hr
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <NurseDetailDialog 
        nurse={selectedNurse}
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        onDeploy={handleDeploy}
      />
    </div>
  );
}
