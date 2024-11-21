import React, { useState } from 'react';

const Checklink = () => {
  const [url, setUrl] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCheckLink = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('');
    setLoading(true);

    if (!isValidUrl(url)) {
      setStatus('Invalid URL');
      setLoading(false);
      return;
    }
    if (url.startsWith('http://')) {
      setStatus('Not Safe: URL uses HTTP');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(url, { method: 'HEAD' });
      if (response.ok) {
        setStatus(`URL is reachable: ${response.status}`);
      } else {
        setStatus(`URL returned error: ${response.status}`);
      }
    } catch (error) {
      if (error instanceof Error) {
        setStatus(`Safe Link`);
      } else {
        setStatus('Safe Link.');
      }
    }

    setLoading(false);
  };

  const isValidUrl = (url: string) => {
    const pattern = new RegExp(
      '^(https?:\\/\\/)' + 
      '((([a-zA-Z\\d]([a-zA-Z\\d-]*[a-zA-Z\\d])*)\\.)+[a-zA-Z]{2,}|' + 
      'localhost|' + 
      '\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3})' + 
      '(\\:\\d+)?(\\/[-a-zA-Z\\d%_.~+]*)*' + 
      '(\\?[;&a-zA-Z\\d%_.~+=-]*)?' + 
      '(\\#[-a-zA-Z\\d_]*)?$', 
      'i'
    );
    return pattern.test(url);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 mx-4">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Link Checker</h1>
        <form onSubmit={handleCheckLink} className="space-y-4">
          <label htmlFor="urlInput" className="block text-lg font-medium text-gray-700">Enter URL:</label>
          <input
            type="text"
            id="urlInput"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition"
          />
          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 transition"
            disabled={loading}
          >
            {loading ? 'Checking...' : 'Check Link'}
          </button>
        </form>
        {status && (
          <p className="mt-6 text-lg text-center font-medium text-gray-700 bg-gray-100 p-4 rounded-lg border border-gray-200">
            {status}
          </p>
        )}
      </div>
    </div>
  );
};

export default Checklink;
