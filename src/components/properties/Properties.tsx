import FindYourProperty from "./propertiesComponents/FindYourProperty";
import SearchAProperty from "./propertiesComponents/SearchAProperty";

const Properties = () => {
  return (
    <>
      <FindYourProperty />
      <div className="px-4 sm:px-10 md:px-20 2xl:px-[10.125rem] customSize:px-20">
        <SearchAProperty />
      </div>
    </>
  );
};

export default Properties;
