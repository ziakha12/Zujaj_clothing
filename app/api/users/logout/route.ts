import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = NextResponse.json({ message: 'user logout', success: true })
        response.cookies.set('token', "", { httpOnly: true, expires: new Date(0) })
        return response;
    } catch (error: any) {
        console.log(error.message)
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}