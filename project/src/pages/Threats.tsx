import React, { useState } from 'react';
import { Plus, MessageCircle, Users, Clock } from 'lucide-react';
import { format } from 'date-fns';
import CreateThreatModal from '../components/CreateThreat';
import Footer from '../components/Footer';

type Threat = {
  id: number;
  title: string;
  severity: 'high' | 'medium' | 'low';
  description: string;
  organization: string;
  timestamp: Date;
  status: 'under review' | 'approved';
};

export default function Threats() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [threats, setThreats] = useState<Threat[]>([
    {
      id: 1,
      title: 'SQL Injection Vulnerability',
      severity: 'high',
      description: 'Critical SQL injection vulnerability detected in the login system.',
      organization: 'Tech Corp',
      timestamp: new Date('2024-03-15T10:00:00'),
      status: 'approved', 
    },
    {
      id: 2,
      title: 'Suspicious Network Activity',
      severity: 'medium',
      description: 'Unusual network traffic patterns detected from multiple IP addresses.',
      organization: 'Data Systems Inc',
      timestamp: new Date('2024-03-14T15:30:00'),
      status: 'approved', 
    },
  ]);

  const handleCreateThreat = (threatData: {
    title: string;
    severity: 'high' | 'medium' | 'low';
    description: string;
    organization: string;
  }) => {
    const newThreat: Threat = {
      id: threats.length + 1,
      ...threatData,
      timestamp: new Date(),
      status: 'under review', // Set status as 'under review' initially
    };

    // Add the new threat to the list
    setThreats([newThreat, ...threats]);

    // Set a timeout to change the status to 'approved' after 1 minute
    setTimeout(() => {
      setThreats((prevThreats) =>
        prevThreats.map((threat) =>
          threat.id === newThreat.id
            ? { ...threat, status: 'approved' }
            : threat
        )
      );
    }, 60000); // 60000ms = 1 minute
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Threats</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          <span>New Threat</span>
        </button>
      </div>

      <div className="space-y-4">
        {threats.map((threat) => (
          <div
            key={threat.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {threat.title}
                </h3>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  {threat.severity}
                </span>
              </div>
              <span
                className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${
                  threat.status === 'under review'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-green-100 text-green-800'
                }`}
              >
                {threat.status}
              </span>
            </div>

            <p className="text-gray-600 mb-4 line-clamp-2">{threat.description}</p>

            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex space-x-4">
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>{threat.organization}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MessageCircle className="w-4 h-4" />
                  <span>0 replies</span> {/* You can update this if reply data exists */}
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{format(threat.timestamp, 'MMM d, yyyy HH:mm')}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <CreateThreatModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreateThreat}
      />
      <Footer />
    </div>
  );
}
