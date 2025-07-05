import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ShowQR.css";

export default function ShowQR() {
  const navigate = useNavigate();

  useEffect(() => {
    const isMobile = window.innerWidth < 640;

    if (!isMobile) {
      // 🖥️ Desktop: skip QR and go directly to user page
      navigate("/");
    } else {
      // 📱 Mobile: wait 3 sec then mark QR scanned and redirect
      const timer = setTimeout(() => {
        sessionStorage.setItem("qrScanned", "true");
        navigate("/");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [navigate]);

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/your-background.jpg')" }}
    >
      <div className="bg-white p-10 rounded-2xl shadow-2xl text-center w-[95%] max-w-2xl">
        <h2 className="text-3xl font-bold text-orange-600 mb-8">📲 Scan to View Info</h2>
        <div className="qr-wrapper">
          <img src="/myqr.png" alt="QR Code" className="qr-image" />
        </div>
        <p className="mt-6 text-gray-600 text-lg">Redirecting to menu...</p>
      </div>
    </div>
  );
}
