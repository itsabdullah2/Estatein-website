import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import banner from "../assets/images/banner.png";
import bannerMobile from "../assets/images/banner-mobile.png";
import bannerLaptop from "../assets/images/banner-laptop.png";
import { useAppState } from "../context/AppStateContext";
import { BsStars } from "react-icons/bs";

const Banner = () => {
  const { isBannerOpen, handleCloseBanner } = useAppState();

  return (
    <div
      className={`${
        isBannerOpen ? "flex items-center justify-center" : "hidden"
      } relative pt-10 pb-5 px-4 md:pt-[18px] md:pb-[18px] sm:px-24 lg:px-40 border-b-2 border-gray15 bg-gray10`}
    >
      <picture>
        <source
          srcSet={`${banner} 1920w, ${bannerLaptop} 1440w, ${bannerMobile} 390w`}
          sizes="(max-width: 390px) 390px, (max-width: 1440px) 1440px, 1920px"
        />
        <img
          src={banner}
          alt="A beautiful banner image"
          className="absolute left-0 top-0 bg-cover bg-center w-full h-full"
        />
      </picture>
      <div className="flex items-center gap-[6px] md:gap-[10px] text-white relative font-medium text-[11px] sm:text-[18px]">
        <p className="flex items-center md:gap-1">
          <BsStars className="text-yellow-400" /> Discover Your Dream Property
          with Estatein
        </p>
        <Link to="/about-us" className="underline">
          Learn More
        </Link>
      </div>
      <button
        className="ml-[23px] md:ml-0 w-[26px] h-[26px] md:w-8 md:h-8 bg-lightWhite rounded-full flex items-center justify-center md:absolute md:top-1/2 md:-translate-y-1/2 md:right-8 cursor-pointer text-white z-50"
        onClick={handleCloseBanner}
      >
        <IoClose className="w-[18px] h-[18px] md:w-6 md:h-6" />
      </button>
    </div>
  );
};
export default Banner;
