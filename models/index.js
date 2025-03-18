"use strict";

import fs from "fs";
import path from "path";
import { Sequelize } from "sequelize";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import configData from "../config/config.mjs"; // Direct import (ESM)

dotenv.config(); // Load environment variables

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = configData[env];

const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

// Async function to load models dynamically
const initializeModels = async () => {
  const files = fs.readdirSync(__dirname).filter((file) => {
    return (
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-3) === ".js" &&
      file.indexOf(".test.js") === -1
    );
  });

  await Promise.all(
    files.map(async (file) => {
      const modelPath = path.join(__dirname, file);
      const { default: model } = await import(`file://${modelPath}`);
      const initializedModel = model(sequelize, Sequelize.DataTypes);
      db[initializedModel.name] = initializedModel;
    })
  );

  // Call associate methods if they exist
  Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });

  db.sequelize = sequelize;
  db.Sequelize = Sequelize;
};

await initializeModels(); // Ensure models are loaded before exporting

export default db;
