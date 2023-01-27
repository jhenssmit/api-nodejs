import { Router } from "express";
const router = Router()

import * as productsCtrl from '../controllers/products.controller'
import { authJwt } from "../middlewares";

/** 
* @swagger 
* components:
*   schemas:
*       Product:
*           type: object
*           properties: 
*               name: 
*                   type: string
*                   description: the product name
*               category:
*                   type: string
*                   description: the product category 
*               price:
*                   type: float
*                   description: the product price
*               imgURL:
*                   type: string
*                   description: the product imageURL
*           required:
*               - name
*               - category
*               - price
*               - imgURL
*           example:
*               name: laptop toshiba
*               category: laptops
*               price : 99.99
*               imgURL: https://d598hd2wips7r.cloudfront.net/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/6/4/64X74LT-1_T1666712668.png
*                   
*/

/**
 *  @swagger
 * /api/products:
 *  post:
 *      summary: create a new product
 *      tags: [Product]
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Product'
 *      responses:
 *        200:    
 *          description: new product created!
 */
router.post('/', productsCtrl.createProduct)
/**
 *  @swagger
 * /api/products:
 *  get:
 *      summary: return all product
 *      tags: [Product]
 *      responses:
 *        200:    
 *          description: all products
 *          content: 
 *              application/json:
 *                  schema: 
 *                      type: array
 *                      items:
 *                          $ref: '#/components/schemas/Product'
 */
router.get('/', productsCtrl.getProducts)
/**
 *  @swagger
 * /api/products/{id}:
 *  get:
 *      summary: return a product
 *      tags: [Product]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: the product id
 *      responses:
 *        200:    
 *          description: all products
 *          content: 
 *              application/json:
 *                  schema: 
 *                      type: object
 *                      $ref: '#/components/schemas/Product'
 *        404:
 *          description: product not found
 */
router.get('/:productId', productsCtrl.getProductById)
/**
 *  @swagger
 * /api/products/{id}:
 *  put:
 *      summary: update a product
 *      tags: [Product]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: the product id
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Product'
 *      responses:
 *        200:    
 *          description: user updated
 *        404:
 *          description: product not found
 */
router.put('/:productId', productsCtrl.updateProductById)
/**
 *  @swagger
 * /api/products/{id}:
 *  delete:
 *      summary: delete a product
 *      tags: [Product]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: the product id
 *      responses:
 *        200:    
 *          description: product deleted
 *        404:
 *          description: product not found
 */
router.delete('/:productId', productsCtrl.deleteProductsById)

export default router;
