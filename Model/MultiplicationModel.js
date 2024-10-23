const sequelize = require('../DBConfig/Config');
const { DataTypes } = require("sequelize");

const MultiplicationModel = sequelize.define('multiplicationModel', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    number1: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    number2: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    result: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    
   
}, {
    timestamps: false, // Disable Sequelize's automatic timestamp columns
});

module.exports = MultiplicationModel;
