import React, { useState } from 'react';
import axios from 'axios';

// Define types for the response structure you expect from the API
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

  const API_KEY = 'bf6cc3c9b89a5d02f0dd2bbffb55253c98d0d5845dcbb075410b07e1aca3a38a'; 
  const BASE_URL = 'https://www.virustotal.com/api/v3/urls/';

  const encodeUrl = (url: string) => {
    return btoa(url); // Base64 encoding for URL to be compatible with VirusTotal API
  };

  const fetchVirusTotalData = async (url: string) => {
    try {
      setError('');
      setAnalysisResult('');

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
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (url) {
      fetchVirusTotalData(url);
    }
  };

  return (
    <div>
      <h2>VirusTotal Threat Intelligence</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL to analyze"
        />
        <button type="submit">Analyze</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {analysisResult && (
        <div>
          <h3>Analysis Results:</h3>
          <pre>{analysisResult}</pre>
        </div>
      )}
    </div>
  );
};

export default VirusTotalIntegration;
