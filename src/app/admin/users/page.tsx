// app/admin/users/page.tsx (Updated)
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

interface User {
  _id: string;
  username: string;
  email: string;
  isAdmin: boolean;
}

export default function AdminUsers() {
  const { data: session, status } = useSession();
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      if (session?.user?.isAdmin) {
        try {
          const response = await axios.get("/api/users");
          setUsers(response.data.users);
          console.log(response.data.users);
        } catch (error) {
          console.error("Error fetching users:", error);
        }
      }
    };

    fetchUsers();
  }, [session]);

  const handleMakeAdmin = async (id: string) => {
    try {
      const response = await axios.post("/api/users/toggle-admin", {
        userId: id,
      });
      setUsers((prevUsers) =>
        prevUsers.map((user) => (user._id === id ? response.data.user : user))
      );
    } catch (error) {
      console.error("Error toggling admin status:", error);
    }
  };

  const handleDeleteUser = async (id: string) => {
    try {
      await axios.post("/api/users/delete", { userId: id });
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (!session?.user?.isAdmin) {
    return <p>You do not have access to view this page.</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Sl:</TableHead>
            <TableHead>Username</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Is Admin</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user: any, index: number) => (
            <TableRow key={user._id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.isAdmin ? "Yes" : "No"}</TableCell>
              <TableCell>
                <Button
                  onClick={() => handleMakeAdmin(user._id)}
                  className="mr-2"
                >
                  {user.isAdmin ? "Revoke Admin" : "Make Admin"}
                </Button>
                <Button
                  onClick={() => handleDeleteUser(user._id)}
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
