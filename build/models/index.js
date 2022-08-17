"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sequelize_1 = require("sequelize");
const Pet_1 = require("./Pet");
const dbName = 'petDB';
const username = 'sqluser';
const password = 'password';
const sequelize = new sequelize_1.Sequelize(dbName, username, password, {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});
(0, Pet_1.PetFactory)(sequelize);
exports.db = sequelize;
