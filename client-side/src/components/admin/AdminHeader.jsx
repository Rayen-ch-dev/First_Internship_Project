import { UserPlus, LogOut } from "lucide-react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import usePermission from "./permission"
import Swal from 'sweetalert2';
const Header = () => {
  const { isAdmin } = usePermission();
  const navigate = useNavigate();
  const [cookies, SetCooki] = useCookies(["access_token"]);
  const handleLogout = () => {
    Swal.fire({
      title: 'Confirm Logout!',
      text: 'Are you sure you want to log out?',
      icon: 'warning',
      confirmButtonText: 'Logout',
      confirmButtonColor: '#f43006',
      iconColor: '#f43006',
      showCancelButton: true,
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        SetCooki("access_token", "", { expires: new Date(0) });
        navigate("/admin/login");
      }
    });
  };
  
  return (
    <header className="border-b border-gray-700">
      <div className="flex flex-col sm:flex-row justify-between items-center p-4 sm:px-6">
        <h1 className="text-xl sm:text-2xl  font-bold mb-2 bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent sm:mb-0 tracking-wider ml-5 lg:text-3xl">
          Admin Panel
        </h1>
        <div className="flex space-x-2">
          {isAdmin && (
            <button
              onClick={() => {
                navigate("/admin/Register");
              }}
              className="p-2  hover:bg-gray-700 rounded-lg transition-colors"
            >
              <UserPlus className="w-5 h-5" />
            </button>
          )}

          <button
            onClick={handleLogout}
            className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
