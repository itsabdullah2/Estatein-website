import SectionHeading from "./SectionHeading";
import { ourJourneyDescription, aboutHeroImage } from "../../../assets/dummy";

interface BoxesType {
  number: string;
  title: string;
  twoCols?: boolean;
}

const boxes: BoxesType[] = [
  {
    number: "200+",
    title: "Happy Customers",
    twoCols: false,
  },
  {
    number: "10k+",
    title: "Properties For Clients",
    twoCols: false,
  },
  {
    number: "16+",
    title: "Years of Experience",
    twoCols: true,
  },
];

const OurJourney = () => {
  return (
    <div className="flex items-center flex-col-reverse xl:flex-row gap-10 xl:gap-[60px] 3xl:gap-20 mt-[50px] lg:mt-[70px] 2xl:mt-[100px] mb-[51px] lg:mb-[120px] 2xl:mb-[150px]">
      <div className="flex flex-col gap-10 lg:gap-[50px] 2xl:gap-20">
        <SectionHeading
          title="Our Journey"
          description={ourJourneyDescription}
          className="w-full xl:w-auto"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-[20px]">
          {boxes.map((box) => (
            <div
              key={box.title}
              className={`text-center xl:text-left bg-gray10 rounded-[10px] px-6 py-4 border border-gray15 gap-[2px] ${
                box.twoCols ? "col-span-2 md:col-span-1" : ""
              }`}
            >
              <h3 className="font-bold text-2xl lg:text-[32px] 2xl:text-[40px] text-white 2xl:leading-[150%]">
                {box.number}
              </h3>
              <p className="text-[14px] lg:text-[16px] 2xl:text-[18px] font-medium text-gray60">
                {box.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <img src={aboutHeroImage} alt="House Image" className="bg-cover" />
    </div>
  );
};

export default OurJourney;
