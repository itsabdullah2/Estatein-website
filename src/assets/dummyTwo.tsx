import { ReactElement } from "react";
// import icons
import {
  MdOutlineKeyboardArrowDown,
  MdEmail,
  MdLocalPhone,
  MdLocationOn,
} from "react-icons/md";
// import images
import firstUnlockIcon from "./images/unlock-icon-1.png";
import secondUnlockIcon from "./images/unlock-icon-2.png";
import thirdUnlockIcon from "./images/unlock-icon-3.png";
import fourthUnlockIcon from "./images/unlock-icon-4.png";
import firstManagementIcon from "./images/management-icon-1.png";
import secondManagementIcon from "./images/management-icon-2.png";
import thirdManagementIcon from "./images/management-icon-3.png";
import fourthManagementIcon from "./images/management-icon-4.png";
import firstSmartIcon from "./images/smart-icon-1.png";
import secondSmartIcon from "./images/smart-icon-2.png";
import thirdSmartIcon from "./images/smart-icon-3.png";
import fourthSmartIcon from "./images/smart-icon-4.png";

import abstract from "./images/unlock-abstract.png";
import smallAbstract from "./images/smart-abstract.png";
import gallery1 from "./images/gallery-1.png";
import gallery2 from "./images/gallery-2.png";
import gallery3 from "./images/gallery-3.png";
import gallery4 from "./images/gallery-6.png";
import gallerySmall1 from "./images/gallery-4-small.png";
import gallerySmall2 from "./images/gallery-5-small.png";
import abstractGallery from "./images/abstract-gallery.png";
import abstractGalleryMobile from "./images/abstract-gallery-mobile.png";
import house1 from "./images/house-1.jpg";
import houseLarge1 from "./images/house-1-large.jpg";
import house2 from "./images/house-2.jpg";
import houseLarge2 from "./images/house-2-large.jpg";
import house3 from "./images/house-3.jpg";
import houseLarge3 from "./images/house-3-large.jpg";
import house4 from "./images/house-4.jpg";
import houseLarge4 from "./images/house-4-large.jpg";
import house5 from "./images/house-5.jpg";
import houseLarge5 from "./images/house-5-large.jpg";
import house6 from "./images/house-6.jpg";
import houseLarge6 from "./images/house-6-large.jpg";
import house7 from "./images/house-7.jpg";
import houseLarge7 from "./images/house-7-large.jpg";
import house8 from "./images/house-8.jpg";
import houseLarge8 from "./images/house-8-large.jpg";
import house9 from "./images/house-9.jpg";
import houseLarge9 from "./images/house-9-large.jpg";
import bedRoomIcon from "./images/black-bedroom-icon.png";
import bathRoomIcon from "./images/black-bathroom-icon.png";
import AreaIcon from "./images/area-icon.png";
import featureIcon from "./images/feature-icon.png";
// import house10 from "./images/house-10.jpg";
// import houseLarge10 from "./images/house-10-large.jpg";

export {
  abstract,
  smallAbstract,
  abstractGallery,
  abstractGalleryMobile,
  gallerySmall1,
  gallerySmall2,
  gallery4,
  houseLarge1,
  houseLarge2,
  houseLarge3,
  houseLarge4,
  houseLarge5,
  houseLarge6,
  houseLarge7,
  houseLarge8,
  houseLarge9,
};

interface CommonBoxesType {
  icon: string;
  title: string;
  description: string;
}

export const unlockProperties: CommonBoxesType[] = [
  {
    icon: firstUnlockIcon,
    title: "Valuation Mastery",
    description:
      "Discover the true worth of your property with our expert valuation services.",
  },
  {
    icon: secondUnlockIcon,
    title: "Strategic Marketing",
    description:
      "Selling a property requires more than just a listing; it demands a strategic marketing.",
  },
  {
    icon: thirdUnlockIcon,
    title: "Negotiation Wizardry",
    description:
      "Negotiating the best deal is an art, and our negotiation experts are masters of it.",
  },
  {
    icon: fourthUnlockIcon,
    title: "Closing Success",
    description:
      "A successful sale is not complete until the closing. We guide you through the intricate closing process.",
  },
];

export const effortlessManagement: CommonBoxesType[] = [
  {
    icon: firstManagementIcon,
    title: "Tenant Harmony",
    description:
      "Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies.",
  },
  {
    icon: secondManagementIcon,
    title: "Maintenance Ease",
    description:
      "Say goodbye to property maintenance headaches. We handle all aspects of property upkeep.",
  },
  {
    icon: thirdManagementIcon,
    title: "Financial Peace of Mind",
    description:
      "Managing property finances can be complex. Our financial experts take care of rent collection",
  },
  {
    icon: fourthManagementIcon,
    title: "Legal Guardian",
    description:
      "Stay compliant with property laws and regulations effortlessly.",
  },
];

export const smartInvestments: CommonBoxesType[] = [
  {
    icon: firstSmartIcon,
    title: "Market Insight",
    description:
      "Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions",
  },
  {
    icon: secondSmartIcon,
    title: "ROI Assessment",
    description:
      "Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments",
  },
  {
    icon: thirdSmartIcon,
    title: "Customized Strategies",
    description:
      "Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs",
  },
  {
    icon: fourthSmartIcon,
    title: "Diversification Mastery",
    description:
      "Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations",
  },
];

interface ConnectFormInputsType {
  id: string;
  label: string;
  type: string;
  placeholder: string;
}

export const connectFormInputs: ConnectFormInputsType[] = [
  {
    id: "first-name",
    label: "First Name",
    type: "text",
    placeholder: "Enter First Name",
  },
  {
    id: "last-name",
    label: "Last Name",
    type: "text",
    placeholder: "Enter Last Name",
  },
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your Email",
  },
  {
    id: "phone",
    label: "Phone",
    type: "tel",
    placeholder: "Enter Phone Number",
  },
];

interface ConnectDropdownMenuType {
  id: string;
  label: string;
  placeholder: string;
  icon: ReactElement;
}

export const connectDropdownMenu: ConnectDropdownMenuType[] = [
  {
    id: "inquiry-type",
    label: "Inquiry Type",
    placeholder: "Select Inquiry Type",
    icon: <MdOutlineKeyboardArrowDown />,
  },
  {
    id: "how-did-hear",
    label: "How Did You Hear About Us?",
    placeholder: "Select",
    icon: <MdOutlineKeyboardArrowDown />,
  },
];

export const letsConnectDescription: string =
  "We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. Whether you're a prospective client, partner, or simply curious about our services, we're here to answer your questions and provide the assistance you need.";

export const parentDivStyles: string =
  "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-[30px] xl:gap-[50px]";

export const commonStyles: string =
  "text-[14px] 2xl:text-[18px] font-medium leading-5 text-gray40 bg-gray10 border border-gray15 py-4 px-5 2xl:py-6 rounded-md 2xl:rounded-lg outline-none focus:placeholder:opacity-0 placeholder:duration-200";

export const labelStyles: string =
  "text-[16px] 2xl:text-xl text-white font-semibold leading-[150%]";

interface DiscoverOfficeBoxType {
  section: string;
  location: string;
  locationDescription: string;
  email: string;
  phone: string;
  country: string;
  mailIcon: ReactElement;
  phoneIcon: ReactElement;
  locationIcon: ReactElement;
}

export const discoverOfficeBox: DiscoverOfficeBoxType[] = [
  {
    section: "Main Headquarters",
    location: "123 Estatein Plaza, City Center, Metropolis",
    locationDescription:
      "Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.",
    email: "info@estatein.com",
    phone: "+1 (123) 456-7890",
    country: "Metropolis",
    mailIcon: <MdEmail size={25} className="text-white" />,
    phoneIcon: <MdLocalPhone size={25} className="text-white" />,
    locationIcon: <MdLocationOn size={25} className="text-white" />,
  },
  {
    section: "Regional Offices",
    location: "456 Urban Avenue, Downtown District, Metropolis",
    locationDescription:
      "Estatein's presence extends to multiple regions, each with its own dynamic real estate landscape. Discover our regional offices, staffed by local experts who understand the nuances of their respective markets.",
    email: "info@restatein.com",
    phone: "+1 (123) 628-7890",
    country: "Metropolis",
    mailIcon: <MdEmail size={25} className="text-white" />,
    phoneIcon: <MdLocalPhone size={25} className="text-white" />,
    locationIcon: <MdLocationOn size={25} className="text-white" />,
  },
];

interface GalleryType {
  image: string;
}

export const images: GalleryType[] = [
  {
    image: gallery1,
  },
  {
    image: gallery2,
  },
  {
    image: gallery3,
  },
];

export const propertyDetailsGallery: string[] = [
  house1,
  house2,
  house3,
  house4,
  house5,
  house6,
  house7,
  house8,
  house9,
];

interface PropertyDetailsDescriptionType {
  id: string;
  icon: string;
  category: string;
  numberOfRooms: string;
  twoColumns: boolean;
}

export const propertyDetailsDescription: PropertyDetailsDescriptionType[] = [
  {
    id: "1",
    icon: bedRoomIcon,
    category: "Bedrooms",
    numberOfRooms: "04",
    twoColumns: false,
  },
  {
    id: "2",
    icon: bathRoomIcon,
    category: "Bathrooms",
    numberOfRooms: "03",
    twoColumns: false,
  },
  {
    id: "3",
    icon: AreaIcon,
    category: "Area",
    numberOfRooms: "2,500 Square Feet",
    twoColumns: true,
  },
];

interface PropertyDetailsKeyFeatureType {
  id: string;
  icon: string;
  feature: string;
}
export const propertyDetailsKeyFeature: PropertyDetailsKeyFeatureType[] = [
  {
    id: "1",
    icon: featureIcon,
    feature: "Expansive oceanfront terrace for outdoor entertaining",
  },
  {
    id: "2",
    icon: featureIcon,
    feature: "Gourmet kitchen with top-of-the-line appliances",
  },
  {
    id: "3",
    icon: featureIcon,
    feature: "Private beach access for morning strolls and sunset views",
  },
  {
    id: "4",
    icon: featureIcon,
    feature:
      "Master suite with a spa-inspired bathroom and ocean-facing balcony",
  },
  {
    id: "5",
    icon: featureIcon,
    feature: "Private garage and ample storage space",
  },
];
