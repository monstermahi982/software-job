import Joi from 'joi';
import { Company } from '../Model';

const companyController = {

    async getAllCompanies(req, res, next) {

        let companies;

        try {

            companies = await Company.find();

        } catch (error) {
            return next(error);
        }

        res.json(companies);
    },

    async getOneCompany(req, res, next) {

        let company;

        try {

            company = await Company.findById({ _id: req.params.id });

        } catch (error) {
            return next(error);
        }

        res.json(company);
    },

    async addCompany(req, res, next) {

        const companySchema = Joi.object({
            name: Joi.string().max(30).min(3).required(),
            email: Joi.string().email().required(),
            phone: Joi.number().required(),
            location: Joi.string().required(),
            domain: Joi.string().required(),
            size: Joi.number().required(),
            password: Joi.string().required(),
        })

        const { error } = await companySchema.validate(req.body);

        if (error) {
            return next(error);
        }

        const { name, email, phone, location, domain, size, password } = req.body;

        const new_company = new Company({
            name, email, phone, location, domain, size, password
        });

        let result;

        try {

            result = await new_company.save();

        } catch (error) {
            return next(error);
        }

        res.json(result);
    },

    async updateCompany(req, res, next) {

        const companySchema = Joi.object({
            name: Joi.string().max(30).min(3).required(),
            email: Joi.string().email().required(),
            phone: Joi.number().required(),
            location: Joi.string().required(),
            domain: Joi.string().required(),
            size: Joi.number().required(),
            password: Joi.string().required(),
        })

        const { error } = await companySchema.validate(req.body);

        if (error) {
            return next(error);
        }

        const { name, email, phone, location, domain, size, password } = req.body;

        let result;

        try {

            result = await Company.findByIdAndUpdate({ _id: req.params.id }, {
                name, email, phone, location, domain, size, password
            }, { new: true });

        } catch (error) {
            return next(error);
        }

        res.json(result);
    },

    async deleteCompany(req, res, next) {

        let company;

        try {

            company = await Company.findOneAndDelete({ _id: req.params.id });

        } catch (error) {
            return next(error);
        }

        res.json(company);
    },
}

export default companyController;