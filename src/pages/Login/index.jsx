import { useState } from "react";
import { Leaf } from 'lucide-react'


export default function Login() {
    // const { Login } = useAuth();
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    // const navigate = useNavigate()
    const [error, setError] = useState(null);

    async function handleSubmit(e){
        e.preventDefault();
        setError(null);

        // try {
        //     await Login({ usuario, senha });
        //     // navigate('/dashboard');
        //     console.log('login', 'nome:', usuario, 'senha:', senha)
        // }catch(error) {
        //     console.log('falha no login');
        //     setError(<span>email/senha incorreta</span>)

        // }
        
    }

    return(
        <div className="min-h-screen bg-green-100 flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <div className="flex flex justify-center">

            <Leaf size={64} color="darkgreen"/>
        </div>
            
        <h1 className="text-2xl font-semibold text-center mb-6">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-4">
            <input
              type="email"
              className="input input-bordered"
              placeholder="Email"
              value={usuario}
              required
              onChange={(e) => setUsuario(e.target.value)}
            />
            <input
              type="password"
              className="input input-bordered"
              placeholder="Senha"
              value={senha}
              required
              onChange={(e) => setSenha(e.target.value)}
            />
            {error && <p className="text-red-500">Username/password incorrect</p>}
            <button className="btn text-base-200 bg-success w-full rounded-full" type="submit">
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}