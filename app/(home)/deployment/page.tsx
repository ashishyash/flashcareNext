import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { MapPin, Package, Home, Activity } from "lucide-react";

// Deployments Data
const deploymentsData = [
  {
    id: "1",
    name: "Sarah Chen",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    status: {
      label: "Ready to Deploy",
      badgeClass:
        "text-xs font-normal bg-orange-100 rounded-full text-orange-700 border border-orange-400 hover:bg-orange-100",
    },
    hospital: "Memorial Hospital",
    location: "Houston, TX",
    startDate: "Feb 8, 2026",
    endDate: "Mar 8, 2026",
    timeToDeploy: "12 hours to deploy",
    progress: 100,
    iconName: "package",
    iconColor: "text-orange-500",
  },
  {
    id: "2",
    name: "Michael Rodriguez",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    status: {
      label: "Travel/Housing",
      badgeClass:
        "text-xs font-normal rounded-full bg-cyan-100 text-cyan-700 border border-cyan-200 hover:bg-cyan-100",
    },
    hospital: "Memorial Hospital",
    location: "Houston, TX",
    startDate: "Feb 13, 2026",
    endDate: "Mar 8, 2026",
    timeToDeploy: "18 hours to deploy",
    progress: 80,
    iconName: "home",
    iconColor: "text-brand-cyan1",
  },
  {
    id: "3",
    name: "James Chen",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    status: {
      label: "Ready to Deploy",
      badgeClass:
        "text-xs font-normal rounded-full bg-orange-100 text-orange-700 border-orange-400 hover:bg-orange-100",
    },
    hospital: "Memorial Hospital",
    location: "Houston, TX",
    startDate: "Feb 11, 2026",
    endDate: "Mar 8, 2026",
    timeToDeploy: "12 hours to deploy",
    progress: 65,
    iconName: "package",
    iconColor: "text-orange-500",
  },
  {
    id: "4",
    name: "Emily Thompson",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    status: {
      label: "Credentialing",
      badgeClass:
        "text-xs font-normal rounded-full bg-yellow-100 text-yellow-700 border border-yellow-200 hover:bg-yellow-100",
    },
    hospital: "Memorial Hospital",
    location: "Houston, TX",
    startDate: "Feb 12, 2026",
    endDate: "Mar 8, 2026",
    timeToDeploy: "2 days to deploy",
    progress: 45,
    iconName: "activity",
    iconColor: "text-green-500",
  },
  {
    id: "5",
    name: "Amanda Lewis",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    status: {
      label: "Travel/Housing",
      badgeClass:
        "text-xs font-normal rounded-full bg-cyan-100 text-cyan-700 border border-cyan-300 hover:bg-cyan-100",
    },
    hospital: "Memorial Hospital",
    location: "Houston, TX",
    startDate: "Feb 11, 2026",
    endDate: "Mar 8, 2026",
    timeToDeploy: "3 days to deploy",
    progress: 25,
    iconName: "home",
    iconColor: "text-brand-cyan1",
  },
];

// Stats Cards Data
const statsCardsData = [
  {
    id: "credentialing",
    title: "Credentialing",
    count: 28,
    progress: 65,
    iconName: "activity",
    iconColor: "text-green-500",
  },
  {
    id: "travel-housing",
    title: "Travel/ Housing",
    count: 18,
    progress: 40,
    iconName: "home",
    iconColor: "text-brand-cyan1",
  },
  {
    id: "ready-deployed",
    title: "Ready to Deployed",
    count: 17,
    progress: 100,
    iconName: "package",
    iconColor: "text-orange-500",
  },
];

// Icon component that renders Lucide icons based on name
const Icon = ({ name, className }: { name: string; className?: string }) => {
  const icons: Record<string, React.ComponentType<{ className?: string }>> = {
    activity: Activity,
    home: Home,
    package: Package,
  };
  const IconComponent = icons[name];
  if (!IconComponent) return null;
  return <IconComponent className={className} />;
};

const DeploymentPipeline = () => {
  return (
    <div className="min-h-screen p-4 md:p-6">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-normal mb-2">
          Deployment Pipeline
        </h1>
        <p className="text-base font-normal mb-6">
          Operational oversight of all active deployments
        </p>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
          {statsCardsData.map((card) => (
            <Card
              key={card.id}
              className="border-slate-200 rounded-2xl hover:shadow-lg"
            >
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-base font-normal">{card.title}</span>
                  <Icon
                    name={card.iconName}
                    className={`w-5 h-5 md:w-6 md:h-6 ${card.iconColor}`}
                  />
                </div>
                <div className="flex items-end justify-between mb-4">
                  <span className="text-3xl md:text-3xl font-normal text-brand-black1">
                    {card.count}
                  </span>
                  <span className="text-gray-600 text-sm">
                    {card.progress}% Completed
                  </span>
                </div>
                <Progress value={card.progress} className="bg-gray-200" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* All Deployments Section */}
        <Card className="border-slate-200 rounded-2xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4 border-b">
            <CardTitle className="text-lg md:text-xl font-normal text-brand-black1">
              All Deployments
            </CardTitle>
            {/* <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="bg-cyan-50 text-cyan-600 hover:bg-cyan-60 hover:text-cyan-600"
              >
                <Grid />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-cyan-60 hover:text-cyan-600"
              >
                <LayoutGrid />
              </Button>
            </div> */}
          </CardHeader>

          <CardContent className="divide-y p-0">
            {deploymentsData.map((deployment) => (
              <div key={deployment.id} className="p-4 md:p-6">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-3">
                  <div className="flex items-start gap-3 md:gap-4">
                    <img
                      src={deployment.avatar}
                      alt={deployment.name}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full flex-shrink-0"
                    />
                    <div className="min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                        <span className="text-base md:text-lg font-normal text-brand-black1 whitespace-nowrap">
                          {deployment.name}
                        </span>
                        <Badge className={`${deployment.status.badgeClass}`}>
                          {deployment.status.label}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-brand-black2">
                        <MapPin className="w-4 flex-shrink-0" />
                        <span className="text-sm font-normal truncate">
                          {deployment.hospital}
                        </span>
                        <span className="flex-shrink-0">•</span>
                        <span className="flex-shrink-0">
                          {deployment.location}
                        </span>
                        <span className="flex-shrink-0 hidden sm:inline">
                          •
                        </span>
                        <span className="flex-shrink-0 hidden sm:inline">
                          Start: {deployment.startDate}
                        </span>
                        <span className="flex-shrink-0 hidden sm:inline">
                          End: {deployment.endDate}
                        </span>
                        <span className="flex-shrink-0 sm:hidden">
                          {deployment.startDate} - {deployment.endDate}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2 md:ml-auto">
                    <Icon
                      name={deployment.iconName}
                      className={`w-4 h-4 md:w-5 md:h-5 ${deployment.iconColor} flex-shrink-0`}
                    />
                    <span className="text-brand-black2 text-sm font-normal whitespace-nowrap">
                      {deployment.timeToDeploy}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-2 gap-3">
                  <span className="text-sm text-brand-black2 font-normal">
                    Deployment Progress
                  </span>
                  <span className="text-sm font-semibold text-brand-black1">
                    {deployment.progress}%
                  </span>
                </div>
                <Progress
                  value={deployment.progress}
                  className="flex-1 bg-gray-200"
                />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DeploymentPipeline;
