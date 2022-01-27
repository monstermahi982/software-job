import Joi from 'joi';
import { User } from '../Model';

const userController = {

    async getUsers(req, res, next) {

        let users;

        try {

            users = await User.find().select('-updatedAt -__v').sort({ _id: -1 });

        } catch (error) {
            return next(error);
        }

        res.json(users)
    },

    async getOneUser(req, res, next) {

        let user;

        try {

            user = await User.findById({ "_id": req.params.id }).select('-updatedAt -__v');

        } catch (error) {
            return next(error);
        }

        res.json(user)
    },

    async addUser(req, res, next) {

        const userSchema = Joi.object({
            name: Joi.string().max(30).min(3).required(),
            email: Joi.string().email().required(),
            phone: Joi.number().required(),
            password: Joi.string().required()
        })

        const { error } = await userSchema.validate(req.body);

        if (error) {
            return next(error);
        }

        const { name, email, phone, password } = req.body;

        const new_user = new User({
            name, email, phone, password
        });

        let result;

        try {

            result = await new_user.save();

        } catch (error) {
            return next(error);
        }

        res.json(result);
    },

    async updateUser(req, res, next) {

        const userSchema = Joi.object({
            name: Joi.string().max(30).min(3).required(),
            email: Joi.string().email().required(),
            phone: Joi.number().required(),
            password: Joi.string().required()
        })

        const { error } = await userSchema.validate(req.body);

        if (error) {
            return next(error);
        }

        const { name, email, phone, password } = req.body;

        let user;

        try {

            user = await User.findByIdAndUpdate({ "_id": req.params.id }, {
                name, email, phone, password
            }, { new: true });

        } catch (error) {
            return next(error);
        }

        res.json(user)
    },

    async deleteUser(req, res, next) {

        let user;

        try {

            user = await User.findOneAndDelete({ "_id": req.params.id });

        } catch (error) {
            return next(error);
        }

        res.json(user);
    },
}

export default userController;