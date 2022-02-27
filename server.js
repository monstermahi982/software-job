import express from 'express';
import mongoose from 'mongoose'
import cors from 'cors'

import { userRoutes, companyRoutes, jobRoutes, applicationRoutes } from './Router/';
import { DB_URL, PORT, DB_URL_ATLAS } from './Config'
import { errorHandler } from './Middleware';

const app = express();

// mongodb connection
mongoose.connect(DB_URL_ATLAS, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
    console.log('DB is connected');
})

app.use(cors({ origin: ['http://localhost:4200', 'https://software-jobs.herokuapp.com/'] }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/user', userRoutes)
app.use('/api/company', companyRoutes)
app.use('/api/jobs', jobRoutes)
app.use('/api/application', applicationRoutes)

app.use(errorHandler)

app.use(express.static('static'))

app.listen(PORT, () => console.log(`app listen on ${PORT} port`));