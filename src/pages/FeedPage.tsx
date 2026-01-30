import NavbarFeeds from "@/components/feeds/NavbarFeeds"
import Stories from "@/components/feeds/Stories"
import PostCard from "@/components/feeds/PostCard"
import SuggestionFoll from "@/components/feeds/SuggestionFoll"

const FeedPage = () => {

  return (
    <>
      <NavbarFeeds/>
      <main className="w-full mt-20">
          <div className="flex gap-8 mx-auto max-w-5xl">
            <div className="flex-2 flex flex-col gap-7 items-center pb-5">
              {/* Stories */}
              <Stories/>
              {/* post */}
              <PostCard/>
              <PostCard/>
              <PostCard/>
            </div>
            <SuggestionFoll/>
          </div>
      </main>
    </>
  )
}

export default FeedPage