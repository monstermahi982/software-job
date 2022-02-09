import Joi from 'joi';
import { User, Application } from '../Model';
import { Jwt } from '../Service'

const userController = {

    async getUsers(req, res, next) {

        let users;

        try {

            if (Object.keys(req.query).length !== 0) {
                users = await User.find().select('-updatedAt -__v').skip(req.query.page * 5 - 5).limit(5);
            } else {
                users = await User.find().select('-updatedAt -__v').sort({ createdAt: -1 });
            }

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

            user = await User.findOneAndDelete({ _id: req.params.id });
            await Application.deleteMany({ user_id: req.params.id });

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

            if (!user) {
                return res.json("email not found");
            }

            if (user) {
                if (password === user.password) {
                    token = Jwt.sign({ name: user.name, id: user._id })
                } else {
                    return res.json("password not matched");
                }
            }

            if (!user.is_active) {
                return res.json("blocked");
            }

        } catch (error) {
            return next(error);
        }

        res.json(token);

    },

    async blockUser(req, res, next) {
        let user;
        try {

            user = await User.findByIdAndUpdate({ _id: req.params.id }, {
                is_active: false
            }, { new: true })

        } catch (error) {
            return next(error);
        }
        res.json(user);
    },

    async unblockUser(req, res, next) {
        let user;
        try {

            user = await User.findByIdAndUpdate({ _id: req.params.id }, {
                is_active: true
            }, { new: true })

        } catch (error) {
            return next(error);
        }
        res.json(user);
    },
}

export default userController;