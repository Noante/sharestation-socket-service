require("dotenv").config();
const express = require("express");
const socketIo = require("socket.io");
const http = require("http");

const clientHandler = require("../handler/client.handler");
const hostHandler = require("../handler/host.handler");
const userHandler = require("../handler/user.handler");

const authMiddleware = require("../middleware/auth");

class Server {

    constructor(){

        this.app = express();
        this.server = http.createServer(this.app);

    }

    setup(){

        const io = socketIo(this.server, {
            cors: {
            origin: "*",
            methods: ["GET", "POST"]
        }});

        io.use(authMiddleware);

        const onConnection = (socket) => {
            clientHandler(io, socket);
            hostHandler(io, socket);
            userHandler(io, socket);
        }

        io.on("connection", onConnection);

    }

}

module.exports = Server;