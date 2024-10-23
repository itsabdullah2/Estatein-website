import { Link } from "react-router-dom";
import CommonHeading from "../../CommonHeading";
import {
  abstract,
  smallAbstract,
  unlockProperties,
} from "../../../assets/dummyTwo";

const unlockValueDescription: string =
  "Selling your property should be a rewarding experience, and at Estatein, we make sure it is.";

const UnlockProperty = () => {
  return (
    <div className="my-[71px] lg:my-[90px] 2xl:my-[110px]">
      <CommonHeading
        title="Unlock Property Value"
        description={unlockValueDescription}
        className="mb-10 md:mb-[60px] xl:mb-20"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-[30px]">
        {unlockProperties.map((property) => (
          <div
            key={property.title}
            className="flex flex-col gap-4 xl:gap-5 2xl:gap-[30px] p-6 lg:p-[30px] xl:p-10 2xl:p-[50px] border border-gray15 rounded-[10px]"
          >
            <div className="flex items-center gap-[10px] xl:gap-4 2xl:gap-5">
              <img
                src={property.icon}
                alt={property.title}
                className="w-auto h-auto"
              />
              <h2 className="text-xl 2xl:text-2xl font-semibold leading-[150%] text-white">
                {property.title}
              </h2>
            </div>
            <p className="text-[16px] 2xl:text-[18px] leading-[150%] text-gray60 font-medium">
              {property.description}
            </p>
          </div>
        ))}
        <div className="col-span-1 lg:col-span-2 flex flex-col gap-4 xl:gap-5 2xl:gap-[30px] p-6 lg:p-[30px] xl:p-10 2xl:p-[50px] border border-gray15 rounded-[10px] relative bg-gray10 overflow-hidden">
          <picture>
            <source
              srcSet={`${abstract} 1920w, ${abstract} 1440w, ${smallAbstract} 390w`}
              sizes="(max-width: 390px) 390px, (max-width: 1440px) 1440px, 1920px"
            />
            <img
              src={abstract}
              alt="Abstract"
              className="absolute left-0 top-0 bg-cover bg-center w-full h-full"
            />
          </picture>
          <div className="flex lg:items-center flex-col lg:flex-row lg:justify-between gap-5 lg:gap-0 relative">
            <h2 className="text-xl xl:text-2xl 2xl:text-[30px] font-bold text-white leading-[150%]">
              Unlock the Value of Your Property Today
            </h2>
            <Link
              to="/about-us"
              className="text-[14px] 2xl:text-[18px] leading-[150%] text-white text-center bg-gray08 border border-gray15 rounded-lg py-[14px] px-5 hover:bg-gray10 duration-200"
            >
              Learn More
            </Link>
          </div>
          <p className="text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] font-medium text-gray60 leading-[150%] relative">
            Ready to unlock the true value of your property? Explore our
            Property Selling Service categories and let us help you achieve the
            best deal possible for your valuable asset.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UnlockProperty;
