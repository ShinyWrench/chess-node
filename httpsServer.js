const express = require('express');

module.exports = class HttpServer {
    constructor(port = 3000) {
        this.port = port;
        this.app = express();
    }
    start() {
        this.defineRoutes();
        this.startListening();
    }
    defineRoutes() {
        this.app.get('/', (req, res, next) => {
            res.send('Hiya buddy!');
        });
    }
    startListening() {
        this.app.listen(this.port, () => {
            console.log(`Listening on port ${this.port}`);
        });
    }
};
