const Sequelize = require("sequelize");                        // Import sequelize

const sequelize = require("../util/database");                 // Import database file

const Product = sequelize.define("product", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    brand: {
        type: Sequelize.STRING,
        allowNull: false
    },
    mfgDate: {
        type: Sequelize.DATE,
        allowNull: false
    },
    exDate: {
        type: Sequelize.DATE,
        allowNull: false
    }
});

module.exports = Product;