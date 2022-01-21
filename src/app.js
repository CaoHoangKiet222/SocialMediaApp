const express = require('express');
const logger = require('./middleware/logger');
const {engine} = require('express-handlebars');
const path = require('path');
const file = path.join(__dirname, '/public');
const {acceptResquest, declineRequest, primary, request, randomChangeEl} = require('./database/nodejs/acceptRequest');
const {feeds, postMiddle, stories} = require('./database/nodejs/postMiddle');
const {loadFile, saveFile} = require('./database/nodejs/load_save');

const app = express();
const server = require('http').createServer(app);

// Setup Middleware
app.use(logger);

// Body Parser Middleware
app.use(express.json({limit: '50mb'})); // Allow us to handle raw json
app.use(express.urlencoded({limit: '50mb', extended: false})) // Allow us to handle form submissions to handle URL encoded data


// Template engine
app.engine('handlebars', engine({defaultLayout: __dirname + '/views/layouts/main'}));
app.set('view engine', 'handlebars');

// Set static folder
app.use(express.static(file))

// Set views
app.set('views', path.join(__dirname, '/views'));


// Home router
app.get('/', (_req, res) => {
   const obj = {
      title: 'Responsive Social Media Website',
      h2: 'SocialMedia',
      name: 'Cao Kiet',
      feeds: randomChangeEl(feeds),
      stories: randomChangeEl(stories),
      primary: randomChangeEl(primary),
      request: randomChangeEl(request),
   };
   res.render('body', obj);
})

app.get('/api/background', (_req, res) => {
   const dataColor = loadFile('background');
   res.json(dataColor);
});

app.post('/api/background', (req, res) => {
   saveFile('background', JSON.stringify(req.body));
   res.send({message: 'Successfully!!!'});
});

app.get('/api/color', (_req, res) => {
   const dataColor = loadFile('color');
   res.json(dataColor);
});

app.get('/api/fontsize', (_req, res) => {
   const dataTheme = loadFile('fontsize');
   res.json(dataTheme);
})

app.post('/api/color', (req, res) => {
   saveFile('color', JSON.stringify(req.body));
   res.send({message: 'Successfully!!!'});
});

app.post('/api/fontsize', (req, res) => {
   saveFile('fontsize', JSON.stringify(req.body));
   res.send({message: 'Successfully!!!'});
})

app.post('/api/requests/accept', (req, res) => {
   acceptResquest('accept', req.body);
   res.send({message: 'Successfully!!!'});
})

app.post('/api/requests/decline', (req, res) => {
   declineRequest('decline', req.body);
   res.send({message: 'Successfully!!!'});
})

app.post('/api/post', (req, res) => {
   postMiddle('post', req.body);
   res.send({message: 'Successfully!!!'});
})
const PORT = process.env.YOUR_PORT || process.env.PORT || 3000;
server.listen(PORT, () => {
   console.log(`Server is listening on port ${PORT}`);
})
