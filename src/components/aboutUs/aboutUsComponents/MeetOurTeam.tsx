import { Link } from "react-router-dom";
import SectionHeading from "../../CommonHeading";
import {
  meetOurTeamDescription,
  teamMemberBox,
  sendIcon,
  twitterIcon,
} from "../../../assets/dummy";

const MeetOurTeam = () => {
  return (
    <div className="mb-[71px] lg:mb-[102px] 2xl:mb-[125px]">
      <SectionHeading
        title="Meet The EStatein Team"
        description={meetOurTeamDescription}
        className="mb-10 md:mb-[60px] xl:mb-20"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 xl:gap-[30px]">
        {teamMemberBox.map((box) => (
          <div
            key={box.name}
            className="py-5 px-5 md:py-6 md:px-6 lg:py-[30px] lg:px-[30px] rounded-xl border border-gray15"
          >
            <div className="relative">
              <img
                src={box.image}
                alt="Member Image"
                className="w-full h-full bg-cover rounded-xl"
              />
              <Link
                to="https://twitter.com"
                className="absolute left-1/2 -translate-x-1/2 -bottom-6 bg-purple60 rounded-[43px] py-[11.87px] px-5 md:py-[10px] md:px-5 lg:py-[14px] lg:px-[26px] hover:bg-purple65 duration-200"
              >
                <img
                  src={twitterIcon}
                  alt="Twitter Icon"
                  className="w-5 h-5 md:w-6 md:h-6"
                />
              </Link>
            </div>
            <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 mt-10 md:mt-[50px]">
              <div className="flex flex-col gap-[2px] md:gap-1 lg:gap-[6px] text-center">
                <h3 className="text-[18px] md:text-[20px] lg:text-2xl font-semibold text-white">
                  {box.name}
                </h3>
                <p className="text-[14px] md:text-[16px] lg:text-[18px] font-medium text-gray60">
                  {box.jobTitle}
                </p>
              </div>
              <div className="flex items-center justify-between py-2 px-6 md:py-[10px] md:px-5 lg:py-[14px] lg:px-6 rounded-[100px] bg-gray10 border-gray15 border">
                <span className="text-[14px] md:text-[16px] lg:text-[18px] font-medium text-white">
                  Say Hello 👋
                </span>
                <button className="py-[15.67px] px-[15.67px] md:py-[9.67px] md:px-[9.67px] lg:py-[12px] lg:px-[12px] rounded-full bg-purple60 active:translate-x-[2px] hover:bg-purple65 duration-200">
                  <img
                    src={sendIcon}
                    alt="Send Icon"
                    className="w-5 h-5 md:w-6 md:h-6"
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetOurTeam;
