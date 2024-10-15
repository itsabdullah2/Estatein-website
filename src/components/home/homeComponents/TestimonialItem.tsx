import { testimonialItem } from "../../../assets/dummy";

const TestimonialItem = () => {
  return testimonialItem.map((item) => (
    <div
      key={item.name}
      className="border border-gray15 rounded-xl py-[50px] px-[50px] flex flex-col gap-10"
    >
      <div className="flex items-center gap-[10px]">
        {item.rates.map((rate, i) => (
          <div
            key={i}
            className="w-11 h-11 rounded-full bg-gray10 flex items-center justify-center border border-gray15"
          >
            <img src={rate} alt="star" className="w-6 h-6" />
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-[14px]">
        <h3 className="text-2xl font-semibold text-white">{item.rateTitle}</h3>
        <p className="text-[18px] text-white font-medium">
          {item.rateDescription}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <img
          src={item.image}
          alt="client image"
          className="w-[60px] h-[60px] rounded-full"
        />
        <div className="flex flex-col gap-[2px]">
          <h4 className="text-[20px] font-medium text-white">{item.name}</h4>
          <span className="text-[18px] font-medium text-gray60">
            {item.country}
          </span>
        </div>
      </div>
    </div>
  ));
};

export default TestimonialItem;
