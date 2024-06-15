"use client";

import React, { useState } from "react";
import AdminUsers from "./users/page";
import AdminMessages from "./messages/page";

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState("userManagement");

  const renderContent = () => {
    switch (activeTab) {
      case "userManagement":
        return <AdminUsers />;
      case "messages":
        return <AdminMessages />;
      default:
        return <AdminMessages />;
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white">
        <div className="p-4">
          <h2 className="text-2xl font-bold">Admin Panel</h2>
        </div>
        <nav className="mt-10">
          <button
            onClick={() => setActiveTab("userManagement")}
            className={`w-full text-left px-4 py-2 ${
              activeTab === "userManagement"
                ? "bg-gray-600"
                : "hover:bg-gray-700"
            }`}
          >
            User Management
          </button>
          <button
            onClick={() => setActiveTab("messages")}
            className={`w-full text-left px-4 py-2 mt-2 ${
              activeTab === "messages" ? "bg-gray-600" : "hover:bg-gray-700"
            }`}
          >
            Messages
          </button>
        </nav>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-8 bg-gray-100">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold">Admin Dashboard</h1>
          <nav>
            <button className="px-4 py-2 bg-gray-800 text-white rounded">
              Logout
            </button>
          </nav>
        </header>
        <main>{renderContent()}</main>
      </div>
    </div>
  );
};

export default AdminPage;
