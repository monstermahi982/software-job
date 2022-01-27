import mongoose from 'mongoose';
const { Schema } = mongoose;

const applicationSchema = new Schema({
    user_id: { type: String, required: true },
    company_id: { type: String, required: true },
    job_id: { type: String, required: true },
    status: { type: Boolean, required: false, default: false }
}, { timestamps: { currentTime: () => Math.floor(Date.now() / 1000) } })


export default mongoose.model('Application', applicationSchema, 'applications');