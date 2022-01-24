const router = require('express').Router();
const {loadFile, saveFile} = require('./../../database/nodejs/load_save');

router.get('/api/background', (_req, res) => {
   const dataColor = loadFile('background');
   res.json(dataColor);
});

router.post('/api/background', (req, res) => {
   saveFile('background', JSON.stringify(req.body));
   res.send({message: 'Successfully!!!'});
});

module.exports = router;
