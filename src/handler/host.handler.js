module.exports = (io, socket) => {

    const uploadFile = (data) => {
        socket.to(data.to).emit("host:uploadFile", {
            ...data,
            from: socket.id
        });
    }

    const downloadFile = (data) => {
        socket.to(data.to).emit("host:downloadFile", {
            ...data,
            from: socket.id
        });
    }

    const listDir = ({path, to}) => {
        socket.to(to).emit("host:listDir", {
            path,
            from: socket.id
        });
    }

    socket.on("host:listDir", listDir);
    socket.on("host:uploadFile", uploadFile)
    socket.on("host:downloadFile", downloadFile)

}