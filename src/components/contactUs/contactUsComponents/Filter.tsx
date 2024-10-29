import FilterButton from "./FilterButton";
import { useAppState } from "../../../context/AppStateContext";

const Filter = () => {
  const { isFilterItemActive, handleFilterItem } = useAppState();

  return (
    <div className="flex items-center gap-[10px] bg-gray10 rounded-lg 2xl:rounded-xl py-[10px] px-[10px] w-full md:w-[520px]">
      <FilterButton
        isActive={isFilterItemActive === "All"}
        onClick={() => handleFilterItem("All")}
        filter="All"
      />
      <FilterButton
        isActive={isFilterItemActive === "Regional"}
        onClick={() => handleFilterItem("Regional")}
        filter="Regional"
      />
      <FilterButton
        isActive={isFilterItemActive === "International"}
        onClick={() => handleFilterItem("International")}
        filter="International"
      />
    </div>
  );
};

export default Filter;
