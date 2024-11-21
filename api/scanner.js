const net = require("net");

// Define the target IP or hostname and port range
const targetHost = "127.0.0.1"; // Replace with your target host (e.g., "scanme.nmap.org" for testing)
const startPort = 1; // Starting port number
const endPort = 1024; // Ending port number

// Function to scan a specific port
function scanPort(port) {
  return new Promise((resolve) => {
    const socket = new net.Socket();
    let isOpen = false;

    // Attempt to connect to the port
    socket.setTimeout(200); // Timeout in milliseconds (adjust as needed)

    socket.on("connect", () => {
      isOpen = true;
      socket.destroy(); // Close the socket once connected
      resolve({ port, isOpen });
    });

    socket.on("timeout", () => {
      socket.destroy();
      resolve({ port, isOpen });
    });

    socket.on("error", () => {
      resolve({ port, isOpen });
    });

    socket.connect(port, targetHost);
  });
}

// Function to scan a range of ports
async function scanPorts() {
  console.log(
    `Scanning ports ${startPort} to ${endPort} on host ${targetHost}...`
  );
  const openPorts = [];

  for (let port = startPort; port <= endPort; port++) {
    const { port: p, isOpen } = await scanPort(port);
    if (isOpen) {
      openPorts.push(p);
      console.log(`Port ${p} is open`);
    }
  }

  console.log("Scan complete.");
  if (openPorts.length) {
    console.log("Open Ports:", openPorts);
  } else {
    console.log("No open ports found.");
  }
}

// Start the port scan
scanPorts();
