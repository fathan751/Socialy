import axios from "axios"
import { useState } from "react"
import { toast } from "sonner"
import type { RegisterFormTypes } from "@/types/register"
import { BASE_URL,API_KEY } from "@/lib/constant/env"
import { useNavigate } from "react-router-dom"

const UseRegister = () => {

    const [loading,setLoading] = useState<boolean>(false)

    const navigate = useNavigate()

    const handleRegister = async (payload:RegisterFormTypes) => {

      setLoading(true)
      try {
        const res = await axios.post(`${BASE_URL}/api/v1/register`,payload,{
          headers:{
            apiKey: API_KEY,
          }
        })
        console.log(res)
        toast.success(res.data.message || "Register Succesfully")
        navigate(`/login`)
      } catch (error:unknown) {
        console.error(error)
        if(axios.isAxiosError(error)){
          toast.error(error.response?.data.message || "Failed to register")
        }else{
          toast.error("Unexpected error occurred")
        }
      } finally {
        setLoading(false)
      }
    }

  return {
    handleRegister,loading
  }
}

export default UseRegister