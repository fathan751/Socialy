import { useEffect, useState } from "react"
import { Button } from "../ui/button"
import PostForm from "./PostForm"
import StoryForm from "./StoryForm"
import { useParams } from "react-router-dom"

const CreatePost = () => {

  const {type} = useParams()

  const [selectedCreate,setSelectedCreate] = useState<"Post"|"Story">("Post")

  useEffect(() => {
    if(type === "story"){
      setSelectedCreate("Story")
    }else setSelectedCreate("Post")
  },[type])

  return (
    <main className="pt-16 max-w-2xl mx-auto ">
      {/* Card Create */}
        <div className="shadow-sm border flex flex-col px-10 my-5 rounded-xl">
          <h1 className="text-3xl font-semibold merriweather my-5">Create</h1>

          <div className="grid grid-cols-2 gap-4 mt-2">
            <div className={`${selectedCreate === "Post"?'border-2':'border-0'} border-[#2862EA] rounded-3xl p-0.5`}>
              <Button onClick={() => setSelectedCreate("Post")} className="bg-[#2862EA] hover:bg-blue-400 cursor-pointer border-white w-full rounded-2xl py-5">Post</Button>
            </div>
            <div className={`${selectedCreate === "Story"?'border-2':'border-0'} border-[#2862EA] rounded-3xl p-0.5`}>
            <Button onClick={() => setSelectedCreate("Story")} variant={"secondary"} className="py-5 w-full rounded-2xl cursor-pointer">Story</Button>
            </div>
          </div>
          {selectedCreate === "Post"?
          <PostForm/> : <StoryForm/>
        }
        </div>
    </main>
  )
}

export default CreatePost