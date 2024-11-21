import {
  propertyDetailsGallery,
  propertyDetailsDescription,
  propertyDetailsKeyFeature,
} from "../../../assets/dummyTwo";
import { useAppState } from "../../../context/AppStateContext";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

const iconStyle =
  "w-[58px] h-[58px] rounded-full p-[14px] border border-gray15 flex items-center justify-center";
const GalleryAndKeyFeatures = () => {
  const { handleActiveImg, isImgActive } = useAppState();
  const currentIndexOfImg = propertyDetailsGallery.findIndex(
    (img) => img === isImgActive
  );
  // console.log(currentIndexOfImg);
  const handleNextImg = (): void => {
    if (currentIndexOfImg === propertyDetailsGallery.length - 1) {
      handleActiveImg(propertyDetailsGallery[0]);
    } else {
      handleActiveImg(propertyDetailsGallery[currentIndexOfImg + 1]);
    }
  };
  const handlePrevImg = (): void => {
    if (currentIndexOfImg === 0) {
      handleActiveImg(
        propertyDetailsGallery[propertyDetailsGallery.length - 1]
      );
    } else {
      handleActiveImg(propertyDetailsGallery[currentIndexOfImg - 1]);
    }
  };

  return (
    <div className="flex flex-col gap-5 2xl:gap-[30px]">
      {/* Upper Section => Gallery */}
      <div className="flex flex-col gap-[30px] bg-gray10 p-5 xl:p-10 2xl:p-[50px] border border-gray15 rounded-xl">
        {/* select the active image part | [functionality is done] */}
        <div className="flex items-center gap-[10px] 2xl:gap-5 p-[10px] 2xl:p-5 bg-gray08 border border-gray15 rounded-xl overflow-hidden">
          {propertyDetailsGallery.map((img) => (
            <div
              key={img}
              className={`overflow-hidden rounded-md cursor-pointer relative before:absolute before:top-0 ${
                isImgActive === img
                  ? ""
                  : "before:left-0 before:w-full before:h-full before:bg-[#0A0A0A] before:opacity-50 before:duration-300 before:transition-all"
              }`}
              onClick={() => handleActiveImg(img)}
            >
              <img
                src={img}
                alt="property details image"
                className="block object-cover rounded-md"
              />
            </div>
          ))}
        </div>
        {/* displayed active image part | [functionality and responsiveness are done] */}
        <div className="rounded-xl overflow-hidden flex items-center gap-[30px]">
          <img
            src={isImgActive}
            alt="property details image"
            className="bg-cover rounded-xl flex-1 h-[273px] sm:h-auto xl:h-[480px]"
          />
          <img
            src={isImgActive}
            alt="property details image"
            className="flex-1 bg-cover rounded-xl hidden xl:block h-auto xl:h-[480px]"
          />
        </div>
        {/* change the displayed image | [functionality and responsiveness are done] */}
        <div className="p-2 2xl:p-[10px] bg-gray08 rounded-[100px] flex items-center justify-between gap-[10px] w-full xl:w-fit mx-auto">
          <button
            className={`${iconStyle} active:bg-gray10`}
            onClick={handlePrevImg}
          >
            <FaArrowLeftLong size={23} className={`text-gray15`} />
          </button>
          <div className="flex items-center gap-1">
            {Array.from({ length: 9 }, (_, i) => (
              <span
                key={i}
                className={`h-[4px] w-4 bg-gray15 rounded-[60px] ${
                  i === currentIndexOfImg ? "bg-purple60" : ""
                }`}
              />
            ))}
          </div>
          <button
            className={`${iconStyle} active:bg-gray10`}
            onClick={handleNextImg}
          >
            <FaArrowRightLong size={23} className={`text-gray15`} />
          </button>
        </div>
      </div>
      {/* Lower Section => Description & Key Features */}
      <div className="flex flex-col lg:flex-row gap-5 2xl:gap-[30px]">
        {/* Description */}
        <div className="flex-1 flex flex-col gap-5 xl:gap-10 2xl:gap-[50px] border border-gray15 rounded-[10px] p-5 xl:p-10 2xl:p-[50px] h-fit">
          <div className="flex flex-col gap-[10px] xl:gap-[14px]">
            <h3 className="text-white font-semibold xl:text-xl 2xl:text-2xl">
              Description
            </h3>
            <p className="text-[14px] xl:text-base 2xl:text-[18px] text-gray60 font-medium">
              Discover your own piece of paradise with the Seaside Serenity
              Villa. T With an open floor plan, breathtaking ocean views from
              every room, and direct access to a pristine sandy beach, this
              property is the epitome of coastal living.
            </p>
          </div>
          <div className="pt-5 xl:pt-4 2xl:pt-5 border-t border-gray15 grid grid-cols-2 lg:grid-cols-3">
            {propertyDetailsDescription.map((box) => (
              <div
                key={box.id}
                className={`flex flex-col gap-2 2xl:gap-[10px] border-r [&:nth-child(2)]:border-r-0 lg:border-r lg:[&:nth-child(2)]:border-r border-gray15 last:border-r-0 last:border-t lg:last:border-t-0 px-5 last:pr-0 mb-5 lg:mb-0 last:pt-5 lg:last:pt-0 ${
                  box.twoColumns ? "last:col-span-2 lg:last:col-span-1" : ""
                }`}
              >
                <div className="flex items-center gap-[6px]">
                  <img
                    src={box.icon}
                    alt={box.category}
                    className="block w-6 h-6"
                  />
                  <span className="text-[14px] 2xl:text-[18px] font-medium text-gray60">
                    {box.category}
                  </span>
                </div>
                <span className="text-[18px] xl:text-xl 2xl:text-2xl font-semibold text-white">
                  {box.numberOfRooms}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* Key Feature */}
        <div className="flex-1 flex flex-col gap-5 xl:gap-10 2xl:gap-[50px] border border-gray15 rounded-[10px] p-5 xl:p-10 2xl:p-[50px]">
          <h3 className="text-white font-semibold xl:text-xl 2xl:text-2xl">
            Key Feature and Amenities
          </h3>
          <div className="flex flex-col gap-[18px] xl:gap-5 2xl:gap-[30px]">
            {propertyDetailsKeyFeature.map((box) => (
              <div
                key={box.id}
                className="flex items-center gap-[10px] py-[10px] px-3 xl:py-[14px] xl:px-4 2xl:py-[18px] 2xl:px-6 bg-gradient-to-r from-gray10 to-[#1A1A1A00] relative before:absolute before:top-0 before:left-0 before:w-[1px] before:h-full before:bg-purple60"
              >
                <img
                  src={box.icon}
                  alt={box.icon}
                  className="w-[18px] h-[18px] xl:w-5 xl:h-5 2xl:w-6 2xl:h-6"
                />
                <p className="text-[14px] xl:text-[16px] 2xl:text-[18px] font-medium text-gray60">
                  {box.feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryAndKeyFeatures;
