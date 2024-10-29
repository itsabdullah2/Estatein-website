import CommonHeading from "../../CommonHeading";
import Filter from "./Filter";
import LocationBox from "./LocationBox";

const DiscoverOfficeLocationsDescription: string =
  "Estatein is here to serve you across multiple locations. Whether you're looking to meet our team, discuss real estate opportunities, or simply drop by for a chat, we have offices conveniently located to serve your needs. Explore the categories below to find the Estatein office nearest to you";

const DiscoverOfficeLocations = () => {
  return (
    <div className="mb-[71px] lg:mb-[90px] 2xl:mb-[110px]">
      <CommonHeading
        title="Discover Our Office Locations"
        description={DiscoverOfficeLocationsDescription}
        className="mb-10 md:mb-[60px] xl:mb-20"
      />
      <div className="flex flex-col gap-[30px] xl:gap-10 2xl:gap-[50px]">
        <Filter />
        <LocationBox />
      </div>
    </div>
  );
};

export default DiscoverOfficeLocations;
