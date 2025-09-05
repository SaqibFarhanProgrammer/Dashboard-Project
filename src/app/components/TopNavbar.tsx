"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const TopNavbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  const notifications = [
    { id: 1, text: "New message from John", time: "2 min ago" },
    { id: 2, text: "Your report is ready", time: "15 min ago" },
    { id: 3, text: "Server maintenance scheduled", time: "1 hour ago" },
  ];

  return (
    <div className="TopNavbar_Parent bg-white shadow-md p-4 w-[calc(100vw-16rem)] flex items-center justify-between fixed top-0 left-0 z-50 ml-64">
      {/* Search Bar */}
      <div className="flex items-center w-1/3">
        <form onSubmit={handleSearch} className="relative w-full">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full py-2 px-4 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <i className="ri-search-line"></i>
          </button>
        </form>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative">
          <button
            onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
            className="text-gray-600 hover:text-blue-600 relative"
          >
            <i className="ri-notification-3-line text-xl"></i>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              3
            </span>
          </button>

          {isNotificationsOpen && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg py-2 z-50">
              <div className="px-4 py-2 border-b border-gray-200">
                <h3 className="text-sm font-medium text-gray-800">Notifications</h3>
              </div>
              <div className="max-h-60 overflow-y-auto">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="px-4 py-3 hover:bg-gray-50 cursor-pointer"
                  >
                    <p className="text-sm text-gray-800">{notification.text}</p>
                    <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                  </div>
                ))}
              </div>
              <div className="px-4 py-2 border-t border-gray-200">
                <Link href="/notifications" className="text-sm text-blue-600 hover:text-blue-800">
                  View all notifications
                </Link>
              </div>
            </div>
          )}
        </div>

        <Link href="/messages" className="text-gray-600 hover:text-blue-600 relative">
          <i className="ri-mail-line text-xl"></i>
          <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
            1
          </span>
        </Link>

        <button className="text-gray-600 hover:text-blue-600">
          <i className="ri-moon-line text-xl"></i>
        </button>

        <div className="relative">
          <button
            onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
            className="flex items-center gap-2"
          >
            <Image
              src="/User.png"
              alt="Profile"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="text-gray-700 hidden md:block">Ali H.</span>
            <i className="ri-arrow-down-s-line text-gray-600"></i>
          </button>

          {isProfileDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
              <Link
                href="/profile"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <i className="ri-user-line mr-2"></i>Profile
              </Link>
              <Link
                href="/settings"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <i className="ri-settings-3-line mr-2"></i>Settings
              </Link>
              <div className="border-t border-gray-200 my-1"></div>
              <button
                onClick={() => console.log("Logout clicked")}
                className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
              >
                <i className="ri-logout-box-r-line mr-2"></i>Sign out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;