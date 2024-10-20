import { Banner } from "../";
import { logo, navItems, logoLaptop, logoMobile } from "../assets/dummy";
import { Link } from "react-router-dom";
import { useAppState } from "../context/AppStateContext";
import { HiBars3BottomRight } from "react-icons/hi2";

const Header = () => {
  const { activePage, setActivePage, isMenu, handleMenu } = useAppState();
  return (
    <div className="bg-gray10 border-b-2 border-gray15">
      <Banner />
      <div className="text-white h-[99px] flex items-center justify-between px-4 sm:px-10 md:px-20 2xl:px-[10.125rem] relative">
        <Link to="/">
          <img
            srcSet={`${logoMobile} 390w, ${logoLaptop} 1440w, ${logo} 1920w`}
            sizes="(max-width: 390px) 390px, (max-width: 1024px) 1440px, 1920px"
            src={logo}
            alt="logo"
          />
        </Link>
        <nav
          className={`${
            isMenu ? "left-0 lg:left-full" : "left-full"
          } top-[101px] absolute w-full lg:static lg:w-auto bg-gray10 duration-200 z-[200]`}
        >
          <ul className="flex items-center lg:flex-row flex-col py-20 px-3 lg:px-0 lg:py-0 gap-8">
            {navItems.map((item) => (
              <Link
                to={item.path}
                key={item.name}
                className={`w-full lg:w-fit text-center ${
                  activePage === item.path
                    ? "bg-gray08 border border-gray15 py-[14px] px-6 rounded-[10px]"
                    : ""
                }
                  ${
                    item.isContact
                      ? "lg:bg-none lg:border-none lg:py-0 lg:px-0 lg:rounded-none"
                      : ""
                  }
                `}
                onClick={() => setActivePage(item.path)}
              >
                <li
                  className={`font-medium text-[18px] tracking-wider ${
                    item.isContact ? "block lg:hidden" : ""
                  }`}
                >
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
        <button className="hidden lg:block py-[14px] px-6 rounded-[10px] bg-gray08 border border-gray15 font-medium text-[18px]">
          Contact Us
        </button>
        <button className="block lg:hidden" onClick={handleMenu}>
          <HiBars3BottomRight className="w-7 h-7" />
        </button>
      </div>
    </div>
  );
};

export default Header;
