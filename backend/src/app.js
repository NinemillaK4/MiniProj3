
const port = process.env.PORT || 8080;
const host = process.env.HOST || '0.0.0.0';
const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const morgan = require('morgan');
const connectDB = require('./database/connection');
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');

//log request
app.use(morgan('tiny'));

// configure the app to use bodyParser()
hbs.registerPartials(path.join(__dirname, 'views/partials'), (err) => {});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname , "views", "/public")));
app.use('/assets', express.static('assets'));
app.use('/views', express.static('views'));
app.use(express.static('public'));

app.use(bodyParser.urlencoded({
        extended: true
    }));
app.use(bodyParser.json());
app.use(cookieParser());
app.set('trust proxy', 1);

 require('./init/db.js')(app, () => {
 require('./init/middleware')(app);
  require('./init/router')(app);
  app.listen(port, host, (error) => {
    if (error) throw error;
    console.log('Your app is listening on ' + port);
  });
});

 app.get("/home",(req, res) => {

    res.render("home.hbs", {dados:"show me"});
});

//import routers

app.use('/', require('./routes/router'));

// mongodb connection
connectDB();






 


