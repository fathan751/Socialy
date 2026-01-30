import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { API_KEY,BASE_URL } from "@/lib/constant/env"
import type { LoginApiTypes } from "@/types/login"
import { toast } from "sonner"
import axios from "axios"
import { useAuth } from "@/context/AuthContext"

const UseLogin = () => {

    const [loading,setLoading] = useState<boolean>(false)
    const navigate = useNavigate()
    const {setToken} = useAuth()

    const handleLogin = async (payload:LoginApiTypes) => {
        const {email,password,rememberMe} = payload
        setLoading(true)
        try {
            const resLogin = await axios.post(`${BASE_URL}/api/v1/login`,{email,password},{
                headers:{
                    apiKey: API_KEY
                }
            })
            console.log(resLogin)
            const token = resLogin.data.token
            if(rememberMe){
                localStorage.setItem('token',token)
            }else{
                sessionStorage.setItem("token",token)
            }
            setToken(token)
            toast.success("Login Succesfully")    
            navigate('/feed')
        } catch (error:unknown) {
            if(axios.isAxiosError(error)){
                toast.error(error.response?.data?.message || "Failed To Login")
            }else{
                toast.error("Unexpected error occured")
            }
        }finally{
            setLoading(false)
        }

    }

    return {
        handleLogin,loading
    }
}

export default UseLogin