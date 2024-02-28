import express, {Request, Response } from 'express'
import cors from 'cors'
import "dotenv/config"
import mongoose from 'mongoose'
import userRoutes from './routes/users'
import authRoutes from './routes/auth'
import limiter from './lib/limitApiRequest'
import path from 'path'

mongoose.connect(process.env.MONGODB_URI as string)
import cookieParser from 'cookie-parser'

const app = express()
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors({
    origin: process.env.FRONTED_URL,
    credentials: true
}))
// app.use(limiter)
app.use(express.static(path.join(__dirname, '../../frontend/dist')))

app.use('/api/users', userRoutes)
app.use('/api/auth', authRoutes)


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})

