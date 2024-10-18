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
import aboutHeroImage from "./images/about-hero-image.png";
import circularStar from "./images/circular-star-icon.png";
import circularHat from "./images/circular-hat-icon.png";
import circularPeople from "./images/circular-people-icon.png";
import firstMember from "./images/first-member.png";
import secondMember from "./images/second-member.png";
import thirdMember from "./images/third-member.png";
import fourthMember from "./images/fourth-member.png";
import domainIcon from "./images/domain-icon.png";
import categoryIcon from "./images/category-icon.png";
import firstFeature from "./images/feature-1.png";
import secondFeature from "./images/feature-2.png";
import thirdFeature from "./images/feature-3.png";
import firstClient from "./images/client-1.png";
import secondClient from "./images/client-2.png";
import thirdClient from "./images/client-3.png";

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
  aboutHeroImage,
  circularStar,
  circularHat,
  circularPeople,
  firstMember,
  secondMember,
  thirdMember,
  fourthMember,
  twitterIcon,
  domainIcon,
  categoryIcon,
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
    image: firstFeature,
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
    image: secondFeature,
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
    image: thirdFeature,
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
    image: firstClient,
    name: "Wade Warren",
    country: "USA, California",
  },
  {
    rates: [star, star, star, star, star],
    rateTitle: "Efficient and Reliable",
    rateDescription:
      "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results. Highly recommended!",
    image: secondClient,
    name: "Emelie Thomson",
    country: "USA, Florida",
  },
  {
    rates: [star, star, star, star, star],
    rateTitle: "Trusted Advisors",
    rateDescription:
      "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
    image: thirdClient,
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

export const ourJourneyDescription: string =
  "Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients.";

export const ourValuesDescription: string =
  "Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.";

export const ourAchievementsDescription: string =
  "Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.";

interface AchievementsBoxesType {
  title: string;
  description: string;
}

export const achievementsBoxes: AchievementsBoxesType[] = [
  {
    title: "3+ Years of Excellence",
    description:
      "With over 3 years in the industry, we've amassed a wealth of knowledge and experience, becoming a go-to resource for all things real estate.",
  },
  {
    title: "Happy Clients",
    description:
      "Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.",
  },
  {
    title: "Industry Recognition",
    description:
      "We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence.",
  },
];

export const navigatingExperienceDescription: string =
  "At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works.";

interface NavigatingBoxesType {
  step: string;
  title: string;
  description: string;
}

export const firstNavigatingBoxes: NavigatingBoxesType[] = [
  {
    step: "Step 01",
    title: "Discover a World of Possibilities",
    description:
      "Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget.",
  },
  {
    step: "Step 02",
    title: "Narrowing Down Your Choices",
    description:
      "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.",
  },
  {
    step: "Step 03",
    title: "Personalized Guidance",
    description:
      "Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away. Call or message away.",
  },
];

export const secondNavigatingBoxes: NavigatingBoxesType[] = [
  {
    step: "Step 04",
    title: "See It for Yourself",
    description:
      "Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home.",
  },
  {
    step: "Step 05",
    title: "Making Informed Decisions",
    description:
      "Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed and confident in your choice.",
  },
  {
    step: "Step 06",
    title: "Getting the Best Deal",
    description:
      "We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms. Call or message away.",
  },
];

export const meetOurTeamDescription: string =
  "At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality.";

interface TeamMemberBoxType {
  image: string;
  name: string;
  jobTitle: string;
}

export const teamMemberBox: TeamMemberBoxType[] = [
  {
    image: firstMember,
    name: "Max Mitchell",
    jobTitle: "Founder",
  },
  {
    image: secondMember,
    name: "Sara Johnson",
    jobTitle: "Chief Real State Officer",
  },
  {
    image: thirdMember,
    name: "David Brown",
    jobTitle: "Head of Property Management",
  },
  {
    image: fourthMember,
    name: "Sara David",
    jobTitle: "Legal Counsel",
  },
];

export const ourClientsDescription: string =
  "At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving";

interface OurClientsBoxType {
  date: string;
  heading: string;
  domainDesc: string;
  categoryDesc: string;
  whatTheySay: string;
}

export const ourClientBox: OurClientsBoxType[] = [
  {
    date: "Since 2019",
    heading: "ABC Corporation",
    domainDesc: "Commercial Real Estate",
    categoryDesc: "Luxury Home Development",
    whatTheySay:
      "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
  },
  {
    date: "Since 2018",
    heading: "GreenTech Enterprises",
    domainDesc: "Commercial Real Estate",
    categoryDesc: "Retail Space",
    whatTheySay:
      "Estatein's ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.",
  },
];
