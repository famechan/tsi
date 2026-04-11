const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const port = 5000;
const distPath = path.join(__dirname, "..", "dist");
const indexPath = path.join(distPath, "index.html");

app.use(cors());
app.use(express.json());

app.get("/api/home", (req, res) => {
  res.json({
    page: "home",
    message: "Data from server",
  });
});

app.get("/api/about", (req, res) => {
  res.json({
    page: "about",
    message: "Data from server",
  });
});

app.get("/api/login", (req, res) => {
  res.json({
    page: "login",
    message: "Data from server",
  });
});

app.get("/api/register", (req, res) => {
  res.json({
    page: "register",
    message: "Data from server",
  });
});

app.use(express.static(distPath));

app.get(/^\/(?!api\/).*/, (req, res) => {
  res.sendFile(indexPath);
});

const server = app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

server.on("error", (error) => {
  console.error("Server failed to start:", error);
});
