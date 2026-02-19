"use client";

import { useState, useEffect } from "react";
import {
  AlertTriangle,
  Users,
  TrendingUp,
  Clock,
  MapPin,
  FileText,
} from "lucide-react";
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
import metricsData from "@/data/metrics.json";
import unitsData from "@/data/units.json";
import quickActionsData from "@/data/quick-actions.json";
import activitiesData from "@/data/activities.json";
import { useRouter } from "next/navigation";
import { Separator } from "@/components/ui/separator";

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

const getBarColor = (color: string): string => {
  if (color.includes("red")) return "#dc2626";
  if (color.includes("amber")) return "#d97706";
  if (color.includes("green")) return "#16a34a";
  return "#dc2626";
};

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

  const formatCountdown = (minutes: number, seconds: number): string => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m ${seconds}s remaining`;
  };

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
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-start">
              <div>
                <h2 className="text-[32px] font-normal mb-2 text-brand-black1">
                  Crisis Dashboard
                </h2>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="flex items-center text-base text-brand-gray1">
                    Real-time crisis management and deployment oversight
                  </span>
                </div>
              </div>
            </div>
            <div className="text-right ">
              <Button
                onClick={search}
                className="bg-brand-cyan1 hover:bg-brand-cyan2 text-white"
              >
                <Users className="w-5 h-5 mr-2" />
                Find Nurses
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-brand-red1 text-white rounded-lg p-6 mb-6 shadow-lg animate-pulse">
          <div className="flex items-center justify-between">
            <div className="flex items-start">
              <div>
                <h2 className="flex items-center text-xl font-normal ">
                  <AlertTriangle className="w-5 h-5 mr-2 flex-shrink-0" />
                  ACTIVE STRIKE: Memorial Hospital
                </h2>

                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="flex items-center text-3xl">
                    {/* <Clock className="w-4 h-4 mr-1" /> */}
                    Started {state.elapsedTime} -
                  </span>
                  <span className="flex items-center text-3xl">
                    {/* <Users className="w-4 h-4 mr-1" /> */}
                    172 Nurses Needed
                  </span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <Button className="bg-white text-normal text-brand-red1 hover:bg-white-50 text-base">
                Manage
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card
                key={index}
                className="hover:shadow-md transition border border-sidebar-border"
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-base text-brand-black1">
                      {metric.label}
                    </div>

                    <Icon className={`w-4 h-4 ${metric.color}`} />
                  </div>
                  <div className="text-3xl font-normal text-brand-black1 mb-1">
                    {metric.value}
                  </div>
                  <div className={`text-sm ${metric.color}`}>
                    {metric.statusMsg}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-2  gap-6 mb-6">
          <Card className="border border-sidebar-border">
            <CardHeader className="border-b border-b-sidebar-border">
              <CardTitle className="text-lg font-normal">
                Unit Status Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Table className="px-4">
                <TableHeader>
                  <TableRow className="border-b border-b-sidebar-border">
                    <TableHead className="text-left text-brand-black1 text-xs">
                      UNIT
                    </TableHead>
                    <TableHead className="text-left text-brand-black1 text-xs">
                      CAPACITY
                    </TableHead>
                    <TableHead className="text-left text-brand-black1 text-xs">
                      CURRENT
                    </TableHead>
                    <TableHead className="text-left text-brand-black1 text-xs">
                      NEEDED
                    </TableHead>
                    <TableHead className="text-left text-brand-black1 text-xs">
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
                      <TableCell className="text-sm font-normal ">
                        {unit.name}
                      </TableCell>
                      <TableCell className="text-sm font-normal">
                        {unit.capacity}
                      </TableCell>
                      <TableCell className="text-sm font-normal">
                        {unit.current}
                      </TableCell>
                      <TableCell className="text-sm font-normal">
                        {unit.needed}
                      </TableCell>
                      <TableCell className={unit.color}>
                        <div
                          className={`text-xs text-center font-normal ${unit.color} ${unit.bg}  rounded-full py-1 px-2`}
                        >
                          {unit.status}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card className="border border-sidebar-border">
            <CardHeader>
              <CardTitle className="text-lg font-normal">
                Recent Activity
              </CardTitle>
            </CardHeader>
            <div className="border-b border-b-sidebar-border"></div>
            <CardContent className="p-0">
              {activities.map((activity, index) => (
                <div
                  key={index}
                  className={
                    index === activities.length - 1
                      ? ""
                      : "border-b border-b-sidebar-border"
                  }
                >
                  <div className={`flex items-center px-4 py-1`}>
                    <div
                      className={`w-2 h-5 ${activity.bg2} rounded-full mr-3 flex-shrink-0`}
                    />
                    <div className="flex justify-between w-full">
                      <div className="text-sm font-normal text-brand-black1">
                        {activity.text}
                      </div>
                      <div
                        className={`text-xs font-normal ${activity.color} ${activity.bg} rounded-sm p-1 `}
                      >
                        {activity.status || "Stable"}
                      </div>
                    </div>
                  </div>
                  <div className="text-xs font-normal text-brand-gray1 mb-1 pl-9">
                    {activity.time}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card className="border border-sidebar-border">
          <CardHeader className="border-b border-b-sidebar-border mb-6">
            <CardTitle className="font-regular text-xl">Quick Links</CardTitle>
          </CardHeader>

          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {quickActions.map((action, index) => {
                return (
                  <Card
                    key={index}
                    className="hover:shadow-md transition border-brand-cyan1"
                  >
                    <CardContent className="p-4 px-3">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-lg font-normal leading-tight text-brand-black1">
                          {action.label}
                        </div>
                      </div>
                      <div className="text-sm font-normal leading-tight text-brand-black1">
                        {action.description}
                      </div>
                      <Button
                        variant="outline"
                        className="text-base font-normal bg-brand-cyan3 hover:bg-brand-cyan2 text-white w-full mt-2"
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
