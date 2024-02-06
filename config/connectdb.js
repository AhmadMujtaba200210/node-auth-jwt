import mongoose from 'mongoose';
import 'dotenv/config'
console.log(`${process.env.DATABASE_URL}`)
const connectDB = async () => {
  try {
    const DB_OPTIONS = {
      dbName: "test"
    }
    await mongoose.connect(process.env.DATABASE_URL, DB_OPTIONS)
    console.log('Connected Successfully...')
  } catch (error) {
    console.log(error)
  }
}

export default connectDB