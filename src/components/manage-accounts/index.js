"use client";

import { GlobalContext } from "@/context";
import { useSession } from "next-auth/react";
import { useContext, useEffect } from "react";

export default function ManageAccounts() {
  const { account, setAccount } = useContext(GlobalContext);
  const { data: session } = useSession();
  async function getAllAcount() {
    const res = await fetch(
      `api/account/get-account?id=${session?.user?.uid}`,
      {
        method: "GET",
      }
    );
    const data = await res.json();

    if (data && data.data && data.data.length) {
      setAccount(data.data);
    }
  }

  useEffect(() => {
    getAllAcount();
  }, []);
  return (
    <div className="relative min-h-screen flex justify-center flex-col items-center">
      <div className="flex justify-center flex-col items-center">
        <h1 className="text-white font-bold text-[54px] my-[36px]">
          {" "}
          Who is Watching
        </h1>
      </div>
    </div>
  );
}
