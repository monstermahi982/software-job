import express from 'express';
import mongoose from 'mongoose'
import cors from 'cors'

import { userRoutes } from './Router/';
import { DB_URL, PORT } from './Config'

const app = express();

// mongodb connection
mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
    console.log('DB is connected');
})

app.use(cors({ origin: [] }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/user', userRoutes)


app.listen(PORT, () => console.log(`app listen on ${PORT} port`));