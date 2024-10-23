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

export { abstract, smallAbstract };

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
