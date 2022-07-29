const router = require('express').Router();
const {loadFile, saveFile} = require('./../../database/nodejs/load_save');

router.get('/api/fontsize', (_req, res) => {
   const dataTheme = loadFile('fontsize');
   res.json(dataTheme);
})

router.post('/api/fontsize', (req, res) => {
   saveFile('fontsize', JSON.stringify(req.body));
   res.send({message: 'Successfully!!!'});
});

module.exports = router;
