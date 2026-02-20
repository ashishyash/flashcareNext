"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Check, CircleCheckBig, DollarSign, Download, FileArchive, FileStack, FileText, MapPin, Send } from "lucide-react";

const ContractGeneration = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div>
            <h1 className="text-2xl sm:text-3xl text-brand-black1 font-normal">
              Contract Generation
            </h1>
            <p className="text-sm sm:text-base text-brand-black2 font-normal mt-1">
              Automated contract creation and management
            </p>
          </div>
          <Button className="text-sm sm:text-base font-normal py-2 bg-brand-cyan1 hover:bg-brand-cyan1 w-full sm:w-auto">
            <FileStack className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="ml-2">Generate Bulk Contracts</span>
          </Button>
        </div>

        {/* Success Banner */}
        <Card className="!bg-brand-greengradient2 border-green-200 mb-6">
          <CardContent className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-brand-green3 rounded-full p-2">
                <CircleCheckBig className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg text-brand-black1 font-normall">
                  Contract Generated Successfully
                </h3>
                <p className="text-xs sm:text-sm text-brand-black2 font-normal">
                  Auto-generated preview on Feb 11, 2026 • Contract ID:
                  CON-2026-1847
                </p>
              </div>
            </div>
            <div className="text-left sm:text-right ml-9 sm:ml-0">
              <p className="text-xs sm:text-sm font-normal text-brand-black2">
                Estimated completion
              </p>
              <p className="text-base sm:text-lg font-normal text-brand-black1">
                2 minutes
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
          {/* Main Content */}
          <div className="flex-1 w-full">
            {/* Contract Header */}
            <CardHeader className="bg-brand-greengradient1 text-white rounded-t-xl flex-row justify-between items-start">
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-normal mb-2">
                  Nursing Contract Agreement
                </h2>
                <p className="text-xs sm:text-sm font-normal mb-4 sm:mb-6">
                  Contract ID: CON-2026-1847
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
                  <div>
                    <p className="text-sm">Generated Date</p>
                    <p className="text-sm font-normal">Feb 11, 2026</p>
                  </div>
                  <div>
                    <p className="text-sm">Duration</p>
                    <p className="text-sm font-normal">
                      Duration of strike - Starts Tomorrow 7 AM
                    </p>
                  </div>
                </div>
              </div>
              <FileText className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 ml-2" />
            </CardHeader>

            {/* Contract Body */}
            <CardContent className="bg-white rounded-b-xl p-4 sm:p-8 pb-9 shadow-md">
              {/* Parties */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8">
                <div>
                  <p className="text-sm text-brand-black2 mb-2">
                    NURSE (Employee)
                  </p>
                  <h3 className="text-lg sm:text-xl font-normal text-brand-black1 mb-3">
                    Sarah Chen
                  </h3>
                  <p className="text-sm sm:text-base text-brand-black2 mb-1">
                    123 Main St, Los Angeles, CA 90001
                  </p>
                  <p className="text-sm sm:text-base text-brand-black2 mb-1">
                    License: RN-CA-485692
                  </p>
                  <p className="text-sm sm:text-base text-brand-black2">
                    sarah.chen@email.com
                  </p>
                </div>
                <div>
                  <p className="text-sm text-brand-black2 mb-2">
                    FACILITY (Employer)
                  </p>
                  <h3 className="text-lg sm:text-xl text-brand-black1 font-normal mb-3">
                    Memorial Hospital
                  </h3>
                  <p className="text-sm sm:text-base text-brand-black2 mb-1">
                    Houston, TX
                  </p>
                  <p className="text-sm sm:text-base text-brand-black2 mb-1">
                    Contact: HR Department
                  </p>
                  <p className="text-sm sm:text-base text-brand-black2">
                    hr@memorialhospital.org
                  </p>
                </div>
              </div>

              {/* Assignment Terms */}
              <h3 className="text-base sm:text-lg font-normal text-brand-black1 mb-4">
                Assignment Terms
              </h3>
              <div className="md:flex grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <Card className="bg-green-50 border-green-200">
                  <CardContent className="flex p-4 items-start md:gap-0.5 px-3 gap-3">
                    <Calendar className="w-5 h-5 text-brand-cyan1 flex-shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <span className="text-xs sm:text-sm font-normal text-brand-black2 block">
                        Duration
                      </span>
                      <p className="text-sm sm:text-base font-normal text-brand-black1">
                        1 weeks
                      </p>
                      <p className="text-xs sm:text-sm text-brand-black2">
                        Duration of Strike
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-green-50 border-green-200">
                  <CardContent className="flex p-4 items-start md:gap-0.5 px-3 gap-3">
                    <DollarSign className="w-5 h-5 text-brand-cyan1 flex-shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <span className="text-xs sm:text-sm font-normal text-brand-black2 block">
                        Compensation
                      </span>
                      <p className="text-sm sm:text-base font-normal text-brand-black1">
                        $75/hour + $150/day Housing
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600">
                        40 hours/week
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-green-50 border-green-200">
                  <CardContent className="flex p-4 items-start md:gap-0.5 px-3 gap-3">
                    <MapPin className="w-5 h-5 text-brand-cyan1 flex-shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <span className="text-xs sm:text-sm font-normal text-brand-black2 block">
                        Unit
                      </span>
                      <p className="text-sm sm:text-base font-normal text-brand-black1">
                        ICU
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600">
                        Memorial Hospital
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Terms & Conditions */}
              <h3 className="text-base sm:text-lg font-normal text-brand-black1 mb-4">
                Terms & Conditions
              </h3>
              <div className="space-y-4 border-b pb-7 text-brand-black2">
                <p className="text-sm font-normal text-brand-black2">
                  <span className="text-sm font-bold text-brand-black4">
                    1. Employment Status:
                  </span>{" "}
                  This agreement establishes a temporary employment relationship
                  for the duration specified above.
                </p>
                <p className="text-sm font-normal text-brand-black4">
                  <span className="text-sm font-bold text-brand-black4">
                    2. Duties & Responsibilities:
                  </span>{" "}
                  The Nurse agrees to perform professional nursing services in
                  accordance with facility policies and applicable state
                  regulations.
                </p>
                <p className="text-sm font-normal text-brand-black4">
                  <span className="text-sm font-bold text-brand-black4">
                    3. Termination:
                  </span>{" "}
                  Either party may terminate this agreement with 72 hours
                  written notice. Immediate termination may occur for cause.
                </p>
                <p className="text-sm font-normal text-brand-black4">
                  <span className="text-sm font-bold text-brand-black4">
                    4. Compliance:
                  </span>{" "}
                  The Nurse certifies all credentials, certifications, and
                  licenses are current and valid.
                </p>
              </div>

              {/* Signatures */}
              <h3 className="text-base sm:text-lg font-normal text-brand-black1 mt-6 mb-4">
                Signatures
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <p className="text-sm text-brand-black2 mb-6">
                    Nurse Signature
                  </p>
                  <div className="border-t border-gray-300 pb-2 pt-2 mb-2">
                    <p className="text-brand-black2">Sarah Chen</p>
                  </div>
                  <p className="text-sm text-brand-black2 ">
                    Date: _______________
                  </p>
                </div>
                <div>
                  <p className="text-sm text-brand-black2 mb-6">
                    Facility Representative
                  </p>
                  <div className="border-t border-gray-300 pb-2 pt-2 mb-2">
                    <p className="text-brand-black2">HR Department</p>
                  </div>
                  <p className="text-sm text-brand-black2">
                    Date: _______________
                  </p>
                </div>
              </div>
            </CardContent>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/4 space-y-4 lg:space-y-6">
            {/* Quick Actions */}
            <Card className="border border-sidebar-border">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-normal text-brand-black1 mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full text-sm sm:text-base font-normal border py-4 sm:py-1 rounded-lg border-brand-cyan1 text-brand-cyan1 hover:bg-brand-cyan1 hover:text-white"
                  >
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="ml-2">Send for E-Signature</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full text-sm sm:text-base font-normal border py-4 sm:py-1 rounded-lg border-brand-cyan1 text-brand-cyan1 hover:bg-brand-cyan1 hover:text-white"
                  >
                    <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="ml-2">Download PDF</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Generation Stats */}
            <Card className="border border-sidebar-border">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-normal text-brand-black1 mb-4">
                  Generation Stats
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs sm:text-sm text-brand-black2 mb-1">
                      Generation Time
                    </p>
                    <p className="text-xl sm:text-2xl font-normal text-brand-black1">
                      2.3 sec
                    </p>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-brand-black2 mb-1">
                      Automation Rate
                    </p>
                    <p className="text-xl sm:text-2xl font-normal text-brand-cyan1">
                      100%
                    </p>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-brand-black2 mb-1">
                      Pages
                    </p>
                    <p className="text-xl sm:text-2xl font-normal text-brand-black1">
                      4
                    </p>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-brand-black2 mb-1">
                      Legal Review
                    </p>
                    <p className="text-sm sm:text-base text-brand-black1">
                      Pre-approved template
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Compliance Verified */}
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-4">
                  <CircleCheckBig className="w-5 h-5 sm:w-6 sm:h-6 text-brand-cyan1" />
                  <h3 className="text-base sm:text-lg font-normal text-brand-black1">
                    Compliance Verified
                  </h3>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CircleCheckBig className="w-4 h-4 text-brand-cyan1 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-brand-black2">
                      State regulations met
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CircleCheckBig className="w-4 h-4 text-brand-cyan1 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-brand-black2">
                      Fair labor standards
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CircleCheckBig className="w-4 h-4 text-brand-cyan1 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-brand-black2">
                      Insurance requirements
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CircleCheckBig className="w-4 h-4 text-brand-cyan1 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-brand-black2">
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
