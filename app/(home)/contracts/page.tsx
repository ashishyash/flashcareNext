"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, DollarSign, FileArchive, FileStack, MapPin } from "lucide-react";

const ContractGeneration = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-normal ">
              Contract Generation
            </h1>
            <p className="text-base font-normal mt-1">
              Automated contract creation and management
            </p>
          </div>
          <Button className="text-base font-normal py-2 bg-teal-600 hover:bg-teal-700">
            <FileStack />
            Generate Bulk Contracts
          </Button>
        </div>

        {/* Success Banner */}
        <Card className="bg-green-50 border-green-200 mb-6">
          <CardContent className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-teal-600 rounded-full p-2">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-normall">
                Contract Generated Successfully
              </h3>
              <p className="text-sm font-normal">
                Auto-generated preview on Feb 11, 2026 • Contract ID:
                CON-2026-1847
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm font-normal">Estimated completion</p>
            <p className="text-lg font-normal">2 minutes</p>
          </div>
          </CardContent>
        </Card>

        <div className="flex gap-6">
          {/* Main Content */}
          <div className="flex-1">
            {/* Contract Header */}
            <CardHeader className="bg-teal-600 text-white rounded-t-lg flex-row justify-between items-start">
              <div>
                <h2 className="text-2xl font-normal mb-2">
                  Nursing Contract Agreement
                </h2>
                <p className="text-sm font-normal mb-6">Contract ID: CON-2026-1847</p>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className=" text-sm">Generated Date</p>
                    <p className="text-sm font-normal">Feb 11, 2026</p>
                  </div>
                  <div>
                    <p className=" text-sm">Duration</p>
                    <p className="text-sm font-normal">
                      Duration of strike - Starts Tomorrow 7 AM
                    </p>
                  </div>
                </div>
              </div>
              <FileArchive className="w-12 h-12" />
            </CardHeader>

            {/* Contract Body */}
            <CardContent className="bg-white rounded-b-xl p-8 pb-9 shadow-md">
              {/* Parties */}
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <p className="text-sm mb-2">NURSE (Employee)</p>
                  <h3 className="text-xl font-normal mb-3">Sarah Chen</h3>
                  <p className=" mb-1">
                    123 Main St, Los Angeles, CA 90001
                  </p>
                  <p className=" mb-1">License: RN-CA-485692</p>
                  <p className="">sarah.chen@email.com</p>
                </div>
                <div>
                  <p className="text-sm mb-2">
                    FACILITY (Employer)
                  </p>
                  <h3 className="text-xl font-normal mb-3">
                    Memorial Hospital
                  </h3>
                  <p className=" mb-1">Houston, TX</p>
                  <p className=" mb-1">Contact: HR Department</p>
                  <p className="">hr@memorialhospital.org</p>
                </div>
              </div>

              {/* Assignment Terms */}
              <h3 className="text-lg font-normal mb-4">Assignment Terms</h3>
              <div className="flex gap-4 mb-8">
                <Card className="bg-green-50 flex-auto border-green-200">
                  <CardContent className="flex justify-between p-4">
                    <Calendar  className="w-5 h-5"/>
                  <div className=" items-center gap-2 mb-2">
                    <span className="text-sm font-normal text-gray-700">
                      Duration
                    </span>
                  <p className="text-base font-normal text-gray-900">1 weeks</p>
                  <p className="text-sm text-gray-600">Duration of Strike</p>
                  </div>
                  </CardContent>
                </Card>
                <Card className="bg-green-50 flex-auto border-green-200">
                  <CardContent className="flex p-4">
                    <DollarSign  className="w-5 h-5"/>
                  <div className=" gap-2 mb-2">
                    <span className="text-sm font-normal text-gray-700">
                      Compensation
                    </span>
                  <p className="text-base font-normal text-gray-900">
                    $75/hour + $150/day Housing
                  </p>
                  <p className="text-sm text-gray-600">40 hours/week</p>
                  </div>
                  </CardContent>
                </Card>
                <Card className="bg-green-50 flex-auto border-green-200">
                  <CardContent className="flex p-4">
                    <MapPin className="w-5 h-5"/>
                  <div className=" gap-2 mb-2">
                    <span className="text-sm font-normal text-gray-700">
                      Unit
                    </span>
                  <p className="text-base font-normal text-gray-900">ICU</p>
                  <p className="text-sm text-gray-600">Memorial Hospital</p>
                  </div>
                </CardContent>
                </Card>
              </div>

              {/* Terms & Conditions */}
              <h3 className="text-lg font-normal mb-4">Terms & Conditions</h3>
              <div className="space-y-4 border-b pb-7 text-gray-700">
                <p className="text-sm font-normal">
                  <span className="text-sm font-bold">1. Employment Status:</span>{" "}
                  This agreement establishes a temporary employment relationship
                  for the duration specified above.
                </p>
                <p  className="text-sm font-normal">
                  <span className="text-sm font-bold">
                    2. Duties & Responsibilities:
                  </span>{" "}
                  The Nurse agrees to perform professional nursing services in
                  accordance with facility policies and applicable state
                  regulations.
                </p>
                <p  className="text-sm font-normal">
                  <span className="text-sm font-bold">3. Termination:</span> Either
                  party may terminate this agreement with 72 hours written
                  notice. Immediate termination may occur for cause.
                </p>
                <p  className="text-sm font-normal">
                  <span className="text-sm font-bold">4. Compliance:</span> The
                  Nurse certifies all credentials, certifications, and licenses
                  are current and valid.
                </p>
              </div>

              {/* Signatures */}
              <h3 className="text-lg font-normal mt-6 mb-4">Signatures</h3>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-sm  mb-6">Nurse Signature</p>
                  <div className="border-t border-gray-300 pb-2 pt-2 mb-2">
                    <p className="text-gray-900">Sarah Chen</p>
                  </div>
                  <p className="text-sm ">Date: _______________</p>
                </div>
                <div>
                  <p className="text-sm  mb-6">
                    Facility Representative
                  </p>
                  <div className="border-t border-gray-300 pb-2 pt-2 mb-2">
                    <p className="">HR Department</p>
                  </div>
                  <p className="text-sm ">Date: _______________</p>
                </div>
              </div>
            </CardContent>
          </div>

          {/* Sidebar */}
          <div className="w-1/4 space-y-6">
            {/* Quick Actions */}
            <Card className="border border-sidebar-border">
              <CardContent className="p-6">
                <h3 className="text-lg font-normal mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full text-base font-normal border py-5 rounded-lg border-teal-600 text-teal-600">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                    Send for E-Signature
                  </Button>
                  <Button variant="outline" className="w-full text-base font-normal border py-5 rounded-lg border-teal-600 text-teal-600">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Download PDF
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Generation Stats */}
            <Card className="border border-sidebar-border">
              <CardContent className="p-6">
              <h3 className="text-lg font-normal mb-4">Generation Stats</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Generation Time</p>
                  <p className="text-2xl font-normal text-gray-900">
                    2.3 sec
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Automation Rate</p>
                  <p className="text-2xl font-normal text-green-600">100%</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Pages</p>
                  <p className="text-2xl font-normal text-gray-900">4</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Legal Review</p>
                  <p className="text-gray-900">Pre-approved template</p>
                </div>
              </div>
            </CardContent>
            </Card>

            {/* Compliance Verified */}
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <h3 className="text-lg font-normal text-gray-900">
                  Compliance Verified
                </h3>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm text-gray-700">
                    State regulations met
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm text-gray-700">
                    Fair labor standards
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm text-gray-700">
                    Insurance requirements
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm text-gray-700">
                    Legal template approved
                  </span>
                </div>
              </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractGeneration;
