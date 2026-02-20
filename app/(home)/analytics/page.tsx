"use client";
import React from "react";
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
  Activity,
  Sparkles,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AnalyticsDashboard = () => {
  const statsCards = [
    {
      id: 1,
      title: "Total Deployments",
      value: "418",
      subtitle: "Last 6 months",
      icon: Users,
      iconBg: "bg-teal-100",
      iconColor: "text-teal-600",
      trend: TrendingUp,
      trendValue: "+12%",
      trendColor: "text-teal-600",
    },
    {
      id: 2,
      title: "Avg Deployment Time",
      value: "22h",
      subtitle: "Time to deployment",
      icon: Clock,
      iconBg: "bg-cyan-100",
      iconColor: "text-cyan-600",
      trend: TrendingDown,
      trendValue: "-23%",
      trendColor: "text-teal-600",
    },
    {
      id: 3,
      title: "Placement Success Rate",
      value: "94%",
      subtitle: "Assignment completion",
      icon: Award,
      iconBg: "bg-teal-100",
      iconColor: "text-teal-600",
      trend: TrendingUp,
      trendValue: "+5%",
      trendColor: "text-teal-600",
    },
    {
      id: 4,
      title: "Cost Savings",
      value: "$147K",
      subtitle: "vs traditional staffing",
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
    { x: 0, responseTime: 14, strikeDuration: 13 },
    { x: 60, responseTime: 14.5, strikeDuration: 13.5 },
    { x: 120, responseTime: 15.5, strikeDuration: 14 },
    { x: 180, responseTime: 15, strikeDuration: 14.5 },
    { x: 240, responseTime: 16, strikeDuration: 15 },
    { x: 300, responseTime: 16.5, strikeDuration: 15.5 },
    { x: 360, responseTime: 15.5, strikeDuration: 16 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8 pt-4 md:pt-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6 md:mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-normal text-brand-black1 mb-2">
              Analytics & Reporting
            </h1>
            <p className="text-sm md:text-base text-brand-black2 font-normal">
              Comprehensive insights and performance metrics
            </p>
          </div>
          <Button className="bg-brand-cyan1 hover:bg-brand-cyan1 w-full sm:w-auto flex items-center justify-center gap-2">
            <Download size={20} />
            <span className="hidden sm:inline">Export Report</span>
            <span className="sm:hidden">Export</span>
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
          {statsCards.map((stat) => (
            <Card key={stat.id} className="rounded-2xl border-sidebar-border">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-start justify-between mb-3 md:mb-4">
                  <div className={`${stat.iconBg} p-2 md:p-3 rounded-lg`}>
                    <stat.icon className={`${stat.iconColor} md:size-6`} size={20} />
                  </div>
                  <div className={`flex items-center text-brand-cyan1 gap-1 ${stat.trendColor} text-sm md:text-base font-normal`}>
                    <stat.trend size={14} className="md:w-4 md:h-4" />
                    <span>{stat.trendValue}</span>
                  </div>
                </div>
                <div className="text-sm md:text-base font-normal text-brand-black2 mb-1">{stat.title}</div>
                <div className="text-2xl md:text-3xl font-normal text-brand-black1 mb-1">{stat.value}</div>
                <div className="font-normal text-xs text-brand-black2">{stat.subtitle}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
          {/* Deployment Timeline Graph */}
          <Card className="border-sidebar-border"> 
            <CardHeader className="pb-2 md:pb-4">
              <CardTitle className="text-lg md:text-xl font-normal text-brand-black1">Deployment Timeline Graph</CardTitle>
            </CardHeader>
            <CardContent>
            <ResponsiveContainer width="100%" height={250} className="md:height-[300px]">
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
                    <span className="text-xs md:text-sm text-gray-700">{value}</span>
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

          {/* Strike Duration vs Response Time */}
          <Card className="border-sidebar-border"> 
            <CardHeader className="pb-2 md:pb-4">
              <CardTitle className="text-lg md:text-xl font-normal text-brand-black1">Strike Duration vs Response Time</CardTitle>
            </CardHeader>
            <CardContent>
            <ResponsiveContainer width="100%" height={250} className="md:height-[300px]">
              <LineChart data={strikeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis
                  dataKey="x"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#6b7280", fontSize: 11 }}
                  domain={[0, 360]}
                  ticks={[0, 60, 120, 180, 240, 300, 360]}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#6b7280", fontSize: 11 }}
                  domain={[0, 48]}
                  ticks={[0, 12, 24, 36, 48]}
                  tickFormatter={(value: any) => `${value}h`}
                />
                <Legend
                  verticalAlign="bottom"
                  height={32}
                  iconType="circle"
                  formatter={(value: any) => (
                    <span
                      className={`text-xs md:text-sm ${value === "responseTime" ? "text-teal-600" : "text-red-400"}`}
                    >
                      {value === "responseTime"
                        ? "Response Time"
                        : "Strike Duration"}
                    </span>
                  )}
                />
                <Line
                  type="monotone"
                  dataKey="responseTime"
                  stroke="#14b8a6"
                  strokeWidth={2}
                  dot={{ fill: "#14b8a6", r: 3 }}
                  name="responseTime"
                />
                <Line
                  type="monotone"
                  dataKey="strikeDuration"
                  stroke="#f87171"
                  strokeWidth={2}
                  dot={{ fill: "#f87171", r: 3 }}
                  name="strikeDuration"
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
