import type {LucideIcon} from "lucide-react"

interface SmallCardProps{
    Icon: LucideIcon
    title?: string
    description?: string
}


const SmallCard = ({Icon,title,description}:SmallCardProps) => {

  return (
    <div className="flex flex-col gap-3 bg-white p-6 rounded-xl shadow hover:-translate-y-2 transition-transform ease-out duration-300">
        <div className="bg-[#EDF0FE] p-3 rounded-lg w-fit">
            <Icon size={30} className="text-blue-600"/>
        </div>
        <span className="font-bold text-xl">{title}</span>
        <p className="text-gray-500 opacity-80">{description}</p>
    </div>
  )
}

export default SmallCard