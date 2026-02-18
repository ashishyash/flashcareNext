"use client";
import React from "react";

const ContractGeneration = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-semibold text-gray-900">
              Contract Generation
            </h1>
            <p className="text-gray-600 mt-1">
              Automated contract creation and management
            </p>
          </div>
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg flex items-center gap-2">
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
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Generate Bulk Contracts
          </button>
        </div>

        {/* Success Banner */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center justify-between">
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
              <h3 className="font-semibold text-gray-900">
                Contract Generated Successfully
              </h3>
              <p className="text-sm text-gray-600">
                Auto-generated preview on Feb 11, 2026 • Contract ID:
                CON-2026-1847
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">Estimated completion</p>
            <p className="font-semibold text-gray-900">2 minutes</p>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Main Content */}
          <div className="flex-1">
            {/* Contract Header */}
            <div className="bg-teal-600 text-white rounded-t-lg p-6 flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-semibold mb-2">
                  Nursing Contract Agreement
                </h2>
                <p className="text-teal-100 mb-6">Contract ID: CON-2026-1847</p>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-teal-100 text-sm">Generated Date</p>
                    <p className="font-medium">Feb 11, 2026</p>
                  </div>
                  <div>
                    <p className="text-teal-100 text-sm">Duration</p>
                    <p className="font-medium">
                      Duration of strike - Starts Tomorrow 7 AM
                    </p>
                  </div>
                </div>
              </div>
              <svg
                className="w-16 h-16"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>

            {/* Contract Body */}
            <div className="bg-white rounded-b-lg shadow-sm p-8">
              {/* Parties */}
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <p className="text-sm text-gray-500 mb-2">NURSE (Employee)</p>
                  <h3 className="text-xl font-semibold mb-3">Sarah Chen</h3>
                  <p className="text-gray-700 mb-1">
                    123 Main St, Los Angeles, CA 90001
                  </p>
                  <p className="text-gray-700 mb-1">License: RN-CA-485692</p>
                  <p className="text-gray-700">sarah.chen@email.com</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">
                    FACILITY (Employer)
                  </p>
                  <h3 className="text-xl font-semibold mb-3">
                    Memorial Hospital
                  </h3>
                  <p className="text-gray-700 mb-1">Houston, TX</p>
                  <p className="text-gray-700 mb-1">Contact: HR Department</p>
                  <p className="text-gray-700">hr@memorialhospital.org</p>
                </div>
              </div>

              {/* Assignment Terms */}
              <h3 className="text-xl font-semibold mb-4">Assignment Terms</h3>
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <svg
                      className="w-5 h-5 text-teal-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-sm font-medium text-gray-700">
                      Duration
                    </span>
                  </div>
                  <p className="font-semibold text-gray-900">1 weeks</p>
                  <p className="text-sm text-gray-600">Duration of Strike</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <svg
                      className="w-5 h-5 text-teal-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-sm font-medium text-gray-700">
                      Compensation
                    </span>
                  </div>
                  <p className="font-semibold text-gray-900">
                    $75/hour + $150/day Housing
                  </p>
                  <p className="text-sm text-gray-600">40 hours/week</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <svg
                      className="w-5 h-5 text-teal-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="text-sm font-medium text-gray-700">
                      Unit
                    </span>
                  </div>
                  <p className="font-semibold text-gray-900">ICU</p>
                  <p className="text-sm text-gray-600">Memorial Hospital</p>
                </div>
              </div>

              {/* Terms & Conditions */}
              <h3 className="text-xl font-semibold mb-4">Terms & Conditions</h3>
              <div className="space-y-4 mb-8 text-gray-700">
                <p>
                  <span className="font-semibold">1. Employment Status:</span>{" "}
                  This agreement establishes a temporary employment relationship
                  for the duration specified above.
                </p>
                <p>
                  <span className="font-semibold">
                    2. Duties & Responsibilities:
                  </span>{" "}
                  The Nurse agrees to perform professional nursing services in
                  accordance with facility policies and applicable state
                  regulations.
                </p>
                <p>
                  <span className="font-semibold">3. Termination:</span> Either
                  party may terminate this agreement with 72 hours written
                  notice. Immediate termination may occur for cause.
                </p>
                <p>
                  <span className="font-semibold">4. Compliance:</span> The
                  Nurse certifies all credentials, certifications, and licenses
                  are current and valid.
                </p>
              </div>

              {/* Signatures */}
              <h3 className="text-xl font-semibold mb-4">Signatures</h3>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-sm text-gray-600 mb-4">Nurse Signature</p>
                  <div className="border-b border-gray-300 pb-2 mb-2">
                    <p className="text-gray-900">Sarah Chen</p>
                  </div>
                  <p className="text-sm text-gray-600">Date: _______________</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-4">
                    Facility Representative
                  </p>
                  <div className="border-b border-gray-300 pb-2 mb-2">
                    <p className="text-gray-900">HR Department</p>
                  </div>
                  <p className="text-sm text-gray-600">Date: _______________</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-80 space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full border-2 border-teal-600 text-teal-600 hover:bg-teal-50 px-4 py-3 rounded-lg flex items-center justify-center gap-2 font-medium">
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
                </button>
                <button className="w-full border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-3 rounded-lg flex items-center justify-center gap-2 font-medium">
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
                </button>
              </div>
            </div>

            {/* Generation Stats */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Generation Stats</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Generation Time</p>
                  <p className="text-2xl font-semibold text-gray-900">
                    2.3 sec
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Automation Rate</p>
                  <p className="text-2xl font-semibold text-green-600">100%</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Pages</p>
                  <p className="text-2xl font-semibold text-gray-900">4</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Legal Review</p>
                  <p className="text-gray-900">Pre-approved template</p>
                </div>
              </div>
            </div>

            {/* Compliance Verified */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
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
                <h3 className="text-lg font-semibold text-gray-900">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractGeneration;
