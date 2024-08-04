import { LogOut } from "lucide-react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="drawer drawer-open">
      <input id="my-drawer-2" className="drawer-toggle" />
      <div className="drawer-content justify-center">
        <Outlet />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex flex-col justify-between min-h-screen w-80 bg-lime-300 p-4">
          <h3 className="text-bold font-medium">Menu</h3>
          <ul className="menu bg-lime-300 text-base-content flex-grow">
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/dashboard/cadastrar-local">Cadastrar local</Link>
            </li>
            <li>
              <Link to="/dashboard/gerenciar-locais">Gerenciar locais</Link>
            </li>
          </ul>
          <div className="bg-lime-300">
            <Link to="/" className="w-full text-center mt-auto">
              <LogOut />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
