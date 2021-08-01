module.exports = (io, socket) => {

    const listUsers = () => {

        const users = [];
        
        for (let [id, socket] of io.of("/").sockets) {
            users.push({
                userID: id,
                username: socket.username,
            });
        }

        socket.emit("user:listUsers", users);
        socket.broadcast.emit("user:listUsers", users);
    }

    listUsers();

}