import {Sparkles} from "lucide-react"
import { Link } from "react-router-dom"
import { useAuth } from "@/context/AuthContext"


const MainHero = () => {

    const {token} = useAuth()

  return (

    <section className="flex flex-col items-center gap-10 py-20 px-3">
        <div className="bg-[#efefef] rounded-full px-4 py-2 flex items-center gap-2">
            <Sparkles size={20} className="text-blue-600"/>
            <span>More Than Social</span>
        </div>

        <h1 className="text-7xl font-extrabold font-poppins">Connect Your <span className="bg-linear-to-r bg-clip-text text-transparent from-[#2862EA] to-[#7F49DF]">World</span></h1>

        <p className="text-[22px] line-clamp-2 text-center font-poppins text-gray-500 opacity-80">Socialy adalah tempat dimana momen, cerita, dan koneksi bertemu <br/> dalam satu ruang.</p>

        <div className="flex flex-col lg:flex-row gap-4">
            <Link to={token?"/feed":"/register"} className="font-semibold px-10 py-3 text-xl text-white cursor-pointer hover:scale-105 hover:opacity-90 rounded-xl
                bg-linear-to-r from-[#2B60E9] from-0% to-60% to-[#7F49DF] transition-transform duration-300 ease-in-out
            ">Start Connecting Today</Link>
            <Link to={token?"/feed":"/login"} className="bg-white text-xl px-10 py-3 hover:text-white hover:bg-[#7F49DF] rounded-xl cursor-pointer transition-colors ease-out duration-500">I already have an account</Link>
        </div>
    </section>
  )
}

export default MainHero