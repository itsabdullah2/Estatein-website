import { possibilitiesBox } from "../../../assets/dummy";
import { Link } from "react-router-dom";

const PossibilitiesBoxItem = () => {
  return possibilitiesBox.map((item) => (
    <div
      key={item.heading}
      className="py-5 px-5 md:py-[30px] md:px-[30px] xl:py-10 xl:px-10 flex flex-col gap-6 xl:gap-[30px] rounded-xl border border-gray15"
    >
      <img
        src={item.image}
        alt="property image"
        className="w-full rounded-[10px]"
      />
      <div className="flex flex-col gap-6 xl:gap-[30px]">
        <div className="flex flex-col gap-4 xl:gap-5">
          <div className="bg-gray10 border border-gray15 rounded-[28px] py-[6px] px-3 w-fit">
            <p className="text-white text-[14px] xl:text-[18px] font-medium leading-[150%]">
              {item.tagline}
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-[18px] md:text-xl xl:text-[24px] font-semibold leading-[150%] text-white">
              {item.heading}
            </h3>
            <p className="text-[14px] md:text-[16px] xl:text-[18px] font-medium leading-[150%] text-gray60">
              {item.description}{" "}
              <Link to="/properties/details" className="text-white">
                Read More
              </Link>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-[30px] lg:gap-[22px] xl:gap-10 3xl:gap-[50px]">
          <div className="">
            <span className="text-[14px] xl:text-[18px] font-medium leading-[150%] text-gray60">
              Price
            </span>
            <h4 className="text-[18px] 2xl:text-[24px] md:text-xl font-semibold leading-[150%] text-white">
              ${item.price}
            </h4>
          </div>
          <Link
            to={`/properties/property-details`}
            className="flex-1 text-center py-[10px] md:py-[14px] px-5 xl:py-[18px] xl:px-[24px] rounded-lg bg-purple60 text-white font-medium text-[14px] 3xl:text-[18px] hover:bg-purple65"
          >
            View Property Details
          </Link>
        </div>
      </div>
    </div>
  ));
};

export default PossibilitiesBoxItem;
