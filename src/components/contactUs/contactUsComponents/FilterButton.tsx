interface Props {
  filter: string;
  onClick: () => void;
  isActive: boolean;
}

const theStyles: string =
  "flex-1 text-[14px] 2xl:text-[18px] font-medium leading-[150%] text-white py-[14px] px-5 2xl:py-[18px] 2xl:px-6 rounded-lg border border-gray15 text-[14px] font-medium leading-[150%] text-white relative z-10 overflow-hidden duration-200 before:duration-300 before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-gray08 before:z-[-1]";

const FilterButton = ({ filter, onClick, isActive }: Props) => {
  const buttonStyles: string = `${theStyles} ${
    isActive ? "before:w-full before:h-full" : "before:w-0 before:h-0"
  }`;

  return (
    <button onClick={onClick} className={`${buttonStyles}`}>
      {filter}
    </button>
  );
};

export default FilterButton;
