const http = require("http");
const app = require("./app");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// Set PORT
const PORT = process.env.PORT || 5000;

// Create HTTP Server
const server = http.createServer(app);

// Start Server
server.listen(PORT, () => {
  console.log(`=============Node js Express Connect========================`)
  console.log(`Server running on port: ${PORT}`);
  console.log(`Server running on url: http://localhost:${PORT}`);
  console.log(`============================================`)
});
