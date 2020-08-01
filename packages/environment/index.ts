import dotenv from 'dotenv'
import { ConfigI } from './interfaces/config'

dotenv.config({ path: '../../.env' })

console.log(process.env.NODE_PORT)

const env: ConfigI = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  NODE_PORT: Number(process.env.NODE_PORT) || 4000,
  JWT_SECRET: process.env.JWT_SECRET || '',
  MASTER_KEY: process.env.MASTER_KEY || '',
}

export { env }
