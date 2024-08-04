import { Users } from "lucide-react";
import { MapPinCheck } from "lucide-react";

export default function Dashboard() {
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
            <p>{/*colocar qtd de usuarios*/}</p>
            <div className="card-actions justify-end">
              <Users />
            </div>
          </div>
        </div>

        <div className="card bg-orange-500 text-black w-96">
          <div className="card-body">
            <h2 className="card-title">Locais cadastrados</h2>
            <p>{/*colocar qtd de locais*/}</p>
            <div className="card-actions justify-end">
              <MapPinCheck />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10">
  <div className="overflow-x-auto w-full max-w-4xl">
    <table className="table-auto w-full">
      {/* head */}
      <thead className="bg-neutral-100">
        <tr>
          
          <th className="px-4 py-2">Nome do local</th>
          <th className="px-4 py-2">Descrição do local</th>
          <th className="px-4 py-2">Usuário</th>
          <th className="px-4 py-2">Localização</th>
        </tr>
      </thead>
      <tbody>
        {/* row 1 */}
        <tr>
          
          
          <td className="border px-4 py-2">Gávea</td>
          <td className="border px-4 py-2">Pedra da gávea</td>
          <td className="border px-4 py-2">Christian</td>
          <td className="border px-4 py-2">Rio de Janeiro</td>
        </tr>
       
      </tbody>
    </table>
  </div>
</div>

    </div>
  );
}
