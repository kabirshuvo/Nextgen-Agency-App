"use client";
import { useState } from "react";
import WriteBlogPage from "../blog/writeBlog/page";
import AdminUsers from "../../admin/users/page";
import AdminMessages from "../../admin/messages/page";
import SettingsPage from "../../admin/settings/page";

const SmartDashboard = () => {
  const [currentPage, setCurrentPage] = useState<string>("users");

  const renderPage = () => {
    switch (currentPage) {
      case "users":
        return <AdminUsers />;
      case "addBlogs":
        return <WriteBlogPage />;
      case "messages":
        return <AdminMessages />;
      case "settings":
        return <SettingsPage />;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="bg-gray-800 text-gray-100 w-1/4">
        <div className="p-4">
          <ul className="space-y-4">
            <li>
              <button
                onClick={() => setCurrentPage("users")}
                className="w-full text-left py-2 px-4 block hover:bg-gray-700"
              >
                Users
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentPage("addBlogs")}
                className="w-full text-left py-2 px-4 block hover:bg-gray-700"
              >
                Add Blogs
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentPage("messages")}
                className="w-full text-left py-2 px-4 block hover:bg-gray-700"
              >
                Messages
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentPage("settings")}
                className="w-full text-left py-2 px-4 block hover:bg-gray-700"
              >
                Settings
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentPage("logout")}
                className="w-full text-left py-2 px-4 block hover:bg-gray-700"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4">
        {/* Render the selected page */}
        {renderPage()}
      </main>
    </div>
  );
};

export default SmartDashboard;
