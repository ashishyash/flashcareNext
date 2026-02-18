import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle } from "lucide-react";

const statsCards = [
  {
    label: "Total Queue",
    value: "5",
    iconColor: "text-gray-400",
    textColor: "text-gray-900",
    svgPath: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
  },
  {
    label: "Verified",
    value: "0",
    iconColor: "text-green-500",
    textColor: "text-teal-500",
    svgPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
  },
  {
    label: "Processing",
    value: "1",
    iconColor: "text-teal-500",
    textColor: "text-teal-500",
    svgPath: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
  },
  {
    label: "Review Needed",
    value: "1",
    iconColor: "text-orange-500",
    textColor: "text-orange-500",
    svgPath: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  },
  {
    label: "Avg Time",
    value: "8 minutes",
    iconColor: "text-teal-500",
    textColor: "text-teal-500",
    svgPath: "M13 10V3L4 14h7v7l9-11h-7z"
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
    <div className="min-h-screen  pt-6 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-normal  mb-2">
            Credentialing Queue
          </h1>
          <p className="text-base font-normal">
            Automated verification and compliance checking
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-5 gap-4 mb-8">
          {statsCards.map((stat, index) => (
            <Card key={index} className="p-3 border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <span className="text-base font-normal">{stat.label}</span>
                <svg className={`w-5 h-5 ${stat.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.svgPath} />
                </svg>
              </div>
              <div className={`text-3xl font-normal ${stat.textColor}`}>{stat.value}</div>
            </Card>
          ))}
        </div>

        {/* Verification Queue Card */}
        <Card className="p-6 border-slate-200">
          <CardHeader className="flex flex-row items-center justify-between p-0 pb-6 border-b">
            <CardTitle className="text-xl font-normal">Verification Queue</CardTitle>
            <div className="flex gap-3 text-base font-normal">
              <Button variant="outline" className="border border-teal-500 text-teal-500">View All</Button>
              <Button className="bg-teal-500 hover:bg-teal-600">Expedite</Button>
            </div>
          </CardHeader>

          <CardContent className="p-0 pt-6">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="text-lg font-normal  mb-1">
                  Sarah Chen
                </h3>
                <p className="text-sm font-normal">Submitted: Feb 10, 2026</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-normal text-gray-900 mb-1">
                  85%
                </div>
                <p className="text-sm font-normal">Complete</p>
              </div>
            </div>

            <Progress value={85} className="mb-6" indicatorClassName="bg-teal-500" />

            <div className="grid grid-cols-2 gap-4 mb-4">
              {verifiedCredentials.map((credential, index) => (
                <Card key={index} className="bg-green-50 border-green-200 p-4 flex items-start gap-3">
                  <CheckCircle className="text-green-500" />
                  <div>
                    <div className="text-sm font-normal ">{credential.title}</div>
                    <div className="text-xs font-normal">{credential.source} • {credential.duration}</div>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="bg-orange-50 border-orange-200 p-4 flex items-start gap-3">
              <svg
                className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5 animate-spin"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              <div>
                <div className="text-sm font-normal text-gray-900">
                  Hospital Privileges - In Progress
                </div>
              </div>
            </Card>

            <div className="flex items-center justify-end gap-4 pt-4 border-t border-gray-200">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </Button>
              <span className="text-lg font-normal pb-1">
                Next In Queue: <span className="text-teal-500 font-medium">Michael Rodriguez</span>
              </span>
              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gray-800">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CredentialingQueue;
