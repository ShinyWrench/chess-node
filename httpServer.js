const express = require('express');

module.exports = class HttpServer {
    constructor(port = 3000) {
        this.port = port;
        this.app = express();
    }

    start() {
        this.app.listen(this.port, () => {
            console.log(`Listening on port ${this.port}`);
        });
    }

    setPOSTRoute({ route, callback }) {
        this.app.post(route, callback);
    }
};
