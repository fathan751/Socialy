import { Camera,Home,PlusSquare,Compass } from "lucide-react"
import { Link } from "react-router-dom"
import { useAuth } from "@/context/AuthContext"
import { useNavigate } from "react-router-dom"


const NavbarFeeds = () => {

  const {logout} = useAuth()
  const navigate = useNavigate()

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

        <input type="search" className="rounded-2xl py-2 px-4 w-75 bg-[#F3F4F6] focus:outline-none focus:ring-2 focus:ring-blue-500 " placeholder="Search Users..."/>

        <div className="flex gap-3 justify-end">
          <Link to={'/feed'} className="bg-[#F3F4F6] p-2 rounded-xl cursor-pointer">
            <Home className="text-[#2862EA]"/>
          </Link>
          <Link to={'/explore'} className="p-2 cursor-pointer">
            <Compass/>
          </Link>
          <Link to={'/create'} className="p-2 cursor-pointer">
            <PlusSquare/>
          </Link>

        <div className="group relative">

          <Link to={'/profile/:id'} className="p-2 block">
            <img src="/images/dummy-profile.png" alt="profile" className="size-6 cursor-pointer" />
          </Link>

          <div className={`absolute top-full right-0 mt-2 shadow w-fit flex flex-col origin-top-right  ease-out transition-all opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 bg-white border`}>
            <Link to={'/profile/:id'} className="px-3 py-1 cursor-pointer hover:bg-blue-200 text-right">Profile</Link>
            <button onClick={handleLogout} className="font-medium py-1 cursor-pointer px-3 hover:bg-blue-200 text-right">Logout</button>
          </div>

        </div>
          
        </div>
      </nav>
    </header>
  )
}

export default NavbarFeeds