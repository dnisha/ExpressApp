const express = require("express");
const client = require("prom-client");
require("dotenv").config()
const { doSomeHeavyTask } = require("./util");


const app = express();
const port = 8080;

// Enable collection of default metrics like CPU and memory usage
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics({register: client.register})


// Custom metric: Example of a counter
const requestsCounter = new client.Counter({
  name: "myapp_requests_total",
  help: "Total number of requests to the server",
});

// Middleware to increase the request counter
app.use((req, res, next) => {
  requestsCounter.inc();
  next();
});

// Route to expose the custom metric
app.get("/metrics", (req, res) => {
  res.set("Content-Type", client.register.contentType);
  res.end(client.register.metrics());
});

// Your application routes
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Get sample environment
app.get("/getenv", (req, res) => {
  const apiUrl = `${process.env.API}` || "default env";
  res.send({ api: apiUrl });
});

// Get sample environment
app.get("/getscrt", (req, res) => {
  const apiToken = `${process.env.TOKEN}` || "no token";
  res.send({ scrt: apiToken });
});

app.get("/slow", async (req, res) => {
  try {
    const timeTaken = await doSomeHeavyTask();
    return res.json({
      status: "Success",
      message: `Heavy task completed in time taken ${timeTaken}ms`
    });
  }
  catch (err) {
    return res.status(500).json({
      status: "Error",
      message: `Internal server error`,
    });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
