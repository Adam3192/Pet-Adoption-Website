"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobFactory = exports.Job = void 0;
const sequelize_1 = require("sequelize");
class Job extends sequelize_1.Model {
}
exports.Job = Job;
function JobFactory(sequelize) {
    Job.init({
        jobId: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        companyName: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        jobTitle: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        yearsWorked: {
            type: sequelize_1.DataTypes.INTEGER,
        },
        createdAt: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        updatedAt: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
    }, {
        freezeTableName: true,
        tableName: 'jobs',
        sequelize,
    });
}
exports.JobFactory = JobFactory;
