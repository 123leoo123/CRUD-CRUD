import { generateId, IProduct } from "./interfaces";
import express, { json } from "express";

const port = 3000;

const app = express();

app.use(json());

app.listen(3000, () => {
    console.log(`API started with sucessfully at port ${port}`)
})

export class ProductList {

   private listProduct: IProduct[] = [];

    id = generateId();

    createProduct = (data: {name: string, price: number}) => {
        const newProduct: IProduct = {
            id: this.id(),
            name: data.name,
            price: data.price,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        const createProductList = this.listProduct.push(newProduct)
        return newProduct
    }

    getProducts = () => {
        return this.listProduct
    }

    getOneProduct = (id: number) => {
        const findProduct = this.listProduct.find(product => product.id === id)
        return findProduct;
    }

    updateProduct = (id: number, data: {name?: string, price?: number}) => {
        const productUpdate = this.listProduct.find(product => product.id === id)
     
        if(!productUpdate) return 'Product not found'
        if (data.name !== undefined) productUpdate.name = data.name
        if (data.price !== undefined) productUpdate.price = data.price
        productUpdate.updatedAt = new Date()

        return productUpdate
    }

    deleteProduct = (id: number) => {
        const index = this.listProduct.findIndex(product => product.id === id)
        if(index === -1) return
        this.listProduct.splice(index, 1)
        return {message: "Product successfully deleted."}
    }
}

export const productList = new ProductList();