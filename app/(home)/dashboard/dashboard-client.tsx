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
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useApiData } from "@/hooks/useApiData";
import { useRouter } from "next/navigation";

interface Metric {
  label: string;
  value: string;
  icon: React.ElementType;
  color: string;
  bg: string;
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
  current: number;
  capacity: number;
  needed: number;
}

const getBarColor = (color: string): string => {
  if (color.includes('red')) return '#dc2626';
  if (color.includes('amber')) return '#d97706';
  if (color.includes('green')) return '#16a34a';
  return '#dc2626';
};

interface Activity_Item {
  id: number;
  time: string;
  text: string;
}

interface DashboardState {
  elapsedTime: string;
  countdown: number;
  seconds: number;
}

export default function DashboardClient(): JSX.Element {
  const { data: metricsData } = useApiData<any>('metrics');
  const { data: unitsData } = useApiData<Unit>('units');
  const { data: activitiesData } = useApiData<Activity_Item>('activities');
  
  const [state, setState] = useState<DashboardState>({
    elapsedTime: "2 hours ago",
    countdown: 120,
    seconds: 0,
  });

    const router = useRouter()

  useEffect(() => {
    const timer = setInterval(() => {
      setState((prev) => ({
        ...prev,
        seconds: prev.seconds === 0 ? 59 : prev.seconds - 1,
        countdown: prev.seconds === 0 ? Math.max(0, prev.countdown - 1) : prev.countdown,
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

  const metrics: Metric[] = (metricsData || []).map(metric => ({
    ...metric,
    icon: iconMap[metric.icon as keyof typeof iconMap],
  }));

  const units: Unit[] = unitsData || [];

  const activities: Activity_Item[] = activitiesData || [];
  const search = () => {
    router.push('/search')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-red-600 text-white rounded-lg p-6 mb-6 shadow-lg animate-pulse">
          <div className="flex items-start justify-between">
            <div className="flex items-start">
              <AlertTriangle className="w-8 h-8 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-2">
                  ACTIVE STRIKE: Memorial Hospital
                </h2>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    Started {state.elapsedTime}
                  </span>
                  <span className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    147 nurses needed
                  </span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm opacity-90">Time Remaining</div>
              <div className="text-xl font-bold">
                {formatCountdown(state.countdown, state.seconds)}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card key={index} className="hover:shadow-md transition">
                <CardContent className="p-2">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`${metric.bg} p-3 rounded-lg`}>
                      <Icon className={`w-6 h-6 ${metric.color}`} />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm text-gray-600">{metric.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Unit Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {units.map((unit, index) => (
                  <div
                    key={index}
                    className={`border-l-4 ${unit.border}  rounded-r-lg p-4`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-gray-900">
                          {unit.name}
                        </div>
                        <div className="text-sm text-gray-600 mt-1">
                          {(unit.current/ unit.capacity)*100}% staffed
                        </div>
                      </div>
                      <div className={`font-semibold ${unit.color}`}>
                        {unit.status}
                      </div>
                    </div>
                    <div className="mt-3 bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full transition-all"
                        style={{ 
                          width: `${unit.staffed}%`,
                          backgroundColor: getBarColor(unit.color)
                        }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Activity Feed</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {activities.map((activity, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <div>
                    <div className="text-xs text-gray-500 mb-1">
                      {activity.time}
                    </div>
                    <div className="text-sm text-gray-900">{activity.text}</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <Button onClick={search} className="bg-cyan-600 hover:bg-cyan-700 text-white">
                <Users className="w-5 h-5 mr-2" />
                Find Nurses
              </Button>
              <Button variant="outline">
                <MapPin className="w-5 h-5 mr-2" />
                View Deployment Map
              </Button>
              <Button variant="outline">
                <FileText className="w-5 h-5 mr-2" />
                Generate Report
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
