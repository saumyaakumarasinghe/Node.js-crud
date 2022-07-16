const { STRING } = require("sequelize");
const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const User = sequelize.define("user", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false
    },
    password: {
        type: STRING,
        required: true
    },
    name: {
        type: STRING,
        validate: {
          notEmpty: true,
        },
    }
});

module.exports = User;