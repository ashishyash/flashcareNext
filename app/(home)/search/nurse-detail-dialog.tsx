"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Nurse } from "./search.constant";
import {
  MapPin,
  Star,
  Calendar,
  DollarSign,
  Clock,
  CheckCircle2,
  User,
  TrendingUp,
  X,
} from "lucide-react";

interface NurseDetailDialogProps {
  nurse: Nurse | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onDeploy: (nurse: Nurse) => void;
}

export function NurseDetailDialog({
  nurse,
  open,
  onOpenChange,
  onDeploy,
}: NurseDetailDialogProps) {
  if (!nurse) return null;

  // Dummy arrays for skills and metrics (can be replaced with real data)
  const skills = [
    { name: "Patient Assessment", value: 95 },
    { name: "Emergency Response", value: 92 },
    { name: "IV Therapy", value: 98 },
    { name: "Medication Administration", value: 96 },
    { name: "Electronic Health Records", value: 88 },
    { name: "Critical Care", value: 94 },
  ];

  const metrics = [
    {
      name: "Patient Satisfaction",
      value: 96,
      label: "96%",
      color: "bg-teal-500",
      textColor: "text-teal-600",
    },
    {
      name: "Assignment Completion",
      value: 100,
      label: "100%",
      color: "bg-teal-500",
      textColor: "text-teal-600",
    },
    {
      name: "Facility Ratings",
      value: 98,
      label: "4.9/5.0",
      color: "bg-cyan-600",
      textColor: "text-cyan-600",
    },
    {
      name: "On-Time Arrival",
      value: 98,
      label: "98%",
      color: "bg-orange-500",
      textColor: "text-orange-600",
    },
  ];

  const statusRow = [
    { label: "TX RN License", status: "Active", color: "text-teal-600" },
    { label: "Background Check", status: "Clear", color: "text-teal-600" },
    { label: "References", status: "3/3 Positive", color: "text-teal-600" },
    {
      label: "Last Assignment",
      status: `${nurse.previous_rating}/5 Rating`,
      color: "text-teal-600",
    },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl p-0">
        {/* Profile Header */}
        <div className="p-6 bg-white border-b">
          <div className="flex items-start justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-slate-100 overflow-hidden border p-0">
                <img
                  src={nurse.photo}
                  alt={nurse.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{nurse.name}</h3>
                <p className="text-teal-600 font-semibold">{nurse.specialty}</p>
                <div className="flex items-center gap-4 text-sm text-slate-500 mt-2">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {nurse.location} ({nurse.distance_miles} Miles)
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    4.9 (
                    {nurse.previous_rating
                      ? Math.round(nurse.previous_rating * 10)
                      : 47}{" "}
                    reviews)
                  </span>
                </div>
                <div className="flex gap-2 mt-3 flex-wrap">
                  {nurse.certifications &&
                    nurse.certifications.map((c) => (
                      <Badge
                        key={c}
                        className="bg-teal-50 text-teal-600 px-3 py-1 text-xs"
                      >
                        {c}
                      </Badge>
                    ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col items-stretch gap-3 w-56">
              <Button
                onClick={() => onDeploy(nurse)}
                className="bg-teal-600 hover:bg-teal-700 text-white"
              >
                Deploy Nurse
              </Button>
              <Button variant="outline">Add to Shortlist</Button>
              <Button variant="outline">Contact Nurse</Button>
            </div>
          </div>
        </div>

        {/* Five cards row */}
        <div className="p-6 bg-slate-50">
          <div className="grid grid-cols-5 gap-4">
            {[
              {
                label: "Experience",
                value: `${nurse.experience_years} years`,
                icon: Calendar,
              },
              {
                label: "Hourly Rate",
                value: `$${nurse.rate_per_hour}/hr + Housing`,
                icon: DollarSign,
              },
              {
                label: "Match Score",
                value: `${nurse.match_score}%`,
                icon: CheckCircle2,
              },
              {
                label: "Availability",
                value: nurse.availability_status || "Immediate",
                icon: Clock,
              },
              { label: "Completed", value: 47, icon: CheckCircle2 },
            ].map((s, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 border">
                <div className="text-xs text-slate-500 font-semibold flex items-center gap-2 mb-2 uppercase tracking-wider">
                  <s.icon className="w-3.5 h-3.5 text-slate-400" /> {s.label}
                </div>
                <div className="text-lg font-bold text-slate-800">
                  {s.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Status badges row from dummy array */}
        <div className="p-4">
          <div className="flex items-center gap-6 bg-teal-50 rounded-lg p-3 text-sm">
            {statusRow.map((st) => (
              <div key={st.label} className="flex items-center gap-2">
                <span className="text-slate-600">{st.label}</span>
                <span className={`${st.color} font-semibold`}>{st.status}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills & Metrics side-by-side */}
        <div className="p-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border">
              <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                <User className="w-4 h-4 text-teal-600" /> Skills & Proficiency
              </h4>
              <div className="space-y-4">
                {skills.map((sk) => (
                  <div key={sk.name}>
                    <div className="flex justify-between text-sm font-medium mb-1 text-slate-700">
                      <span>{sk.name}</span>
                      <span className="font-semibold text-teal-600">
                        {sk.value}%
                      </span>
                    </div>
                    <Progress
                      value={sk.value}
                      className="h-2 bg-slate-100"
                      indicatorClassName="bg-teal-600"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border">
              <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-teal-600" /> Performance
                Metrics
              </h4>
              <div className="space-y-6">
                {metrics.map((m) => (
                  <div key={m.name}>
                    <div className="flex justify-between text-sm font-medium mb-1">
                      <span className="text-slate-700">{m.name}</span>
                      <span className={m.textColor}>{m.label}</span>
                    </div>
                    <Progress
                      value={m.value}
                      className="h-2 bg-slate-100"
                      indicatorClassName={m.color}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
