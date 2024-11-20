import { propertyDetailsGallery } from "../../../assets/dummyTwo";
import { useAppState } from "../../../context/AppStateContext";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

const iconStyle =
  "w-[58px] h-[58px] rounded-full p-[14px] border border-gray15 flex items-center justify-center bg-transparent";
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
    <div className="flex flex-col gap-5 2xl:gap-[30px] bg-gray10 border border-gray15 rounded-xl p-5 xl:p-10 2xl:p-[50px]">
      {/* Upper Section => Gallery */}
      <div className="flex flex-col gap-[30px]">
        {/* Selection section is done */}
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
        <div className="rounded-xl overflow-hidden flex items-center gap-[30px] max-h-[480px]">
          <img
            src={isImgActive}
            alt="property details image"
            className="bg-cover rounded-xl flex-1 w-full"
          />
          <img
            src={isImgActive}
            alt="property details image"
            className="flex-1 bg-cover rounded-xl hidden xl:block"
          />
        </div>
        <div className="p-2 2xl:p-[10px] bg-gray08 rounded-[100px] flex items-center justify-between gap-[10px] w-full xl:w-fit mx-auto">
          <button className={`${iconStyle}`} onClick={handlePrevImg}>
            <FaArrowLeftLong size={23} className={`text-gray50`} />
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
          <button className={`${iconStyle}`} onClick={handleNextImg}>
            <FaArrowRightLong size={23} className={`text-gray50`} />
          </button>
        </div>
      </div>
      {/* Lower Section => Description & Key Features */}
      <div></div>
    </div>
  );
};

export default GalleryAndKeyFeatures;
