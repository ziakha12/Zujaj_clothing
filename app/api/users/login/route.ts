import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/dbConfig/dbConfig";
import User from "@/model/userModel";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData()

        if (!formData) return NextResponse.json({ error: 'form data not found', success: false }, { status: 401 })

        const email = formData.get('email') as String
        const password = formData.get('password') as String

        if (!email || !password) return NextResponse.json({ error: 'all feilds are required', success: false }, { status: 401 })

        const existedUser = await User.findOne({
            email
        })

        if (!existedUser) return NextResponse.json({ error: 'user not found', success: false }, { status: 404 })

        const checkPassword = await bcrypt.compare(password as string, existedUser.password)

        if (!checkPassword) return NextResponse.json({ error: 'password is not correct', success: false }, { status: 409 })

        const userData = {
            id: existedUser._id,
            email: existedUser.email,
            username: existedUser.username
        }

        const token = jwt.sign( userData, process.env.JWT_SCERET!, {expiresIn : '1d'} )

           const response =  NextResponse.json({
            message : 'user logged in successfully',
            success : true
        })

        response.cookies.set('token', token, { httpOnly : true})

        return response


    } catch (error: any) {
        console.log('error ::', error.message)
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}