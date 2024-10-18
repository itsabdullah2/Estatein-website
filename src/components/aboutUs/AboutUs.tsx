import OurJourney from "./aboutUsComponents/OurJourney";
import OurValues from "./aboutUsComponents/OurValues";
import OurAchievements from "./aboutUsComponents/OurAchievements";
import NavigatingExperience from "./aboutUsComponents/NavigatingExperience";
import MeetOurTeam from "./aboutUsComponents/MeetOurTeam";
import OurClients from "./aboutUsComponents/OurClients";

const AboutUs = () => {
  return (
    <div className="px-4 sm:px-10 md:px-20 2xl:px-[10.125rem] customSize:px-20">
      <OurJourney />
      <OurValues />
      <OurAchievements />
      <NavigatingExperience />
      <MeetOurTeam />
      <OurClients />
    </div>
  );
};

export default AboutUs;
