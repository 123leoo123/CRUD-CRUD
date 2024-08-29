export interface IProduct {
    id: number;
    name: string;
    price: number;
    createdAt: Date;
    updatedAt: Date;
} 

export const generateId = () => {
    let id = 1;
    return () => id++;
}

export interface IproductServices {
    createProduct(data: {name: string, price: number}): IProduct;
    getProducts(): IProduct[];
    getOneProduct(id: Number): IProduct | undefined;
    updateProduct(id: number, data: {name?: string, price?: number}): Partial<IProduct> | undefined | string;
    deleteProduct(id: number): void;
}
