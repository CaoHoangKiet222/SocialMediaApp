const router = require('express').Router();
const {feeds, postMiddle, commentPopup, commentExistPopup, deleteExistPopup} = require('./../../database/nodejs/postMiddle');

router.post('/api/post', (req, res) => {
   postMiddle(req.body, feeds);
   res.send({message: 'Successfully!!!'});
});

router.post('/api/post/comment', (req, res) => {
   commentPopup(req.body, feeds);
   res.send({message: 'Successfully!!!'});
});

router.post('/api/post/comment-exist', (req, res) => {
   commentExistPopup(req.body, feeds);
   res.send({message: 'Successfully!!!'});
});

router.post('/api/clear/comment', (req, res) => {
   deleteExistPopup(req.body, feeds);
   res.send({message: 'Successfully!!!'});
})

module.exports = router;
