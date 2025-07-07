import React from "react";

export default function AboutPage() {
  return (
    <div className="pt-28 pb-16 px-4 sm:px-12 bg-emerald-50 dark:bg-zinc-900 min-h-screen text-zinc-900 dark:text-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-emerald-700 dark:text-emerald-400 mb-6">
          🌿 About Vrindavan Villa Retreat
        </h1>

        <p className="text-lg leading-relaxed mb-6">
          Welcome to <strong>Vrindavan Villa Retreat</strong>, your ultimate getaway nestled in the heart of nature. We offer a tranquil environment, premium cottages, and digital conveniences like QR-based menus and paperless billing – all designed to give you a truly modern yet peaceful stay.
        </p>

        <h2 className="text-2xl font-semibold text-orange-600 dark:text-orange-400 mb-3">
          🏡 Our Vision
        </h2>
        <p className="mb-6">
          We aim to blend technology with traditional hospitality. Every cottage is equipped with smart features to make your experience seamless and memorable.
        </p>

        <h2 className="text-2xl font-semibold text-orange-600 dark:text-orange-400 mb-3">
          💡 Digital Experience
        </h2>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Contactless QR-based food ordering</li>
          <li>Real-time order tracking and digital billing</li>
          <li>Personalized guest dashboard with your order history</li>
        </ul>

        <h2 className="text-2xl font-semibold text-orange-600 dark:text-orange-400 mb-3">
          🤝 Meet Our Team
        </h2>
        <p className="mb-6">
          Our dedicated team is here 24/7 to ensure your stay is comfortable, relaxing, and safe. From housekeeping to our culinary experts, every member is committed to excellence.
        </p>

        <h2 className="text-2xl font-semibold text-orange-600 dark:text-orange-400 mb-3">
          📍 Location
        </h2>
        <p>
          Vrindavan Villa Retreat is located amidst the serene beauty of nature, just 15 minutes away from the city center, offering peace without compromising accessibility.
        </p>
      </div>
    </div>
  );
}
// This component provides an "About" page for the Vrindavan Villa Retreat, detailing its vision, digital features, team, and location.