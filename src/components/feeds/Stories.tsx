import { Plus } from "lucide-react"
import StoryUser from "./story/StoryUser"
import { Link } from "react-router-dom"

const Stories = () => {

  return (

    <div className="shadow p-5 rounded-lg w-full">
        <div className="flex gap-10">
            <div className="flex flex-col items-center gap-1">
                <Link to="/create/story" className="rounded-full p-5 bg-[#efefef] w-fit">
                    <Plus/>
                </Link>
                <span className="text-sm">Your Story</span>
            </div>
            <StoryUser/>
            <StoryUser/>
            <StoryUser/>
            <StoryUser/>
        </div>
    </div>
  )
}

export default Stories