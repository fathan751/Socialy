import { Link } from "react-router-dom"
import { Compass,Home,PlusSquare,Camera } from "lucide-react"
import { useAuth } from "@/context/AuthContext"
import { useNavigate } from "react-router-dom"

const NavbarProfile = () => {

  const navigate = useNavigate()

  const {logout} = useAuth()

  const handleLogout = () => {
    logout()
    navigate('/login',{replace:true})
  }

  return (
    <header className="fixed top-0 w-full h-16 px-10 border-b bg-white shadow">
      <nav className="flex justify-between items-center mx-auto max-w-7xl h-full ">
        <Link to={'/feed'} className="flex gap-3">
          <div className="bg-linear-to-r from-[#2862EA] to-[#7F49DF] p-1 rounded-lg">
            <Camera size={25} className="text-white"/>
          </div>
          <span className="font-semibold font-poppins bg-clip-text bg-linear-to-r from-[#2862EA] to-[#7F49DF] text-transparent text-2xl">Socialy</span>
        </Link>

        <div className="flex gap-3">
          <Link to={'/feed'} className="bg-[#F3F4F6] p-2 rounded-xl cursor-pointer">
            <Home className="text-[#2862EA]"/>
          </Link>
          <Link to={'/explore'} className="p-2 cursor-pointer">
            <Compass/>
          </Link>
          <Link to={'/create'} className="p-2 cursor-pointer">
            <PlusSquare/>
          </Link>

          <div className="relative group">
          <Link to={'/profile/:id'} className="p-2 block">
              <img src="/images/dummy-profile.png" alt="profile" className="size-6 cursor-pointer" />
          </Link>

          <div className="absolute right-0 top-full mt-3 bg-white border shadow flex flex-col scale-0 origin-top-right opacity-0 transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100 size-fit ">
            <Link to={'/profile/:id'} className="text-right px-2 hover:bg-blue-200 py-1">Profile</Link>
            <button onClick={handleLogout} className="text-right px-3 hover:bg-blue-200 py-1 font-semibold cursor-pointer">Logout</button>
          </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavbarProfile