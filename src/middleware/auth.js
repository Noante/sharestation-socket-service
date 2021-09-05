const jwtConfig = require("../config/JWTConfig");

module.exports = async (socket, next) => {
    const token = socket.handshake.auth.token;
    const jwtResponse = await jwtConfig.verifiyToken(token);
    if (!jwtResponse.auth) {
        return next(new Error(jwtResponse.msg));
    }
    socket.user = socket.handshake.auth;
    next();
}