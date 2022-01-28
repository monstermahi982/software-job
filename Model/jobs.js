import mongoose from 'mongoose';
const { Schema } = mongoose;

const jobSchema = new Schema({
    name: { type: String, required: true },
    company_id: { type: String, required: true },
    experience: { type: Number, required: true },
    work_type: { type: String, required: true },
    salary: { type: Number, required: true },
    is_active: { type: Boolean, required: false, default: true }
}, { timestamps: { currentTime: () => Math.floor(Date.now() / 1000) } })


export default mongoose.model('Job', jobSchema, 'jobs');