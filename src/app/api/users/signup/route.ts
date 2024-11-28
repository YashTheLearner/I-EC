import connect from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { sendMail } from '@/utils/mailer';

connect();

export async function POST (req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { username, email, password,mobileNo } = reqBody;
    console.log(reqBody);
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      
      username,
      mobileNo,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    console.log(savedUser);
    const timestamp = Date.now();
    await sendMail({ email, emailType: "VERIFY", userId: savedUser._id, timestamp });

    return NextResponse.json({ 
        message: "User created successfully",
        success: true,
        data: savedUser
    });

  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
