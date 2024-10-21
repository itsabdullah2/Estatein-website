import { Link } from "react-router-dom";
import { PropertiesBoxItems } from "../../../assets/dummy";

const PropertiesBoxItem = () => {
  return PropertiesBoxItems.map((item) => (
    <div
      key={item.title}
      className="border border-gray15 rounded-xl py-10 px-10 flex flex-col gap-[30px]"
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-[432px] h-[318px] bg-gray15 rounded-xl"
      />
      <div className="">
        <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
        <p className="text-[18px] font-medium text-gray60">
          {item.description}Read More
        </p>
      </div>
      <div className="flex items-center flex-wrap gap-[10px]">
        {item.includes.map((include) => (
          <div className="flex items-center gap-1 bg-gray10 border border-gray15 rounded-[28px] py-2 px-[14px]">
            <img
              src={include.icon}
              alt={include.spanText}
              className="w-5 h-5"
              loading="lazy"
            />
            <span className="text-[18px] text-white font-medium">
              {include.spanText}
            </span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between gap-[30px] lg:gap-10 xl:gap-[50px]">
        <div className="flex flex-col">
          <span className="text-[14px] lg:text-[18px] font-medium text-gray60">
            Price
          </span>
          <span className="text-[18px] lg:text-2xl font-medium lg:font-semibold text-white">
            ${item.price}
          </span>
        </div>
        <Link
          to="/"
          className="flex-1 text-[14px] lg:text-[18px] font-medium text-center text-white bg-purple60 py-[14px] lg:py-[18px] px-5  rounded-[10px] hover:bg-purple65 duration-200"
        >
          {item.urlPath}
        </Link>
      </div>
    </div>
  ));
};

export default PropertiesBoxItem;
