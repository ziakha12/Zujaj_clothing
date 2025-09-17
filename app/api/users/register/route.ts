import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/dbConfig/dbConfig";
import User from "@/model/userModel";
import bcrypt from 'bcrypt'

dbConnect()

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData()

        if (!formData) return NextResponse.json({ error: 'form data not found', success: false }, { status: 401 })

        const username = formData.get('username') as String
        const email = formData.get('email') as String
        const password = formData.get('password') as String

        if (!username || !email || !password) return NextResponse.json({ error: 'all feilds are required', success: false }, { status: 401 })

        const existedUser = await User.findOne({
            $or: [{ email }, { username }]
        })

        if (existedUser) return NextResponse.json({ error: 'user with same email or username is already exist', success: false }, { status: 409})

        const hashedPassword = bcrypt.hash(password as string, 10)

        if (!hashedPassword) return NextResponse.json({ error: 'password encryption is failed', success: false }, { status: 401 })

        const user = await User.create({
            username,
            email,
            password: hashedPassword
        })

        if (!user) NextResponse.json({ error: 'something went wrong while creating user', success: false }, { status: 409 })

        const savedUser = await User.findById(user._id).select('-password')

        return NextResponse.json({ message: 'user created successfully', user: savedUser, success: false }, { status: 401 })


    } catch (error: any) {
        console.log('error ::', error.message)
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}