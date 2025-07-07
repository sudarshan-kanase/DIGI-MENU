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
import BillingPage from "./components/BillingPage"; // ✅
import NotAllowed from "./components/NotAllowed"; // ✅
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage"; // ✅
export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen"> {/* ✅ sticky wrapper */}

        <Navbar />

        <main className="flex-grow"> {/* ✅ fills height when content is short */}
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
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/billing" element={<BillingPage />} />
            <Route path="/not-allowed" element={<NotAllowed />} />
          </Routes>
        </main>

        <Footer /> {/* ✅ always at bottom */}

      </div>
    </Router>
  );
}
