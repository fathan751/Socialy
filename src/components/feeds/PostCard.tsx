import { Heart,MessageCircle,Share2Icon,Bookmark,Send } from "lucide-react"

const PostCard = () => {
    
  return (
    <section className='shadow max-w-lg rounded-lg'>
        {/* header */}
        <div className="px-5 py-3 flex justify-between items-center">
            <div className="flex gap-3 items-center">
                <img src='https://i.pinimg.com/736x/8a/8a/9e/8a8a9edf4ff2beb19ca5423d78ea8a04.jpg' className='size-10 rounded-full object-cover cursor-pointer'/>
                <div className="flex flex-col ">
                    <h2 className='font-satoshi font-semibold cursor-pointer'>sarahJ</h2>
                    <p className='text-[12px] text-gray-500 font-medium opacity-80 font-satoshi'>about 1 hour ago</p>
                </div>
            </div>
            <button className="font-black cursor-pointer h-fit px-2 pb-2 hover:bg-violet-200 rounded-full">...</button>
        </div>
        <img src="https://i.pinimg.com/1200x/b0/13/68/b01368a4c157e9c8919bb33c0e535786.jpg" alt="post" className='object-cover max-h-150 w-full'/>
        <div className="flex py-5 px-7 justify-between items-center">
            <div className="flex gap-7 items-center">
                <Heart size={15}/>
                <MessageCircle size={15}/>
                <Share2Icon size={15}/>
            </div>
            <Bookmark size={15}/>
        </div>
        <div className="pl-5 pr-7">
            <div className="font-bold font-satoshi  text-[15px] mb-2">234 likes</div>
            <div className="font-bold line-clamp-2">sarahJ <span className="font-normal text-[15px] ml-1">Morning vibes ✨ Starting the day with a beautiful sunrise. Nature  never fails to amaze me!</span></div>
            <button className="text-gray-500 opacity-90 text-[14px] cursor-pointer my-1 pb-3">View all # comments</button>
            <div className="flex gap-6 items-center mb-5">
                <input type="text" className="bg-[#F3F4F6] w-full rounded-2xl px-4 py-2 text-[14px]" placeholder="Add a Comment..."/>
                <Send size={17} className="text-blue-300 cursor-pointer"/>
            </div> 
        </div>
    </section>
  )
}

export default PostCard