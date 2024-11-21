import React from 'react';
import { Shield, TrendingUp, Users, AlertTriangle } from 'lucide-react';
import ThreatCard from '../components/ThreatCard';
import Footer from '../components/Footer';

const Dashboard = () => {
  const threats = [
    {
      title: "Ransomware Campaign Targeting Healthcare",
      severity: "high",
      description: "New strain of ransomware targeting healthcare institutions through phishing emails with COVID-19 themes. Implements sophisticated encryption and data exfiltration capabilities.",
      organization: "CyberSec Solutions Inc.",
      timestamp: new Date('2024-03-15T10:30:00')
    },
    {
      title: "Zero-day Vulnerability in Popular CMS",
      severity: "high",
      description: "Critical authentication bypass vulnerability discovered in WordPress versions 6.x. Allows unauthorized admin access. Patch pending.",
      organization: "SecurityFirst Labs",
      timestamp: new Date('2024-03-15T09:15:00')
    },
    {
      title: "Suspicious API Calls Pattern",
      severity: "medium",
      description: "Unusual pattern of API calls detected from IP range 192.168.x.x. Possible reconnaissance activity. Implementing rate limiting advised.",
      organization: "NetGuard Defense",
      timestamp: new Date('2024-03-15T08:45:00')
    }
  ] as const;

  const stats = [
    {
      title: "Active Threats",
      value: "47",
      icon: Shield,
      color: "text-red-600",
      trend: "+12%"
    },
    {
      title: "Threat Score",
      value: "8.4",
       icon: TrendingUp,
      color: "text-blue-600",
      trend: "+3.2%"
    },
    {
      title: "Contributing Orgs",
      value: "24",
       icon: Users,
      color: "text-green-600",
      trend: "+5%"
    },
    {
      title: "Critical Alerts",
      value: "12",
      icon: AlertTriangle,
      color: "text-yellow-600",
      trend: "-8%"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.title}</p>
                <div className="flex items-center mt-2">
                  <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
                  <span className={`ml-2 text-sm ${
                    stat.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.trend}
                  </span>
                </div>
              </div>
              <stat.icon className={`w-8 h-8 ${stat.color}`} />
            </div>
          </div>
        ))}
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Latest Threats</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {threats.map((threat, index) => (
            <ThreatCard key={index} {...threat} />
          ))}
        </div>
      </div>
      <div><Footer/></div>
    </div>
    
  );
};

export default Dashboard;