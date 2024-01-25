"use client";

import ManageAccounts from "@/components/manage-accounts";
import UnauthPage from "@/components/unauth-page";
import { GlobalContext } from "@/context";
import { useSession } from "next-auth/react";
import { useContext } from "react";

export default function Browser() {
  const { loggedInAccount } = useContext(GlobalContext);
  const { data: session } = useSession();

  console.log(session, "session");

  if (session === null) return <UnauthPage />;
  if (loggedInAccount === null) return <ManageAccounts />;

  return <div> Browser </div>;
}
