// import { Link } from "react-router-dom";
import Heading from "./Heading";
import { testimonialHeadingDescription } from "../../../assets/dummy";
import TestimonialItem from "./TestimonialItem";
// import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

const Testimonials = () => {
  return (
    <div className="pb-32">
      <Heading
        title="What Our Clients Say"
        description={testimonialHeadingDescription}
        url="/testimonials"
        urlText="View All Testimonials"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
        <TestimonialItem />
      </div>

      {/* <div className="mt-[50px]">
        <div className="flex items-center justify-between pt-5 border-t border-gray15">
          <Link
            to="/testimonials"
            className="text-[14px] lg:text-[18px] font-medium text-white border border-gray15 bg-gray10 py-[18px] px-6 rounded-[10px] block lg:hidden hover:bg-gray15 duration-200"
          >
            View All Testimonials
          </Link>
          <div className="text-xl medium text-gray60 hidden lg:block">
            <span className="text-white">01</span> of <span>10</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <button className="flex items-center justify-center w-[58px] h-[58px] rounded-full border border-gray15 text-white hover:bg-gray15 duration-200">
              <FaArrowLeftLong size={25} />
            </button>
            <div className="text-[14px] lg:text-xl medium text-gray60 block lg:hidden">
              <span className="text-white">01</span> of <span>60</span>
            </div>
            <button className="flex items-center justify-center w-[58px] h-[58px] rounded-full border border-gray15 text-white hover:bg-gray15 duration-200">
              <FaArrowRightLong size={25} />
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Testimonials;
