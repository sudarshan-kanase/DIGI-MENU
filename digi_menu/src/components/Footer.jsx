import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white py-8 px-4 sm:px-8 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo + Brand */}
        <div className="flex items-center gap-4">
          <img src={logo} alt="Logo" className="h-12 w-auto rounded-md" />
          <div>
            <h3 className="text-lg font-semibold text-orange-400">Vrindavan Villa Retreat</h3>
            <p className="text-sm text-gray-300">© 2025 All rights reserved.</p>
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-6 text-sm font-medium text-gray-300">
          <li className="hover:text-orange-400 cursor-pointer">About</li>
          <li className="hover:text-orange-400 cursor-pointer">Menu</li>
          <li className="hover:text-orange-400 cursor-pointer">Contact</li>
        </ul>

        {/* Social Icons */}
        <div className="flex gap-4 text-xl text-gray-300">
          <a href="#"><i className="fab fa-facebook hover:text-orange-400"></i></a>
          <a href="#"><i className="fab fa-twitter hover:text-orange-400"></i></a>
          <a href="#"><i className="fab fa-instagram hover:text-orange-400"></i></a>
        </div>
      </div>
    </footer>
  );
}
// This component provides a footer with branding, navigation links, and social media icons.
// It uses Tailwind CSS for styling and is responsive across devices.