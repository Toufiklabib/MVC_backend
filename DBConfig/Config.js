/**
 * @file Config.js
 * @description Configures and establishes the Sequelize connection to the MySQL database.
 */

const { Sequelize } = require('sequelize');

/**
 * Sequelize instance for connecting to the MySQL database.
 * @summary Establishes a connection to the MySQL database with the provided configuration.
 * @returns {Sequelize} - The Sequelize instance to interact with the database.
 */
const sequelize = new Sequelize('calculatemultiplication', 'root', '', {
    host: 'localhost',
    dialect: 'mysql', // The type of database you're using (MySQL in this case)
    logging: console.log, // Logs all queries to the console
});

module.exports = sequelize;
