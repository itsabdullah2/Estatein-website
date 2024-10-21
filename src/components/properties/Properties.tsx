import FindYourProperty from "./propertiesComponents/FindYourProperty";
import SearchAProperty from "./propertiesComponents/SearchAProperty";
import DiscoverThePossibilities from "./propertiesComponents/DiscoverThePossibilities";
import MakeItHappen from "./propertiesComponents/MakeItHappen";

const Properties = () => {
  return (
    <>
      <FindYourProperty />
      <div className="px-4 sm:px-10 md:px-20 2xl:px-[10.125rem] customSize:px-20">
        <SearchAProperty />
        <DiscoverThePossibilities />
        <MakeItHappen />
      </div>
    </>
  );
};

export default Properties;
