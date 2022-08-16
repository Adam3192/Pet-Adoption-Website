"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sequelize_1 = require("sequelize");
const Job_1 = require("./Job");
const dbName = 'myOrmDb';
const username = 'sqluser';
const password = 'password';
const sequelize = new sequelize_1.Sequelize(dbName, username, password, {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});
(0, Job_1.JobFactory)(sequelize);
exports.db = sequelize;
