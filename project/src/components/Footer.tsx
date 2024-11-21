import React from 'react';

function Footer() {
  return (
    <footer className="bg-white-800 text-blue-500 py-2">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} @Data Pirates GIT. All rights reserved.</p>
        <div className="mt-2 flex justify-center space-x-6">
          <a 
            href="https://github.com/Manoj-N00" 
            className="text-blue-400 hover:text-blue-500" 
            target="_blank" 
            
          >
            GitHub
          </a>
          <a href="/privacy-policy" className="text-blue-400 hover:text-blue-500">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="text-blue-400 hover:text-blue-500">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
