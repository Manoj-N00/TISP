import React from 'react';
import { Building, UserPlus, Globe } from 'lucide-react';
import Footer from '../components/Footer';

const Organizations = () => {
  const organizations = [
    {
      id: 1,
      name: "CyberSec Solutions Inc.",
      type: "Security Vendor",
      members: 156,
      location: "United States",
      trustScore: 98,
      status: "active",
      contributedThreats: 234
    },
    {
      id: 2,
      name: "SecurityFirst Labs",
      type: "Research Institute",
      members: 89,
      location: "United Kingdom",
      trustScore: 95,
      status: "active",
      contributedThreats: 178
    },
    {
      id: 3,
      name: "EYSEC SECRUTY SOLUTIONS PVT. LTD.",
      type: "Computer Security Service",
      members: 10,
      location: "Belagavi",
      trustScore: 98,
      status: "active",
      contributedThreats: 2
    },
    {
      id: 4,
      name: "CyberSena (R&D) PVT LTD",
      type: "Security Vendor & IT Consultancy",
      members: 156,
      location: "Karnataka",
      trustScore:89,
      status: "active",
      contributedThreats: 34
    },
   
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Partner Organizations</h1>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <UserPlus className="w-4 h-4 mr-2" />
          Add Organization
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {organizations.map((org) => (
          <div key={org.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Building className="w-8 h-8 text-blue-600" />
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">{org.name}</h3>
                    <p className="text-sm text-gray-500">{org.type}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  org.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {org.status}
                </span>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <Globe className="w-4 h-4 text-gray-400 mr-2" />
                  <span>{org.location}</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Members</p>
                    <p className="font-semibold">{org.members}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Trust Score</p>
                    <p className="font-semibold">{org.trustScore}%</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Contributions</p>
                    <p className="font-semibold">{org.contributedThreats}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-6 py-4 bg-gray-50 border-t">
              <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-60"><Footer/></div>
    </div>
  );
};

export default Organizations;