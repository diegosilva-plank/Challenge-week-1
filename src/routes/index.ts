import { Router } from 'express'
import * as genericController from '../controllers/genericController'

const router = Router()

const createRoute = (entityName: string) => {
    const entityController = new genericController.Controller(entityName)

    router.route(`/${entityName}`)
        .get(entityController.get)
        .post(entityController.create)

    router.route(`/${entityName}/:id`)
        .put(entityController.update)
        .delete(entityController.delete)
} 

for (const entityName of ['rocket', 'launch', 'crewman', 'crew']) {
    createRoute(entityName)
}

router.use(router)

export { router }