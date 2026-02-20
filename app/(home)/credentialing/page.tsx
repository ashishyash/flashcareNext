import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Loader2, FileText, Clock, AlertCircle, ChevronLeft, ChevronRight, CircleCheckBig, Sparkles } from "lucide-react";

// Icon component that renders Lucide icons based on name
const Icon = ({ name, className }: { name: string; className?: string }) => {
  const icons: Record<string, React.ComponentType<{ className?: string }>> = {
    fileText: FileText,
    shieldCheck: CircleCheckBig,
    clock: Clock,
    alertCircle: AlertCircle,
    zap: Sparkles,
    chevronLeft: ChevronLeft,
    chevronRight: ChevronRight
  };
  const IconComponent = icons[name];
  if (!IconComponent) return null;
  return <IconComponent className={className} />;
};

const statsCards = [
  {
    label: "Total Queue",
    value: "5",
    iconColor: "text-brand-black2",
    textColor: "text-brand-black1",
    iconName: "fileText"
  },
  {
    label: "Verified",
    value: "0",
    iconColor: "text-green-500",
    textColor: "text-brand-cyan1",
    iconName: "shieldCheck"
  },
  {
    label: "Processing",
    value: "1",
    iconColor: "text-brand-cyan1",
    textColor: "text-brand-cyan1",
    iconName: "clock"
  },
  {
    label: "Review Needed",
    value: "1",
    iconColor: "text-brand-amber1",
    textColor: "text-brand-amber1",
    iconName: "alertCircle"
  },
  {
    label: "Avg Time",
    value: "8 minutes",
    iconColor: "text-brand-cyan1",
    textColor: "text-brand-cyan1",
    iconName: "zap"
  }
];

const verifiedCredentials = [
  { title: "RN License", source: "AI System", duration: "2 min" },
  { title: "PALS Certification", source: "AI System", duration: "2 min" },
  { title: "Background Check", source: "AI System", duration: "6 min" },
  { title: "References", source: "AI System", duration: "3 min" }
];

const CredentialingQueue = () => {
  return (
    <div className="min-h-screen pt-4 sm:pt-6 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl text-brand-black1 font-normal mb-2">
            Credentialing Queue
          </h1>
          <p className="text-sm sm:text-base text-brand-black2 font-normal">
            Automated verification and compliance checking
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 mb-6 sm:mb-8">
          {statsCards.map((stat, index) => (
            <Card key={index} className="p-3 border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm sm:text-base font-normal text-brand-black2">
                  {stat.label}
                </span>
                <Icon
                  name={stat.iconName}
                  className={`w-4 h-4 sm:w-5 sm:h-5 ${stat.iconColor}`}
                />
              </div>
              <div
                className={`text-2xl sm:text-3xl font-normal ${stat.textColor}`}
              >
                {stat.value}
              </div>
            </Card>
          ))}
        </div>

        {/* Verification Queue Card */}
        <Card className="p-4 sm:p-6 border-slate-200">
          <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-0 pb-4 sm:pb-6 border-b">
            <CardTitle className="text-lg sm:text-xl font-normal text-brand-black1">
              Verification Queue
            </CardTitle>
            <div className="flex flex-row gap-2 sm:gap-3 w-full sm:w-auto">
              <Button
                variant="outline"
                className="flex-1 sm:flex-none text-sm sm:text-base font-normal border py-2 sm:py-3 rounded-lg border-brand-cyan1 text-brand-cyan1 hover:bg-brand-cyan1 hover:text-white"
              >
                View All
              </Button>
              <Button className="flex-1 sm:flex-none bg-brand-cyan1 hover:bg-teal-600 text-sm sm:text-base py-2 sm:py-3">
                Expedite
              </Button>
            </div>
          </CardHeader>

          <CardContent className="p-0 pt-4 sm:pt-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 gap-3 sm:gap-0">
              <div>
                <h3 className="text-base sm:text-lg font-normal text-brand-black1 mb-1">
                  Sarah Chen
                </h3>
                <p className="text-xs sm:text-sm font-normal text-brand-black2">
                  Submitted: Feb 10, 2026
                </p>
              </div>
              <div className="text-left sm:text-right">
                <div className="text-xl sm:text-2xl font-normal text-brand-black1 mb-1">
                  85%
                </div>
                <p className="text-xs sm:text-sm font-normal text-brand-black2">
                  Complete
                </p>
              </div>
            </div>

            <Progress
              value={85}
              className="mb-4 sm:mb-6"
              indicatorClassName="bg-brand-cyan1"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
              {verifiedCredentials.map((credential, index) => (
                <Card
                  key={index}
                  className="bg-green-50 border-green-200 p-3 sm:p-4 flex items-center gap-3"
                >
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-normal text-brand-black1">
                      {credential.title}
                    </div>
                    <div className="text-xs font-normal text-brand-black2">
                      {credential.source} • {credential.duration}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="bg-orange-50 border-orange-200 p-3 sm:p-4 flex items-start gap-3 mb-4 sm:mb-0">
              <Loader2 className="w-5 h-6 sm:w-6 sm:h-6 animate-spin text-brand-amber1 flex-shrink-0" />
              <div>
                <div className="text-sm font-normal text-brand-black1">
                  Hospital Privileges - In Progress
                </div>
              </div>
            </Card>

            <div className="flex items-center justify-center sm:justify-end gap-2 sm:gap-4 pt-4 border-t border-gray-200">
              <Button
                variant="ghost"
                size="icon"
                className="text-brand-black2 hover:text-white hover:bg-brand-cyan1 disabled:opacity-50"
              >
                <Icon name="chevronLeft" className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
              <span className="text-xs sm:text-lg font-normal text-brand-black1">
                Next In Queue:{" "}
                <span className="text-brand-cyan1 font-medium">
                  Michael Rodriguez
                </span>
              </span>
              <Button
                variant="ghost"
                size="icon"
                className="text-brand-black2 hover:text-white hover:bg-brand-cyan1 disabled:opacity-50"
              >
                <Icon name="chevronRight" className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CredentialingQueue;
