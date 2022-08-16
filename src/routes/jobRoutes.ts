import { Router } from 'express';
import { getAllJobs, getJobById, addJobPage, createJob, deleteJob } from '../controllers/jobsController';

const router = Router();

// GET /jobs - renders a list of all jobs
router.get('/', getAllJobs);

// GET /jobs/new - renders an add job page
router.get('/new', addJobPage);

// POST /jobs/new - creates new job
router.post('/new', createJob);

// POST /jobs/delete/:jobId - deletes a job
router.post('/delete/:jobId', deleteJob);

// GET /jobs/:jobId - render the job requested
router.get('/:jobId', getJobById);

export default router;
