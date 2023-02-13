import { Sequelize } from "sequelize";
import { PetFactory } from "./Pet";
require('dotenv').config()

const dbName: any = process.env.DB_NAME;
const username: any = process.env.USER_NAME;
const password = process.env.PASSWORD;
const port: any = process.env.PORT;
const host = process.env.HOST;

const sequelize = new Sequelize(dbName, username, password, {
    host: host,
    port: port,
    dialect: 'mysql'
});

PetFactory(sequelize);

export const db = sequelize;
