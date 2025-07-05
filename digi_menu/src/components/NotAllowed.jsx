export default function NotAllowed() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Access Denied</h2>
        <p className="text-gray-700">This page is only accessible from a mobile device.</p>
      </div>
    </div>
  );
}
// This component displays a message when a user tries to access a page that is not allowed on their device.
// It informs them that the page is only accessible from a mobile device, enhancing user experience by