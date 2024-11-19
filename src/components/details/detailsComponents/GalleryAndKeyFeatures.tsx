import { propertyDetailsGallery } from "../../../assets/dummyTwo";
import { useAppState } from "../../../context/AppStateContext";

const GalleryAndKeyFeatures = () => {
  const { handleActiveImg, isImgActive } = useAppState();

  return (
    <div className="flex flex-col gap-5 2xl:gap-[30px] bg-gray10 border border-gray15 rounded-xl p-5 xl:p-10 2xl:p-[50px]">
      {/* Upper Section => Gallery */}
      <div className="flex flex-col gap-[30px]">
        {/* Selection section is done */}
        <div className="flex items-center gap-[10px] 2xl:gap-5 p-[10px] 2xl:p-5 bg-gray08 border border-gray15 rounded-xl">
          {propertyDetailsGallery.map((img) => (
            <div
              key={img}
              className={`overflow-hidden rounded-md cursor-pointer relative before:absolute before:top-0 ${
                isImgActive === img
                  ? ""
                  : "before:left-0 before:w-full before:h-full before:bg-[#0A0A0A] before:opacity-50"
              }`}
              onClick={() => handleActiveImg(img)}
            >
              <img
                src={img}
                alt="property details image"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          ))}
        </div>
        <div></div>
        <div></div>
      </div>
      {/* Lower Section => Description & Key Features */}
      <div></div>
    </div>
  );
};

export default GalleryAndKeyFeatures;
