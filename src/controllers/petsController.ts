import { RequestHandler } from "express";
import { Job } from "../models/Job";
import mysql, { FieldInfo, MysqlError } from 'mysql';

const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'sqluser',
    password: 'password',
    database: `petDB`
});

db.connect((err: MysqlError) => {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + db.threadId);
});

export const defaultPets: RequestHandler = (req, res, next) => {
    res.redirect('/pets');
}

export const getAllJobs: RequestHandler = async (req, res, next) => {
    let jobList: Job[] = await Job.findAll();
    res.render('all-jobs', { jobList });
}

export const getJobById: RequestHandler = async (req, res, next) => {
    let jobId = req.params.jobId;
    let foundJob: Job | null = await Job.findByPk(jobId);

    if (foundJob) {
        res.render('job-detail', { foundJob });
    }
    else {
        res.status(404).render('error', { message: 'job not found' });
    }
}

export const addJobPage: RequestHandler = (req, res, next) => {
    res.render('addJob');
}

export const createJob: RequestHandler = async (req, res, next) => {
    let newJob: Job = req.body;
    await Job.create(newJob);
    res.redirect('/jobs');
}

export const deleteJob: RequestHandler = async (req, res, next) => {
    let jobId = req.params.jobId;

    let deletedJob = await Job.destroy({
        where: { jobId: jobId }
    });

    if (deletedJob) {
        res.redirect('/jobs')
    }
    else {
        res.status(404).render('error', { message: 'Cannot find job' });
    }
}
