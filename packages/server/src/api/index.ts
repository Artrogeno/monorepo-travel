import { Router, Request, Response, NextFunction } from 'express'

import log from './log'

const routes = Router()

routes.use('/logs', log)

export default routes
