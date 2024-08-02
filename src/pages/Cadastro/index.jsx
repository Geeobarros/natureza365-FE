import { useForm } from 'react-hook-form';

export default function Cadastro() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div className="min-h-screen bg-green-100 flex flex-col justify-center items-center">
      <div className= "mt-10 mb-10 bg-white p-8 rounded shadow-md w-3/4">
        {/* <div className="flex flex justify-center">
          <Leaf size={64} color="darkgreen" />
        </div> */}
        <h1 className="text-2xl font-semibold text-center mb-6">Cadastre-se</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex justify-center	gap-10'>
                <div className="grow">
                
                    <label className='label'>Nome:</label>
                    <input
                        type="text"
                        className="input input-bordered w-full"
                        {...register('name', { required: 'Nome é obrigatório!' })}
                    />
                    {errors.name && <p className="text-error">{errors.name.message}</p>}
                

                
                    <label className='label'>Data de nascimento: </label>
                    <input
                        type="date"
                        className="input input-bordered w-full"
                        {...register('age', {
                            required: 'Data de nascimento é obrigatória!',
                            validate: value => new Date().getFullYear() - new Date(value).getFullYear() >= 18 || 'Você deve ter no mínimo 18 anos!',
                        })}
                    />
                    {errors.age && <p className="text-error">{errors.age.message}</p>}
                

                
                    <label className='label'>Sexo: </label>
                    <select className="select select-bordered w-full" {...register('sexo', { required: 'Sexo é obrigatório!' })}>
                        <option disabled selected value="">Selecione</option>
                        <option value="feminino">Feminino</option>
                        <option value="masculino">Masculino</option>
                        <option value="outros">Outros</option>
                    </select>
                    {errors.sexo && <p className="text-error">{errors.sexo.message}</p>}
                
                    <label className='label'>CPF: </label>
                    <input
                        type="text"
                        className="input input-bordered w-full"
                        {...register('cpf', {
                            required: 'CPF é obrigatório!',
                            maxLength: { value: 14, message: 'CPF deve ter no máximo 14 caracteres' },
                            pattern: {
                                value: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
                                message: 'O CPF não está no formato correto Ex: 123.456.789-10',
                            },
                        })}
                    />
                    {errors.cpf && <p className="text-error">{errors.cpf.message}</p>}
                
                </div>

                
                <div className="grow">
                                        
                    <label className='label'>CEP: </label>
                    <input
                        type="text"
                        className="input input-bordered w-full"
                        {...register('cep', {
                            maxLength: { value: 9, message: 'CEP deve ter no máximo 9 caracteres' },
                            pattern: {
                                value: /^\d{5}-\d{3}$/,
                                message: 'O CEP não está no formato correto Ex: 12345-678',
                        },
                        })}
                    />
                    {errors.cep && <p className="text-error">{errors.cep.message}</p>}

                    <label className='label'>Endereço: </label>
                    <input type="text"
                        className='input input-bordered w-full'
                    />
                
                    <label className='label'>Email: </label>
                    <input
                        type="email"
                        className="input input-bordered w-full"
                        {...register('email', { required: 'Email é obrigatório!' })}
                    />
                    {errors.email && <p className="text-error">{errors.email.message}</p>}
                
                    <label className='label'>Senha: </label>
                    <input
                        type="password"
                        className="input input-bordered w-full"
                        {...register('password', { required: 'Senha é obrigatória!' })}
                    />
                    {errors.password && <p className="text-error">{errors.password.message}</p>}
                


                </div>

            </div>
            <button className="btn text-base-200 bg-success w-full rounded-full mt-10" type="submit">
                Cadastrar
            </button>

        </form>
      </div>
    </div>
  );
}
