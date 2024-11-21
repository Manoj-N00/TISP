import React from 'react';
import { Bell, Lock, UserCircle, Globe, Database, Shield } from 'lucide-react';

const Settings = () => {
  const settingsSections = [
    {
      title: "Profile Settings",
      icon: UserCircle,
      items: [
        { name: "Personal Information", description: "Update your name, email, and profile picture" },
        { name: "Preferences", description: "Set your notification and display preferences" }
      ]
    },
    {
      title: "Security",
      icon: Lock,
      items: [
        { name: "Password", description: "Change your password and enable 2FA" },
        { name: "API Keys", description: "Manage your API keys and access tokens" }
      ]
    },
    {
      title: "Notifications",
      icon: Bell,
      items: [
        { name: "Alert Settings", description: "Configure threat alert thresholds and channels" },
        { name: "Email Preferences", description: "Manage email notification frequency" }
      ]
    },
    {
      title: "Data Management",
      icon: Database,
      items: [
        { name: "Data Retention", description: "Configure data retention policies" },
        { name: "Export Data", description: "Export your organization's threat data" }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Settings</h1>

      <div className="space-y-6">
        {settingsSections.map((section, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <section.icon className="w-6 h-6 text-blue-600" />
                <h2 className="ml-3 text-lg font-semibold text-gray-900">{section.title}</h2>
              </div>
              
              <div className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg cursor-pointer">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                    <button className="px-4 py-2 text-sm text-blue-600 hover:text-blue-800 font-medium">
                      Edit
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Settings;