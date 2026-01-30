import { Image } from "lucide-react"
import { Button } from "../ui/button"
import { Link } from "react-router-dom"
import UseImageUpload from "@/hooks/UseImageUpload"

const PostForm = () => {

  const {inputRef,handleUpload,handleDelete,previewImg,file} = UseImageUpload()
 

  return (
    
    <div>
        <h2 className="font-medium mt-5 mb-2">Photo</h2>

        <div className="relative border-dashed border-2 hover:border-[#2862EA] h-155 rounded-xl flex items-center justify-center mb-5">
          
        <input ref={inputRef} onChange={handleUpload} type="file" name="photo" id="photo" className="hidden" accept="image/*"/>
        <label htmlFor="photo" className="absolute inset-0 cursor-pointer z-0"/>

        {previewImg && <img src={previewImg} alt="picture" className="absolute rounded-xl w-full h-full inset-0 z-10 object-cover"/>}

        {file && <button  id="deleteImg" onClick={handleDelete} className="text-white absolute bg-[#7E4ADF] rounded-full z-20  hover:bg-violet-300 top-5 right-3 py-1 px-3 cursor-pointer font-semibold">X</button>}

          <div className="flex flex-col items-center">
            <div className="rounded-full bg-gray-100 p-4 size-fit">
              <Image size={35} className="text-gray-500"/>
            </div>
              <p className="font-semibold mt-5">Click to Upload</p>
              <p className="text-gray-500">JPG, PNG, GIF up to 10MB</p>
          </div>

        </div>

        <label htmlFor="caption" className="font-semibold">Caption</label>
        <textarea placeholder="Write a caption..." id="caption" className="w-full border rounded-xl p-2 my-2 "/>

        <div className="grid grid-cols-2 gap-4 mt-2 mb-5">
          <Link to={'/feed'} className="py-5 rounded-2xl cursor-pointer h-10 flex justify-center items-center font-semibold bg-gray-100">Cancel</Link>

          <Button className="bg-linear-to-r to-60% from-[#2862EA] to-[#7F49DF] cursor-pointer border-white w-full rounded-2xl py-5">Share Post</Button>
        </div>

    </div>
  ) 
}

export default PostForm