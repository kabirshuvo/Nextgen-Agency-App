"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button
        className="bg-purple-700 px-3 py-1 m-4 rounded"
        onClick={() => signIn()}
      >
        Sign in
      </button>
    </>
  );
}
