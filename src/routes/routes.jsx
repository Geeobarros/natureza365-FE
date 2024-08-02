import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Login  from "../pages/Login";
import Cadastro from "../pages/Cadastro";

export default function RoutesComponent() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/cadastro" element={<Cadastro/>} />
            </Routes>
        </Router>
    )
}