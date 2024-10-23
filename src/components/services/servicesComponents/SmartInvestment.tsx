import { Link } from "react-router-dom";
import CommonHeading from "../../CommonHeading";
import { smartInvestments, smallAbstract } from "../../../assets/dummyTwo";

const smartInvestmentDescription: string =
  "Building a real estate portfolio requires a strategic approach. Estatein's Investment Advisory Service empowers you to make smart investments and informed decisions.";

const SmartInvestment = () => {
  return (
    <div className="mb-[71px] lg:mb-[90px] 2xl:mb-[110px] flex flex-col xl:flex-row gap-5 xl:gap-[50px] 3xl:gap-[60px]">
      <div className="flex flex-col gap-[30px] xl:gap-10 3xl:gap-[50px]">
        <CommonHeading
          title="Smart Investments, Informed Decisions"
          description={smartInvestmentDescription}
        />
        <div className="flex flex-col gap-4 xl:gap-5 2xl:gap-[30px] p-6 lg:p-[30px] 2xl:p-10 3xl:p-[50px] border border-gray15 rounded-[10px] relative bg-gray10 overflow-hidden">
          <img
            src={smallAbstract}
            alt="Abstract"
            className="absolute left-0 top-0 bg-cover bg-center w-full h-full"
          />
          <h2 className="text-[20px] lg:text-[20px] 2xl:text-2xl font-bold text-white leading-[150%] relative">
            Unlock Your Investment Potential
          </h2>
          <p className="text-[14px] lg:text-[15px] xl:text-[16px] font-medium text-gray60 leading-[150%] relative">
            Explore our Property Management Service categories and let us handle
            the complexities while you enjoy the benefits of property ownership.
          </p>
          <Link
            to="/about-us"
            className="text-[14px] 2xl:text-[18px] leading-[150%] text-white text-center bg-gray08 border border-gray15 rounded-lg py-[14px] px-5 hover:bg-gray10 duration-200 w-full relative"
          >
            Learn More
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[10px] bg-gray10 rounded-[10px] p-[10px]">
        {smartInvestments.map((item) => (
          <div
            key={item.title}
            className="flex flex-col gap-4 xl:gap-5 2xl:gap-[30px] p-6 lg:p-[30px] xl:p-10 2xl:p-[50px] border border-gray15 rounded-[10px] bg-gray08"
          >
            <div className="flex items-center gap-[10px] xl:gap-4 2xl:gap-5">
              <img src={item.icon} alt={item.title} className="w-auto h-auto" />
              <h2 className="text-xl 2xl:text-2xl font-semibold leading-[150%] text-white">
                {item.title}
              </h2>
            </div>
            <p className="text-[16px] 2xl:text-[18px] leading-[150%] text-gray60 font-medium">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmartInvestment;
