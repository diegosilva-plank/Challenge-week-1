import { Router } from 'express'

const router = Router()

router.use(require('./rocket'))

export { router }