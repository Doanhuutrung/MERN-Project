import connectToDB from "@/database";
import Account from "@/models/Account";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    await connectToDB();
    const { name, pin, uid } = await req.json();
    const isAccountAlreadyExists = await Account.find({ uid, name });

    if (isAccountAlreadyExists) {
      return NextResponse.json({
        success: false,
        message: "Please try with a different name",
      });
    }
    const allAcount = await Account.find({});
    if (allAcount && allAcount.length === 4) {
      return NextResponse.json({
        success: false,
        message: "The maxium account is 4",
      });
    }
    const hashPin = await hash(pin, 12);
    const newlyCreatedAccount = await Account.create({
      name,
      pin: hashPin,
      uid,
    });

    if (newlyCreatedAccount) {
      return NextResponse.json({
        success: true,
        message: "Account created successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Something went wrong !!!",
      });
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      success: false,
      message: "something went wrong",
    });
  }
}
