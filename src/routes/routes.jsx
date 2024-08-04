import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Login  from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Layout from "./Layout";
import Dashboard from "../pages/Dashboard";
import CadastrarLocais from "../pages/CadastrarLocais";
import GerenciarLocais from "../pages/GerenciarLocais";

export default function RoutesComponent() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/cadastro" element={<Cadastro/>} />
                <Route path="/dashboard" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route index path="cadastrar-local" element={<CadastrarLocais />} />
                    <Route path="gerenciar-locais" element={<GerenciarLocais />} />
                </Route>
            </Routes>
        </Router>
    )
}