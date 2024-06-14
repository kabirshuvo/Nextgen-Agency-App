"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

// Define the type for a message
interface Message {
  _id: string;
  name: string;
  email: string;
  message: string;
}

export default function AdminMessages() {
  const { data: session, status } = useSession();
  const [messages, setMessages] = useState<Message[]>([]); // Use the Message type for the state

  useEffect(() => {
    const fetchMessages = async () => {
      if (session?.user?.isAdmin) {
        try {
          const response = await axios.get("/api/contact");
          setMessages(response.data.messages);
        } catch (error) {
          console.error("Error fetching messages:", error);
        }
      }
    };

    fetchMessages();
  }, [session]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (!session?.user?.isAdmin) {
    return <p>You do not have access to view this page.</p>;
  }

  return (
    <div>
      <h1>Contact Messages</h1>
      <ul>
        {messages.map((message) => (
          <li key={message._id}>
            <p>
              <strong>Name:</strong> {message.name}
            </p>
            <p>
              <strong>Email:</strong> {message.email}
            </p>
            <p>
              <strong>Message:</strong> {message.message}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
