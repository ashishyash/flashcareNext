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
    <div className="min-h-screen bg-gray-50 p-8 pt-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-normal text-brand-black1 mb-2">
              Analytics & Reporting
            </h1>
            <p className="text-base text-brand-black2 font-normal">
              Comprehensive insights and performance metrics
            </p>
          </div>
          <Button className="bg-brand-cyan1 hover:bg-brand-cyan1">
            <Download size={20} />
            Export Report
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statsCards.map((stat) => (
            <Card key={stat.id} className="rounded-2xl border-sidebar-border">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`${stat.iconBg} p-3 rounded-lg`}>
                    <stat.icon className={stat.iconColor} size={24} />
                  </div>
                  <div className={`flex items-center text-brand-cyan1 gap-1 ${stat.trendColor} text-base font-normal`}>
                    <stat.trend size={16} />
                    <span>{stat.trendValue}</span>
                  </div>
                </div>
                <div className=" text-base font-normal text-brand-black2 mb-1">{stat.title}</div>
                <div className="text-3xl font-normal text-brand-black1 mb-1">{stat.value}</div>
                <div className="font-normal text-xs text-brand-black2">{stat.subtitle}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Deployment Timeline Graph */}
          <Card className="border-sidebar-border"> 
            <CardHeader>
              <CardTitle className="text-xl font-normal text-brand-black1">Deployment Timeline Graph</CardTitle>
            </CardHeader>
            <CardContent>
            <ResponsiveContainer width="100%" height={300}>
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
                  tick={{ fill: "#6b7280", fontSize: 12 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#6b7280", fontSize: 12 }}
                  domain={[0, 80]}
                />
                <Legend
                  verticalAlign="bottom"
                  height={36}
                  iconType="circle"
                  formatter={(value: any) => (
                    <span className="text-sm text-gray-700">{value}</span>
                  )}
                />
                <Bar
                  dataKey="Fulfilled"
                  fill="#14b8a6"
                  radius={[4, 4, 0, 0]}
                  barSize={20}
                />
                <Bar
                  dataKey="Requested"
                  fill="#475569"
                  radius={[4, 4, 0, 0]}
                  barSize={20}
                />
              </BarChart>
            </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Strike Duration vs Response Time */}
          <Card className="border-sidebar-border"> 
            <CardHeader>
              <CardTitle className="text-xl font-normal text-brand-black1">Strike Duration vs Response Time</CardTitle>
            </CardHeader>
            <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={strikeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis
                  dataKey="x"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#6b7280", fontSize: 12 }}
                  domain={[0, 360]}
                  ticks={[0, 60, 120, 180, 240, 300, 360]}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#6b7280", fontSize: 12 }}
                  domain={[0, 48]}
                  ticks={[0, 12, 24, 36, 48]}
                  tickFormatter={(value: any) => `${value}h`}
                />
                <Legend
                  verticalAlign="bottom"
                  height={36}
                  iconType="circle"
                  formatter={(value: any) => (
                    <span
                      className={`text-sm ${value === "responseTime" ? "text-teal-600" : "text-red-400"}`}
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
                  dot={{ fill: "#14b8a6", r: 4 }}
                  name="responseTime"
                />
                <Line
                  type="monotone"
                  dataKey="strikeDuration"
                  stroke="#f87171"
                  strokeWidth={2}
                  dot={{ fill: "#f87171", r: 4 }}
                  name="strikeDuration"
                />
              </LineChart>
            </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Predictive Analysis Banner */}
        <div className="bg-brand-greengradient1 rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="bg-white/20 p-3 rounded-full">
              <Sparkles className="text-white" size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-normal text-white mb-1">
                Predictive Analysis
              </h3>
              <p className="text-teal-50 text-base font-normal">
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
