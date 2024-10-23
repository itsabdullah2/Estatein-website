const elevateYourExperienceDescription: string =
  "Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs and dreams.";

const ElevateYourExperience = () => {
  return (
    <div className="pl-4 pt-[50px] pr-4 pb-[50px] md:pl-20 md:pt-[100px] md:pb-[130px] md:pr-[200px] xl:pl-40 xl:pt-[150px] xl:pb-40 xl:pr-[400px] bg-[linear-gradient(120deg,#262626_-25%,rgba(0,0,0,0.00)_30%)] border-b border-gray15">
      <div className="flex flex-col gap-[10px] xl:gap-[14px]">
        <h2 className="text-[28px] md:text-[36px] xl:text-5xl font-semibold leading-[150%] text-white">
          Elevate Your Real Estate Experience
        </h2>
        <p className="text-[14px] md:text-[16px] xl:text-[18px] font-medium leading-[150%] text-gray60">
          {elevateYourExperienceDescription}
        </p>
      </div>
    </div>
  );
};

export default ElevateYourExperience;
