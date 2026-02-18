import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Grid, LayoutGrid, LocateIcon, MapPin } from "lucide-react";

// Deployments Data
const deploymentsData = [
  {
    id: "1",
    name: "Sarah Chen",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    status: {
      label: "Ready to Deploy",
      badgeClass: "text-xs font-normal bg-orange-100 rounded-full text-orange-700 hover:bg-orange-100"
    },
    hospital: "Memorial Hospital",
    location: "Houston, TX",
    startDate: "Feb 8, 2026",
    endDate: "Mar 8, 2026",
    timeToDeploy: "12 hours to deploy",
    progress: 100,
    icon: {
      path: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
      color: "text-orange-500"
    }
  },
  {
    id: "2",
    name: "Michael Rodriguez",
    avatar:"https://randomuser.me/api/portraits/men/1.jpg",
    status: {
      label: "Travel/Housing",
      badgeClass: "text-xs font-normal rounded-full bg-cyan-100 text-cyan-700 hover:bg-cyan-100"
    },
    hospital: "Memorial Hospital",
    location: "Houston, TX",
    startDate: "Feb 13, 2026",
    endDate: "Mar 8, 2026",
    timeToDeploy: "18 hours to deploy",
    progress: 80,
    icon: {
      path: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
      color: "text-green-500"
    }
  },
  {
    id: "3",
    name: "James Chen",
    avatar:"https://randomuser.me/api/portraits/men/1.jpg",
    status: {
      label: "Ready to Deploy",
      badgeClass: "text-xs font-normal rounded-full bg-orange-100 text-orange-700 hover:bg-orange-100"
    },
    hospital: "Memorial Hospital",
    location: "Houston, TX",
    startDate: "Feb 11, 2026",
    endDate: "Mar 8, 2026",
    timeToDeploy: "12 hours to deploy",
    progress: 65,
    icon: {
      path: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
      color: "text-orange-500"
    }
  },
  {
    id: "4",
    name: "Emily Thompson",
    avatar:"https://randomuser.me/api/portraits/men/1.jpg",
    status: {
      label: "Credentialing",
      badgeClass: "text-xs font-normal rounded-full bg-yellow-100 text-yellow-700 hover:bg-yellow-100"
    },
    hospital: "Memorial Hospital",
    location: "Houston, TX",
    startDate: "Feb 12, 2026",
    endDate: "Mar 8, 2026",
    timeToDeploy: "2 days to deploy",
    progress: 45,
    icon: {
      path: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
      color: "text-green-500"
    }
  },
  {
    id: "5",
    name: "Amanda Lewis",
    avatar:"https://randomuser.me/api/portraits/men/1.jpg",
    status: {
      label: "Travel/Housing",
      badgeClass: "text-xs font-normal rounded-full bg-cyan-100 text-cyan-700 hover:bg-cyan-100"
    },
    hospital: "Memorial Hospital",
    location: "Houston, TX",
    startDate: "Feb 11, 2026",
    endDate: "Mar 8, 2026",
    timeToDeploy: "3 days to deploy",
    progress: 25,
    icon: {
      path: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
      color: "text-green-500"
    }
  }
];

// Stats Cards Data
const statsCardsData = [
  {
    id: "credentialing",
    title: "Credentialing",
    count: 28,
    progress: 65,
    iconPath: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    iconColor: "text-green-500"
  },
  {
    id: "travel-housing",
    title: "Travel/ Housing",
    count: 18,
    progress: 40,
    iconPath: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    iconColor: "text-green-500"
  },
  {
    id: "ready-deployed",
    title: "Ready to Deployed",
    count: 17,
    progress: 100,
    iconPath: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
    iconColor: "text-orange-500"
  }
];

const DeploymentPipeline =() => {
  return (
    <div className="min-h-screen p-6">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-normal mb-2">
          Deployment Pipeline
        </h1>
        <p className="text-base font-normal mb-6">
          Operational oversight of all active deployments
        </p>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          {statsCardsData.map((card) => (
            <Card key={card.id} className="border-slate-200 rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-base font-normal">{card.title}</span>
                  <svg
                    className={`w-6 h-6 ${card.iconColor}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={card.iconPath}
                    />
                  </svg>
                </div>
                <div className="flex items-end justify-between mb-4">
                  <span className="text-4xl font-semibold text-gray-900">{card.count}</span>
                  <span className="text-gray-600">{card.progress}% Completed</span>
                </div>
                <Progress value={card.progress} className="bg-gray-200" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* All Deployments Section */}
        <Card className="border-slate-200 rounded-2xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4 border-b">
            <CardTitle className="text-xl font-normal">All Deployments</CardTitle>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="bg-cyan-50 text-cyan-600"
              >
               <Grid />
              </Button>
              <Button variant="ghost" size="icon">
               <LayoutGrid />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="divide-y p-0">
            {deploymentsData.map((deployment) => (
              <div key={deployment.id} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={deployment.avatar}
                      alt={deployment.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-lg font-semibold text-gray-900">
                          {deployment.name}
                        </span>
                        <Badge className={deployment.status.badgeClass}>
                          {deployment.status.label}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                       <MapPin className="w-4"/>
                        <span className="text-sm font-normal">{deployment.hospital}</span>
                        <span>•</span>
                        <span>{deployment.location}</span>
                        <span>•</span>
                        <span>Start: {deployment.startDate}</span>
                        <span>End: {deployment.endDate}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right flex items-center gap-2">
                    <span className="text-gray-600 text-sm font-normal">{deployment.timeToDeploy}</span>
                    <svg
                      className={`w-5 h-5 ${deployment.icon.color}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={deployment.icon.path}
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-2 gap-3">
                  <span className="text-sm text-gray-600">
                    Deployment Progress
                  </span>
                  <span className="text-sm font-semibold text-gray-900">
                    {deployment.progress}%
                  </span>
                </div>
                  <Progress value={deployment.progress} className="flex-1 bg-gray-200" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DeploymentPipeline;
