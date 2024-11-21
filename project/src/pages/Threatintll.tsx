import React, { useState } from 'react';
import axios from 'axios';

interface VirusTotalResponse {
  data: {
    attributes: {
      last_analysis_stats: {
        harmless: number;
        suspicious: number;
        malicious: number;
        undetected: number;
      };
      permalink: string;
    };
  };
}

const VirusTotalIntegration: React.FC = () => {
  const [url, setUrl] = useState<string>('');
  const [analysisResult, setAnalysisResult] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const API_KEY = 'bf6cc3c9b89a5d02f0dd2bbffb55253c98d0d5845dcbb075410b07e1aca3a38a'; 
  const BASE_URL = 'https://www.virustotal.com/api/v3/urls/';

  const encodeUrl = (url: string) => {
    return btoa(url); 
  };

  const fetchVirusTotalData = async (url: string) => {
    try {
      setError('');
      setAnalysisResult('');
      setLoading(true);

      const encodedUrl = encodeUrl(url);
      const response = await axios.get<VirusTotalResponse>(`${BASE_URL}${encodedUrl}`, {
        headers: {
          'x-apikey': API_KEY,
        },
      });

      const stats = response.data.data.attributes.last_analysis_stats;
      setAnalysisResult(`
        Harmless: ${stats.harmless}
        Suspicious: ${stats.suspicious}
        Malicious: ${stats.malicious}
        Undetected: ${stats.undetected}
        Permalink: ${response.data.data.attributes.permalink}
      `);
    } catch (error: any) {
      setError('Failed to fetch data from VirusTotal. Please check your API key and try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (url) {
      fetchVirusTotalData(url);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-6">VirusTotal Threat Intelligence</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter URL to analyze"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
            disabled={loading}
          >
            {loading ? 'Analyzing...' : 'Analyze'}
          </button>
        </form>

        {error && <p className="mt-4 text-red-500 text-center">{error}</p>}

        {analysisResult && (
          <div className="mt-6">
            <h3 className="font-semibold text-lg mb-2">Analysis Results:</h3>
            <pre className="bg-gray-100 p-4 rounded-md text-sm text-gray-800">{analysisResult}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default VirusTotalIntegration;
