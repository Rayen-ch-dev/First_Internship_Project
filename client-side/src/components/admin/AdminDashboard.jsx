import React, { useEffect, useState } from "react";
import Axios from "axios";
import { AlertCircle } from "lucide-react";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import Main from "./Main";
import { Mail, Phone, User, Trash2 } from "lucide-react";
import Swal from "sweetalert2";
const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const formatTunisiaTime = (date) => {
    return new Date(date).toLocaleString("en-TN", { timeZone: "Africa/Tunis" });
  };

  const api = "http://localhost:3002";

  // Fetch users
  useEffect(() => {
    Axios.get(`${api}/MessagesUsers`)
      .then((res) => {
        const reversedMessageUsers = res.data.reverse();
        setUsers(reversedMessageUsers);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  // Toggle sidebar
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  // Toggle handled status
  const toggleHandled = (id) => {
    setHandledOrders((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  // delete client message
  const deleteClientMessage = async (id) => {
    Swal.fire({
      title: "Confirm Deletion!",
      text: "Are you sure you want to delete this message?",
      icon: "warning",
      confirmButtonText: "Delete",
      confirmButtonColor: "#f43006",
      iconColor: "#f43006",
      showCancelButton: true,
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await Axios.delete(`${api}/delete/${id}`);

          if (response.status === 200) {
            Swal.fire({
              title: "Deleted!",
              text: "Message deleted successfully.",
              icon: "success",
              confirmButtonColor: "#f43006", // Set button color to orange-600
              iconColor: "#f43006", // Set icon color to orange-600
              customClass: {
                confirmButton: "bg-orange-600 hover:bg-orange-700 text-white", // Tailwind classes for button
              },
            });

            setUsers(users.filter((user) => user._id !== id));
          } else {
            Swal.fire("Error!", "Failed to delete message.", "error");
          }
        } catch (error) {
          console.error("Error deleting message:", error);
          Swal.fire("Error!", "Something went wrong.", "error");
        }
      }
    });
  };
  //update message

  const updateClientMessage = async (id, handled) => {
    // Confirmation dialog
    const result = await Swal.fire({
      title: "Are you sure?",
      text: `Do you want to mark this message as ${
        handled ? "handled" : "not handled"
      }?`,
      icon: "question",
      showCancelButton: true,
      iconColor: "#f43006",
      confirmButtonText: "Yes, update it!",
      confirmButtonColor: "#f43006", 
      cancelButtonText: "No, cancel!",
      cancelButtonColor: "#6b7280", 
    });
  
    
    if (result.isConfirmed) {
      try {
        const response = await Axios.put(`${api}/update-handled/${id}`, {
          handled,
        });
  
        if (response.status === 200) {
          setUsers((msg) =>
            msg.map((user) =>
              user._id === id ? { ...user, handled } : user
            )
          );
          Swal.fire({
            title: "Updated!",
            text: "Message status updated successfully.",
            icon: "success",
            confirmButtonColor: "#f43006", 
            iconColor: "#f43006", 
            customClass: {
              confirmButton: "bg-orange-600 hover:bg-orange-700 text-white", 
            },
          });
        } else {
          Swal.fire("Error!", "Failed to update message status.", "error");
        }
      } catch (error) {
        console.error("Error updating message:", error);
        Swal.fire(
          "Error!",
          "An error occurred while updating the message.",
          "error"
        );
      }
    }
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <AdminSidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      {/* Main Content Area */}
      <div
        className={`flex-1 flex flex-col transition-margin duration-300 ease-in-out ${
          isSidebarOpen ? "ml-64" : "ml-16"
        }`}
      >
        {/* Header */}
        <AdminHeader />

        {/* Main Content */}
        <Main>
          {isLoading ? (
            <div className="text-center text-orange-600">Loading...</div>
          ) : error ? (
            <div className="flex items-center justify-center text-orange-600 gap-2">
              <AlertCircle className="w-5 h-5" />
              <span>Error: {error}</span>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {users.map((user) => (
                <div
                  key={user._id}
                  className="bg-gray-800 rounded-xl p-4 border border-orange-600/50 hover:border-orange-600 transition-colors"
                >
                  {/* User Info */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <User className="w-5 h-5 text-orange-600" />
                        <span className="truncate">{user.name}</span>
                      </div>
                      {/* Order Date (Sent Date) */}
                      <span className="text-sm p-1 -mr-2 text-gray-400">
                        {formatTunisiaTime(user.sentAt)}
                      </span>
                    </h3>
                    <p className="flex items-center gap-2 text-gray-300 truncate">
                      <Phone className="w-5 h-5 text-orange-600" />
                      {user.phone}
                    </p>
                    <p className="flex items-center gap-2 text-gray-300 truncate">
                      <Mail className="w-5 h-5 text-orange-600" />
                      {user.email}
                    </p>
                  </div>

                  {/* Message Section */}
                  <div className="mt-4 space-y-2">
                    <p className="text-sm text-gray-400">
                      <strong className="text-orange-600">Subject:</strong>{" "}
                      <span className="truncate">{user.subject}</span>
                    </p>
                    <p className="text-sm text-gray-400 line-clamp-3">
                      <strong className="text-orange-600">Message:</strong>{" "}
                      {user.message}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex justify-between items-center mt-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      {user.handled == false && (
                        <input
                          type="checkbox"
                          checked={user.handled}
                          onChange={(e) =>
                            updateClientMessage(user._id, e.target.checked)
                          }
                          className="w-5 h-5 accent-orange-600 rounded"
                        />
                      )}

                      <span className="text-sm text-orange-600">
                        {user.handled == false ? "Waiting" : "handeled"}
                      </span>
                    </label>
                    <button
                      onClick={() => deleteClientMessage(user._id)}
                      className="flex items-center gap-2 px-3 py-2 text-sm text-white bg-red-600/50 hover:bg-red-600 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                      <span className="sr-only sm:not-sr-only">Delete</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Main>
      </div>
    </div>
  );
};

export default AdminDashboard;
