"use client";

import { useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

export default function MakeAdmin() {
  const { data: session, status } = useSession();
  const [email, setEmail] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/users/make-admin", { email });
      setResponseMessage(response.data.message);
    } catch (error) {
      setResponseMessage("Failed to make user admin");
    }
  };

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (!session?.user?.isAdmin) {
    return <p>You do not have access to view this page.</p>;
  }

  return (
    <div>
      <h1>Make User Admin</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="User Email"
          required
        />
        <button type="submit">Make Admin</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
}
