module.exports = (io, socket) => {

    const createFile = (file) => {
        // socket.to(socketId).emit("upload", file);
        socket.emit("upload", file);
        socket.broadcast.emit("upload", file);
    }

    const listDir = (path) => {
        // socket.to(socketId).emit("list_file", path);
        socket.emit("client:listDir", path);
        socket.broadcast.emit("client:listDir", path);
    }

    const readFile = (path) => {
        // socket.to(socketId).emit("list_file", path);
        socket.emit("readFile", path);
        socket.broadcast.emit("readFile", path);
    }

    socket.on("client:create", createFile);
    socket.on("file:read", readFile);
    socket.on("client:listDir", listDir);

}