import CommonHeading from "../../CommonHeading";
import AdditionalFees from "./AdditionalFees";
import MonthlyCosts from "./MonthlyCosts";
import TotalInitialCosts from "./TotalInitialCosts";
import MonthlyExpenses from "./MonthlyExpenses";

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
        <div className="flex-1 w-full xl:w-auto flex flex-col gap-5 xl:gap-10 2xl:gap-[50px]">
          <AdditionalFees />
          <MonthlyCosts />
          <TotalInitialCosts />
          <MonthlyExpenses />
        </div>
      </div>
    </div>
  );
};

export default PricingDetails;
