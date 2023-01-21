import { Router } from "express";
const router = Router()

import * as productsCtrl from '../controllers/products.controller'

router.post('/', productsCtrl.createProducts)

router.get('/', productsCtrl.getProducts)

router.get('/:productId', productsCtrl.getProductsById)

router.put('/:productId', productsCtrl.updateProductsById)

router.delete('/:productId', productsCtrl.deleteProductsById)

export default router;
