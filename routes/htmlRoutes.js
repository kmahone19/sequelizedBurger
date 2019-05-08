// require model functions
var db = require("../models");

// exports for use in server.js
module.exports = (app) => {
  // route to pull index.handlebars and add all data from database to be used
  app.get("/", function(req, res){

    db.Burger.findAll()
      .then(dbBurgerData => {
        res.render("index", {burgerData: dbBurgerData})
      })
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });
}