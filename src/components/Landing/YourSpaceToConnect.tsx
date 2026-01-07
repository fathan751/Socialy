import { Link } from "react-router-dom"

const YourSpaceToConnect = () => {

  return (
    <section className="w-full flex justify-center">
        <div className="mx-5 bg-linear-to-r from-[#2862EA] to-70% to-[#7F49DF] flex flex-col items-center my-20 px-2 max-w-4xl w-full py-12 gap-5 rounded-3xl">
            <span className="text-4xl text-white font-black font-satoshi">Your Space to Connect</span>
            <span className="text-white font-semibold opacity-85">Join our growing community and start sharing your story today.</span>
            <Link to={"/register"} className="text-black bg-white hover:bg-gray-300 text-xl px-10 py-4 mt-3 cursor-pointer rounded-xl font-semibold transition-colors duration-300 ease-out">Create Your Account</Link>
        </div>
    </section>
  )
}

export default YourSpaceToConnect