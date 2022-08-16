import { Sequelize } from "sequelize";
import { PetFactory } from "./Pet";

const dbName = 'petDB';
const username = 'sqluser';
const password = 'password';

const sequelize = new Sequelize(dbName, username, password, {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});

PetFactory(sequelize);

export const db = sequelize;