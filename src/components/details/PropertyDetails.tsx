import { IoLocationSharp } from "react-icons/io5";
import {
  GalleryAndKeyFeatures,
  InquireAboutProperty,
  PricingDetails,
  FrequentlyAskedQuestions,
} from "./";

const PropertyDetails = () => {
  return (
    <div className="px-4 sm:px-10 md:px-20 2xl:px-[10.125rem] customSize:px-20">
      <div className="my-[60px] xl:my-20 2xl:my-[120px] flex flex-col gap-[30px] xl:gap-12 2xl:gap-[50px]">
        {/* Upper section of Location and Price */}
        <div className="flex lg:items-center justify-between flex-col lg:flex-row gap-[10px]">
          <h3 className="text-xl lg:text-2xl text-white font-semibold0">
            Seaside Serenity Villa
          </h3>
          <div className="flex-1 flex items-center justify-between">
            <div className="flex items-center gap-1 text-white text-[14px] border border-gray15 rounded-[6px] py-2 px-2">
              <IoLocationSharp />
              <address className="font-medium">Malibu, California</address>
            </div>
            <div>
              <span className="text-[14px] font-medium text-gray60">Price</span>
              <p className="text-[18px] lg:text-xl font-semibold text-white">
                $1,250,000
              </p>
            </div>
          </div>
        </div>
        {/* Lower section of property details */}
        <div className="flex flex-col gap-20 xl:gap-[120px] 2xl:gap-[150px]">
          <GalleryAndKeyFeatures />
          <InquireAboutProperty />
          <PricingDetails />
          <FrequentlyAskedQuestions />
        </div>
      </div>
    </div>
  );
};
export default PropertyDetails;
