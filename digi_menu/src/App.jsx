import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import QRProtectedRoute from "./components/QRProtectedRoute";
import ShowQR from "./components/ShowQR";
import UserPage from "./UserPage";
import AdminRegister from "./components/AdminRegister";
import NotAllowed from "./components/NotAllowed"; // ✅ add this

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/show-qr" element={<ShowQR />} />
        <Route
          path="/"
          element={
            <QRProtectedRoute>
              <UserPage />
            </QRProtectedRoute>
          }
        />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-register" element={<AdminRegister />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/not-allowed" element={<NotAllowed />} /> {/* ✅ added */}
      </Routes>
      <Footer />
    </Router>
  );
}
