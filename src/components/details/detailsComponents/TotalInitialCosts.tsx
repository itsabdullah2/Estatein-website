import { Link } from "react-router-dom";
import {
  totalInitialCostsPartOne,
  totalInitialCostsLastPart,
  commonContainerStyles,
  commonDescriptionStyles,
  commonPriceStyles,
  commonSpanStyles,
} from "../../../assets/dummyTwo";

const TotalInitialCosts = () => {
  return (
    <div className="flex flex-col gap-5 xl:gap-[30px] 2xl:gap-10 border border-gray15 rounded-xl p-5 xl:p-10 2xl:p-[50px]">
      <div className="flex items-center justify-between">
        <h4 className="text-[18px] xl:text-xl 2xl:text-2xl font-semibold leading-[150%] text-white">
          Additional Fees
        </h4>
        <Link
          to=""
          className="text-[14px] 2xl:text-[18px] text-white leading-[150%] font-medium bg-gray08 hover:bg-gray10 duration-200 border border-gray15 rounded-lg py-[14px] px-5 2xl:py-[18px] 2xl:px-6"
        >
          Learn More
        </Link>
      </div>
      <div className="flex flex-col border-t border-gray15 pt-5 xl:pt-[30px] 2xl:pt-10">
        <div className="border-b border-gray15 grid grid-cols-1 xl:grid-cols-2 gap-5 pb-5 xl:pb-[30px] 2xl:pb-10">
          {totalInitialCostsPartOne.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-[10px] xl:gap-3 2xl:gap-[16px] first:border-b xl:first:border-r xl:first:border-b-0 first:pb-5 xl:pb-0 border-gray15"
            >
              <span className={`${commonSpanStyles}`}>{item.itemTitle}</span>
              <div className={`${commonContainerStyles}`}>
                <h4 className={`${commonPriceStyles}`}>{item.itemPrice}</h4>
                <p className={`${commonDescriptionStyles}`}>
                  {item.itemDescription}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 pt-5 xl:pt-[30x] 2xl:pt-10">
          {totalInitialCostsLastPart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-[10px] xl:gap-3 2xl:gap-[16px]first:border-b xl:first:border-r xl:first:border-b-0 pb-5 xl:pb-0 border-gray15"
            >
              <span className={`${commonSpanStyles}`}>{item.itemTitle}</span>
              <div className={`${commonContainerStyles}`}>
                <h4 className={`${commonPriceStyles}`}>{item.itemPrice}</h4>
                <p className={`${commonDescriptionStyles}`}>
                  {item.itemDescription}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TotalInitialCosts;
