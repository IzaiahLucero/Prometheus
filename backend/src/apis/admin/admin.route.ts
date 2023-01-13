import { getAdminByAdminIdController, putAdminController } from './admin.controller'
import { Router } from 'express'
import { check, checkSchema } from 'express-validator'
import { asyncValidatorController } from '../../utils/controllers/async-validator.controller'
import { isLoggedIn } from '../../utils/controllers/is-logged-in.controller'
import { adminValidator } from './admin.validator'

export const adminRoute: Router = Router()
adminRoute.route('/')
    .post(putAdminController)

adminRoute.route('/:adminId')
    .get(
        asyncValidatorController([
            check('adminId', 'please provide a valid adminId').isUUID()
        ])
        , getAdminByAdminIdController
    )
    .put(isLoggedIn('admin'), asyncValidatorController(checkSchema(adminValidator)), putAdminController)
