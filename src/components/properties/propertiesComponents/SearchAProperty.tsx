import CustomDropDown from "./CustomDropDown";
import {
  IoSearch,
  IoLocationSharp,
  IoCube,
  IoCamera,
  IoCalendarClear,
} from "react-icons/io5";
import { HiHomeModern } from "react-icons/hi2";
import {
  menuDataOfLocation,
  menuDataOfProperty,
  menuDataOfPrice,
  menuDataOfPropertySize,
  menuDataOfBuildYear,
} from "../../../assets/dummy";

const SearchAProperty = () => {
  return (
    <div className="flex flex-col gap-5 md:gap-[12px] xl:gap-[10px] mt-10 mb-[61px] md:mt-0 relative md:top-[-52.5px]">
      <div className="py-5 px-5 lg:py-[10px] lg:px-[10px] bg-gray10 rounded-[20px] lg:mx-12">
        <div className="flex items-center gap-5 md:gap-[30px] lg:gap-[50px] py-[10px] px-[12px] md:py-5 md:px-6 rounded-xl border border-gray15 bg-gray08">
          <input
            type="search"
            placeholder="Search For A Property"
            className="flex-1 text-base placeholder:text-gray15 focus:placeholder:opacity-0 placeholder:duration-200 bg-transparent xl:text-xl 2xl:text-2xl font-medium outline-none caret-purple60 text-white"
          />
          <button className="flex items-center gap-[6px] xl:gap-2 py-[14px] px-5 xl:py-[18px] xl:px-6 rounded-[10px] bg-purple60 text-white hover:bg-purple65 duration-200">
            <IoSearch size={25} />
            <span className="hidden md:block text-[14px] xl:text-[18px] font-medium leading-[150%]">
              Find Property
            </span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 py-5 px-5 lg:py-[10px] lg:px-[10px] bg-gray10 rounded-xl">
        <CustomDropDown
          icon={
            <IoLocationSharp className="text-gray60 w-5 h-5 lg:w-6 lg:h-6" />
          }
          title="Location"
          menuData={menuDataOfLocation}
        />
        <CustomDropDown
          icon={<HiHomeModern className="text-gray60 w-5 h-5 lg:w-6 lg:h-6" />}
          title="Property Type"
          menuData={menuDataOfProperty}
        />
        <CustomDropDown
          icon={<IoCamera className="text-gray60 w-5 h-5 lg:w-6 lg:h-6" />}
          title="Pricing Range"
          menuData={menuDataOfPrice}
        />
        <CustomDropDown
          icon={<IoCube className="text-gray60 w-5 h-5 lg:w-6 lg:h-6" />}
          title="Property Size"
          menuData={menuDataOfPropertySize}
        />
        <CustomDropDown
          icon={
            <IoCalendarClear className="text-gray60 w-5 h-5 lg:w-6 lg:h-6" />
          }
          title="Build Year"
          menuData={menuDataOfBuildYear}
        />
      </div>
    </div>
  );
};
export default SearchAProperty;
