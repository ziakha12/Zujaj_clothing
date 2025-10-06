import { NextRequest, NextResponse } from "next/server";
import Product from "@/model/productModel";

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData()

        const title = formData.get('title') as String
        const discription = formData.get('discription') as String
        const price = formData.get('price') as Number | null
        const sku = formData.get('sku') as String
        const category = formData.get('category') as String
        const Image = formData.get('Image') as File

        if(!title || !discription || !price || !sku || !category || !Image){
            return NextResponse.json({
                error : "all feilds are required",
                success : false
            },{status : 401})
        }

        const product = await Product.create({
            title,
            discription,
            productImage : Image,
            sku,
            price,
            category
        })

        if(!product){
                return NextResponse.json({
                error : "something went wromng while creating product",
                success : false
            },{status : 500})
        }

            return NextResponse.json({
                message : "product has been added",
                success : false
            },{status : 401})


    } catch (error:any) {
        console.log("error ::",error.message)
        return NextResponse.json({error : error.message},{status : 500})
    }
}