"use client";

import { useAppSelector, useAppDispatch } from "../hooks/hooks";
import { increment, decrement } from "../store/slices/exampleSlice";
import { useSession } from "next-auth/react";

export default function Counter() {
  const count = useAppSelector((state) => state.example.value);
  const dispatch = useAppDispatch();
  const { data: session } = useSession();

  if (!session) return <div>Not signed in</div>;

  return (
    <div>
      <p>Signed in as {session.user?.email}</p>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}
