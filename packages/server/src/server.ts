import express from 'express'
import http, { Server as HttpServer } from 'http'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'
import bodyParser from 'body-parser'

import { headerAccess } from './shared/middlewares/headerAccess'
import { routerHandler, errorHandler } from './shared/middlewares/handler'
import Connection from './shared/middlewares/mongoose'
import router from './routes'

export class Server extends Connection {
  public express: express.Application
  public server: HttpServer

  constructor() {
    super()
    this.express = express()
    this.server = http.createServer(this.express)
  }

  async initialize(): Promise<HttpServer> {
    const init = await this.connect().then(() => {
      this.middlewares()
      this.routes()
      return this.server
    })
    return init
  }

  private middlewares(): void {
    this.express.use(morgan('common'))
    this.express.use(helmet())
    this.express.use(bodyParser.urlencoded({ extended: true }))
    this.express.use(bodyParser.json({ limit: '5mb' }))
    this.express.use(headerAccess)
    this.express.use(cors())
  }

  private routes(): void {
    this.express.use(router)
    this.express.use('*', routerHandler, errorHandler)
  }
}
