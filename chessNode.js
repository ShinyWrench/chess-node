const HttpServer = require('./httpServer');

module.exports = class ChessNode {
    constructor() {
        // TODO: instantiate a Redis wrapper (this should connect to Redis automatically)
        // TODO: instantiate a ChessGame object
        // TODO: instantiate a WebSocket server
        this.httpServer = new HttpServer();
        this.defineHttpRoutes();
    }

    start() {
        // TODO: start WebSocket server
        // TODO: start ChessGame engine
        this.httpServer.start();
    }

    defineHttpRoutes() {
        this.httpServer.setPOSTRoute({
            route: '/tournament/start',
            callback: async (req, res, next) => {
                try {
                    let result = await this.startTournament();
                    res.send(result);
                } catch (err) {
                    console.log(
                        `Error in /tournament/start callback\n${
                            err.stack ? err.stack : err
                        }`
                    );
                    res.send('Error');
                }
            },
        });
    }

    async startTournament() {
        // TODO
        return 'tournament started';
    }
};
