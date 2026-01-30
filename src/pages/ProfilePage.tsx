import NavbarProfile from "@/components/profile/NavbarProfile"
import ProfileCard from "@/components/profile/ProfileCard"
import PostsProfile from "@/components/profile/ProfileTabs"

const ProfilePage = () => {

  return (
    <>
      <NavbarProfile/>
      <main className="max-w-2xl mx-auto pt-16">
        <ProfileCard/>
        <PostsProfile/>
      </main>
    </>
  )
}

export default ProfilePage