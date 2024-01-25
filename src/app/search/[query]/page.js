"use client";

import UnauthPage from "@/components/unauth-page";
import { GlobalContext } from "@/context";
import { useSession } from "next-auth/react";
import { useContext } from "react";

export default function Search() {
  const { data: session } = useSession();
  const { loggedInAccount } = useContext(GlobalContext);
  console.log(session);
  if (session === null) return <UnauthPage />;
  return <div> Search </div>;
}
