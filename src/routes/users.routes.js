import { Router } from "express";
const router = Router()

import * as userCtrl from '../controllers/user.controller'
import { authJwt, verifySignup} from "../middlewares";

router.post('/', [
    authJwt.verfyToken,
    authJwt.isAdmin,
    verifySignup.checkRolesExisted
],userCtrl.createUser);

export default router;
