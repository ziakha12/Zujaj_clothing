import mongoose, { Schema, Document } from "mongoose";

interface variantType extends Document {
    color: string,
    colorImage: string,
    colorName: string,

}
interface categoryType extends Document {
    name: string,
}

interface productType extends Document {
    productImage: string,
    title: string,
    discription: string,
    variants?: [variantType],
    sizes?: [{ name: string }],
    price: number,
    sku: number,
    category: categoryType,
}




export const variantSchema = new Schema<variantType>({
    color: String,
    colorImage: String
})
export const categorySchema = new Schema<categoryType>({
    name: String
})



const productSchema = new Schema<productType>({
    productImage: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    discription: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    variants: [variantSchema],
    sizes: [{ name: String }],
    sku: {
        type: Number
    },
    category: categorySchema
    
}, { timestamps: true })


const Product = mongoose.models.products || mongoose.model<productType>("Product", productSchema)

export default Product;