import React from "react";

type Threat = {
  title: string;
  description: string;
  precautions: string[];
};

const Top10: React.FC = () => {
  const threats: Threat[] = [
    {
      title: "Broken Access Control",
      description: "Unauthorized users can access or modify sensitive resources due to improper restrictions.",
      precautions: [
        "Enforce least privilege and role-based access control.",
        "Regularly test access policies with tools like automated security tests.",
      ],
    },
    {
      title: "Cryptographic Failures",
      description: "Sensitive data is exposed due to weak or missing encryption.",
      precautions: [
        "Use strong and modern encryption standards (e.g., AES, RSA).",
        "Avoid hardcoding sensitive data; use secure key management systems.",
      ],
    },
    {
      title: "Injection",
      description: "Malicious input manipulates queries, commands, or interpreters (e.g., SQL injection).",
      precautions: [
        "Use parameterized queries and prepared statements.",
        "Validate and sanitize all user inputs.",
      ],
    },
    {
      title: "Insecure Design",
      description: "Flawed security architecture or patterns leave systems vulnerable.",
      precautions: [
        "Adopt secure design principles and threat modeling early in development.",
        "Regularly review and update designs to address emerging threats.",
      ],
    },
    {
      title: "Security Misconfiguration",
      description: "Incorrect or inadequate settings expose applications to attacks.",
      precautions: [
        "Automate and standardize configuration management.",
        "Disable unnecessary features, services, and default accounts.",
      ],
    },
    {
      title: "Vulnerable and Outdated Components",
      description: "Using unpatched libraries, frameworks, or software increases risk.",
      precautions: [
        "Use dependency-checking tools to identify outdated or vulnerable libraries.",
        "Subscribe to alerts for vulnerabilities in components you use.",
      ],
    },
    {
      title: "Identification and Authentication Failures",
      description: "Weak or mismanaged authentication leads to account compromise.",
      precautions: [
        "Implement multi-factor authentication (MFA).",
        "Use secure password storage (e.g., salted and hashed passwords).",
      ],
    },
    {
      title: "Software and Data Integrity Failures",
      description: "Unauthorized changes to software or data compromise integrity.",
      precautions: [
        "Enable comprehensive logging for security-relevant events.",
        "Use log monitoring tools and set up alerts for suspicious activity.",
      ],
    },
    {
      title: "Security Logging and Monitoring Failures",
      description: "Lack of proper logging or alerting allows attacks to go undetected.",
      precautions: [
        "Enable comprehensive logging for security-relevant events.",
        "Use log monitoring tools and set up alerts for suspicious activity.",
      ],
    },
    {
      title: "Server-Side Request Forgery (SSRF)",
      description: "An application makes unauthorized requests to unintended locations.",
      precautions: [
        "Validate and sanitize URLs and user input.",
        "Use a whitelist of allowed destinations for outbound requests.",
      ],
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">OWASP Top 10 Threats</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {threats.map((threat, index) => (
          <div
            key={index}
            className="p-4 bg-white shadow rounded-md border border-gray-200 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              {index + 1}. {threat.title}
            </h2>
            <p className="text-gray-600 mb-4">{threat.description}</p>
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Precautions:</h4>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              {threat.precautions.map((precaution, i) => (
                <li key={i}>{precaution}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Top10;
