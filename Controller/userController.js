import Joi from 'joi';
import { User } from '../Model';
import { Jwt } from '../Service'

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

        let token;

        try {

            const result = await new_user.save();
            token = Jwt.sign({ name: result.name, id: result._id });

        } catch (error) {
            return next(error);
        }

        res.json(token);
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

    async userLogin(req, res, next) {

        const userSchema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().required()
        })

        const { error } = await userSchema.validate(req.body);

        if (error) {
            return next(error);
        }

        const { email, password } = req.body;

        let token;

        try {

            const user = await User.findOne({ email });

            if (user) {
                if (password === user.password) {
                    token = Jwt.sign({ name: user.name, id: user._id })
                } else {
                    return res.json({ data: "password not matched" });
                }
            } else {
                return res.json({ data: "account not found" });
            }

        } catch (error) {
            return next(error);
        }

        res.json(token);

    }
}

export default userController;