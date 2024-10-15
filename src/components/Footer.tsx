import {
  logo,
  socialLinks,
  mailIcon,
  sendIcon,
  footerHomeLinks,
  footerAboutUsLinks,
  footerPropertiesLinks,
  footerServicesLinks,
  footerContactUsLinks,
} from "../assets/dummy";
import { Link } from "react-router-dom";

const Footer = () => {
  const date: Date = new Date();
  const year: number = date.getFullYear();

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-20 px-4 py-[50px] sm:px-10 sm:py-20 md:px-20 2xl:px-[10.125rem] 2xl:py-[100px]">
        <div className="flex flex-col gap-[30px] w-full lg:w-[500px]">
          <img src={logo} alt="Company Logo" className="w-40 h-12" />
          <div className="flex items-center justify-between py-[18px] px-6 border border-gray15 rounded-xl w-fit">
            <div className="flex items-center gap-[10px]">
              <img src={mailIcon} alt="Mail Icon" className="w-6 h-6" />
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="bg-transparent placeholder:text-[18px] placeholder:font-medium text-white text-[18px] font-medium focus:outline-0 caret-purple60 focus:placeholder:opacity-0 placeholder:duration-200"
              />
            </div>
            <button>
              <img
                src={sendIcon}
                alt="Send Icon"
                className="w-[30px] h-[30px]"
              />
            </button>
          </div>
        </div>
        <div className="flex-1 flex flex-wrap justify-between">
          <ul className="flex flex-col gap-">
            <li className="mb-4 lg:mb-6 2xl:mb-[30px]">
              <h3 className="text-[16px] lg:text-[18px] 2xl:text-[20px] font-medium text-gray60">
                Home
              </h3>
            </li>
            {footerHomeLinks.map((link) => (
              <Link
                to={link.path}
                key={link.name}
                className="mb-2 lg:mb-4 2xl:mb-[20px] text-[14px] lg:text-[16px] 2xl:text-[18px] font-medium text-white"
              >
                <li>{link.name}</li>
              </Link>
            ))}
          </ul>
          <ul className="flex flex-col gap-">
            <li className="mb-4 lg:mb-6 2xl:mb-[30px]">
              <h3 className="text-[16px] lg:text-[18px] 2xl:text-[20px] font-medium text-gray60">
                About Us
              </h3>
            </li>
            {footerAboutUsLinks.map((link) => (
              <Link
                to={link.path}
                key={link.name}
                className="mb-2 lg:mb-4 2xl:mb-[20px] text-[14px] lg:text-[16px] 2xl:text-[18px] font-medium text-white"
              >
                <li>{link.name}</li>
              </Link>
            ))}
          </ul>
          <ul className="flex flex-col gap-">
            <li className="mb-4 lg:mb-6 2xl:mb-[30px]">
              <h3 className="text-[16px] lg:text-[18px] 2xl:text-[20px] font-medium text-gray60">
                Properties
              </h3>
            </li>
            {footerPropertiesLinks.map((link) => (
              <Link
                to={link.path}
                key={link.name}
                className="mb-2 lg:mb-4 2xl:mb-[20px] text-[14px] lg:text-[16px] 2xl:text-[18px] font-medium text-white"
              >
                <li>{link.name}</li>
              </Link>
            ))}
          </ul>
          <ul className="flex flex-col gap-">
            <li className="mb-4 lg:mb-6 2xl:mb-[30px]">
              <h3 className="text-[16px] lg:text-[18px] 2xl:text-[20px] font-medium text-gray60">
                Services
              </h3>
            </li>
            {footerServicesLinks.map((link) => (
              <Link
                to={link.path}
                key={link.name}
                className="mb-2 lg:mb-4 2xl:mb-[20px] text-[14px] lg:text-[16px] 2xl:text-[18px] font-medium text-white"
              >
                <li>{link.name}</li>
              </Link>
            ))}
          </ul>
          <ul className="flex flex-col gap-">
            <li className="mb-4 lg:mb-6 2xl:mb-[30px]">
              <h3 className="text-[16px] lg:text-[18px] 2xl:text-[20px] font-medium text-gray60">
                Contact Us
              </h3>
            </li>
            {footerContactUsLinks.map((link) => (
              <Link
                to={link.path}
                key={link.name}
                className="mb-2 lg:mb-4 2xl:mb-[20px] text-[14px] lg:text-[16px] 2xl:text-[18px] font-medium text-white"
              >
                <li>{link.name}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-between flex-col-reverse lg:flex-row bg-gray10 py-5 px-4 lg:py-3 lg:px-20 2x; 2xl:py-4 2xl:px-[162px]">
        <div className="flex items-center flex-col lg:flex-row gap-5 xl:gap-[38px] text-[14px] xl:text-[18px] font-medium text-white">
          <p>@{year} Estatein. All Rights Reserved.</p>
          <span>Terms & Conditions</span>
        </div>
        <ul className="flex items-center gap-2 xl:gap-[10px]">
          {socialLinks.map((link) => (
            <Link to={link.path} key={link.path}>
              <li className="flex items-center justify-center w-10 h-10 xl:w-[52px] xl:h-[52px] rounded-full bg-gray08 hover:bg-gray15 duration-200">
                <img
                  src={link.icon}
                  alt="Social Icon"
                  className="w-5 h-5 xl:w-6 xl:h-6"
                />
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Footer;
