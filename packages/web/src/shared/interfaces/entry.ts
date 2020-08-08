export interface EntryI {
  _id: string
  title: string
  comments?: string
  rating?: number
  image?: string
  latitude: number
  longitude: number
  visitDate: Date
  createdAt?: Date
  updatedAt?: Date
}
