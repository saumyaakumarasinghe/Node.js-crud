const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "practice-node", 
  "root", 
  "saumya@123", 
  {
      dialect: "mysql",
      host: "localhost"
  }
);

module.exports = sequelize;
