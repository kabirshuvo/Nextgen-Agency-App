"use client";

import { useUser } from "../../hooks/useUser";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function UserProfile() {
  const { user, login, logout } = useUser();
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user) {
      login({
        id: session.user.id as string,
        email: session.user.email as string,
        name: session.user.name as string,
      });
    }
  }, [session, login]);

  if (!user.isAuthenticated) {
    return <div>Not logged in</div>;
  }

  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <p>Email: {user.email}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
