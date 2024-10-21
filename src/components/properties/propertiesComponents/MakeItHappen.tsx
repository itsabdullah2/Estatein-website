import CommonHeading from "../../CommonHeading";
import {
  inputFields,
  makeItHappenDescription,
  propertyOptions,
} from "../../../assets/dummy";

const MakeItHappen = () => {
  return (
    <div className="mb-20 lg:mb-[120px] 2xl:mb-[150px]">
      <CommonHeading
        title="Let's Make it Happen"
        description={makeItHappenDescription}
        className="mb-10 md:mb-[60px] xl:mb-20"
      />
      <div className="flex flex-col 3xl:gap-[50px] 3xl:py-[100px] 3xl:px-[100px] border border-gray15 rounded-xl">
        <div className="flex flex-col 3xl:gap-[50px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-[30px] 3xl:gap-[50px]">
            {inputFields.map((input) => (
              <div
                key={input.id}
                className="flex flex-col gap-[10px] lg:gap-[14px] 3xl:gap-4"
              >
                <label
                  htmlFor={input.id}
                  className="text-[16px] 3xl:text-xl font-semibold leading-[150%] text-white"
                >
                  {input.label}
                </label>
                <input
                  type={input.type}
                  id={input.id}
                  placeholder={input.placeholder}
                  className="text-[14px] 3xl:text-[18px] font-medium leading-5 text-gray40 w-full border border-gray15 bg-gray10 rounded-lg py-4 px-5 3xl:py-6 focus:placeholder:opacity-0 placeholder:duration-200 outline-none caret-purple60"
                  autoComplete="off"
                />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-[30px] 3xl:gap-[50px]">
            {propertyOptions.map((option) => (
              <div
                key={option.label}
                className="flex flex-col gap-[10px] lg:gap-[14px] 3xl:gap-4"
              >
                <label className="text-[16px] 3xl:text-xl font-semibold leading-[150%] text-white">
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeItHappen;
