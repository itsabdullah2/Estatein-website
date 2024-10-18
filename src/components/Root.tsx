import {
  Header,
  HomePage,
  AboutUsPage,
  PropertiesPage,
  ServicesPage,
  ContactUsPage,
  StartJourney,
  Footer,
} from "..";
import { Routes, Route } from "react-router-dom";

const Root = () => {
  return (
    <div className="max-w-[120rem] bg-gray08">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/properties" element={<PropertiesPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
      </Routes>
      <StartJourney />
      <Footer />
    </div>
  );
};

export default Root;
