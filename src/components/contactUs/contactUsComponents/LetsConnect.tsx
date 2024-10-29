import { Link } from "react-router-dom";
import CommonHeading from "../../CommonHeading";
import {
  connectFormInputs,
  connectDropdownMenu,
  letsConnectDescription,
  parentDivStyles,
  commonStyles,
  labelStyles,
} from "../../../assets/dummyTwo";
import CustomCheckbox from "../../CustomCheckbox";

const LetsConnect = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="my-[71px] lg:my-[90px] 2xl:my-[110px]">
      <CommonHeading
        title="Let’s Connect"
        description={letsConnectDescription}
        className="mb-10 md:mb-[60px] xl:mb-20"
      />
      <div className="border border-gray15 rounded-xl py-5 px-5 md:py-10 md:px-10 lg:py-20 lg:px-20 2xl:py-[100px] 2xl:px-[100px]">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-[30px] 2xl:gap-[50px]"
        >
          <div className={`${parentDivStyles}`}>
            {connectFormInputs.map((input) => (
              <div
                key={input.id}
                className="flex flex-col gap-[10px] md:gap-[14px] 2xl:gap-4"
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
            {connectDropdownMenu.map((menu) => (
              <div
                key={menu.id}
                className={`flex flex-col gap-[10px] md:gap-[14px] 2xl:gap-4`}
              >
                <label htmlFor={menu.id} className={`${labelStyles}`}>
                  {menu.label}
                </label>
                <div
                  className={`${commonStyles} flex items-center justify-between cursor-pointer`}
                  id={menu.id}
                >
                  <span>{menu.placeholder}</span>
                  {menu.icon}
                </div>
              </div>
            ))}
          </div>
          {/* Textarea In Here */}
          <div className="flex flex-col gap-[10px] md:gap-[14px] 2xl:gap-4">
            <label className={`${labelStyles}`}>Message</label>
            <textarea
              className={`${commonStyles} h-44 resize-none`}
              placeholder="Enter your Message here..."
            />
            {/* SUBMIT BUTTON IN HERE */}
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

export default LetsConnect;
