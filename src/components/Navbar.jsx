import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        <Link to="/" className="text-xl font-bold text-green-400">
          TerraMetric
        </Link>

        <ul className="flex gap-6">

          <li>
            <Link to="/" className="hover:text-green-400 transition">
              Home
            </Link>
          </li>

          <li>
            <Link to="/" className="hover:text-green-400 transition">
              Features
            </Link>
          </li>

          <li>
            <Link to="/" className="hover:text-green-400 transition">
              Pricing
            </Link>
          </li>

          <li>
            <Link to="/" className="hover:text-green-400 transition">
              Testimonials
            </Link>
          </li>

          <li>
            <Link to="/login" className="hover:text-green-400 transition">
              Login/Signup
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}