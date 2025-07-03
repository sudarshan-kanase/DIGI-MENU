import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./AdminDashboard"; // Your admin page
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import QRLogin from "./components/QRLogin";
import UserPage from "./UserPage";

export default function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
      
        <Route path="/" element={<UserPage />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}
// This is the main App component that sets up the routing for the application
// It includes routes for the user page, admin login, and admin dashboard with protection 