import { encourage } from "../../../assets/dummy";
const Encourage = () => {
  return (
    <div className="mx-4 lg:mx-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] py-[20px] px-[20px] border-b border-gray15 bg-gray08">
      {encourage.map((item) => (
        <div
          key={item.title}
          className="bg-gray10 py-5 md:py-10 px-[14px] md:px-5 rounded-xl relative flex justify-center"
        >
          <img
            src={item.arrow}
            alt={item.title}
            className="absolute w-[26px] h-[26px] md:w-[34px] md:h-[34px] right-5 top-5 md:right-[26.34px] md:top-[26.34px]"
          />
          <div className="flex flex-col items-center gap-5 text-center">
            <img
              src={item.icon}
              alt={"icon"}
              className="w-[36px] h-[36px] md:w-[82px] md:h-[82px]"
            />
            <p className="text-xl font-semibold text-white text-[14px] md:text-[18px]">
              {item.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Encourage;
