import { Link } from "react-router-dom";
import CommonHeading from "../../CommonHeading";
import CustomCheckbox from "../../CustomCheckbox";
import {
  inputFields,
  makeItHappenDescription,
  propertyOptions,
} from "../../../assets/dummy";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const inputStyles: string =
  "text-[14px] 3xl:text-[18px] font-medium leading-5 text-gray40 placeholder:text-gray40 w-full border border-gray15 bg-gray10 rounded-lg py-4 px-5 3xl:py-6 focus:placeholder:opacity-0 placeholder:duration-200 outline-none caret-purple60";

const labelStyles: string =
  "text-[16px] 3xl:text-xl font-semibold leading-[150%] text-white";

const parentDivStyles: string =
  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-[30px] 3xl:gap-[50px]";

const MakeItHappen = () => {
  return (
    <div className="mb-20 lg:mb-[120px] 2xl:mb-[150px]">
      <CommonHeading
        title="Let's Make it Happen"
        description={makeItHappenDescription}
        className="mb-10 md:mb-[60px] xl:mb-20"
      />
      <div className="py-5 px-5 xl:py-[50px] xl:px-[50px] 2xl:py-[100px] 2xl:px-[100px] border border-gray15 rounded-xl">
        <form className="flex flex-col gap-5 xl:gap-[30px] 2xl:gap-[50px]">
          <div className={`${parentDivStyles}`}>
            {inputFields.map((input) => (
              <div
                key={input.id}
                className="flex flex-col gap-[10px] lg:gap-[14px] 3xl:gap-4"
              >
                <label htmlFor={input.id} className={`${labelStyles}`}>
                  {input.label}
                </label>
                <input
                  type={input.type}
                  id={input.id}
                  placeholder={input.placeholder}
                  className={`${inputStyles}`}
                  autoComplete="off"
                />
              </div>
            ))}
          </div>
          <div className={`${parentDivStyles}`}>
            {propertyOptions.map((option) => (
              <div
                key={option.label}
                className="flex flex-col gap-[10px] lg:gap-[14px] 3xl:gap-4"
              >
                <label className={`${labelStyles}`}>{option.label}</label>
                <div className="flex items-center justify-between py-[12px] px-[12px] lg:py-5 lg:px-5 border border-gray15 bg-gray10 rounded-xl cursor-pointer">
                  <div className="text-[14px] 3xl:text-[18px] font-medium leading-5 text-gray40">
                    {option.placeholder}
                  </div>
                  <MdOutlineKeyboardArrowDown
                    size={25}
                    className="text-white"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className={`${parentDivStyles}`}>
            <div className="col-span-2 flex flex-col gap-[10px] lg:gap-[14px] 3xl:gap-4">
              <span className={`${labelStyles}`}>Budget</span>
              <div className="flex items-center justify-between text-[14px] 3xl:text-[18px] font-medium leading-5 text-gray40 w-full border border-gray15 bg-gray10 rounded-lg py-4 px-5 3xl:py-6 cursor-pointer">
                <span>Select Budget</span>
                <MdOutlineKeyboardArrowDown size={25} className="text-white" />
              </div>
            </div>
            <div className="col-span-2 flex flex-col gap-[10px] lg:gap-[14px] 3xl:gap-4">
              <label className={`${labelStyles}`}>
                Preferred Contact Method
              </label>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 lg:gap-[30px] 3xl:gap-[50px]">
                <input
                  type="text"
                  id="phone-number"
                  placeholder="Enter Your Number"
                  className={`${inputStyles}`}
                />
                <input
                  type="mail"
                  id="mail"
                  placeholder="Enter Your Email"
                  className={`${inputStyles}`}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[10px] lg:gap-[14px] 2xl:gap-4">
            <label htmlFor="message" className={`${labelStyles}`}>
              Message
            </label>
            <textarea
              id="message"
              placeholder="Enter your message here..."
              className={`${inputStyles} h-44 resize-none`}
            />
          </div>
          <div className="flex items-center lg:justify-between flex-col lg:flex-row gap-5 lg:gap-0">
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
            <button className="text-[14px] 2xl:text-[18px] leading-6 font-medium text-white bg-purple60 w-full lg:w-auto py-[14px] px-[34px] 2xl:py-[18px] 2xl:px-[46px] rounded-md 2xl:rounded-lg hover:bg-purple65 duration-200">
              Send Your Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MakeItHappen;
