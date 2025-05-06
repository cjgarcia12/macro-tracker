import { Router } from 'express'
import * as controller from '../controllers/user'
import { validateBody } from '../middleware/validateBody'
import { createUserValidation } from '../validation/user'

const router = Router()

router.post(
    '/user',
    validateBody(createUserValidation),
    controller.createUser
)

router.get(
    '/user',
    controller.getUsers
)

export default router