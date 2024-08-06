import { LogOut } from "lucide-react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

export default function Layout() {
  const { usuario, Logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    Logout();
    navigate("/");
  }

  console.log(usuario);
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
            {usuario && <p>{usuario.email}</p>}

            <button onClick={handleLogout}>
              <LogOut />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
