import dotenv from 'dotenv'
import { ConfigI } from './interfaces/config'

dotenv.config({ path: '../../.env' })

const env: ConfigI = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  NODE_PORT: Number(process.env.NODE_PORT) || 4000,
  NODE_HOST: process.env.NODE_HOST || 'localhost',
  JWT_SECRET: process.env.JWT_SECRET || '',
  MASTER_KEY: process.env.MASTER_KEY || '',
  MONGO_USERNAME: process.env.MONGO_USERNAME || 'traveler',
  MONGO_PASSWORD: process.env.MONGO_PASSWORD || 'artrogeno',
  MONGO_HOST: process.env.MONGO_HOST || 'localhost',
  MONGO_PORT: Number(process.env.MONGO_PORT) || 27018,
  MONGO_DBNAME: process.env.MONGO_DBNAME || 'traveler',
  MONGO_AUTH_SRC: process.env.MONGO_AUTH_SRC || 'traveler',
  MONGO_AUTH: Number(process.env.MONGO_AUTH) || 0,
}

export { env }
