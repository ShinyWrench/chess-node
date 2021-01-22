const HttpsServer = require('./httpsServer');

module.exports = class ChessNode {
    constructor() {
        this.httpsServer = new HttpsServer();
    }
    start() {
        this.startComponents();
    }
    startComponents() {
        // TODO: initialize Redis wrapper
        // TODO: start ChessGame and engine
        // TODO: start WebSocket server
        this.httpsServer.start();
    }
};
