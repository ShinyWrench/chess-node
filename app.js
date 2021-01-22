let argv = require('minimist')(process.argv.slice(2));
const express = require('express');
const app = express();
const port = argv.port || 3000;

app.get('/', (req, res, next) => {
    res.send('Hiya buddy!');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
