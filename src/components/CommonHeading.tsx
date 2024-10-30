import { headingStars } from "../assets/dummy";

interface Props {
  title: string;
  description: string;
  className?: string;
}

const CommonHeading = ({ className, title, description }: Props) => {
  return (
    <div className={`${className}`}>
      <img
        src={headingStars}
        alt="Heading Stars"
        className="-translate-x-[10px]"
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

export default CommonHeading;
