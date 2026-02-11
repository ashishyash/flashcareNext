"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Nurse } from "./search.constant";

interface NurseDetailDialogProps {
  nurse: Nurse | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onDeploy: (nurse: Nurse) => void;
}

export function NurseDetailDialog({ nurse, open, onOpenChange, onDeploy }: NurseDetailDialogProps) {
  if (!nurse) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            {nurse.name}, {nurse.credentials}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <Badge className="text-lg px-3 py-1">Match Score: {nurse.match_score}%</Badge>
            <Badge className="text-lg px-3 py-1 bg-green-600">Availability: {nurse.availability_status}</Badge>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-lg mb-3">Quick Stats</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Experience:</strong> {nurse.experience_years} years {nurse.specialty}</p>
                <p><strong>Certifications:</strong> {nurse.certifications.join(", ")}</p>
                <p><strong>Location:</strong> {nurse.location} ({nurse.distance_miles.toFixed(1)} miles)</p>
                <p><strong>Rate:</strong> ${nurse.rate_per_hour}/hr + housing</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">Credentials Status</h3>
              <div className="space-y-2 text-sm">
                <p><strong>TX RN License:</strong> <span className="text-green-600">Active</span></p>
                <p><strong>Background Check:</strong> <span className="text-green-600">Clear</span></p>
                <p><strong>References:</strong> 3/3 Positive</p>
                <p><strong>Last Assignment:</strong> {nurse.previous_rating}/5.0 rating</p>
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button onClick={() => onDeploy(nurse)} className="flex-1 bg-cyan-600 hover:bg-cyan-700">
              Deploy Now
            </Button>
            <Button variant="outline" className="flex-1">
              Add to Shortlist
            </Button>
            <Button variant="outline" className="flex-1">
              Contact Nurse
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
