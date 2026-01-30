import Navbar from "@/components/Navbar";
import MainHero from "@/components/Landing/MainHero";
import WhereStoriesConnect from "@/components/Landing/WhereStoriesConnect";
import YourSpaceToConnect from "@/components/Landing/YourSpaceToConnect";
import Footer from "@/components/Footer";

const LandingPage = () => {

  return (
    <>
        <Navbar/>
        <main className="mt-18">
            <MainHero/>
            <WhereStoriesConnect/>
            <YourSpaceToConnect/>
            <Footer/>
        </main>
    </>
  );
};



export default LandingPage;