import SectionHeading from "../../CommonHeading";
import {
  ourAchievementsDescription,
  achievementsBoxes,
} from "../../../assets/dummy";

const OurAchievements = () => {
  return (
    <div className="my-20 lg:my-[120px] 2xl:my-[150px]">
      <SectionHeading
        title="Our Achievements"
        description={ourAchievementsDescription}
        className="mb-10 md:mb-[60px] xl:mb-20"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-[30px] xl:gap-10">
        {achievementsBoxes.map((box) => (
          <div className="flex flex-col gap-4 md:gap-6 xl:gap-[30px] py-[30px] px-[30px] md:py-10 md:px-10 xl:py-[50px] xl:px-[50px] bg-gray08 border border-gray15 rounded-xl">
            <h3 className="text-[20px] md:text-2xl xl:text-[30px] text-white leading-[150%]">
              {box.title}
            </h3>
            <p className="text-[14px] md:text-[16px] xl:text-[18px] text-gray60 font-medium leading-[150%]">
              {box.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurAchievements;
