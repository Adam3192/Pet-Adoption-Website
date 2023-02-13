"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sequelize_1 = require("sequelize");
const Pet_1 = require("./Pet");
require('dotenv').config();
const dbName = process.env.DB_NAME;
const username = process.env.USER_NAME;
const password = process.env.PASSWORD;
const port = process.env.PORT;
const host = process.env.HOST;
const sequelize = new sequelize_1.Sequelize(dbName, username, password, {
    host: host,
    port: port,
    dialect: 'mysql'
});
(0, Pet_1.PetFactory)(sequelize);
exports.db = sequelize;
