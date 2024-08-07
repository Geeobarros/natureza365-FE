import { useState, useEffect } from "react";
import { Leaf } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

export default function Login() {
  const { Login, usuario, erroLogin } = useAuth();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);

    try {
      await Login({ email, senha });
    } catch (error) {
      console.log("falha no login");
    }
  }
  useEffect(() => {
    if (usuario) {
      navigate("/dashboard");
    }

    if (erroLogin === true) {
      setError(<span>email/senha incorreta</span>);
    }
  }, [usuario, erroLogin]);

  return (
    <div className="min-h-screen bg-green-100 flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <div className="flex flex justify-center">
          <Leaf size={64} color="darkgreen" />
        </div>

        <h1 className="text-2xl font-semibold text-center mb-6">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-4">
            <input
              type="email"
              className="input input-bordered"
              placeholder="Email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="input input-bordered"
              placeholder="Senha"
              value={senha}
              required
              onChange={(e) => setSenha(e.target.value)}
            />

            <span>
              Não tem uma conta?{" "}
              <Link className="underline underline-offset-4" to="/cadastro">
                Cadastre-se
              </Link>{" "}
            </span>
            {error && (
              <p className="text-red-500">Email/Senha incorreta</p>
            )}
            <button
              className="btn text-base-200 bg-success w-full rounded-full"
              type="submit"
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
