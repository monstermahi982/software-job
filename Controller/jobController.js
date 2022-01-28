import Joi from 'joi';
import { Job } from '../Model';

const jobController = {

    async getAllJobs(req, res, next) {

        let jobs;

        try {

            jobs = await Job.find().select('-updatedAt -__v').sort({ _id: -1 });

        } catch (error) {
            return next(error);
        }

        res.json(jobs)
    },

    async getOneJob(req, res, next) {

        let job;

        try {

            job = await Job.findById({ "_id": req.params.id }).select('-updatedAt -__v');

        } catch (error) {
            return next(error);
        }

        res.json(job)
    },

    async addJob(req, res, next) {

        const jobSchema = Joi.object({
            name: Joi.string().max(30).min(3).required(),
            company_id: Joi.string().required(),
            experience: Joi.number().required(),
            work_type: Joi.string().required(),
            salary: Joi.number().required()
        })

        const { error } = await jobSchema.validate(req.body);

        if (error) {
            return next(error);
        }

        const { name, company_id, experience, work_type, salary } = req.body;

        const new_job = new Job({
            name, company_id, experience, work_type, salary
        });

        let result;

        try {

            result = await new_job.save();

        } catch (error) {
            return next(error);
        }

        res.json(result);
    },

    async deleteJob(req, res, next) {

        let job;

        try {

            job = await Job.findOneAndDelete({ "_id": req.params.id });

        } catch (error) {
            return next(error);
        }

        res.json(job);
    },

    async jobSearch(req, res, next) {
        let jobs;

        try {

            if (Object.keys(req.query).length === 0) {
                jobs = await Job.find();
            } else {
                jobs = await Job.find({ name: { $regex: req.query.name } });
            }

        } catch (error) {
            return next(error);
        }

        res.json(jobs);
    }
}

export default jobController;