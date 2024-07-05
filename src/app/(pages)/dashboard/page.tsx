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
    <div className="flex h-screen rounded">
      {/* Sidebar */}
      <aside className="bg-primary/45 my-4 text-gray-100 w-1/6 text-right rounded">
        <div className="p-4 rounded">
          <ul className="space-y-4 flex flex-col justify-between items-center text-right rounded">
            <li>
              <button
                onClick={() => setCurrentPage("users")}
                className="w-full text-left py-2 px-4 block hover:bg-gray-700 rounded"
              >
                Users
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentPage("addBlogs")}
                className="w-full text-left py-2 px-4 block hover:bg-gray-700 rounded"
              >
                Add Blogs
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentPage("messages")}
                className="w-full text-left py-2 px-4 block hover:bg-gray-700 rounded"
              >
                Messages
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentPage("settings")}
                className="w-full text-left py-2 px-4 block hover:bg-gray-700 rounded"
              >
                Settings
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentPage("logout")}
                className="w-full text-left py-2 px-4 block hover:bg-gray-700 rounded"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 rounded">
        {/* Render the selected page */}
        {renderPage()}
      </main>
    </div>
  );
};

export default SmartDashboard;
