import Joi from 'joi';
import { Application } from '../Model';

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

    async getJobApplication(req, res, next) {

        let applications;

        try {

            applications = await Application.find({ job_id: req.params.id });

        } catch (error) {
            return next(error);
        }

        res.json(applications);
    },

    async getCompanyApplication(req, res, next) {

        let applications;

        try {

            applications = await Application.find({ company_id: req.params.id });

        } catch (error) {
            return next(error);
        }

        res.json(applications);
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