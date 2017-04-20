'use strict';

const express = require('express'),
    app = express(),
    methodOverride = require('method-override'),
    bodyParser = require('body-parser'),
    morgan = require("morgan"),
    usersRouter = require("./routes/usersRoutes"),
    ordersRouter = require("./routes/ordersRoutes"),
    menu_itemsRoutes = require("./routes/menu_itemsRoutes"),
    authRouter = require("./routes/auth"),
    cookieParser = require('cookie-parser'),
    session = require('cookie-session');

const PORT = process.env.PORT || 3000;

require('ejs');
require("locus");
app.set('view engine', 'ejs');
app.use(morgan('tiny'));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(methodOverride("_method"));
app.use(cookieParser());
app.use(session({
    name: 'session',
    secret: 'userId',
    maxAge: 24 * 60 * 60 * 1000
}));

// app.use(function(req, res, next) {
//     console.log('User = ', req.session.userId);
//     next();
// })


app.get('/', function(req, res) {
    res.render("statics/home");
});

// Routes
app.use("/users", usersRouter);
app.use("/orders", ordersRouter);
app.use("/menu_items", menu_itemsRoutes);
app.use('/', authRouter);




app.listen(PORT, () => {
    console.log('listening on', PORT);
});


module.exports = app;
