import { Link } from "react-router-dom";
import SectionHeading from "./SectionHeading";
import {
  ourClientsDescription,
  ourClientBox,
  domainIcon,
  categoryIcon,
} from "../../../assets/dummy";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

const OurClients = () => {
  return (
    <div className="mb-20 lg:mb-[120px] 2xl:mb-[150px]">
      <SectionHeading
        title="Our Valued Clients"
        description={ourClientsDescription}
        className="mb-10 md:mb-[60px] xl:mb-20"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 2xl:gap-[50px] overflow-hidden">
        {ourClientBox.map((client) => (
          <div
            key={client.heading}
            className="py-6 px-6 md:py-10 md:px-10 xl:py-[50px] xl:px-[50px] flex flex-col gap-[30px] border border-gray15 rounded-xl"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
              <div className="flex flex-col gap-[2px]">
                <span className="text-[14px] md:text-[16px] xl:text-[18px] font-medium leading-[150%] text-gray60">
                  {client.date}
                </span>
                <h3 className="text-[20px] md:text-[24px] xl:text-[30px] font-semibold leading-[150%] text-white">
                  {client.heading}
                </h3>
              </div>
              <Link
                to="https://website.com"
                className="text-[14px] xl:text-[18px] text-center font-medium leading-[150%] py-[14px] px-5 bg-gray10 border border-gray15 rounded-lg text-white w-full md:w-auto hover:bg-gray15 duration-200"
              >
                View Website
              </Link>
            </div>
            <div className="flex items-center">
              <div className="pr-4 flex-1">
                <div className="flex items-center gap-[2px] md:gap-1 xl:gap-[6px]">
                  <img
                    src={domainIcon}
                    alt="Domain Icon"
                    className="w-[18px] h-[18px] md:w-5 md:h-5 xl:w-6 xl:h-6"
                  />
                  <span className="text-[12px] md:text-[14px] xl:text-[18px] font-medium text-gray60 leading-[150%]">
                    Domain
                  </span>
                </div>
                <h4 className="text-[14px] md:text-[16px] xl:text-xl font-medium text-white">
                  {client.domainDesc}
                </h4>
              </div>
              <div className="pl-4 border-l border-gray15 flex-1">
                <div className="flex items-center gap-[2px] md:gap-1 xl:gap-[6px]">
                  <img
                    src={categoryIcon}
                    alt="Category Icon"
                    className="w-[18px] h-[18px] md:w-5 md:h-5 xl:w-6 xl:h-6"
                  />
                  <span className="text-[12px] md:text-[14px] xl:text-[18px] font-medium text-gray60 leading-[150%]">
                    Category
                  </span>
                </div>
                <h4 className="text-[14px] md:text-[16px] xl:text-xl font-medium text-white">
                  {client.categoryDesc}
                </h4>
              </div>
            </div>
            <div className="py-5 px-5 rounded-xl border border-gray15 flex flex-col gap-2 md:gap-[10px] xl:gap-[14px]">
              <span className="text-[14px] md:text-[16px] xl:text-[18px] text-gray60 leading-[150%] font-medium">
                What They Said 🤗
              </span>
              <p className="text-[14px] md:text-[16px] xl:text-[18px] text-white leading-[150%] font-medium">
                {client.whatTheySay}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center md:justify-between pt-5 mt-[30px] md:mt-10 xl:mt-[50px] md:border-t border-gray15">
        <div className="text-xl medium text-gray60 hidden md:block">
          <span className="text-white">01</span> of <span>10</span>
        </div>
        <div className="flex-1 md:flex-auto flex items-center justify-between gap-[10px]">
          <button className="flex items-center justify-center w-[58px] h-[58px] rounded-full border border-gray15 text-white hover:bg-gray15 duration-200">
            <FaArrowLeftLong size={25} />
          </button>
          <div className="text-[14px] lg:text-xl medium text-gray60 block md:hidden">
            <span className="text-white">01</span> of <span>10</span>
          </div>
          <button className="flex items-center justify-center w-[58px] h-[58px] rounded-full border border-gray15 text-white hover:bg-gray15 duration-200">
            <FaArrowRightLong size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
