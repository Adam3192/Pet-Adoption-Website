"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteJob = exports.createJob = exports.addJobPage = exports.getJobById = exports.getAllJobs = exports.defaultJobs = void 0;
const Job_1 = require("../models/Job");
const mysql_1 = __importDefault(require("mysql"));
const db = mysql_1.default.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'sqluser',
    password: 'password',
    database: `mydb`
});
db.connect((err) => {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + db.threadId);
});
const defaultJobs = (req, res, next) => {
    res.redirect('/jobs');
};
exports.defaultJobs = defaultJobs;
const getAllJobs = async (req, res, next) => {
    let jobList = await Job_1.Job.findAll();
    res.render('all-jobs', { jobList });
};
exports.getAllJobs = getAllJobs;
const getJobById = async (req, res, next) => {
    let jobId = req.params.jobId;
    let foundJob = await Job_1.Job.findByPk(jobId);
    if (foundJob) {
        res.render('job-detail', { foundJob });
    }
    else {
        res.status(404).render('error', { message: 'job not found' });
    }
};
exports.getJobById = getJobById;
const addJobPage = (req, res, next) => {
    res.render('addJob');
};
exports.addJobPage = addJobPage;
const createJob = async (req, res, next) => {
    let newJob = req.body;
    await Job_1.Job.create(newJob);
    res.redirect('/jobs');
};
exports.createJob = createJob;
const deleteJob = async (req, res, next) => {
    let jobId = req.params.jobId;
    let deletedJob = await Job_1.Job.destroy({
        where: { jobId: jobId }
    });
    if (deletedJob) {
        res.redirect('/jobs');
    }
    else {
        res.status(404).render('error', { message: 'Cannot find job' });
    }
};
exports.deleteJob = deleteJob;
