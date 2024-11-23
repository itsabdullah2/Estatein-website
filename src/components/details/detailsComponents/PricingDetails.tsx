import { Link } from "react-router-dom";
import CommonHeading from "../../CommonHeading";
import AdditionalFees from "./AdditionalFees";
import {
  additionalFees,
  monthlyConst,
  totalInitialCosts,
  monthlyExpenses,
} from "../../../assets/dummyTwo";

const description: string =
  "At Estatein, transparency is key. We want you to have a clear understanding of all costs associated with your property investment. Below, we break down the pricing for Seaside Serenity Villa to help you make an informed decision";

const PricingDetails = () => {
  return (
    <div className="flex flex-col gap-10 xl:gap-20 2xl:gap-[100px]">
      <CommonHeading
        title="Comprehensive Pricing Details"
        description={description}
      />
      <div className="flex flex-col xl:flex-row gap-5 xl:gap-10 2xl:gap-[50px] items-start">
        <div className="flex flex-col gap-[2px]">
          <span className="text-[14px] xl:text-[16px] 2xl:text-xl font-medium text-gray60 leading-[150%]">
            Listing Price
          </span>
          <h3 className="text-2xl xl:text-[30px] 2xl:text-[40px] font-semibold text-white leading-[150%]">
            $1,250,000
          </h3>
        </div>
        <div className="flex-1 flex flex-col gap-5 xl:gap-10 2xl:gap-[50px]">
          <div className="flex flex-col gap-5 xl:gap-[30px] 2xl:gap-10 border border-gray15 rounded-xl p-5 xl:p-10 2xl:p-[50px]">
            <div className="flex items-center justify-between">
              <h4 className="text-[18px] xl:text-xl 2xl:text-2xl font-semibold leading-[150%] text-white">
                Additional Fees
              </h4>
              <Link
                to=""
                className="text-[14px] 2xl:text-[18px] text-white leading-[150%] font-medium bg-gray10 border border-gray15 rounded-lg py-[14px] px-5 2xl:py-[18px] 2xl:px-6"
              >
                Learn More
              </Link>
            </div>
            {/* I don't like this */}
            <div className="pt-[50px] grid grid-cols-2 gap-5 even:border-t border-gray15">
              <AdditionalFees />
              {/* {additionalFees.map((item) => (
                  <div
                    key={item.id}
                    className={`${
                      item.oneCol ? "border-r-0" : "odd:border-r"
                    } border-gray15`}
                  >
                    <span>{item.itemTitle}</span>
                    <div className="flex items-center gap-3 2xl:gap-4">
                      <h4>{item.itemPrice}</h4>
                      <p className="items-start text-white">
                        {item.itemDescription}
                      </p>
                    </div>
                  </div>
                ))} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingDetails;
