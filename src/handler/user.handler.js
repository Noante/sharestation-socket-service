module.exports = (io, socket) => {

    const listHosts = () => {

        const hosts = [];
        
        for (let [id, socket] of io.of("/").sockets) {
            const user = socket.user;

            if(user.type === "host"){
                hosts.push({
                    userID: id,
                    username: user.username,
                });
            }
        }

        socket.emit("client:listHosts", hosts);
        socket.broadcast.emit("client:listHosts", hosts);
    }

    socket.on("server:listHosts", listHosts);

}