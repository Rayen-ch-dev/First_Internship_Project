import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Contact from "./components/pages/Contact";
import Login from "./components/admin/Login";
import Register from "./components/admin/Register";
//import { AuthProvider } from './components/admin/AuthContext';
import AdminDashboard from "./components/admin/AdminDashboard";
import PrivateRoute from "./components/admin/PrivateRoute";
import AdmisList from "./components/admin/AdmisList";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Public Pages - Wrapped in MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* Admin Pages - Wrapped in AdminLayout */}
        <Route path="/admin/Login" element={<Login />} />
        <Route>
        
          <Route
            path="/admin/Register"
            element={
              <PrivateRoute>
                <Register />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <AdminDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/ListAdmins"
            element={
              <PrivateRoute>
                <AdmisList />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
