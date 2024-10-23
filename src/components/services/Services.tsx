import ElevateYourExperience from "./servicesComponents/ElevateYourExperience";
import Encourage from "./servicesComponents/encourage";
import UnlockProperty from "./servicesComponents/UnlockProperty";
import EffortlessManagement from "./servicesComponents/EffortlessManagement";
import SmartInvestment from "./servicesComponents/SmartInvestment";

const Services = () => {
  return (
    <>
      <ElevateYourExperience />
      <Encourage />
      <div className="px-4 sm:px-10 md:px-20 2xl:px-[10.125rem] customSize:px-20">
        <UnlockProperty />
        <EffortlessManagement />
        <SmartInvestment />
      </div>
    </>
  );
};

export default Services;
