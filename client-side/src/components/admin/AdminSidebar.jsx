import { useState } from "react";
import { Menu, X, Home, MessageCircle, Users } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const pathname = useLocation();
  return (
    <div
      className={`bg-gray-800 text-white fixed h-full transition-all duration-300 ease-in-out z-50 ${
        isSidebarOpen ? "w-64" : "w-16"
      }`}
    >
      <div className="h-full flex flex-col">
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 ">
          <img src="images/channels4_banner-removebg-preview.png" width={160} height={50} className={` font-bold ${isSidebarOpen ? "block" : "hidden"}`}>
            
          </img>
          <button
            onClick={toggleSidebar}
            className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
          >
            {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-4">
            {[
            
              { icon: MessageCircle, text: "Messages",id:"1",url:"/admin" },
              { icon: Users, text: "Admins", id:"1", url:"/ListAdmins"  }
            ].map((item, index) => (
              <li key={index}>
                <Link to={item.url}
                  className={`flex items-center p-3 rounded-lg hover:bg-gray-700 transition-colors ${pathname.pathname===item.url ? "text-orange-600":" hover:text-orange-600  duration-300 transition-transform"}`}
                >
                  <item.icon className="w-6 h-6 min-w-[24px]" />
                  <span className={`ml-3 cursor-pointer ${isSidebarOpen ? "block" : "hidden"}
                                     
                                      `}>
                    {item.text}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;