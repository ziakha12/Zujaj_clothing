import { NextRequest, NextResponse } from "next/server";
import Product from "@/model/productModel";

interface Params{
    id : string
}


export async function DELETE({params} : {params : Params}) {
    try {
        const {id} =  params;

        if(!id) return NextResponse.json({error : "id is required"},{status : 401})

       const res =  await Product.findByIdAndDelete(id)

       if(!res) return NextResponse.json({error : "something went wrong while deleting product"},{status : 500});

         return NextResponse.json({
            message : "product deleted successfully",
            success : true
        },{status : 200})


        

    } catch (error : any) {
                return NextResponse.json({error : error.message},{status : 500})
    }
}