import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/users";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await dbConnect();
   const body = await req.json();
  console.log(body);
  return NextResponse.json({
    success: true,
    message: "User created successfully",
  });
}
