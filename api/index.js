const router = require('express').Router();

router.use('/tournament', require('./tournament'));

router.get('/', (req, res, next) => {
    res.send('Hiya buddy!');
});

module.exports = router;
