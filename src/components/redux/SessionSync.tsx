"use client";

import { useSession } from "next-auth/react";
import { useUser } from "../../hooks/useUser";
import { useEffect } from "react";

export function SessionSync() {
  const { data: session } = useSession();
  const { login, logout } = useUser();

  useEffect(() => {
    if (session?.user) {
      login({
        id: session.user.id as string,
        email: session.user.email as string,
        name: session.user.name as string,
      });
    } else {
      logout();
    }
  }, [session, login, logout]);

  return null;
}
