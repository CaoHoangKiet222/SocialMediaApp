const express = require('express');
const logger = require('./middleware/logger');
const {engine} = require('express-handlebars');
const path = require('path');
const file = path.join(__dirname, '/public');
const {acceptResquest, declineRequest, primary, request} = require('./database/nodejs/acceptRequest');
const {feeds, postMiddle} = require('./database/nodejs/postMiddle');

const url = require('url');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
// const bodyParser = require('body-parser');

// Setup Middleware
// app.use(logger);

// Body Parser Middleware
// app.use(express.json({limit: '50mb'})); // Allow us to handle raw json
// app.use(express.urlencoded({limit: '50mb', extended: false})) // Allow us to handle form submissions to handle URL encoded data


// Template engine
// app.engine('handlebars', engine({defaultLayout: __dirname + '/views/layouts/main'}));
// app.set('view engine', 'handlebars');

// Set static folder
// app.use(express.static(file))

// Set views
// app.set('views', path.join(__dirname, '/views'));


// Home router
app.get('/', (req, res) => {
   // const obj = {
   //    title: 'Responsive Social Media Website',
   //    h2: 'SocialMedia',
   //    name: 'Cao Kiet',
   //    primary,
   //    request,
   //    feeds
   // };

   // res.render('body', obj);

   const pathname = url.parse(req.url).pathname;
   io.emit('page-request', {
      pathname: pathname,
      method: 'get',
      params: req.query
   })
})

app.post('/', (req, res) => {
   const pathname = url.parse(req.url).pathname;
   io.emit('page-request', {
      pathname: pathname,
      method: 'get',
      params: req.query
   })
})

// app.post('/api/requests/accept', (req, res) => {
//    acceptResquest('accept', req.body);
//    res.send({message: 'Successfully!!!'});
// })

// app.post('/api/requests/decline', (req, res) => {
//    declineRequest('decline', req.body);
//    res.send({message: 'Successfully!!!'});
// })

// app.post('/api/post', (req, res) => {
//    postMiddle('post', req.body);
//    res.send({message: 'Successfully!!!'});
// })

io.on('connection', socket => {
   console.log('A user connected');
   socket.on('page-request', res => {

   })
})

const PORT = process.env.YOUR_PORT || process.env.PORT || 3000;
server.listen(PORT, () => {
   console.log(`Server is listening on port ${PORT}`);
})
