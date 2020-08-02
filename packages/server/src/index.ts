import { env } from '@traveler/environment'
import { Server as HttpServer } from 'http'
import { Server } from './server'

const { NODE_PORT } = env

new Server().initialize().then((http: HttpServer) => {
  http.listen(NODE_PORT)
  http.on('error', (error: any) => {
    if (error.syscall !== 'listen') {
      throw error
    }
    switch (error.code) {
      case 'EACCES':
        console.error('Port requires elevated privileges')
        process.exit(1)
        break
      case 'EADDRINUSE':
        console.log('Port is already in use')
        process.exit(1)
        break
      default:
        throw error
    }
  })
  http.on('listening', () => {
    console.log(
      `Server is running in process ${process.pid} listening on PORT ${NODE_PORT}\n`,
    )
  })
})
