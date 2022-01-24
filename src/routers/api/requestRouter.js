const router = require('express').Router();
const {acceptResquest, declineRequest, primary, request} = require('./../../database/nodejs/acceptRequest');

router.post('/api/requests/accept', (req, res) => {
   acceptResquest(req.body, primary);
   declineRequest(req.body, request);
   res.send({message: 'Successfully!!!'});
});

router.post('/api/requests/decline', (req, res) => {
   declineRequest(req.body, request);
   res.send({message: 'Successfully!!!'});
});

module.exports = router;
