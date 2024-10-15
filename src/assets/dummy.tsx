// Import Images
import bannerbg from "./images/banner.png";
import logo from "./images/Logo.png";
import logoLaptop from "./images/logo-laptop.png";
import logoMobile from "./images/logo-mobile.png";
import abstractImage from "./images/abstract-design.png";
import heroBuildingImage from "./images/hero-image.png";
import containerImage from "./images/container.png";
import arrow from "./images/arrow.png";
import iconOne from "./images/icon-1.png";
import iconTwo from "./images/icon-2.png";
import iconThree from "./images/icon-3.png";
import iconFour from "./images/icon-4.png";
import headingStars from "./images/heading-stars.png";
import circularImage from "./images/circular-image.png";
import bedroomIcon from "./images/bedroom-icon.png";
import bathroomIcon from "./images/bathroom-icon.png";
import buildingIcon from "./images/building-icon.png";
import star from "./images/star.png";
import abstractLeft from "./images/left-abstract.png";
import abstractRight from "./images/right-abstract.png";
import facebookIcon from "./images/facebook-icon.png";
import twitterIcon from "./images/twitter-icon.png";
import youtubeIcon from "./images/youtube-icon.png";
import linkedInIcon from "./images/linkedIn-icon.png";
import mailIcon from "./images/mail-icon.png";
import sendIcon from "./images/send-icon.png";

export {
  bannerbg,
  logo,
  logoMobile,
  logoLaptop,
  abstractImage,
  heroBuildingImage,
  containerImage,
  arrow,
  iconOne,
  iconTwo,
  iconThree,
  iconFour,
  headingStars,
  circularImage,
  abstractLeft,
  abstractRight,
  mailIcon,
  sendIcon,
};

interface NavItems {
  name: string;
  path: string;
  isContact?: boolean;
}

export const navItems: NavItems[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Us",
    path: "/about-us",
  },
  {
    name: "Properties",
    path: "/properties",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Contact Us",
    path: "/contact-us",
    isContact: true,
  },
];

export const featuredPropertiesDesc: string =
  'Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.';

interface BoxItemType {
  image: string;
  title: string;
  description: string;
  includes: {
    icon: string;
    spanText: string;
  }[];
  price: string;
  urlPath: string;
}

export const PropertiesBoxItems: BoxItemType[] = [
  {
    image: "",
    title: "Seaside Serenity Villa",
    description:
      "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...",
    includes: [
      {
        icon: bedroomIcon,
        spanText: "4-Bedroom",
      },
      {
        icon: bathroomIcon,
        spanText: "3-Bathroom",
      },
      {
        icon: buildingIcon,
        spanText: "Villa",
      },
    ],
    price: "550,000",
    urlPath: "View Property Details",
  },
  {
    image: "",
    title: "Metropolitan Haven",
    description:
      "A chic and fully-furnished 2-bedroom apartment with panoramic city views...",
    includes: [
      {
        icon: bedroomIcon,
        spanText: "2-Bedroom",
      },
      {
        icon: bathroomIcon,
        spanText: "2-Bathroom",
      },
      {
        icon: buildingIcon,
        spanText: "Villa",
      },
    ],
    price: "550,000",
    urlPath: "View Property Details",
  },
  {
    image: "",
    title: "Rustic Retreat Cottage",
    description:
      "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...",
    includes: [
      {
        icon: bedroomIcon,
        spanText: "3-Bedroom",
      },
      {
        icon: bathroomIcon,
        spanText: "3-Bathroom",
      },
      {
        icon: buildingIcon,
        spanText: "Villa",
      },
    ],
    price: "550,000",
    urlPath: "View Property Details",
  },
];

interface TestimonialItemType {
  rates: string[];
  rateTitle: string;
  rateDescription: string;
  image: string;
  name: string;
  country: string;
}

export const testimonialItem: TestimonialItemType[] = [
  {
    rates: [star, star, star, star, star],
    rateTitle: "Exceptional Services",
    rateDescription:
      "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    image: "",
    name: "Wade Warren",
    country: "USA, California",
  },
  {
    rates: [star, star, star, star, star],
    rateTitle: "Efficient and Reliable",
    rateDescription:
      "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
    image: "",
    name: "Emelie Thomson",
    country: "USA, Florida",
  },
  {
    rates: [star, star, star, star, star],
    rateTitle: "Trusted Advisors",
    rateDescription:
      "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
    image: "",
    name: "John Mans",
    country: "USA, Nevada",
  },
];

export const testimonialHeadingDescription: string =
  "Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.";

interface AskedQuestionsType {
  question: string;
  answer: string;
}

export const AskedQuestions: AskedQuestionsType[] = [
  {
    question: "How do I search for properties on Estatein?",
    answer:
      "Learn how to use our user-friendly search tools to find properties that match your criteria.",
  },
  {
    question: "What documents do I need to sell my property through Estatein?",
    answer:
      "Find out about the necessary documentation for listing your property with us.",
  },
  {
    question: "How can I contact an Estatein agent?",
    answer:
      "Discover the different ways you can get in touch with our experienced agents.",
  },
];

export const askedQuestionHeadingDescription: string =
  "Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.";

// interface FooterLinksType {
//   home: {
//     sectionTitle?: string;
//     name: string;
//     path: string;
//   }[];
//   aboutUs: {
//     sectionTitle?: string;
//     name: string;
//     path: string;
//   }[];
//   properties: {
//     sectionTitle?: string;
//     name: string;
//     path: string;
//   }[];
//   services: {
//     sectionTitle?: string;
//     name: string;
//     path: string;
//   }[];
//   contactUs: {
//     sectionTitle?: string;
//     name: string;
//     path: string;
//   }[];
// }

// export const footerLinks: FooterLinksType[] = [
//     {
//       home: [
//       {
//         sectionTitle: "Home",
//         name: "Hero Section",
//         path: "/",
//       },
//       {
//         name: "Features",
//         path: "/features",
//       },
//       {
//         name: "Properties",
//         path: "/properties",
//       },
//       {
//         name: "Testimonials",
//         path: "/testimonials",
//       },
//       {
//         name: "FAQ's",
//         path: "/faqs",
//       },
//     ]
//   },
//     {
//       aboutUs: [
//         {
//           sectionTitle: "About Us",
//           name: "Our Story",
//           path: "#our-story",
//         },
//         {
//           name: "Our Work",
//           path: "#our-work",
//         },
//         {
//           name: "How It Works",
//           path: "#how-it-works",
//         },
//         {
//           name: "Our Team",
//           path: "#our-team",
//         },
//       ],
//     },
//     {
//       properties: [
//       {
//         sectionTitle: "Properties",
//         name: "Portfolio",
//         path: "#portfolio",
//       },
//       {
//         name: "Categories",
//         path: "#categories",
//       },
//     ]
//   },
//     {
//       services: [
//       {
//         sectionTitle: "Services",
//         name: "Valuation Mastery",
//         path: "#valuation-mastery",
//       },
//       {
//         name: "Strategic Marketing",
//         path: "#strategic-marketing",
//       },
//       {
//         name: "Negotiation Wizardry",
//         path: "#negotiation-wizardry",
//       },
//       {
//         name: "Closing Success",
//         path: "#closing-success",
//       },
//       {
//         name: "Property Management",
//         path: "#property-management",
//       },
//     ]
//   },
//     {
//       contactUs: [
//       {
//         sectionTitle: "Contact Us",
//         name: "Contact Form",
//         path: "#contact-form",
//       },
//       {
//         name: "Our Offices",
//         path: "#our-offices",
//       },
//     ]
//   },
// ];

interface FooterLinksType {
  name: string;
  path: string;
}

export const footerHomeLinks: FooterLinksType[] = [
  {
    name: "Hero Section",
    path: "/",
  },
  {
    name: "Features",
    path: "/#features",
  },
  {
    name: "Properties",
    path: "/properties",
  },
  {
    name: "Testimonials",
    path: "/testimonials",
  },
  {
    name: "FAQ's",
    path: "/faq's",
  },
];

export const footerAboutUsLinks: FooterLinksType[] = [
  {
    name: "Our Story",
    path: "/about-us#our-story",
  },
  {
    name: "Our Work",
    path: "/about-us#our-work",
  },
  {
    name: "How It Works",
    path: "/about-us#how-it-works",
  },
  {
    name: "Our Team",
    path: "/about-us#our-team",
  },
  {
    name: "Our Clients",
    path: "/about-us#our-clients",
  },
];

export const footerPropertiesLinks: FooterLinksType[] = [
  {
    name: "Portfolio",
    path: "/portfolio",
  },
  {
    name: "Categories",
    path: "/categories",
  },
];

export const footerServicesLinks: FooterLinksType[] = [
  {
    name: "Valuation Mastery",
    path: "/service#valuation-mastery",
  },
  {
    name: "Strategic Marketing",
    path: "/service#strategic-marketing",
  },
  {
    name: "Negotiation Wizardry",
    path: "/service#negotiation-wizardry",
  },
  {
    name: "Closing Success",
    path: "/service#closing-success",
  },
  {
    name: "Property Management",
    path: "/service#property-management",
  },
];

export const footerContactUsLinks: FooterLinksType[] = [
  {
    name: "Contact Form",
    path: "/contact-us#contact-form",
  },
  {
    name: "Our Offices",
    path: "/contact-us#our-offices",
  },
];

interface SocialLinksType {
  icon: string;
  path: string;
}

export const socialLinks: SocialLinksType[] = [
  {
    icon: facebookIcon,
    path: "https://facebook.com",
  },
  {
    icon: linkedInIcon,
    path: "https://linkedIn.com",
  },
  {
    icon: twitterIcon,
    path: "https://twitter.com",
  },
  {
    icon: youtubeIcon,
    path: "https://youtube.com",
  },
];
