import { Router } from 'express'

import * as controller from './controller'

const routes = Router()

routes.get('/', controller.index)
routes.post('/', controller.store)

export default routes
