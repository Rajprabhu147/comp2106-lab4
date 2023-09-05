import Head from "next/head";
import HeroSection from "../components/hero-section";
import AreaContainer from "../components/area-container";
import FeatureContainer from "../components/feature-container";
import RentPropertiesContainer from "../components/rent-properties-container";
import RentPropertiesForm from "../components/rent-properties-form";
import Contact from "../components/contact";
import Footer from "../components/footer";

const LandingPage = () => {
  return (
    <>
      <Head>
        <title>Real Estate</title>
        <meta name="description" content="Discover your perfect home" />
      </Head>
      <main className="relative bg-gray-white w-full h-[5095.99px] flex flex-col items-center justify-start">
        <header className="self-stretch bg-gray-white h-[98px] flex flex-row py-[22px] px-20 box-border items-center justify-center gap-[10px] sticky w-full top-[0] [background:white] z-[2] lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
          <header className="flex-1 flex flex-row items-center justify-between text-center text-5xl text-primary-500 font-body-regular-600">
            <div className="flex flex-row items-center justify-center gap-[8px]">
              <img className="relative w-11 h-11" alt="" src="/houseline.svg" />
              <div className="flex flex-col items-start justify-start">
                <h2 className="m-0 relative text-inherit leading-[24px] font-semibold font-inherit">
                  REIS
                </h2>
                <div className="relative text-sm leading-[16px] font-medium">
                  Real State
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-end text-sm text-primary-900 md:hidden sm:hidden">
              <div className="flex flex-row items-start justify-start gap-[30px]">
                <div className="relative leading-[22px]">HOME</div>
                <div className="relative leading-[22px]">ABOUT US</div>
                <div className="relative leading-[22px]">OUR AGENTS</div>
                <div className="relative leading-[22px] font-semibold">
                  PROPERTIES
                </div>
                <div className="relative leading-[22px]">GALLERY</div>
                <div className="relative leading-[22px]">BLOG</div>
                <div className="relative leading-[22px]">CONTACT US</div>
                <div className="relative leading-[22px]">SEARCH</div>
              </div>
            </div>
          </header>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] hidden flex-row items-center justify-center lg:hidden md:flex sm:flex">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0 md:flex"
              alt=""
              src="/notification.svg"
            />
          </button>
        </header>
        <HeroSection />
        <AreaContainer />
        <FeatureContainer />
        <RentPropertiesContainer />
        <RentPropertiesForm />
        <Contact />
        <Footer
          imageIds="/houseline1.svg"
          smallImageIds="/social-media-logo.svg"
          mediumImageIds="/social-media-logo1.svg"
          smallImageIds2="/social-media-logo2.svg"
          smallImageIds3="/social-media-logo3.svg"
          largeImageIds="/social-media-logo4.svg"
          propOverflow="unset"
        />
      </main>
    </>
  );
};

export default LandingPage;
