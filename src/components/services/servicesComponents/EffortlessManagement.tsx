import { Link } from "react-router-dom";
import CommonHeading from "../../CommonHeading";
import {
  effortlessManagement,
  abstract,
  smallAbstract,
} from "../../../assets/dummyTwo";

const effortlessManagementDescription: string =
  "Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership, offering comprehensive solutions tailored to your needs. Explore the categories below to see how we can make property management effortless for you";

const EffortlessManagement = () => {
  return (
    <div className="mb-[71px] lg:mb-[90px] 2xl:mb-[110px]">
      <CommonHeading
        title="Effortless Property Management"
        description={effortlessManagementDescription}
        className="mb-10 md:mb-[60px] xl:mb-20"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-[30px]">
        {effortlessManagement.map((item) => (
          <div
            key={item.title}
            className="flex flex-col gap-4 xl:gap-5 2xl:gap-[30px] p-6 lg:p-[30px] xl:p-10 2xl:p-[50px] border border-gray15 rounded-[10px]"
          >
            <div className="flex items-center gap-[10px] xl:gap-4 2xl:gap-5">
              <img src={item.icon} alt={item.title} className="w-auto h-auto" />
              <h2 className="text-xl 2xl:text-2xl font-semibold leading-[150%] text-white">
                {item.title}
              </h2>
            </div>
            <p className="text-[16px] 2xl:text-[18px] leading-[150%] text-gray60 font-medium">
              {item.description}
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
              Experience Effortless Property Management
            </h2>
            <Link
              to="/about-us"
              className="text-[14px] 2xl:text-[18px] leading-[150%] text-white text-center bg-gray08 border border-gray15 rounded-lg py-[14px] px-5 hover:bg-gray10 duration-200"
            >
              Learn More
            </Link>
          </div>
          <p className="text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] font-medium text-gray60 leading-[150%] relative">
            Ready to experience hassle-free property management? Explore our
            Property Management Service categories and let us handle the
            complexities while you enjoy the benefits of property ownership.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EffortlessManagement;
