import CommonHeading from "../../CommonHeading";
import { faqs } from "../../../assets/dummyTwo";

const description: string =
  "Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.";

const FrequentlyAskedQuestions = () => {
  return (
    <div className="flex flex-col gap-10 xl:gap-[60px] 2xl:gap-20">
      <CommonHeading
        title="Frequently Asked Questions"
        description={description}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 2xl:gap-[30px]">
        {faqs.map((question) => (
          <div
            key={question.id}
            className="flex flex-col gap-5 xl:gap-6 2xl:gap-[30px] border border-gray15 rounded-xl p-[30px] xl:p-10 2xl:p-[50px]"
          >
            <h3 className="text-[18px] xl:text-xl 2xl:text-2xl font-semibold text-white leading-[150%]">
              {question.question}
            </h3>
            <div className="flex flex-col gap-5 2xl:gap-[30px]">
              <p className="text-[14px] xl:text-[16px] 2xl:text-[18px] tracking-[-0.6%] font-medium leading-[150%] text-gray60">
                {question.answer}
              </p>
              <button className="text-[14px] xl:text-[16px] 2xl:text-[18px] tracking-[-0.6%] font-medium leading-[150%] text-white text-center w-full lg:w-fit bg-gray10 border border-gray15 rounded-lg 2xl:rounded-[10px] py-[14px] px-5">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
