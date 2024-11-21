import axios from 'axios';

const API_KEY = 'AIzaSyCUTEIOM5qWWAO9ZP2RX8gi_5Ti0Q5UNn4';  // Replace with your actual API key
const SAFE_BROWSING_API_URL = 'https://safebrowsing.googleapis.com/v4/threatMatches:find';

interface SafeBrowsingResponse {
  matches?: {
    threatType: string;
    platformType: string;
    threatEntryType: string;
    url: string;
  }[];
}

async function checkUrlSafe(url: string): Promise<SafeBrowsingResponse> {
  const payload = {
    client: {
      clientId: 'yourcompanyname',
      clientVersion: '1.0'
    },
    threatInfo: {
      threatTypes: ['MALWARE', 'SOCIAL_ENGINEERING'],
      platformTypes: ['ANY_PLATFORM'],
      threatEntryTypes: ['URL'],
      threatEntries: [
        { url }
      ]
    }
  };

  try {
    const response = await axios.post(`${SAFE_BROWSING_API_URL}?key=${API_KEY}`, payload);
    return response.data;
  } catch (error) {
    console.log('Safe Url:');
    throw error;
  }
}