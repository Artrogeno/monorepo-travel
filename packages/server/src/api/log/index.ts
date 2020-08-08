import { Router } from 'express'

import * as controller from './controller'

const routes = Router()

routes.get('/', controller.index)
routes.post('/', controller.store)
routes.get('/:id', controller.show)
routes.put('/:id', controller.update)
routes.delete('/:id', controller.destroy)

export default routes
