import React from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from 'recharts';
import { Users, Clock, Award, DollarSign, TrendingUp, TrendingDown, Download, Activity } from 'lucide-react';

const AnalyticsDashboard = () => {
  const deploymentData = [
    { month: 'Aug', Requested: 45, Fulfilled: 42 },
    { month: 'Sep', Requested: 52, Fulfilled: 48 },
    { month: 'Oct', Requested: 61, Fulfilled: 57 },
    { month: 'Nov', Requested: 58, Fulfilled: 58 },
    { month: 'Dec', Requested: 68, Fulfilled: 64 },
    { month: 'Jan', Requested: 76, Fulfilled: 72 },
    { month: 'Feb', Requested: 62, Fulfilled: 60 },
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
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-semibold text-gray-900 mb-2">Analytics & Reporting</h1>
            <p className="text-gray-600">Comprehensive insights and performance metrics</p>
          </div>
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 font-medium">
            <Download size={20} />
            Export Report
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Total Deployments */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-start justify-between mb-4">
              <div className="bg-teal-100 p-3 rounded-lg">
                <Users className="text-teal-600" size={24} />
              </div>
              <div className="flex items-center gap-1 text-teal-600 text-sm font-medium">
                <TrendingUp size={16} />
                <span>+12%</span>
              </div>
            </div>
            <div className="text-gray-600 text-sm mb-1">Total Deployments</div>
            <div className="text-4xl font-semibold text-gray-900 mb-1">418</div>
            <div className="text-gray-500 text-xs">Last 6 months</div>
          </div>

          {/* Avg Deployment Time */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-start justify-between mb-4">
              <div className="bg-cyan-100 p-3 rounded-lg">
                <Clock className="text-cyan-600" size={24} />
              </div>
              <div className="flex items-center gap-1 text-teal-600 text-sm font-medium">
                <TrendingDown size={16} />
                <span>-23%</span>
              </div>
            </div>
            <div className="text-gray-600 text-sm mb-1">Avg Deployment Time</div>
            <div className="text-4xl font-semibold text-gray-900 mb-1">22h</div>
            <div className="text-gray-500 text-xs">Time to deployment</div>
          </div>

          {/* Placement Success Rate */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-start justify-between mb-4">
              <div className="bg-teal-100 p-3 rounded-lg">
                <Award className="text-teal-600" size={24} />
              </div>
              <div className="flex items-center gap-1 text-teal-600 text-sm font-medium">
                <TrendingUp size={16} />
                <span>+5%</span>
              </div>
            </div>
            <div className="text-gray-600 text-sm mb-1">Placement Success Rate</div>
            <div className="text-4xl font-semibold text-gray-900 mb-1">94%</div>
            <div className="text-gray-500 text-xs">Assignment completion</div>
          </div>

          {/* Cost Savings */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-start justify-between mb-4">
              <div className="bg-orange-100 p-3 rounded-lg">
                <DollarSign className="text-orange-600" size={24} />
              </div>
              <div className="flex items-center gap-1 text-teal-600 text-sm font-medium">
                <TrendingDown size={16} />
                <span>-25%</span>
              </div>
            </div>
            <div className="text-gray-600 text-sm mb-1">Cost Savings</div>
            <div className="text-4xl font-semibold text-gray-900 mb-1">$147K</div>
            <div className="text-gray-500 text-xs">vs traditional staffing</div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Deployment Timeline Graph */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Deployment Timeline Graph</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={deploymentData} barGap={4}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#6b7280', fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6b7280', fontSize: 12 }} domain={[0, 80]} />
                <Legend 
                  verticalAlign="bottom" 
                  height={36}
                  iconType="circle"
                  formatter={(value:any) => <span className="text-sm text-gray-700">{value}</span>}
                />
                <Bar dataKey="Fulfilled" fill="#14b8a6" radius={[4, 4, 0, 0]} barSize={20} />
                <Bar dataKey="Requested" fill="#475569" radius={[4, 4, 0, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Strike Duration vs Response Time */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Strike Duration vs Response Time</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={strikeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis 
                  dataKey="x" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#6b7280', fontSize: 12 }}
                  domain={[0, 360]}
                  ticks={[0, 60, 120, 180, 240, 300, 360]}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#6b7280', fontSize: 12 }}
                  domain={[0, 48]}
                  ticks={[0, 12, 24, 36, 48]}
                  tickFormatter={(value:any) => `${value}h`}
                />
                <Legend 
                  verticalAlign="bottom" 
                  height={36}
                  iconType="circle"
                  formatter={(value:any) => (
                    <span className={`text-sm ${value === 'responseTime' ? 'text-teal-600' : 'text-red-400'}`}>
                      {value === 'responseTime' ? 'Response Time' : 'Strike Duration'}
                    </span>
                  )}
                />
                <Line 
                  type="monotone" 
                  dataKey="responseTime" 
                  stroke="#14b8a6" 
                  strokeWidth={2}
                  dot={{ fill: '#14b8a6', r: 4 }}
                  name="responseTime"
                />
                <Line 
                  type="monotone" 
                  dataKey="strikeDuration" 
                  stroke="#f87171" 
                  strokeWidth={2}
                  dot={{ fill: '#f87171', r: 4 }}
                  name="strikeDuration"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Predictive Analysis Banner */}
        <div className="bg-gradient-to-r from-teal-600 to-teal-500 rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="bg-white/20 p-3 rounded-lg">
              <Activity className="text-white" size={28} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-1">Predictive Analysis</h3>
              <p className="text-teal-50">3 hospitals at high strike risk next month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
