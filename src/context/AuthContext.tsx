import { createContext,useContext,useState } from "react";
import type { ReactNode } from "react";
import type { AuthProviderType } from "@/types/Auth";

const AuthContext = createContext<AuthProviderType|null>(null)

export const AuthProvider = ({children}:{children:ReactNode}) => {

    const [token,setToken] = useState<string|null>(
        localStorage.getItem('token') ?? sessionStorage.getItem('token')
    )

    const logout = () => {
        localStorage.removeItem('token')
        sessionStorage.removeItem('token')
        setToken(null)
    }

    return(
        <AuthContext.Provider value={{token,setToken,logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {

    const context = useContext(AuthContext)

    if(!context){
        throw new Error('useAuth must be used within AuthProvider')
    }

    return context
}
