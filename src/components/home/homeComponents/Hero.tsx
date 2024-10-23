import { Link } from "react-router-dom";
import {
  containerImage,
  circularImage,
  encourage,
} from "../../../assets/dummy";
interface BoxesType {
  number: string;
  title: string;
  twoCols?: boolean;
}

const boxes: BoxesType[] = [
  {
    number: "200+",
    title: "Happy Customers",
    twoCols: false,
  },
  {
    number: "10k+",
    title: "Properties For Clients",
    twoCols: false,
  },
  {
    number: "16+",
    title: "Years of Experience",
    twoCols: true,
  },
];

const Hero = () => {
  return (
    <>
      <div className="flex items-center justify-between xl:flex-row flex-col-reverse gap-5 lg:gap-10 xl:gap-20">
        <div className="pl-4 pr-4 xl:pr-0 xl:pl-40 w-full xl:w-auto mb-20">
          <div className="mt-14 lg:mt-10 2xl:mt-0">
            <h2 className="text-white font-semibold text-[28px] md:text-4xl 2xl:text-6xl">
              Discover Your Dream <br /> Property with Estatein
            </h2>
            <p className="font-medium text-[14px] md:text-[16px] lg:text-[18px] leading-[150%] text-gray60 mt-6">
              Your journey to finding the perfect property begins here. Explore
              our listings to find the home <br /> that matches your dreams.
            </p>
          </div>

          <div className="flex items-center lg:flex-row flex-col gap-5 mt-[60px]">
            <Link
              to="/about-us"
              className="py-[18px] px-6 rounded-[10px] border border-gray15 font-medium text-[18px] text-white text-center w-full lg:w-auto hover:bg-gray10 duration-200"
            >
              Learn More
            </Link>
            <Link
              to="/properties"
              className="py-[18px] px-6 rounded-[10px] bg-purple60 font-medium text-[18px] text-white text-center w-full lg:w-auto hover:bg-purple65 duration-200"
            >
              Browse Properties
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-[20px] mt-[60px]">
            {boxes.map((box) => (
              <div
                key={box.title}
                className={`text-center bg-gray10 rounded-[10px] px-6 py-4 border border-gray15 ${
                  box.twoCols ? "col-span-2 md:col-span-1" : ""
                }`}
              >
                <h3 className="font-bold text-[40px] text-white">
                  {box.number}
                </h3>
                <p className="text-[18px] font-medium text-gray60">
                  {box.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* The Image */}
        <div className="px-4 mt-20 xl:px-0 xl:mt-0 xl:w-auto relative">
          <img
            src={containerImage}
            alt="abstract"
            className="w-full rounded-xl xl:rounded-none xl:w-auto"
          />
          <Link to="/properties">
            <img
              src={circularImage}
              alt="Circular Image"
              className="w-[117px] h-[117px] lg:w-[129px] lg:h-[129px] absolute bottom-[-40px] xl:top-[92px] 2xl:top-[144px] left-4 xl:-left-[64.5px] z-[100]"
            />
          </Link>
        </div>
      </div>
      <div className="mx-4 lg:mx-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] py-[20px] px-[20px] border border-gray15 bg-gray08 rounded-xl ">
        {encourage.map((item) => (
          <div
            key={item.title}
            className="bg-gray10 py-5 md:py-10 px-[14px] md:px-5 rounded-xl relative flex justify-center"
          >
            <img
              src={item.arrow}
              alt={item.title}
              className="absolute w-[26px] h-[26px] md:w-[34px] md:h-[34px] right-5 top-5 md:right-[26.34px] md:top-[26.34px]"
            />
            <div className="flex flex-col items-center gap-5 text-center">
              <img
                src={item.icon}
                alt={"icon"}
                className="w-[36px] h-[36px] md:w-[82px] md:h-[82px]"
              />
              <p className="text-xl font-semibold text-white text-[14px] md:text-[18px]">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Hero;
