const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(morgan("dev"));

server.get("/", (req, res) => {
  res.json({ message: "Hello World from Treasure Hunter Backend API!" });
});

module.exports = server;
