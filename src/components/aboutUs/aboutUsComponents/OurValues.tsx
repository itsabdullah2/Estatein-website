import SectionHeading from "./SectionHeading";
import {
  ourValuesDescription,
  circularStar,
  circularPeople,
  circularHat,
} from "../../../assets/dummy";

const OurValues = () => {
  return (
    <div className="flex items-center flex-col xl:flex-row gap-10 xl:gap-[60px] 3xl:gap-20 mb-[61px] lg:mb-[90px] 2xl:mb-[110px]">
      <div className="w-full xl:w-[517px]">
        <SectionHeading title="Our Values" description={ourValuesDescription} />
      </div>
      <div className="flex-1 flex flex-col bg-gray08 border border-gray15 rounded-xl p-6 lg:p-[50px] xl:p-[60px] w-full lg:w-auto">
        <div className="flex items-center flex-col lg:flex-row pb-[30px] border-b border-gray15">
          <div className="flex-1 pb-5 lg:pb-0 border-b lg:border-b-0 lg:border-r border-gray15 lg:pr-[30px] w-full lg:w-auto">
            <div className="flex items-center gap-2 lg:gap-[10px] 2xl:gap-[14px] mb-[14px] lg:mb-4 2xl:mb-5">
              <img
                src={circularStar}
                alt="Circular Start"
                className="w-[52px] h-[52px] lg:w-[60px] lg:h-[60px] 2xl:w-[74px] 2xl:h-[74px]"
              />
              <h3 className="text-white text-[18px] lg:text-[20px] 2xl:text-2xl font-semibold leading-[150%]">
                Trust
              </h3>
            </div>
            <p className="text-[14px] lg:text-[16px] 2xl:text-[18px] font-medium leading-[150%] text-gray60">
              Trust is the cornerstone of every successful real estate
              transaction.
            </p>
          </div>
          <div className="flex-1 pt-5 lg:pt-0 lg:pl-[30px] w-full lg:w-auto">
            <div className="flex items-center gap-2 lg:gap-[10px] 2xl:gap-[14px] mb-[14px] lg:mb-4 2xl:mb-5">
              <img
                src={circularHat}
                alt="Circular Hat"
                className="w-[52px] h-[52px] lg:w-[60px] lg:h-[60px] 2xl:w-[74px] 2xl:h-[74px]"
              />
              <h3 className="text-white text-[18px] lg:text-[20px] 2xl:text-2xl font-semibold leading-[150%]">
                Excellence
              </h3>
            </div>
            <p className="text-[14px] lg:text-[16px] 2xl:text-[18px] font-medium leading-[150%] text-gray60">
              We set the bar high for ourselves. From the properties we list to
              the services we provide.
            </p>
          </div>
        </div>
        <div className="flex items-center pt-[30px] flex-col lg:flex-row">
          <div className="flex-1 pb-5 lg:pb-0 border-b lg:border-b-0 lg:border-r border-gray15 lg:pr-[30px] w-full lg:w-auto">
            <div className="flex items-center gap-2 lg:gap-[10px] 2xl:gap-[14px] mb-[14px] lg:mb-4 2xl:mb-5">
              <img
                src={circularPeople}
                alt="Circular People Icon"
                className="w-[52px] h-[52px] lg:w-[60px] lg:h-[60px] 2xl:w-[74px] 2xl:h-[74px]"
              />
              <h3 className="text-white text-[18px] lg:text-[20px] 2xl:text-2xl font-semibold leading-[150%]">
                Client-Centric
              </h3>
            </div>
            <p className="text-[14px] lg:text-[16px] 2xl:text-[18px] font-medium leading-[150%] text-gray60">
              Your dreams and needs are at the center of our universe. We
              listen, understand.
            </p>
          </div>
          <div className="flex-1 pt-5 lg:pt-0 lg:pl-[30px] w-full lg:w-auto">
            <div className="flex items-center gap-2 lg:gap-[10px] 2xl:gap-[14px] mb-[14px] lg:mb-4 2xl:mb-5">
              <img
                src={circularStar}
                alt="Circular Star"
                className="w-[52px] h-[52px] lg:w-[60px] lg:h-[60px] 2xl:w-[74px] 2xl:h-[74px]"
              />
              <h3 className="text-white text-[18px] lg:text-[20px] 2xl:text-2xl font-semibold leading-[150%]">
                Our Commitment
              </h3>
            </div>
            <p className="text-[14px] lg:text-[16px] 2xl:text-[18px] font-medium leading-[150%] text-gray60">
              We are dedicated to providing you with the highest level of
              service, professionalism, and support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
