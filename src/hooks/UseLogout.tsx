import { useNavigate } from "react-router-dom"

const UseLogout = () => {

    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem("token")

        navigate('/login')
    }

  return {
    logout
  }
}

export default UseLogout