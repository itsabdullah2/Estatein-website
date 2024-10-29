import GetInTouch from "./contactUsComponents/GetInTouch";
import Encourage from "../services/servicesComponents/Encourage";
import LetsConnect from "./contactUsComponents/LetsConnect";
import DiscoverOfficeLocations from "./contactUsComponents/DiscoverOfficeLocations";

const ContactUs = () => {
  return (
    <>
      <GetInTouch />
      <Encourage />
      <div className="px-4 sm:px-10 md:px-20 2xl:px-[10.125rem] customSize:px-20">
        <LetsConnect />
        <DiscoverOfficeLocations />
      </div>
    </>
  );
};

export default ContactUs;
