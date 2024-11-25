import { Link } from "react-router-dom";
import CommonHeading from "../../CommonHeading";
import CustomCheckbox from "../../CustomCheckbox";
import {
  connectFormInputs,
  labelStyles,
  commonStyles,
} from "../../../assets/dummyTwo";
import { IoLocationSharp } from "react-icons/io5";

const description: string =
  "Interested in this property? Fill out the form below, and our real estate experts will get back to you with more details, including scheduling a viewing and answering any questions you may have.";
const InquireAboutProperty = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-10 xl:gap-20 2xl:gap-[100px] items-start">
      <CommonHeading
        title="Inquire About Seaside Serenity Villa"
        description={description}
        className="w-full lg:w-[591px]"
      />
      <div className="flex-1 w-full xl:w-auto flex flex-col border border-gray15 rounded-xl p-5 xl:p-10 2xl:p-[50px] gap-5 xl:gap-10 2xl:gap-[50px]">
        <form className="flex flex-col gap-5 xl:gap-[30px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[10px] xl:gap-[14px] 2xl:gap-4">
            {connectFormInputs.map((input) => (
              <div
                key={input.id}
                className="flex flex-col gap-[10px] xl:gap-[14px] 2xl:gap-4"
              >
                <label htmlFor={input.id} className={`${labelStyles}`}>
                  {input.label}
                </label>
                <input
                  type={input.type}
                  id={input.id}
                  placeholder={input.placeholder}
                  className={`${commonStyles}`}
                />
              </div>
            ))}
          </div>
          <div className="col-span-2 flex flex-col gap-[10px] xl:gap-[14px] 2xl:gap-4">
            <span className={`${labelStyles}`}>Selected Property</span>
            <div className="flex items-center gap-3 bg-gray10 text-[#ffffff90] rounded-lg border border-gray15 py-[16px] px-5 2xl:py-6 2xl:px-5">
              <p className="flex-1 2xl:text-xl font-medium leading-5">
                Seaside Serenity Villa, Malibu, California
              </p>
              <IoLocationSharp size={20} />
            </div>
          </div>
          <textarea
            className={`${commonStyles} h-44 resize-none col-span-2`}
            placeholder="Enter your Message here..."
          />
          <div className="col-span-2 flex flex-col lg:flex-row gap-[10px] lg:gap-0 items-center justify-between">
            <div className="flex items-center gap-[6px] 2xl:gap-[10px]">
              <CustomCheckbox id="terms" />
              <label
                htmlFor="terms"
                className="text-[14px] lg:text-[16px] 2xl:text-[18px] font-medium leading-[150%] text-gray60"
              >
                I agree with{" "}
                <Link to="/" className="underline">
                  Term of Use
                </Link>{" "}
                and{" "}
                <Link to="/" className="underline">
                  Privacy Policy
                </Link>
              </label>
            </div>
            <button
              type="submit"
              className="text-[14px] 2xl:text-[18px] leading-6 font-medium text-white bg-purple60 w-full lg:w-auto py-[14px] px-[34px] 2xl:py-[18px] 2xl:px-[46px] rounded-md 2xl:rounded-lg hover:bg-purple65 duration-200"
            >
              Send Your Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InquireAboutProperty;
