import { Camera } from "lucide-react"
import { Link } from "react-router-dom"
import { useAuth } from "@/context/AuthContext"
import { Button } from "./ui/button"

const Navbar = () => {

    const {token,logout} = useAuth()

  return (
    <header className="fixed top-0 w-full h-18 border-b bg-white">
        <nav className="max-w-7xl mx-auto flex justify-between items-center h-full px-5">
            <Link to={"/feed"} className="flex gap-2">
                <div className="bg-linear-to-r text-white from-[#2862EA] to-[#7F49DF] p-1 rounded-lg">
                    <Camera size={25}/>
                </div>
                <span className="font-semibold font-poppins text-2xl bg-linear-to-r from-[#2862EA]  to-[#7F49DF] bg-clip-text text-transparent">socialy</span>
            </Link>
            <div className="flex items-center gap-4">{token?
                <Button onClick={logout} className="bg-violet-500 cursor-pointer hover:scale-110 hover:bg-gray-400 font-poppins font-semibold tracking-wider">Logout</Button> :
                <Link to={"/login"} className="hover:bg-purple-300 font-medium text-lg rounded-xl py-1 px-4 hover:text-white cursor-pointer transition-colors duration-200 ease-out">Login</Link>
                }
                <Link to={token?"/feed":"/register"} className="text-white px-4 py-2 font-semibold rounded-xl bg-linear-to-r cursor-pointer from-[#2862EA] to-[#7F49DF] hover:scale-105 hover:opacity-90 transition-transform duration-300 ease-in-out">Get Started</Link>
            </div>
        </nav>
    </header>
  )
}

export default Navbar