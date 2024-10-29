const GetInTouchDescription: string =
  "Welcome to Estatein's Contact Us page. We're here to assist you with any inquiries, requests, or feedback you may have. Whether you're looking to buy or sell a property, explore investment opportunities, or simply want to connect, we're just a message away. Reach out to us, and let's start a conversation.";

const GetInTouch = () => {
  return (
    <div className="pl-4 pt-[50px] pr-4 pb-[50px] md:pl-20 md:pt-[100px] md:pb-[130px] md:pr-[200px] xl:pl-40 xl:pt-[150px] xl:pb-40 xl:pr-[400px] bg-[linear-gradient(120deg,#262626_-25%,rgba(0,0,0,0.00)_30%)] border-b border-gray15">
      <div className="flex flex-col gap-[10px] xl:gap-[14px]">
        <h2 className="text-[28px] md:text-[36px] xl:text-5xl font-semibold leading-[150%] text-white">
          Get in Touch with Estatein
        </h2>
        <p className="text-[14px] md:text-[16px] xl:text-[18px] font-medium leading-[150%] text-gray60">
          {GetInTouchDescription}
        </p>
      </div>
    </div>
  );
};

export default GetInTouch;
