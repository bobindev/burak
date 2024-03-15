import {ObjectId} from "mongoose"
import { ProductCollection, ProductStatus } from "../enums/product.enum";

export interface Product {
    _id: ObjectId;
    productStatus: ProductStatus;
    productCollection: ProductCollection;
    productName: string;
    productPrice: number;
    productLeftCount: number;
    productSize: string;
    productVolume: number;
    productDesc?: string;
    productImages: string[];
    productViews: number;
}

export interface ProductInput {
    productStatus?: ProductStatus;
    productCollection: ProductCollection;
    productName: string;
    productPrice: number;
    productLeftCount: number;
    productSize?: string;
    productVolume?: number;
    productDesc?: string;
    productImages?: string[];
    productViews?: number;
}