/**
 * @file Synchronization.js
 * @description Synchronizes Sequelize models with the MySQL database schema.
 */

const mul = require("../Model/MultiplicationModel");

/**
 * Synchronizes the PrimeModel with the database.
 * @summary Ensures that the PrimeModel schema is in sync with the database.
 * @returns {Promise<void>} - A promise that resolves when the model is synchronized.
 */
const modelSynchronization = async () => {
    await mul.sync(); // Syncs the mul with the database, creating table if not exists
};

module.exports = modelSynchronization;
