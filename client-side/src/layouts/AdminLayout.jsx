import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/admin/AdminSidebar";
import AdminHeader from "../components/admin/AdminHeader";
//import AdminDashboard from "../components/admin/AdminDashboard";

const AdminLayout = () => {
    return (
      <div className="flex min-h-screen">
        <AdminSidebar/>

        {/* Main Content */}
        <div className="">
          {/* Admin Header */}
          <AdminHeader />
  
          {/* Main Section */}
          <main className="p-4 lg:p-6 xl:p-8">
            <Outlet />
          </main>
        </div>
      </div>
    );
  };
  

export default AdminLayout;
