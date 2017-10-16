'use strict';

const express = require('express'),
    app = express(),
    methodOverride = require('method-override'),
    bodyParser = require('body-parser'),
    morgan = require("morgan"),
    ordersRouter = require("./routes/ordersRoutes"),
    menu_itemsRoutes = require("./routes/menu_itemsRoutes"),
    ejs = require('ejs');


const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(morgan('tiny'));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(methodOverride("_method"));


app.get('/', function(req, res) {
    res.render("statics/home", {
        loggedIn: undefined
    });
});

// Routers
app.use("/orders", ordersRouter);
app.use("/menu_items", menu_itemsRoutes);




app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});


module.exports = app;
