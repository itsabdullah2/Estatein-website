import { discoverOfficeBox } from "../../../assets/dummyTwo";

const parentContactInfoStyles: string =
  "flex items-center gap-1 2xl:gap-[6px] py-[10px] px-[10px] 2xl:py-[14px] 2xl:px-5 border border-gray15 bg-gray10 rounded-[28px]";
const infoTextStyles: string =
  "text-[14px] 2xl:text-[18px] font-medium leading-[150%] text-white";

const LocationBox = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 2xl:gap-[30px]">
      {discoverOfficeBox.map((box) => (
        <div
          key={box.section}
          className="flex flex-col gap-6 xl:gap-[30px] 2xl:gap-10 border border-gray15 py-6 px-6 xl:py-10 xl:px-10 2xl:py-[50px] 2xl:px-[50px] rounded-lg 2xl:rounded-xl"
        >
          <div className="flex flex-col gap-2 xl:gap-[10px] 2xl:gap-[14px]">
            <div className="flex flex-col gap-[6px] 2xl:gap-[10px]">
              <span className="text-[14px] 2xl:text-[18px] font-medium text-white leading-[150%] tracking-[-0.6%]">
                {box.section}
              </span>
              <h3 className="text-xl xl:text-2xl 2xl:text-[30px] font-semibold text-white leading-[150%]">
                {box.location}
              </h3>
            </div>
            <p className="text-[15px] xl:text-[16px] 2xl:text-[18px] font-medium leading-[150%] tracking-[-0.6%] text-gray60">
              {box.locationDescription}
            </p>
          </div>
          <div className="flex items-center gap-2 2xl:gap-[10px] flex-wrap">
            <div className={`${parentContactInfoStyles}`}>
              {box.mailIcon}
              <span className={`${infoTextStyles}`}>{box.email}</span>
            </div>
            <div className={`${parentContactInfoStyles}`}>
              {box.phoneIcon}{" "}
              <span className={`${infoTextStyles}`}>{box.phone}</span>
            </div>
            <div className={`${parentContactInfoStyles}`}>
              {box.locationIcon}{" "}
              <span className={`${infoTextStyles}`}>{box.country}</span>
            </div>
          </div>

          <button className="text-[14px] xl:text-[16px] 2xl:text-[18px] font-medium leading-[150%] tracking-[-0.6%] text-white bg-purple60 hover:bg-purple65 duration-200 w-full 2xl:py-[18px] py-[14px] px-5 2xl:px-6 rounded-lg 2xl:rounded-[10px]">
            Get Direction
          </button>
        </div>
      ))}
    </div>
  );
};

export default LocationBox;
