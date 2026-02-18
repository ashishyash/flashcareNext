import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const CredentialingQueue = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-normal text-gray-900 mb-2">
            Credentialing Queue
          </h1>
          <p className="text-gray-600">
            Automated verification and compliance checking
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-5 gap-4 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-gray-600 text-sm">Total Queue</span>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div className="text-4xl font-semibold text-gray-900">5</div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-gray-600 text-sm">Verified</span>
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-4xl font-semibold text-teal-500">0</div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-gray-600 text-sm">Processing</span>
              <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-4xl font-semibold text-teal-500">1</div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-gray-600 text-sm">Review Needed</span>
              <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-4xl font-semibold text-orange-500">1</div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-gray-600 text-sm">Avg Time</span>
              <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="text-4xl font-semibold text-teal-500">8 minutes</div>
          </Card>
        </div>

        {/* Verification Queue Card */}
        <Card className="p-6">
          <CardHeader className="flex flex-row items-center justify-between p-0 mb-8">
            <CardTitle className="text-xl font-normal">Verification Queue</CardTitle>
            <div className="flex gap-3">
              <Button variant="outline" className="border-2 border-teal-500 text-teal-500 hover:bg-teal-50">View All</Button>
              <Button className="bg-teal-500 hover:bg-teal-600">Expedite</Button>
            </div>
          </CardHeader>

          <CardContent className="p-0">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="text-lg font-normal text-gray-900 mb-1">
                  Sarah Chen
                </h3>
                <p className="text-sm text-gray-500">Submitted: Feb 10, 2026</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-semibold text-gray-900 mb-1">
                  85%
                </div>
                <p className="text-sm text-gray-500">Complete</p>
              </div>
            </div>

            <Progress value={85} className="mb-6" indicatorClassName="bg-teal-500" />

            <div className="grid grid-cols-2 gap-4 mb-4">
              <Card className="bg-green-50 border-green-200 p-4 flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <div className="font-medium text-gray-900">RN License</div>
                  <div className="text-sm text-gray-600">AI System • 2 min</div>
                </div>
              </Card>

              <Card className="bg-green-50 border-green-200 p-4 flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <div className="font-medium text-gray-900">
                    PALS Certification
                  </div>
                  <div className="text-sm text-gray-600">AI System • 2 min</div>
                </div>
              </Card>

              <Card className="bg-green-50 border-green-200 p-4 flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <div className="font-medium text-gray-900">
                    Background Check
                  </div>
                  <div className="text-sm text-gray-600">AI System • 6 min</div>
                </div>
              </Card>

              <Card className="bg-green-50 border-green-200 p-4 flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <div className="font-medium text-gray-900">References</div>
                  <div className="text-sm text-gray-600">AI System • 3 min</div>
                </div>
              </Card>
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
                <div className="font-medium text-gray-900">
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
              <span className="text-gray-600">
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
