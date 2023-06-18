import express from "express";
import WebSocket, { WebSocketServer } from "ws";
import cors from "cors";
import http from "http";

const app = express();
const port = 8000;

app.use(cors());
const server = http.createServer(app);

// Set up a headless websocket server that prints any
// events that come in.
const wsServer = new WebSocketServer({
  server,
});
wsServer.on("connection", (socket) => {
  socket.send("sending from websocket");
  socket.on("message", (message) => console.log(message));
});

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
