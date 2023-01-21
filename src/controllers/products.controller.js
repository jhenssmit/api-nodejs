import Product from "../models/Product"


export const createProducts = async (req, res) => {

    const {name, category, price, imgURL} = req.body

    const newProduct = new Product({name, category, price, imgURL});

    const productSaved = await newProduct.save();

    res.status(201).json(productSaved)
}

export const getProducts = async (req, res) => {
    const products = await Product.find();
    res.json(products)
}

export const getProductsById = (req, res) => {

}

export const updateProductsById  = (req, res) => {

}

export const deleteProductsById = (req, res) => {

}