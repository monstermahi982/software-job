import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: Number, required: true },
    password: { type: String, required: true },
    is_active: { type: Boolean, required: false, default: true }
}, { timestamps: { currentTime: () => Math.floor(Date.now() / 1000) } })


export default mongoose.model('User', userSchema, 'users');