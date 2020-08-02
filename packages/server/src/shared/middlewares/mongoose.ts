import mongoose from 'mongoose'
import { env } from '@traveler/environment'

export default class Connection {
  public connection: any

  constructor() {}

  public getUrlConnection() {
    let auth = ''

    if (env.MONGO_AUTH === 1) {
      auth = `${env.MONGO_USERNAME}:${env.MONGO_PASSWORD}@`
    }
    return `mongodb://${auth}${env.MONGO_HOST}:${env.MONGO_PORT}/${env.MONGO_DBNAME}?authSource=${env.MONGO_AUTH_SRC}`
  }

  public getDisconnect(event: any) {
    mongoose.connection.close(() => event())
  }

  public getDatabse(dbName: any) {
    return this.connection.useDb(dbName)
  }

  public disconnect() {
    return mongoose.disconnect()
  }

  public async connect() {
    try {
      const urlConnect = this.getUrlConnection()
      process.on('SIGINT', () => this.getDisconnect(() => process.exit(0)))
      const mongoConnection = await mongoose.connect(urlConnect, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      this.connection = mongoConnection.connection
    } catch (error) {
      console.log('Error', error)
      // this.logger.error("Connecting database MongoDB error: ", error);
    }
  }
}
