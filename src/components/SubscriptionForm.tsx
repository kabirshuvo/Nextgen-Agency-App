"use client";
// src/components/SubscriptionForm.tsx
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { subscribeUser } from "@/components/redux/slices/subscriberSlice";

const SubscriptionForm = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  //when user click on subscribe, if s/he is already logged in user can subscribe, if not logged in user would be redirrect to log in page and after login user will be re dirrect to subscription page again.
  //n

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        dispatch(subscribeUser(email));
        // Show success message
      }
    } catch (error) {
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
      />
      <Button type="submit">Subscribe</Button>
    </form>
  );
};

export default SubscriptionForm;
