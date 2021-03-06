const express = require('express');
const logger = require('./middleware/logger');
const {engine} = require('express-handlebars');
const path = require('path');
const file = path.join(__dirname, '/public');

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


app.use(require('./routers/homeRouter'));

app.use(require('./routers/api/backgroundRouter'));

app.use(require('./routers/api/colorRouter'));

app.use(require('./routers/api/fontsizeRouter'));

app.use(require('./routers/api/requestRouter'));

app.use(require('./routers/api/postRouter'));

const PORT = process.env.YOUR_PORT || process.env.PORT || 3000;
server.listen(PORT, () => {
   console.log(`Server is listening on port ${PORT}`);
})
