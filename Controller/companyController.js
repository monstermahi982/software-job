import Joi from 'joi';
import { Company } from '../Model';
import { Jwt } from '../Service'

const companyController = {

    async getAllCompanies(req, res, next) {

        let companies;

        try {

            if (Object.keys(req.query).length !== 0) {
                console.log("dsad");
                companies = await Company.find().skip(req.query.page * 5 - 5).limit(5);
            } else {
                console.log("dsade");
                companies = await Company.find().sort({ createdAt: -1 });
            }

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

        let token;

        try {

            const result = await new_company.save();
            token = Jwt.sign({ name: result.name, id: result._id });

        } catch (error) {
            return next(error);
        }

        res.json(token);
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

    async loginCompany(req, res, next) {

        const companySchema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().required(),
        })

        const { error } = await companySchema.validate(req.body);

        if (error) {
            return next(error);
        }

        const { email, password } = req.body;

        let token;

        try {

            const company = await Company.findOne({ email });

            if (company) {
                if (company.password === password) {
                    token = Jwt.sign({ name: company.name, id: company._id });
                } else {
                    return res.json("password not matched");
                }
            } else {
                return res.json("account not found");
            }

            if (!company.is_active) {
                return res.json("blocked");
            }

        } catch (error) {
            return next(error);
        }

        res.json(token);

    },

    async blockCompany(req, res, next) {

        let company;

        try {

            company = await Company.findByIdAndUpdate({ _id: req.params.id }, {
                is_active: false
            }, { new: true });

        } catch (error) {
            return next(error);
        }

        res.json(company);

    },

    async unblockCompany(req, res, next) {

        let company;

        try {

            company = await Company.findByIdAndUpdate({ _id: req.params.id }, {
                is_active: true
            }, { new: true });

        } catch (error) {
            return next(error);
        }

        res.json(company);

    },
}

export default companyController;