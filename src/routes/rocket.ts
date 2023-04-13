import { Router } from 'express'

const router = Router()

router.route('/rocket')
    .get()
    .post()
    .put()
    .delete()

module.exports = router