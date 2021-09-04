module.exports = (io, socket) => {

    const downloadFile = (data) => {
        socket.to(data.to).emit("client:downloadFile", {
            ...data,
            from: socket.id
        });
    }

    const listDir = (data) => {
        socket.to(data.to).emit("client:listDir", {
            ...data,
            from: socket.id
        });
    }

    socket.on("client:downloadFile", downloadFile);
    socket.on("client:listDir", listDir);

}