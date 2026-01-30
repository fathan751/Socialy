
const UserRecom = () => {

  return (
    <div className="flex gap-2 items-center ">
            {/* photo */}
            <img src="https://i.pinimg.com/736x/8a/8a/9e/8a8a9edf4ff2beb19ca5423d78ea8a04.jpg" alt="profile" className="rounded-full size-9 object-cover" />
            {/* username */}
            <div className="flex flex-col flex-3">
                <span className="font-medium">sarahJ</span>
                <p className="text-[12px] text-gray-400 line-clamp-1">Tech enthusiast</p>
            </div>
            {/* follow button */}
            <button className="flex-1 bg-blue-600 text-white px-2 py-1 rounded-2xl font-satoshi font-semibold text-sm cursor-pointer">Follow</button>
    </div>
  )
}

export default UserRecom