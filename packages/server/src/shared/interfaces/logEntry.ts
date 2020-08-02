import { Document } from 'mongoose'

export interface LogEntryI extends Document {
  title: string
  description?: string
  comments?: string
  rating?: number
  image?: string
  latitude: number
  longitude: number
}
