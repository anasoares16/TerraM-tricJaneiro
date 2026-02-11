export default function Navbar() {

  function irParaQuestionario() {
    const el = document.getElementById("questionario");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <nav className="bg-slate-900 text-white px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold text-green-400">
          TerraMetric
        </h1>

        {/* Menu */}
        <ul className="flex gap-6">
          <li>
            <a href="#" className="hover:text-green-400 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-green-400 transition">
              Features
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-green-400 transition">
              Pricing
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-green-400 transition">
              Testimonials
            </a>
          </li>

          <li>
            <button
              onClick={irParaQuestionario}
              className="hover:text-green-400 transition font-semibold"
            >
              Questionário
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
