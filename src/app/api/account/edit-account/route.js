import connectToDB from "@/database";
import Account from "@/models/Account";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function UPDATE(req) {
  try {
    await connectToDB();

    const { uid, name, pin } = await req.json();

    const existingAccount = await Account.findById(uid);

    if (!existingAccount) {
      return NextResponse.json({
        success: false,
        message: "Account not found",
      });
    } 

    existingAccount.name = name;
    existingAccount.pin = await hash(pin, 4);

    const updatedAccount = await existingAccount.save();

    if (updatedAccount) {
      return NextResponse.json({
        success: true,
        message: "Account updated successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Something went wrong",
      });
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      success: false,
      message: "Something went wrong",
    });
  }
}
