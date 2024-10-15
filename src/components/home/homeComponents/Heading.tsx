import { headingStars } from "../../../assets/dummy";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  description: string;
  url: string;
  urlText: string;
}

const Heading = ({ title, description, url, urlText }: Props) => {
  return (
    <div className="pb-20">
      <img
        src={headingStars}
        alt="Heading Stars"
        className="w-[68.4px] h-[30px] -translate-x-[10px]"
      />
      <h2 className="text-[28px] lg:text-5xl semibold text-white mt-[10px]">
        {title}
      </h2>
      <div className="flex items-center justify-between mt-[14px]">
        <p className="text-gray60 text-[14px] lg:text-[18px] font-medium w-full lg:w-[600px] xl:w-[850px] 2xl:w-[1120px]">
          {description}
        </p>
        <Link
          to={url}
          className="text-[18px] font-medium text-white border border-gray15 bg-gray10 py-[18px] px-6 rounded-[10px] hidden lg:block hover:bg-gray15 duration-200"
        >
          {urlText}
        </Link>
      </div>
    </div>
  );
};

export default Heading;
