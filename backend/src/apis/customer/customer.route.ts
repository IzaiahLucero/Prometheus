import {getAllCustomers, postCustomer} from "./customer.controller";
import {Router} from "express";
import {isLoggedIn} from "../../utils/controllers/is-logged-in.controller";
import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import {check, checkSchema} from "express-validator";
import {customerValidator} from "./customer.validator";



const router = Router()

router.route('/')
    .get()
    .post(isLoggedIn('admin'),asyncValidatorController(checkSchema((customerValidator))) ,postCustomer)

export default router