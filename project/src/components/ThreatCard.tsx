import React from 'react';
import { Shield, AlertTriangle, Clock, Building } from 'lucide-react';
import { format } from 'date-fns';

interface ThreatCardProps {
  title: string;
  severity: 'high' | 'medium' | 'low';
  description: string;
  organization: string;
  timestamp: Date;
}

const severityColors = {
  high: 'bg-red-100 text-red-800',
  medium: 'bg-yellow-100 text-yellow-800',
  low: 'bg-green-100 text-green-800'
};

const ThreatCard: React.FC<ThreatCardProps> = ({
  title,
  severity,
  description,
  organization,
  timestamp
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Shield className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${severityColors[severity]}`}>
          <div className="flex items-center space-x-1">
            <AlertTriangle className="w-4 h-4" />
            <span>{severity.charAt(0).toUpperCase() + severity.slice(1)}</span>
          </div>
        </span>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center space-x-2">
          <Building className="w-4 h-4" />
          <span>{organization}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Clock className="w-4 h-4" />
          <span>{format(timestamp, 'MMM d, yyyy HH:mm')}</span>
        </div>
      </div>
    </div>
  );
};

export default ThreatCard;