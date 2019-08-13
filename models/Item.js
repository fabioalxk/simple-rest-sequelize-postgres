const Sequelize = require("sequelize");
const db = require("../config/database");

const Item = db.define("item", {
  name: {
    type: Sequelize.STRING
  }
});

module.exports = Item;
