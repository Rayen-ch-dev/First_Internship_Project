import React, { useEffect, useState } from "react";
import Axios from "axios";
import { AlertCircle } from "lucide-react";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import Main from "./Main";
import usePermission from "./permission";
import { Activity, Clock, User, Shield, Trash2 } from "lucide-react";
import Swal from 'sweetalert2';
const AdminDashboard = () => {
  const { isAdmin } = usePermission();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [admins, SetAdmins] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const api = "http://localhost:3002";

  // Fetch users
  useEffect(() => {
    Axios.get(`${api}/admins`)
      .then((res) => {
        const admin = res.data;
        SetAdmins(admin);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  // Toggle sidebar
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  //delete admin
  const deleteAdmin = async (id) => {
    Swal.fire({
      title: 'Confirm Deletion!',
      text: 'Are you sure you want to delete this admin?',
      icon: 'warning',
      confirmButtonText: 'Delete',
      confirmButtonColor: '#f43006',
      iconColor: '#f43006',
      showCancelButton: true,
      cancelButtonText: 'Cancel',
    }).then(async (result) => { // ✅ `async` added here
      if (result.isConfirmed) {
        try {
          const response = await Axios.delete(`${api}/delete-admin/${id}`);
  
          if (response.status === 200) {
            Swal.fire('Deleted!', 'Admin deleted successfully.', 'success');
  
            // ✅ Update state to remove the deleted admin
            SetAdmins(admins.filter((admin) => admin._id !== id));
          } else {
            Swal.fire('Error!', 'Failed to delete admin.', 'error');
          }
        } catch (error) {
          console.error('Error deleting admin:', error);
          Swal.fire('Error!', 'Something went wrong.', 'error');
        }
      }
    });
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
              {admins.map((admin) => (
                <div
                  key={admin._id}
                  className="bg-gray-800 rounded-xl p-4 border border-orange-600/50 hover:border-orange-600 transition-colors"
                >
                  {/* Admin Info */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <User className="w-5 h-5 text-orange-600" />
                      <span className="truncate">{admin.username}</span>
                    </h3>
                    <p className="flex items-center gap-2 text-gray-300 truncate">
                      <Shield className="w-5 h-5 text-orange-600" />
                      {admin.role}
                    </p>
                    <p className="text-gray-400 text-sm flex items-center gap-2">
                      <Clock className="w-5 h-5 text-orange-600" />
                      <strong>Last Login:</strong>{" "}
                      {admin.lastLogin
                        ? new Date(admin.lastLogin).toLocaleString()
                        : "N/A"}
                    </p>
                    <p className="text-gray-400 text-sm flex items-center gap-2">
                      <Activity className="w-5 h-5 text-orange-600" />
                      <strong>Last Activity:</strong>{" "}
                      {admin.lastActivity
                        ? new Date(admin.lastActivity).toLocaleString()
                        : "N/A"}
                    </p>
                  </div>

                  {/* Actions */}
                  {isAdmin && (
                    <div className="flex justify-between items-center mt-4">
                      <button
                        onClick={() => deleteAdmin(admin._id)}
                        className="flex items-center gap-2 px-3 py-2 text-sm text-white bg-red-600/50 hover:bg-red-600 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                        <span className="sr-only sm:not-sr-only">Delete</span>
                      </button>
                    </div>
                  )}
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
