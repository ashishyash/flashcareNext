"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Nurse } from "./search.constant";
import {
  MapPin,
  Star,
  Calendar,
  DollarSign,
  Clock,
  CheckCircle2,
  TrendingUp,
  Award,
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

  // Dummy arrays for skills and metrics
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
      color: "bg-brand-cyan1",
      textColor: "text-teal-600",
    },
    {
      name: "Assignment Completion",
      value: 100,
      label: "100%",
      color: "bg-brand-cyan1",
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

  const nurseDetailsData = [
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
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto px-6 pb-6 pt-2">
        <DialogHeader className="border-b  border-sidebar-border">
          <DialogTitle className="text-2xl font-normal pb-2 text-brand-black1">
            Profile View
          </DialogTitle>
        </DialogHeader>
        {/* Profile Header */}
        <Card className="border-sidebar-border">
          <CardContent className="p-6">
            <div className="flex items-start justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-24 h-24 rounded-full bg-slate-100 overflow-hidden border-4 border-white shadow-md">
                  <img
                    src={nurse.photo}
                    alt={nurse.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-normal text-brand-black1">
                    {nurse.name}
                  </h3>
                  <p className="text-brand-black2 font-normal text-xl mt-1">
                    {nurse.specialty}
                  </p>
                  <div className="flex items-center gap-4 text-base text-brand-black2 mt-2">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {nurse.location} ({nurse.distance_miles} Miles)
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-brand-black2 text-lg"> 4.9</span> (
                      <span className="text-brand-black2 text-lg">
                        {nurse.previous_rating
                          ? Math.round(nurse.previous_rating * 10)
                          : 47}{" "}
                        reviews)
                      </span>
                    </span>
                  </div>
                  <div className="flex gap-2 mt-3 flex-wrap">
                    {nurse.certifications &&
                      nurse.certifications.map((c) => (
                        <Badge
                          key={c}
                          className="bg-brand-green1 text-brand-cyan1 px-3 py-1 text-sm font-normal rounded-full shadow-none hover:bg-hidden hover:text-brand-green5"
                        >
                          {c}
                        </Badge>
                      ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-stretch gap-3 w-56 text-lg font-normal">
                <Button
                  onClick={() => onDeploy(nurse)}
                  className="text-base font-normal border py-5 rounded-lg  text-white hover:bg-brand-cyan1 hover:text-white"
                >
                  Deploy Nurse
                </Button>
                <Button
                  variant="outline"
                  className="text-base font-normal border py-5 rounded-lg border-brand-cyan1 text-brand-cyan1 hover:bg-brand-cyan1 hover:text-white"
                >
                  Add to Shortlist
                </Button>
                <Button
                  variant="outline"
                  className="text-base font-normal border py-5 rounded-lg border-brand-cyan1 text-brand-cyan1 hover:bg-brand-cyan1 hover:text-white"
                >
                  Contact Nurse
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Five cards row */}
        <div className="flex gap-4">
          {nurseDetailsData.map((s, idx) => (
            <Card key={idx} className="border-sidebar-border flex-auto">
              <CardContent className="p-4">
                <div className="text-sm text-brand-black2 font-normal flex items-center gap-1.5 ">
                  <s.icon className="w-4 h-4 text-brand-black2" /> {s.label}
                </div>
                <div className="text-xl font-normal text-brand-black3">
                  {s.value}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Status badges row from dummy array */}
        <Card className="bg-brand-green2  ">
          <CardContent className="p-2">
            <div className="flex items-center justify-between text-sm">
              {statusRow.map((st) => (
                <div key={st.label} className="flex items-center gap-2">
                  <span className="text-brand-black2 font-normal">
                    {st.label}
                  </span>
                  <span className={`${st.color} font-medium`}>{st.status}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Skills & Metrics side-by-side */}
        <div className="grid grid-cols-2 gap-6">
          <Card className="border-sidebar-border">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-xl text-brand-black1 font-normal">
                <Award className="w-5 h-5" /> Skills & Proficiency
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              {skills.map((sk) => (
                <div key={sk.name}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-brand-black4">{sk.name}</span>
                    <span className="font-normal text-brand-black1">
                      {sk.value}%
                    </span>
                  </div>
                  <Progress
                    value={sk.value}
                    className="h-2 bg-slate-200"
                    indicatorClassName="bg-brand-cyan1"
                  />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-sidebar-border">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-xl font-normal text-brand-black1">
                <TrendingUp className="w-5 h-5" /> Performance Metrics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              {metrics.map((m) => (
                <div key={m.name}>
                  <div className="flex justify-between text-base mb-2">
                    <span className="text-brand-black4">{m.name}</span>
                    <span className={`font-normal text-2xl ${m.textColor}`}>
                      {m.label}
                    </span>
                  </div>
                  <Progress
                    value={m.value}
                    className="h-2 bg-slate-200"
                    indicatorClassName={m.color}
                  />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
}
