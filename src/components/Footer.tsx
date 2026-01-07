import { Camera } from "lucide-react"

const Footer = () => {

  return (
    <footer className="border-t w-full">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-5">
            <div className="flex gap-3 items-center">
                <div className="bg-linear-to-r rounded-full from-[#2862EA] to-[#7F49DF] p-1">
                    <Camera className="text-white" size={20}/>
                </div>
                <span className="bg-clip-text text-transparent bg-linear-to-r from-[#2862EA] to-[#7F49DF] font-bold text-lg font-poppins">socialy</span>
            </div>
            <div className="text-gray-500 text-sm font-satoshi font-medium ">&copy; {new Date().getFullYear()} Socialy. Open-source under the MIT License.</div>
        </div>
    </footer>
  )
}

export default Footer