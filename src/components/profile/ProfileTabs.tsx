import { Bookmark } from "lucide-react"
import { useState } from "react"
import Nopost from "@/components/profile/Nopost"


const ProfileTabs = () => {
    const [tabsActive,setTabsActive] = useState("posts")

  return (
    <>
    <div className="mt-10 grid grid-cols-3 border-b">
        <button 
        onClick={() => setTabsActive("posts")} 
        className={`py-2 text-center text-gray-500 cursor-pointer border-b-2 ${tabsActive === "posts"?"border-b-black ":"border-transparent text-gray-400"} `}>
            Post
        </button>

        <button 
        onClick={() => setTabsActive("saved")}
        className={`py-2 flex justify-center gap-2 items-center  text-gray-500 cursor-pointer border-b-2 ${tabsActive === "saved"?"border-b-black ":"border-transparent text-gray-400"} `}>
            <Bookmark size={13}/>
            Saved
        </button>

        <button 
        onClick={() => setTabsActive("liked")} 
        className={`py-2 text-center text-gray-500 cursor-pointer border-b-2 ${tabsActive === "liked"?"border-b-black ":"border-transparent text-gray-400"} `}>
            Liked
        </button>
    </div>
    <Nopost/>
    </>
  )
}

export default ProfileTabs