import { Users } from "lucide-react";
import { MapPinCheck } from "lucide-react";
import { useEffect } from "react";
import { getLocais, getUsers } from "../../api/endpoints";
import { useState } from "react";

export default function Dashboard() {
  const [locais, setLocais] = useState([]);
  const [users, setUsers] = useState([]);
  const [qtdLocais, setQtdLocais] = useState(0);
  const [qtdUsuarios, setQtdUsuarios] = useState(0);

  useEffect(() => {
    getLocais().then((loc) => setLocais(loc));
    getUsers().then((urs) => setUsers(urs));
  }, []);

  useEffect(() => {
    getLocais().then((loc) => setQtdLocais(loc.length));
  }, []);

  useEffect(() => {
    getUsers().then((users) => setQtdUsuarios(users.length));
  }, []);

  const getUserName = (idUsuario) => {
    if (users.length) {
      return users.find((user) => user.id === idUsuario).nome || "(não achado)";
    }
    return "(não encontrado)";
  };

  return (
    <div>
      <h1 className="text-black p-4 font-sans text-xl font-medium">
        Dashboard
      </h1>
      <hr></hr>

      <div className="flex justify-evenly mt-10">
        <div className="card bg-orange-500 text-black w-96">
          <div className="card-body">
            <h2 className="card-title">Usuários ativos</h2>
            <div className="flex p-5">
              <p className="text-lg font-bold">{qtdUsuarios}</p>
              <Users />
            </div>
          </div>
        </div>

        <div className="card bg-orange-500 text-black w-96">
          <div className="card-body">
            <h2 className="card-title">Locais cadastrados</h2>
            <div className="flex p-5">
              <p className="text-lg font-bold">{qtdLocais}</p>
              <MapPinCheck />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <div className="overflow-x-auto w-full max-w-4xl">
          <table className="table-auto w-full mb-7">
            <thead className="bg-neutral-100">
              <tr>
                <th className="px-4 py-2">Nome do local</th>
                <th className="px-4 py-2">Descrição do local</th>
                <th className="px-4 py-2">Usuário</th>
                <th className="px-4 py-2">Localização</th>
              </tr>
            </thead>
            <tbody>
              {locais.map((local) => (
                <tr key={local.id}>
                  <td className="border px-4 py-2">{local.nomeLocal}</td>
                  <td className="border px-4 py-2">{local.descricao}</td>
                  <td className="border px-4 py-2">
                    {users ? getUserName(local.idUsuario) : "..."}
                  </td>
                  <td className="border px-4 py-2">{local.localizacao}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
