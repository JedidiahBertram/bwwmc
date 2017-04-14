'use strict'

const express = require('express'),
      app = express(),
      methodOverride = require('method-override'),
      bodyParser = require('body-parser'),
      morgan = require("morgan"),
      usersRouter = require("./routes/usersRoutes"),
      ordersRouter = require("./routes/ordersRoutes"),
      menu_itemsRoutes = require("./routes/menu_itemsRoutes");
const PORT = process.env.PORT || 3000;

require('ejs');
require("locus");
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));
// app.use(morgan); <-- Says Morgan depreciated. WTF Mate?
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(methodOverride("_method"));


app.get('/', function(req,res) {
  res.render("statics/home")
})

// Routes
app.use("/users", usersRouter);
app.use("/orders", ordersRouter)
app.use("/menu_items", menu_itemsRoutes)


app.listen(PORT, function(){
  console.log('listening on', PORT);
})


module.exports = app;
