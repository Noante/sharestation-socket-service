const Server = require("./src/config/Server");

const socketServer = new Server();
socketServer.setup();

const PORT = process.env.PORT;

socketServer.server.listen(PORT, () => {
    console.log(`Socket escutando na porta ${PORT}`);
});