import connectToDB from "@/database";
import Account from "@/models/Account";
import { compare } from "bcryptjs";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    await connectToDB();
    const { pin, accountId, uid } = await req.json();
    const getCurrentAccount = await Account.findOne({ _id: accountId, uid });
    if (!getCurrentAccount) {
      return NextResponse.json({
        success: false,
        message: "Account not found",
      });
    }
    const checkPin = await compare(pin, getCurrentAccount.pin);
    if (checkPin) {
      return NextResponse.json({
        success: true,
        message: "Welcome to netflix",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Incorrect PIN ! please try agains",
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
