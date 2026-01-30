import { Grid } from "lucide-react"

const Nopost = () => {

  return (
    <div className="flex flex-col items-center gap-5 mt-10">
        <Grid size={40} className="text-gray-500"/>
        <h2 className="font-bold text-xl">No posts yet</h2>
        <p className="text-gray-500 text-sm">Share your first photo!</p>
    </div>
  )
}

export default Nopost