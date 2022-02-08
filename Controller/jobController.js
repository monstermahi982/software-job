import Joi from 'joi';
import { Job, Company } from '../Model';

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
        let jobs = [];

        try {

            if (Object.keys(req.query).length === 0) {
                const data = await Job.find();

                for (let i = 0; i < data.length; i++) {

                    const { company_id } = data[i];
                    // console.log(company_id);

                    const comp = await Company.findById({ _id: company_id });
                    // console.log(data[0], "----------sd");
                    const Onejob = {
                        jobTitile: data[i].name,
                        salary: data[i].salary,
                        experience: data[i].experience,
                        work_type: data[i].work_type,
                        job_id: data[i]._id,
                        company_id: data[i].company_id,
                        is_active: data[i].is_active,
                        company_name: comp.name,
                        company_location: comp.location,
                        company_domain: comp.domain
                    }

                    // console.log(Onejob);
                    jobs.push(Onejob);
                }

            } else {
                const data = await Job.find().sort({ _id: -1 }).skip(req.query.page * 5 - 5).limit(5);

                for (let i = 0; i < data.length; i++) {

                    const { company_id } = data[i];
                    // console.log(company_id);

                    const comp = await Company.findById({ _id: company_id });
                    // console.log(data[0], "----------sd");
                    const Onejob = {
                        jobTitile: data[i].name,
                        salary: data[i].salary,
                        experience: data[i].experience,
                        work_type: data[i].work_type,
                        job_id: data[i]._id,
                        company_id: data[i].company_id,
                        is_active: data[i].is_active,
                        company_name: comp.name,
                        company_location: comp.location,
                        company_domain: comp.domain
                    }

                    // console.log(Onejob);
                    jobs.push(Onejob);
                }

            }

        } catch (error) {
            return next(error);
        }

        res.json(jobs);
    },

    async blockJob(req, res, next) {
        let job;
        try {

            job = await Job.findByIdAndUpdate({ _id: req.params.id }, {
                is_active: false
            }, { new: true })

        } catch (error) {
            return next(error);
        }
        res.json(job);
    },

    async unblockJob(req, res, next) {
        let job;
        try {

            job = await Job.findByIdAndUpdate({ _id: req.params.id }, {
                is_active: true
            }, { new: true })

        } catch (error) {
            return next(error);
        }
        res.json(job);
    },

    async jobArrayLength(req, res, next) {
        let length = 0;

        try {

            length = await Job.find().count();

        } catch (error) {
            return next(error);
        }

        res.json(length);
    }
}

export default jobController;