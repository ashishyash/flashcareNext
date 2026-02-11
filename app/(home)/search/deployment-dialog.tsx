"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Clock, Loader2 } from "lucide-react";
import { Nurse } from "./search.constant";

interface DeploymentDialogProps {
  readonly nurses: readonly Nurse[];
  readonly open: boolean;
  readonly onOpenChange: (open: boolean) => void;
}

interface DeploymentStep {
  label: string;
  status: "complete" | "progress" | "pending";
  progress?: number;
}

export function DeploymentDialog({ nurses, open, onOpenChange }: DeploymentDialogProps) {
  const [steps, setSteps] = useState<DeploymentStep[]>([
    { label: "Generate contracts", status: "complete" },
    { label: "Send to nurses for signature", status: "complete" },
    { label: "Verify licenses", status: "progress", progress: 80 },
    { label: "Run background checks", status: "progress", progress: 60 },
    { label: "Create HR profiles", status: "pending" },
    { label: "Activate badges", status: "pending" },
  ]);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!open) {
      setIsComplete(false);
      setSteps([
        { label: "Generate contracts", status: "complete" },
        { label: "Send to nurses for signature", status: "complete" },
        { label: "Verify licenses", status: "progress", progress: 80 },
        { label: "Run background checks", status: "progress", progress: 60 },
        { label: "Create HR profiles", status: "pending" },
        { label: "Activate badges", status: "pending" },
      ]);
      return;
    }

    const interval = setInterval(() => {
      setSteps((prev) => {
        const updated = [...prev];
        const progressIndex = updated.findIndex((s) => s.status === "progress");
        
        if (progressIndex !== -1 && updated[progressIndex].progress !== undefined) {
          updated[progressIndex].progress! += 5;
          
          if (updated[progressIndex].progress! >= 100) {
            updated[progressIndex].status = "complete";
            delete updated[progressIndex].progress;
            
            if (progressIndex + 1 < updated.length && updated[progressIndex + 1].status === "pending") {
              updated[progressIndex + 1].status = "progress";
              updated[progressIndex + 1].progress = 0;
            }
          }
        }
        
        const allComplete = updated.every((s) => s.status === "complete");
        if (allComplete) {
          setIsComplete(true);
        }
        
        return updated;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [open]);

  if (nurses.length === 0) return null;

  const today = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl">
            {isComplete ? "Deployment Confirmation" : `Deploying ${nurses.length} Nurse${nurses.length > 1 ? 's' : ''}`}
          </DialogTitle>
        </DialogHeader>
        
        {!isComplete ? (
          <div className="space-y-4 py-4">
            {steps.map((step, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center gap-3">
                  {step.status === "complete" && (
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  )}
                  {step.status === "progress" && (
                    <Loader2 className="w-5 h-5 text-cyan-600 animate-spin flex-shrink-0" />
                  )}
                  {step.status === "pending" && (
                    <Clock className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                  <div className="flex-1">
                    <p className={`text-sm font-medium ${
                      step.status === "complete" ? "text-green-600" :
                      step.status === "progress" ? "text-cyan-600" :
                      "text-gray-400"
                    }`}>
                      {step.label}
                      {step.status === "complete" && " ✓"}
                      {step.status === "progress" && ` → ${step.progress}%`}
                      {step.status === "pending" && " → Pending"}
                    </p>
                    {step.status === "progress" && step.progress !== undefined && (
                      <Progress value={step.progress} className="h-2 mt-2" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4 py-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
                <p className="text-lg font-semibold text-green-900">
                  Deploying {nurses.length} nurse{nurses.length > 1 ? 's' : ''} to Memorial Hospital
                </p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="max-h-60 overflow-y-auto space-y-2">
                {nurses.map((nurse) => (
                  <div key={nurse.id} className="bg-white border rounded-lg p-3">
                    <p className="font-medium text-gray-900">{nurse.name}</p>
                    <p className="text-sm text-gray-600">{nurse.credentials} • {nurse.specialty}</p>
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500 mb-1">Start Date</p>
                  <p className="font-medium text-gray-900">{today}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500 mb-1">Shift</p>
                  <p className="font-medium text-gray-900">7a-7p</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
