"use client";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";
import {
  Users,
  Clock,
  Award,
  DollarSign,
  TrendingUp,
  TrendingDown,
  Download,
  Sparkles,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const AnalyticsDashboard = () => {
  const statsCards = [
    {
      id: 1,
      title: "Total Deployments",
      value: "418",
      subtitle: "Last 6 Months",
      icon: Users,
      iconBg: "bg-teal-100",
      iconColor: "text-teal-600",
      trend: TrendingUp,
      trendValue: "+12%",
      trendColor: "text-teal-600",
    },
    {
      id: 2,
      title: "Average Fulfillment",
      value: "22h",
      subtitle: "Time to Fulfilled Order",
      icon: Clock,
      iconBg: "bg-cyan-100",
      iconColor: "text-cyan-600",
      trend: TrendingDown,
      trendValue: "-23%",
      trendColor: "text-teal-600",
    },
    {
      id: 3,
      title: "Completion Rate",
      value: "94%",
      subtitle: "Assignment Completion",
      icon: Award,
      iconBg: "bg-teal-100",
      iconColor: "text-teal-600",
      trend: TrendingUp,
      trendValue: "+5%",
      trendColor: "text-teal-600",
    },
    {
      id: 4,
      title: "Revenue Generated",
      value: "$147K",
      subtitle: "",
      icon: DollarSign,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      trend: TrendingDown,
      trendValue: "-25%",
      trendColor: "text-teal-600",
    },
  ];
  const deploymentData = [
    { month: "Aug", Requested: 45, Fulfilled: 42 },
    { month: "Sep", Requested: 52, Fulfilled: 48 },
    { month: "Oct", Requested: 61, Fulfilled: 57 },
    { month: "Nov", Requested: 58, Fulfilled: 58 },
    { month: "Dec", Requested: 68, Fulfilled: 64 },
    { month: "Jan", Requested: 76, Fulfilled: 72 },
    { month: "Feb", Requested: 62, Fulfilled: 60 },
  ];

  const strikeData = [
    { hours: 12, travelRate: 82, strikeRate: 125 },
    { hours: 18, travelRate: 84, strikeRate: 130 },
    { hours: 24, travelRate: 85, strikeRate: 135 },
    { hours: 36, travelRate: 87, strikeRate: 140 },
    { hours: 48, travelRate: 88, strikeRate: 142 },
    { hours: 72, travelRate: 89, strikeRate: 145 },
    { hours: 96, travelRate: 90, strikeRate: 148 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8 pt-4 md:pt-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:items-center sm:flex-row sm:justify-between sm:items-start gap-4 mb-6 md:mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-normal text-brand-black1 mb-2">
              Analytics & Reporting
            </h1>
            <p className="text-sm md:text-base text-brand-black2 font-normal">
              Comprehensive insights and performance metrics
            </p>
          </div>
          <Button
            onClick={() => toast(`Export Report is coming soon`)}
            className="bg-brand-cyan1 hover:bg-brand-cyan2 text-white py-2 sm:py-1 px-3 sm:px-4 text-sm sm:text-base w-full sm:w-auto"
          >
            <Download size={20} />
            <span className="hidden sm:inline">Export Report</span>
            <span className="sm:hidden">Export</span>
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
          {statsCards.map((stat) => (
            <Card
              key={stat.id}
              className="rounded-2xl border-sidebar-border hover:shadow-lg"
            >
              <CardContent className="p-4 md:p-6">
                <div className="flex items-start justify-between mb-3 md:mb-4">
                  <div className={`${stat.iconBg} p-2 md:p-3 rounded-lg`}>
                    <stat.icon
                      className={`${stat.iconColor} md:size-6`}
                      size={20}
                    />
                  </div>
                  <div
                    className={`flex items-center text-brand-cyan1 gap-1 ${stat.trendColor} text-sm md:text-base font-normal`}
                  >
                    <stat.trend size={14} className="md:w-4 md:h-4" />
                    <span>{stat.trendValue}</span>
                  </div>
                </div>
                <div className="text-sm md:text-base font-normal text-brand-black2 mb-1">
                  {stat.title}
                </div>
                <div className="text-2xl md:text-3xl font-normal text-brand-black1 mb-1">
                  {stat.value}
                </div>
                <div className="font-normal text-xs text-brand-black2">
                  {stat.subtitle}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
          {/* Deployment Timeline Graph */}
          <Card className="border-sidebar-border">
            <CardHeader className="pb-2 md:pb-4">
              <CardTitle className="text-lg md:text-xl font-normal text-brand-black1">
                Deployment Timeline Graph
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer
                width="100%"
                height={250}
                className="md:height-[300px]"
              >
                <BarChart data={deploymentData} barGap={4}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#e5e7eb"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#6b7280", fontSize: 11 }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#6b7280", fontSize: 11 }}
                    domain={[0, 80]}
                  />
                  <Legend
                    verticalAlign="bottom"
                    height={32}
                    iconType="circle"
                    formatter={(value: any) => (
                      <span className="text-xs md:text-sm text-gray-700">
                        {value}
                      </span>
                    )}
                  />
                  <Bar
                    dataKey="Fulfilled"
                    fill="#14b8a6"
                    radius={[4, 4, 0, 0]}
                    barSize={16}
                  />
                  <Bar
                    dataKey="Requested"
                    fill="#475569"
                    radius={[4, 4, 0, 0]}
                    barSize={16}
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Travel vs Strike Clinician Bill Rate */}
          <Card className="border-sidebar-border">
            <CardHeader className="pb-2 md:pb-4 pr-0">
              <CardTitle className="text-lg md:text-xl font-normal text-brand-black1">
                Travel Clinician Bill Rate vs Strike Clinician Bill Rate
              </CardTitle>
            </CardHeader>
            <CardContent className="pl-0">
              <ResponsiveContainer
                width="100%"
                height={250}
                className="md:height-[300px]"
              >
                <LineChart data={strikeData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis
                    dataKey="hours"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#6b7280", fontSize: 11 }}
                    tickFormatter={(value: any) => `${value}h`}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#6b7280", fontSize: 11 }}
                    domain={[70, 160]}
                    ticks={[80, 100, 120, 140, 160]}
                    tickFormatter={(value: any) => `$${value}/hr`}
                  />
                  <Legend
                    verticalAlign="bottom"
                    height={32}
                    iconType="circle"
                    formatter={(value: any) => (
                      <span className="text-xs md:text-sm text-gray-700">
                        {value === "travelRate"
                          ? "Travel Clinician"
                          : "Strike Clinician"}
                      </span>
                    )}
                  />
                  <Line
                    type="monotone"
                    dataKey="travelRate"
                    stroke="#14b8a6"
                    strokeWidth={2}
                    dot={{ fill: "#14b8a6", r: 4 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="strikeRate"
                    stroke="#f97316"
                    strokeWidth={2}
                    dot={{ fill: "#f97316", r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Predictive Analysis Banner */}
        <div className="bg-brand-greengradient1 rounded-xl p-4 md:p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <div className="bg-white/20 p-2 md:p-3 rounded-full flex-shrink-0">
              <Sparkles className="text-white" size={22} />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-lg md:text-2xl font-normal text-white mb-1">
                Predictive Analysis
              </h3>
              <p className="text-teal-50 text-sm md:text-base font-normal">
                3 hospitals at high strike risk next month
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
