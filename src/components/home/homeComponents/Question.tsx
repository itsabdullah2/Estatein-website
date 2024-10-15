import { Link } from "react-router-dom";
import { AskedQuestions } from "../../../assets/dummy";

const Question = () => {
  return AskedQuestions.map((question) => (
    <div
      key={question.question}
      className="flex flex-col gap-[30px] border border-gray15 rounded-xl px-[30px] py-[30px] lg:px-[50px] lg:py-[50px]"
    >
      <h3 className="text-2xl font-semibold text-white">{question.question}</h3>
      <p className="text-[18px] font-medium text-gray60">{question.answer}</p>
      <Link
        to="/about-us"
        className="text-[18px] font-medium text-white leading-[131%] py-[18px] px-6 bg-gray10 border border-gray15 rounded-[10px] text-center w-full lg:w-fit hover:bg-gray15 duration-200"
      >
        Read More
      </Link>
    </div>
  ));
};

export default Question;
