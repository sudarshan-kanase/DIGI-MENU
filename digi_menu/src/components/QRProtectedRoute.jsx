import React from "react";
import { Navigate } from "react-router-dom";

export default function QRProtectedRoute({ children }) {
  const isMobile = window.innerWidth < 640;
  const isScanned = sessionStorage.getItem("qrScanned") === "true";

  if (isMobile && !isScanned) {
    // 📱 Mobile but QR not scanned → redirect to QR page
    return <Navigate to="/show-qr" replace />;
  }

  // ✅ Desktop OR scanned on mobile → allow
  return children;
}
