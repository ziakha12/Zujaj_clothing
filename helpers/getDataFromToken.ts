import Jwt, { JwtPayload } from 'jsonwebtoken'
import { NextRequest, NextResponse } from 'next/server'


export async function getDateFromToken(req : NextRequest) {
    try {
        const token : string = req.cookies.get('token')?.value!;

        if(!token) return NextResponse.json({error : "Unauthorize request token in valid"},{status : 409})
        
        const verifyToken : any = Jwt.verify(token, process.env.JWT_SCERET!)

        return verifyToken.id
    } catch (error :  any) {
        console.log(error.message)
        return NextResponse.json({error : error.message},{status : 500})
    }
}