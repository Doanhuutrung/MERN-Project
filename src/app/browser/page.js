"use client";

import UnauthPage from "@/components/unauth-page";
import { useSession } from "next-auth/react";

export default function Browser() {
  const { data: session } = useSession();
  console.log(session, "session");
  if (session === null) return <UnauthPage />;
  return <div> Browser</div>;
}
