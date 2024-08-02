import { createContext, useState } from "react";

const AuthContext = createContext({
    user: null,
    signup: () => {},
});

export function AuthProvider({ children }){
    const [usuario, setUsuario] = useState(null)

    async const login = ({ email, senha }) => {
        const response = await api(`/usuario?email={email}&senha={senha}`)
        const data = await response.json()
    }

    return(
        <AuthContext.Provider value={{ usuario, login}}>{children}</AuthContext.Provider> 
    );
}

