import SectionHeading from "./SectionHeading";
import {
  navigatingExperienceDescription,
  firstNavigatingBoxes,
  secondNavigatingBoxes,
} from "../../../assets/dummy";

const pseudoStyling =
  "before:absolute before:top-[-1px] before:left-[-1px] before:w-1/2 before:h-[1px] before:bg-gradient-to-r from-purple60 to-gray15 after:absolute after:left-[-1px] after:top-[-1px] after:bg-gradient-to-b from-purple60 to-gray15 after:w-[1px] after:h-1/2";

const NavigatingExperience = () => {
  return (
    <div className="mb-[71px] lg:mb-[102px] 2xl:mb-[125px]">
      <SectionHeading
        title="Navigating the Estatein Experience"
        description={navigatingExperienceDescription}
        className="mb-10 md:mb-[60px] xl:mb-20"
      />
      <div className="flex flex-col xl:gap-[50px] md:gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px] md:gap-5 xl:gap-[30px]">
          {firstNavigatingBoxes.map((box) => (
            <div key={box.title} className="flex flex-col">
              <span className="text-[16px] xl:text-[20px] font-medium leading-[150%] border-l text-white border-purple60 py-[14px] px-4 xl:px-5 xl:py-4">
                {box.step}
              </span>
              <div
                className={`flex flex-col gap-[14px] md:gap-4 xl:gap-5 py-[30px] px-[30px] md:py-10 md:px-10 xl:py-[50px] xl:px-[50px] border rounded-tr-xl rounded-br-xl rounded-bl-xl border-gray15 relative bg-[linear-gradient(121deg,#703BF7_-25%,rgba(112,59,247,0.00)_13.65%)] ${pseudoStyling}`}
              >
                <h3 className="text-[18px] md:text-[20px] xl:text-[26px] font-semibold leading-[150%] text-white h-auto">
                  {box.title}
                </h3>
                <p className="text-[14px] md:text-[16px] xl:text-[18px] font-medium leading-[150%] text-gray60">
                  {box.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px] md:gap-5 xl:gap-[30px]">
          {secondNavigatingBoxes.map((box) => (
            <div key={box.title} className="flex flex-col">
              <span className="text-[16px] xl:text-[20px] font-medium leading-[150%] border-l text-white border-purple60 py-[14px] px-4 xl:px-5 xl:py-4">
                {box.step}
              </span>
              <div
                className={`flex flex-col gap-[14px] md:gap-4 xl:gap-5 py-[30px] px-[30px] md:py-10 md:px-10 xl:py-[50px] xl:px-[50px] border rounded-tr-xl rounded-br-xl rounded-bl-xl border-gray15 relative bg-[linear-gradient(121deg,#703BF7_-25%,rgba(112,59,247,0.00)_13.65%)] ${pseudoStyling}`}
              >
                <h3 className="text-[18px] md:text-[20px] xl:text-[26px] font-semibold leading-[150%] text-white h-auto">
                  {box.title}
                </h3>
                <p className="text-[14px] md:text-[16px] xl:text-[18px] font-medium leading-[150%] text-gray60">
                  {box.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavigatingExperience;
