import { ReactElement } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

interface MenuDataType {
  item: string;
}

interface Props {
  icon: ReactElement;
  title: string;
  menuData: MenuDataType[];
}

const CustomDropDown = (props: Props) => {
  return (
    <div className="">
      <div className="flex items-center py-[12px] px-[12px] lg:py-5 lg:px-5 border border-gray15 rounded-xl cursor-pointer">
        <div className="flex-1 flex items-center">
          {props.icon}
          <span className="text-gray60 text-[14px] lg:text-[15px] xl:text-[18px] customSize:text-[15px] leading-[150%] font-medium ml-2 lg:ml-[10px] pl-2 lg:pl-[10px] border-l border-gray15">
            {props.title}
          </span>
        </div>
        <span className="w-[28px] h-[28px] lg:w-8 lg:h-8 rounded-full flex items-center justify-center bg-gray10">
          <MdOutlineKeyboardArrowDown size={25} className="text-white" />
        </span>
      </div>

      <ul className="">
        {props.menuData.map((menuItem) => (
          <li key={menuItem.item} className="">
            {menuItem.item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomDropDown;
