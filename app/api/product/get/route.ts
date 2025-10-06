import { NextResponse, NextRequest } from "next/server";
import Product from "@/model/productModel";

export async function GET(req:NextRequest) {
    try {
        const products = await Product.find()

        if(!products) return NextResponse.json({error : "something went wrong while fetching error"},{status : 500})

        return NextResponse.json({
            message : "products fetched successfully",
            products,
            success : true
        },{status : 200})


    } catch (error : any) {
        return NextResponse.json({error : error.message},{status : 500})
    }
}