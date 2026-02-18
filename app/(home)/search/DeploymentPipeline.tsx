import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const DeploymentPipeline: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Button variant="ghost" size="icon">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </Button>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">Wednesday, February 11, 2026</span>
            <div className="relative">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <Badge className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center p-0">1</Badge>
            </div>
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-sm font-medium text-gray-900">User Name</div>
                <div className="text-xs text-gray-500">Admin</div>
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-white font-semibold">
                UN
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto mt-6">
        <h1 className="text-3xl font-semibold text-gray-900 mb-2">Deployment Pipeline</h1>
        <p className="text-gray-600 mb-8">Operational oversight of all active deployments</p>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-600">Credentialing</span>
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="flex items-end justify-between mb-4">
                <span className="text-4xl font-semibold text-gray-900">28</span>
                <span className="text-gray-600">65% Completed</span>
              </div>
              <Progress value={65} className="bg-gray-200" />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-600">Travel/ Housing</span>
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div className="flex items-end justify-between mb-4">
                <span className="text-4xl font-semibold text-gray-900">18</span>
                <span className="text-gray-600">40% Completed</span>
              </div>
              <Progress value={40} className="bg-gray-200" />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-600">Ready to Deployed</span>
                <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <div className="flex items-end justify-between mb-4">
                <span className="text-4xl font-semibold text-gray-900">17</span>
                <span className="text-gray-600">100% Completed</span>
              </div>
              <Progress value={100} className="bg-gray-200" />
            </CardContent>
          </Card>
        </div>

        {/* All Deployments Section */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
            <CardTitle className="text-xl">All Deployments</CardTitle>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="bg-cyan-50 text-cyan-600 hover:bg-cyan-100">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </Button>
              <Button variant="ghost" size="icon">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </Button>
            </div>
          </CardHeader>

          <CardContent className="divide-y p-0">
            {/* Sarah Chen */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <img src="https://i.pravatar.cc/150?img=1" alt="Sarah Chen" className="w-12 h-12 rounded-full" />
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-lg font-semibold text-gray-900">Sarah Chen</span>
                      <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">Ready to Deploy</Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>Memorial Hospital</span>
                      <span>•</span>
                      <span>Houston, TX</span>
                      <span>•</span>
                      <span>Start: Feb 8, 2026</span>
                      <span>End: Mar 8, 2026</span>
                    </div>
                  </div>
                </div>
                <div className="text-right flex items-center gap-2">
                  <span className="text-gray-600">12 hours to deploy</span>
                  <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">Deployment Progress</span>
                <Progress value={100} className="flex-1 bg-gray-200" />
                <span className="text-sm font-semibold text-gray-900">100%</span>
              </div>
            </div>

            {/* Michael Rodriguez */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <img src="https://i.pravatar.cc/150?img=12" alt="Michael Rodriguez" className="w-12 h-12 rounded-full" />
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-lg font-semibold text-gray-900">Michael Rodriguez</span>
                      <Badge className="bg-cyan-100 text-cyan-700 hover:bg-cyan-100">Travel/Housing</Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>Memorial Hospital</span>
                      <span>•</span>
                      <span>Houston, TX</span>
                      <span>•</span>
                      <span>Start: Feb 13, 2026</span>
                      <span>End: Mar 8, 2026</span>
                    </div>
                  </div>
                </div>
                <div className="text-right flex items-center gap-2">
                  <span className="text-gray-600">18 hours to deploy</span>
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">Deployment Progress</span>
                <Progress value={80} className="flex-1 bg-gray-200" />
                <span className="text-sm font-semibold text-gray-900">80%</span>
              </div>
            </div>

            {/* James Chen */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <img src="https://i.pravatar.cc/150?img=13" alt="James Chen" className="w-12 h-12 rounded-full" />
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-lg font-semibold text-gray-900">James Chen</span>
                      <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">Ready to Deploy</Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>Memorial Hospital</span>
                      <span>•</span>
                      <span>Houston, TX</span>
                      <span>•</span>
                      <span>Start: Feb 11, 2026</span>
                      <span>End: Mar 8, 2026</span>
                    </div>
                  </div>
                </div>
                <div className="text-right flex items-center gap-2">
                  <span className="text-gray-600">12 hours to deploy</span>
                  <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">Deployment Progress</span>
                <Progress value={65} className="flex-1 bg-gray-200" />
                <span className="text-sm font-semibold text-gray-900">65%</span>
              </div>
            </div>

            {/* Emily Thompson */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <img src="https://i.pravatar.cc/150?img=5" alt="Emily Thompson" className="w-12 h-12 rounded-full" />
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-lg font-semibold text-gray-900">Emily Thompson</span>
                      <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">Credentialing</Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>Memorial Hospital</span>
                      <span>•</span>
                      <span>Houston, TX</span>
                      <span>•</span>
                      <span>Start: Feb 12, 2026</span>
                      <span>End: Mar 8, 2026</span>
                    </div>
                  </div>
                </div>
                <div className="text-right flex items-center gap-2">
                  <span className="text-gray-600">2 days to deploy</span>
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">Deployment Progress</span>
                <Progress value={45} className="flex-1 bg-gray-200" />
                <span className="text-sm font-semibold text-gray-900">45%</span>
              </div>
            </div>

            {/* Amanda Lewis */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <img src="https://i.pravatar.cc/150?img=9" alt="Amanda Lewis" className="w-12 h-12 rounded-full" />
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-lg font-semibold text-gray-900">Amanda Lewis</span>
                      <Badge className="bg-cyan-100 text-cyan-700 hover:bg-cyan-100">Travel/Housing</Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>Memorial Hospital</span>
                      <span>•</span>
                      <span>Houston, TX</span>
                      <span>•</span>
                      <span>Start: Feb 11, 2026</span>
                      <span>End: Mar 8, 2026</span>
                    </div>
                  </div>
                </div>
                <div className="text-right flex items-center gap-2">
                  <span className="text-gray-600">3 days to deploy</span>
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">Deployment Progress</span>
                <Progress value={25} className="flex-1 bg-gray-200" />
                <span className="text-sm font-semibold text-gray-900">25%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DeploymentPipeline;
