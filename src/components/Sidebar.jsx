import { NavLink } from "react-router-dom";

function Sidebar() {
  const linkClass =
    "block px-4 py-3 rounded-lg hover:bg-blue-500 hover:text-white transition";

  return (
    <aside className="w-64 min-h-screen bg-white shadow-lg p-4">
      <h2 className="text-2xl font-bold mb-8 text-blue-600">
        XM Dashboard
      </h2>

      <nav className="flex flex-col gap-3">
        <NavLink to="/" className={linkClass}>
          Panel precios
        </NavLink>

        <NavLink
          to="/generation"
          className={linkClass}
        >
          Panel generación
        </NavLink>

        <NavLink
          to="/demand"
          className={linkClass}
        >
          Panel demanda
        </NavLink>

        <NavLink
          to="/volume"
          className={linkClass}
        >
          Panel volumen útil
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;