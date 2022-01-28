import Joi from 'joi';
import { Application, Company, Job, User } from '../Model';

const applicationController = {

    // get application according to user id
    async getUserApplication(req, res, next) {

        let applications = [];

        try {

            const appl = await Application.find({ user_id: req.params.id });


            for (let i = 0; i < appl.length; i++) {

                const { _id, user_id, company_id, job_id, status, createdAt } = appl[i];

                const job = await Job.findById({ _id: job_id }).select('-updatedAt -__v -createdAt');
                const company = await Company.findById({ _id: company_id }).select('-updatedAt -__v -createdAt -size -email -password -is_active -_id');
                const one_app = {
                    _id,
                    user_id,
                    status,
                    company,
                    job,
                    createdAt
                }

                applications.push(one_app);
            }

        } catch (error) {
            return next(error);
        }

        res.json(applications);
    },

    // get application according to job id
    async getJobApplication(req, res, next) {

        let applications = {};

        try {

            const appl = await Application.find({ job_id: req.params.id });

            const { job_id, status, createdAt } = appl[0];
            const job = await Job.findById({ _id: job_id }).select('-updatedAt -__v -createdAt');

            const user_array = [];

            for (let i = 0; i < appl.length; i++) {

                const { user_id } = appl[i];

                const user = await User.findById({ _id: user_id }).select('-updatedAt -__v -createdAt -password -is_active');

                user_array.push(user);
            }

            applications = {
                job, user_array, status, createdAt
            }

        } catch (error) {
            return next(error);
        }

        res.json(applications);
    },

    // get jobs according to company id 
    async getCompanyApplication(req, res, next) {

        let job_posts = [];

        try {

            job_posts = await Job.find({ company_id: req.params.id }).select('-updatedAt -__v -company_id');

        } catch (error) {
            return next(error);
        }

        res.json(job_posts);
    },

    async addApplication(req, res, next) {

        const applicationSchema = Joi.object({
            user_id: Joi.string().required(),
            company_id: Joi.string().required(),
            job_id: Joi.string().required()
        })

        const { error } = await applicationSchema.validate(req.body);

        if (error) {
            return next(error);
        }

        const { user_id, company_id, job_id } = req.body;

        const new_application = new Application({
            user_id, company_id, job_id
        });

        let result;

        try {

            result = await new_application.save();

        } catch (error) {
            return next(error);
        }

        res.json(result);
    },

    async deleteApplication(req, res, next) {

        let company;

        try {

            company = await Company.findOneAndDelete({ _id: req.params.id });

        } catch (error) {
            return next(error);
        }

        res.json(company);
    },
}

export default applicationController;