const router = require('express').Router();

router.post('/start', (req, res, next) => {
    res.send('tournament started');
});

module.exports = router;
