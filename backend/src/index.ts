import express, {Request, Response } from 'express'
import cors from 'cors'
import "dotenv/config"
import mongoose from 'mongoose'
import userRoutes from './routes/users'
import authRoutes from './routes/auth'
import limiter from './lib/limitApiRequest'
import path from 'path'
import {v2 as cloudinary} from 'cloudinary';
import myHotelRoutes from './routes/my-hotels'
import hotelRoute from './routes/hotels'
import bookingRoute from './routes/my-bookings'

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME as string, 
  api_key: process.env.CLOUDINARY_API_KEY as string,  
  api_secret: process.env.CLOUDINARY_API_SECRET as string
});

mongoose.connect(process.env.MONGODB_URI as string).then(() => {
  console.log("Connected to MongoDB")
})
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
app.use('/api/my-hotels',myHotelRoutes)
app.use('/api/hotels',hotelRoute)
app.use('/api/my-bookings',bookingRoute)

app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../../frontend/dist/index.html'))
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})

