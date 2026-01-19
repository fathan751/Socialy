import { createContext,useContext,useState } from "react";
import type { ReactNode } from "react";
import type { AuthProviderType } from "@/types/Auth";

const AuthContext = createContext<AuthProviderType|null>(null)

export const AuthProvider = ({children}:{children:ReactNode}) => {

    const [token,setToken] = useState<string|null>(
        localStorage.getItem('token') ?? sessionStorage.getItem('token')
    )

    return(
        <AuthContext.Provider value={{token,setToken}}>
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
