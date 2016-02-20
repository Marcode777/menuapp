var orm = require("../config/orm.js"); // remember, requiring something is analogous to importing it


var burger = {
  addBurger: function(burgerName, cb) {//burgerName might be burger_name
    orm.addBurger(burgerName, function(res) {
      cb(res);
    });
  },
  devourBurger: function(burgerID, cb) {
    orm.devourBurger(burgerID, function(res) {
      cb(res);
    });
  },
  showBurgers: function(cb) {
    orm.showBurgers(function(res) {
      cb(res);
    });
  },
  deleteBurger: function(burgerID, cb) {
    orm.deleteBurger(burgerID, function(res) {
      cb(res);
    });
  }
}


module.exports = burger;