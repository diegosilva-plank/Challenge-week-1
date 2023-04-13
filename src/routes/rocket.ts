import { Router } from 'express'
import * as rocketController from '../controllers/rocketController'

const router = Router()

router.route('/rocket')
    .get(rocketController.getRockets)
    .post(rocketController.createRocket)

router.route('/rocket/:id')
    .put(rocketController.updateRocket)
    .delete(rocketController.deleteRocket)

module.exports = router