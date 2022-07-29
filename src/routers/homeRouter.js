const router = require('express').Router();
const HOME = require('./../controller/home');

router.get('/', HOME.display);

module.exports = router;
