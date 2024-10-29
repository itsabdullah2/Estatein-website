import { abstractLeft, abstractRight } from "../assets/dummy";

const StartJourney = () => {
  return (
    <div className="border-t border-b border-gray15 py-[50px] px-4 md:py-[50px] md:px-[40px] xl:py-[60px] xl:px-20 2xl:py-[100px] 2xl:px-[162px] relative overflow-hidden">
      <div className="flex items-center justify-between flex-col lg:flex-row gap-[30px] lg:gap-[10px] relative z-10">
        <div className="flex flex-col gap-[10px] w-full md:w-[600px] lg:w-[700px] xl:g:w-[979px] 2xl:w-[1154px]">
          <h2 className="text-[28px] lg:text-[38px] font-semibold text-white">
            Start Your Real Estate Journey Today
          </h2>
          <p className="text-[14px] lg:text-[18px] font-medium text-gray60">
            Your dream property is just a click away. Whether you're looking for
            a new home, a strategic investment, or expert real estate advice,
            Estatein is here to assist you every step of the way. Take the first
            step towards your real estate goals and explore our available
            properties or get in touch with our team for personalized
            assistance.
          </p>
        </div>
        <a
          href="/properties#find-property"
          className="text-[14px] xl:text-[18px] font-medium text-white bg-purple60 rounded-lg py-[14px] px-5 text-center w-full md:w-fit hover:bg-purple65 duration-200"
        >
          Explore Properties
        </a>
      </div>
      <img
        src={abstractLeft}
        alt="Abstract Image"
        className="absolute left-[-120px] md:left-0 top-0 md:top-auto rotate-90 md:rotate-0 md:bottom-0 w-[522px] h-[284px] md:w-[474px] md:h-[258px]"
        loading="lazy"
      />
      <img
        src={abstractRight}
        alt="Abstract Image"
        className="absolute right-0 bottom-0 w-[398px] h-[217px] xl:w-[569px] xl:h-[310px]"
        loading="lazy"
      />
    </div>
  );
};

export default StartJourney;
