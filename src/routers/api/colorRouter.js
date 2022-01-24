const router = require('express').Router();
const {loadFile, saveFile} = require('./../../database/nodejs/load_save');

router.get('/api/color', (_req, res) => {
   const dataColor = loadFile('color');
   res.json(dataColor);
});

router.post('/api/color', (req, res) => {
   saveFile('color', JSON.stringify(req.body));
   res.send({message: 'Successfully!!!'});
});

module.exports = router;
