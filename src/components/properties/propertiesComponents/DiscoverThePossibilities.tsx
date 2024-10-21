import CommonHeading from "../../CommonHeading";
import { discoverThePossibilities } from "../../../assets/dummy";
import PossibilitiesBoxItem from "./PossibilitiesBoxItem";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

const DiscoverThePossibilities = () => {
  return (
    <div className="mb-20 lg:mb-[120px] 2xl:mb-[150px]">
      <CommonHeading
        title="Discover a World of Possibilities"
        description={discoverThePossibilities}
        className="mb-10 md:mb-[60px] xl:mb-20"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[30px]">
        <PossibilitiesBoxItem />
      </div>
      <div className="flex items-center md:justify-between pt-5 mt-[30px] md:mt-10 xl:mt-[50px] md:border-t border-gray15">
        <div className="text-xl medium text-gray60 hidden md:block">
          <span className="text-white">01</span> of <span>10</span>
        </div>
        <div className="flex-1 md:flex-none flex items-center justify-between md:justi gap-[10px]">
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

export default DiscoverThePossibilities;
