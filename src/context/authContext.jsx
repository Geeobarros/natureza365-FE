import { LogOut } from "lucide-react";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext({
    usuario: null,
    login: async () => {},
    LogOut: () => {},
});

export function AuthProvider({ children }){
    const [usuario, setUsuario] = useState(null)

    async function login({ email, senha }) {
        const response = await fetch()
        const data = await response.json()
        return data
    }

    return(
        <AuthContext.Provider value={{ usuario, login}}>{children}</AuthContext.Provider> 
    );

}

export function useAuth() {
    const contexto = useContext(AuthContext)
    return contexto
}
