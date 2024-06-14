"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function AdminMessages() {
  const { data: session, status } = useSession();
  const [messages, setMessages] = useState([]);

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

  const handleMarkAsRead = (id: string) => {
    // Implement mark as read functionality here
  };

  const handleDelete = (id: string) => {
    // Implement delete functionality here
  };

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (!session?.user?.isAdmin) {
    return <p>You do not have access to view this page.</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Contact Messages</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Sl:</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Message</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {messages.map((message: any, index: number) => (
            <TableRow key={message._id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{message.name}</TableCell>
              <TableCell>{message.message}</TableCell>
              <TableCell>
                <Button
                  onClick={() => handleMarkAsRead(message._id)}
                  className="mr-2"
                >
                  Mark as Read
                </Button>
                <Button
                  onClick={() => handleDelete(message._id)}
                  variant="destructive"
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
