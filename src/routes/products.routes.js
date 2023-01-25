import { Router } from "express";
const router = Router()

import * as productsCtrl from '../controllers/products.controller'
import { authJwt } from "../middlewares";

router.post('/', [authJwt.verfyToken, authJwt.isModerador], productsCtrl.createProduct)

router.get('/', productsCtrl.getProducts)

router.get('/:productId', productsCtrl.getProductById)

router.put('/:productId', [authJwt.verfyToken, authJwt.isAdmin], productsCtrl.updateProductById)

router.delete('/:productId', [authJwt.verfyToken,authJwt.isAdmin], productsCtrl.deleteProductsById)

export default router;
