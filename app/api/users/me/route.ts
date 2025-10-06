import User from "@/model/userModel";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {
    try {
        const id = await getDataFromToken(req);

        if (!id) NextResponse.json({ error: "id is required" }, { status: 401 });

        const user = await User.findById(id).select('-password');

        if (!user) NextResponse.json({ error: 'unAuthorize' }, { status: 401 });

        return NextResponse.json({
            message: "user fetched successfully",
            success: true,
            user: user
        }, { status: 200 });

    } catch (error: any) {

        console.log('error ::', error.message)
        return NextResponse.json({ error: error.message }, { status: 500 })
        
    }
}