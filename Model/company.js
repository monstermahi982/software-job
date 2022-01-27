import mongoose from 'mongoose';
const { Schema } = mongoose;

const companySchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: Number, required: true },
    location: { type: String, required: true },
    domain: { type: String, required: true },
    size: { type: String, required: true },
    password: { type: String, required: true },
    is_active: { type: Boolean, required: false, default: true }
}, { timestamps: { currentTime: () => Math.floor(Date.now() / 1000) } })


export default mongoose.model('Company', companySchema, 'companies');