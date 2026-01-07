import { Camera,Heart,Users,MessageCircle } from "lucide-react"
import SmallCard from "../SmallCard"

const WhereStoriesConnect = () => {

  return (
    <section className="w-full bg-[#FBFBFC] py-23 ">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-5 px-3">

            <span className="text-4xl font-black font-satoshi">Where Stories Connect</span>

            <p className="text-[17px] font-medium text-gray-500 opacity-80">Share moments. Build Connections. All in one beautiful platform.</p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-7 px-10 mt-7">
              <SmallCard Icon={Camera} title={"Photo Sharing"} description={"Upload and share your best moments with stunning photo posts"}/>
              <SmallCard Icon={Heart} title={"Stories"} description={"Share 24-hour stories that disappear, keeping it fresh and fun"}/>
              <SmallCard Icon={Users} title={"Follow Friends"} description={"Build your network and follow creators you love"}/>
              <SmallCard Icon={MessageCircle} title={"Engage"} description={"Like, comment, and interact with posts you enjoy"}/>
            </div>
        </div>
        
        
    </section>
  )
}

export default WhereStoriesConnect