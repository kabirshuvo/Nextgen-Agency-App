"use client";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
// import { fetchUserData } from "../../../store/slices/userSlice";

const UserProfile: React.FC = () => {
  const dispatch = useAppDispatch();
  // const { data: user, status, error } = useAppSelector((state) => state.user);

  // useEffect(() => {
  //   dispatch(fetchUserData("someUserId"));
  // }, [dispatch]);

  if (status === "loading") return <div>Loading...</div>;
  // if (status === "failed") return <div>Error: {error}</div>;
  // if (!user) return null;

  return (
    <div>
      user Profile testing
      {/* <h1>{user.name}</h1>
      <p>{user.email}</p> */}
    </div>
  );
};

export default UserProfile;
