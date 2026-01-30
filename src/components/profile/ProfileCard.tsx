import { Button } from "../ui/button"
import { Settings } from "lucide-react"

const ProfileCard = () => {

  return (

    <div className="shadow flex px-10 py-7 mt-6 rounded-xl gap-7">
            <img src="https://i.pinimg.com/1200x/a0/1e/c9/a01ec98a6058dbe7a76909bc48e32f4c.jpg" alt="profile" className="rounded-full size-25 border-4  border-blue-200"/>
            <div className="flex flex-col gap-3">
                {/* name,editprofile,settings */}
                <div className="flex gap-3 items-center">
                    <h1 className="font-bold font-poppins text-xl">johndoe</h1>
                    <Button variant={"secondary"} className="cursor-pointer text-sm rounded-2xl">Edit Profile</Button>
                    <Settings size={20}/>
                </div>
                {/* post,followers,following */}
                <div className="flex gap-5">
                    <span>
                        <p className="font-semibold">42</p>
                        <p className="text-sm text-gray-500">posts</p>
                    </span> 
                    <span>
                        <p className="font-semibold">1,234</p>
                        <p className="text-sm text-gray-500">followers</p>
                    </span>
                    <span>
                        <p className="font-semibold">567</p>
                        <p className="text-sm text-gray-500">following</p>
                    </span>
                </div>
                {/* description */}
                <div className="text-gray-500 text-sm">Photography enthusiast | Travel lover | Coffee addict ☕</div>
            </div>
    </div>
  )
}

export default ProfileCard