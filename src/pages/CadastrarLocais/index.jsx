import { useForm } from "react-hook-form";
import axios from "axios";
import { addLoccais } from "../../api/endpoints";

export default function CadastrarLocais() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
      addLoccais(data).then(
        console.log(data),
        alert("Local cadastrado com sucesso")
        
      ).catch((error) => {
        alert('Houve um erro ao cadastrar usuário')
        console.log(error.message);

      })
    
  };

  const cepApi = async (cep) => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      if (response.data.erro) {
        alert("CEP não encontrado");
      } else {
        setValue(
          "localizacao",
          `${response.data.logradouro}, ${response.data.bairro}, ${response.data.localidade} - ${response.data.uf}`
        );
      }
    } catch (error) {
      console.error("Erro ao buscar o endereço:", error);
    }
  };



  return (
    <div className="max-w-lg mx-auto mt-10 p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-6">Cadastrar Área de Preservação</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Nome do Local
          </label>
          <input
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            {...register("nomeLocal", {
              required: "Nome do local é obrigatório",
            })}
          />
          {errors.nomeLocal && (
            <p className="text-red-500 text-sm mt-1">
              {errors.nomeLocal.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Descrição
          </label>
          <textarea
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            {...register("descricao", { required: "Descrição é obrigatória" })}
          />
          {errors.descricao && (
            <p className="text-red-500 text-sm mt-1">
              {errors.descricao.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            ID Usuário
          </label>
          <input
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            {...register("idUsuario", {
              required: "ID do usuário é obrigatório",
            })}
          />
          {errors.idUsuario && (
            <p className="text-red-500 text-sm mt-1">
              {errors.idUsuario.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">CEP</label>
          <input
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            {...register("cep", {
              required: "CEP é obrigatório",
              pattern: {
                value: /^\d{5}-?\d{3}$/,
                message: "CEP inválido",
              },
            })}
            onBlur={(e) => cepApi(e.target.value)}
          />
          {errors.cep && (
            <p className="text-red-500 text-sm mt-1">{errors.cep.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Localização
          </label>
          <input
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            {...register("localizacao", {
              required: "Localização é obrigatória",
            })}
          />
          {errors.localizacao && (
            <p className="text-red-500 text-sm mt-1">
              {errors.localizacao.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Longitude
          </label>
          <input
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            {...register("longitude")}
          />
          {errors.longitude && (
            <p className="text-red-500 text-sm mt-1">
              {errors.longitude.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Latitude
          </label>
          <input
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            {...register("latitude")}
          />
          {errors.latitude && (
            <p className="text-red-500 text-sm mt-1">
              {errors.latitude.message}
            </p>
          )}
        </div>

        <div>
          <button
            type="submit"
            className="btn 200 bg-lime-300 w-full rounded-full"
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
}
