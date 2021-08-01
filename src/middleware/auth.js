module.exports = (socket, next) => {
    const username = socket.handshake.auth.username;
    if (!username) {
        return next(new Error("invalid cod"));
    }
    socket.username = username;
    next();
}