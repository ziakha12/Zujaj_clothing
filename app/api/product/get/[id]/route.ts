import { NextResponse, NextRequest } from "next/server";
import Product from "@/model/productModel";

export async function GET({params} : {params : {id : string}} ) {
    try {
        const {id} =  params ;

        if(!id) return NextResponse.json({error : "id is required"},{status : 401})
        
        const product = await Product.findById(id);

        if(!product)  return NextResponse.json({error : "something went wrong while finding product"},{status : 500});

        return NextResponse.json({
            message : "product fetched successfully",
            product,
            success : true
        },{status : 200})


    } catch (error : any) {
        return NextResponse.json({error : error.message},{status : 500})
    }
}