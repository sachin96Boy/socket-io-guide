import express from 'express'
import http from 'http'
import io from 'socket.io';

const port = 8000

const app = express()
const server = http.createServer(app)
const io = io(server);


io.on("connection", (socket) => {
    socket.emit("messageFromServer",{data:"elcome to socktio server"});
    socket.on("messageToServer",(dataFromClient)=>{
      console.log(dataFromClient)
    })
    socket.on("message", (message) => console.log(message));
  });

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})