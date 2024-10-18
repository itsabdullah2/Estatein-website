import { headingStars } from "../../../assets/dummy";

interface Props {
  title: string;
  description: string;
  className?: string;
}

const SectionHeading = ({ className, title, description }: Props) => {
  return (
    <div className={`${className}`}>
      <img
        src={headingStars}
        alt="Heading Stars"
        className="w-[68.4px] h-[30px] -translate-x-[10px]"
      />
      <h2 className="text-[28px] lg:text-5xl font-semibold text-white mt-[10px] mb-[14px]">
        {title}
      </h2>
      <p className="text-gray60 text-[14px] lg:text-[18px] font-medium">
        {description}
      </p>
    </div>
  );
};

export default SectionHeading;
