import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { QrReader } from "react-qr-reader";
export default function QRLogin() {
  const [scanResult, setScanResult] = useState("");
  const navigate = useNavigate();

  const handleScan = (data) => {
    if (data) {
      setScanResult(data);

      // ✅ Check if scanned QR data matches your login key
      if (data === "auth-user-qr-secret") {
        localStorage.setItem("isUser", "true");
        navigate("/user");
      } else {
        alert("Invalid QR Code");
      }
    }
  };

  const handleError = (err) => {
    console.error("QR Scan Error:", err);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow p-6 rounded-lg w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-orange-600 mb-4">Login with QR Code</h2>
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: "100%" }}
        />
        {scanResult && (
          <p className="mt-4 text-gray-700">Scanned: <span className="font-semibold">{scanResult}</span></p>
        )}
      </div>
    </div>
  );
}
