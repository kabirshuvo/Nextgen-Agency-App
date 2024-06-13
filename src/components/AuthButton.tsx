"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function AuthButton() {
  const { data: session } = useSession();
  const router = useRouter();

  const handleAuth = async () => {
    if (session) {
      await signOut();
      router.push("/");
    } else {
      router.push("/sign-up");
    }
  };

  return (
    <Button onClick={handleAuth}>{session ? "Sign Out" : "Sign Up"}</Button>
  );
}
