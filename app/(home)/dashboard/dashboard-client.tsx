"use client";

import { useState, useEffect } from "react";
import { AlertTriangle, Users, TrendingUp, Clock } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useApiData } from "@/hooks/useApiData";

import quickActionsData from "@/data/quick-actions.json";
import { useRouter } from "next/navigation";

interface Metric {
  label: string;
  value: string;
  icon: React.ElementType;
  color: string;
  bg: string;
  statusMsg: string;
}

interface Unit {
  id: number;
  name: string;
  staffed: number;
  status: string;
  color: string;
  bg: string;
  border: string;
  barColor?: string;
  capacity: number;
  current: number;
  needed: number;
}

interface QuickAction {
  label: string;
  description: string;
  btn_label: string;
}

// const getBarColor = (color: string): string => {
//   if (color.includes("red")) return "#dc2626";
//   if (color.includes("amber")) return "#d97706";
//   if (color.includes("green")) return "#16a34a";
//   return "#dc2626";
// };

interface Activity_Item {
  id: number;
  time: string;
  text: string;
  color: string;
  status: string;
  bg: string;
  bg2: string;
}

interface DashboardState {
  elapsedTime: string;
  countdown: number;
  seconds: number;
}

export default function DashboardClient(): JSX.Element {
  const { data: metricsData } = useApiData<any>("metrics");
  const { data: unitsData } = useApiData<Unit>("units");
  const { data: activitiesData } = useApiData<Activity_Item>("activities");

  const [state, setState] = useState<DashboardState>({
    elapsedTime: "2 hours ago",
    countdown: 120,
    seconds: 0,
  });

  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setState((prev) => ({
        ...prev,
        seconds: prev.seconds === 0 ? 59 : prev.seconds - 1,
        countdown:
          prev.seconds === 0 ? Math.max(0, prev.countdown - 1) : prev.countdown,
      }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // const formatCountdown = (minutes: number, seconds: number): string => {
  //   const hours = Math.floor(minutes / 60);
  //   const mins = minutes % 60;
  //   return `${hours}h ${mins}m ${seconds}s remaining`;
  // };

  const iconMap = {
    Users,
    TrendingUp,
    Clock,
  };

  const metrics: Metric[] = metricsData.map((metric) => ({
    ...metric,
    icon: iconMap[metric.icon as keyof typeof iconMap],
  }));
  const quickActions: QuickAction[] = quickActionsData;

  const units: Unit[] = unitsData || [];

  const activities: Activity_Item[] = activitiesData || [];
  const search = () => {
    router.push("/search");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6">
        <div className="mb-4 sm:mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
            <div className="flex items-start">
              <div>
                <h2 className="text-xl sm:text-2xl md:text-[32px] font-normal text-brand-black1">
                  Crisis Dashboard
                </h2>
                <div className="flex flex-wrap gap-2 sm:gap-4 text-sm mt-1">
                  <span className="flex items-center text-xs sm:text-base text-brand-black2">
                    Real-time crisis management and deployment oversight
                  </span>
                </div>
              </div>
            </div>
            <div className="text-left sm:text-right">
              <Button
                onClick={search}
                className="bg-brand-cyan1 hover:bg-brand-cyan2 text-white py-2 sm:py-1 px-3 sm:px-4 text-sm sm:text-base w-full sm:w-auto"
              >
                <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                <span className="sm:hidden">Find</span>
                <span className="hidden sm:inline">Search Nurse</span>
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-brand-red1 text-white rounded-lg p-3 sm:p-4 md:p-6 mb-4 sm:mb-6 shadow-lg animate-pulse">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
            <div className="flex items-start">
              <div>
                <h2 className="flex items-center text-base sm:text-xl font-normal">
                  <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                  <span className="hidden sm:inline">
                    ACTIVE STRIKE: Memorial Hospital
                  </span>
                  <span className="sm:hidden">ACTIVE STRIKE</span>
                </h2>

                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-1 sm:gap-4 text-sm mt-1 sm:mt-2">
                  <span className="flex items-center text-lg sm:text-3xl">
                    Started {state.elapsedTime} -
                  </span>
                  <span className="flex items-center text-lg sm:text-3xl">
                    {`${metrics[0]?.value || 0} Nurses Needed`}
                  </span>
                </div>
              </div>
            </div>
            <div className="text-left sm:text-right mt-2 sm:mt-0">
              <Button className="bg-white text-normal text-brand-red1 hover:bg-white-50 text-xs sm:text-base py-1 sm:py-2 px-2 sm:px-4">
                Manage
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card
                key={index}
                className="hover:shadow-md transition border border-sidebar-border hover:shadow-lg"
              >
                <CardContent className="p-3 sm:p-4">
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-xs sm:text-base text-brand-black1">
                      {metric.label}
                    </div>

                    <Icon className={`w-3 h-3 sm:w-4 sm:h-4 ${metric.color}`} />
                  </div>
                  <div className="text-2xl sm:text-3xl font-normal text-brand-black1 mb-1">
                    {metric.value}
                  </div>
                  <div className={`text-xs sm:text-sm ${metric.color}`}>
                    {metric.statusMsg}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
          <Card className="border border-sidebar-border overflow-hidden">
            <CardHeader className="border-b border-b-sidebar-border py-3">
              <CardTitle className="text-base sm:text-lg font-normal">
                Unit Status Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-b border-b-sidebar-border">
                      <TableHead className="text-left text-brand-black1 text-xs whitespace-nowrap">
                        UNIT
                      </TableHead>
                      <TableHead className="text-left text-brand-black1 text-xs whitespace-nowrap">
                        CAPACITY
                      </TableHead>
                      <TableHead className="text-left text-brand-black1 text-xs whitespace-nowrap">
                        CURRENT
                      </TableHead>
                      <TableHead className="text-left text-brand-black1 text-xs whitespace-nowrap">
                        NEEDED
                      </TableHead>
                      <TableHead className="text-left text-brand-black1 text-xs whitespace-nowrap">
                        STATUS
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {units.map((unit, index) => (
                      <TableRow
                        className="border-b border-b-sidebar-border"
                        key={index}
                      >
                        <TableCell className="text-xs sm:text-sm font-normal whitespace-nowrap">
                          {unit.name}
                        </TableCell>
                        <TableCell className="text-xs sm:text-sm font-normal whitespace-nowrap">
                          {unit.capacity}
                        </TableCell>
                        <TableCell className="text-xs sm:text-sm font-normal whitespace-nowrap">
                          {unit.current}
                        </TableCell>
                        <TableCell className="text-xs sm:text-sm font-normal whitespace-nowrap">
                          {unit.needed}
                        </TableCell>
                        <TableCell className={unit.color}>
                          <div
                            className={`text-[10px] sm:text-xs text-center font-normal ${unit.color} ${unit.bg} rounded-full py-0.5 sm:py-1 px-1.5 sm:px-2 whitespace-nowrap`}
                          >
                            {unit.status}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-sidebar-border">
            <CardHeader className="py-3">
              <CardTitle className="text-base sm:text-lg font-normal">
                Recent Activity
              </CardTitle>
            </CardHeader>
            <div className="border-b border-b-sidebar-border"></div>
            <CardContent className="p-0 max-h-[400px] overflow-y-auto">
              {activities.map((activity, index) => (
                <div
                  key={index}
                  className={
                    index === activities.length - 1
                      ? ""
                      : "border-b border-b-sidebar-border"
                  }
                >
                  <div
                    className={`flex items-center px-2 sm:px-4 py-2 sm:py-1`}
                  >
                    <div
                      className={`w-1.5 h-4 sm:w-2 sm:h-5 ${activity.bg2} ${!activity.status ? "bg-green-600" : ""} rounded-full mr-2 sm:mr-3 flex-shrink-0`}
                    />
                    <div className="flex justify-between w-full items-start gap-2">
                      <div className="text-xs sm:text-sm font-normal text-brand-black1 line-clamp-2">
                        {activity.text}
                      </div>
                      <div
                        className={`text-[10px] sm:text-xs font-normal  ${
                          activity.color
                            ? activity.color
                            : "bg-green-100 text-green-600"
                        } ${
                          activity.bg
                        } rounded-sm p-1 whitespace-nowrap flex-shrink-0`}
                      >
                        {activity.status || "Stable"}
                      </div>
                    </div>
                  </div>
                  <div className="text-[10px] sm:text-xs font-normal text-brand-black2 mb-1 pl-6 sm:pl-9">
                    {activity.time}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card className="border border-sidebar-border">
          <CardHeader className="border-b border-b-sidebar-border mb-4 sm:mb-6 py-3">
            <CardTitle className="font-regular text-base sm:text-xl">
              Quick Links
            </CardTitle>
          </CardHeader>

          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
              {quickActions.map((action, index) => {
                return (
                  <Card
                    key={index}
                    className="hover:shadow-md transition border-brand-cyan1"
                  >
                    <CardContent className="p-3 sm:p-4 px-2 sm:px-3">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-sm sm:text-lg font-normal leading-tight text-brand-black1">
                          {action.label}
                        </div>
                      </div>
                      <div className="text-xs sm:text-sm font-normal leading-tight text-brand-black1 mb-2">
                        {action.description}
                      </div>
                      <Button
                        variant="outline"
                        className="text-xs sm:text-base font-normal bg-brand-cyan3 hover:bg-brand-cyan2 text-white w-full mt-1 sm:mt-2 py-1.5 sm:py-2"
                      >
                        {action.btn_label}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
