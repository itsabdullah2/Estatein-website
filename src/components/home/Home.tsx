import Hero from "./homeComponents/Hero";
import FeaturedProperties from "./homeComponents/FeaturedProperties";
import Testimonials from "./homeComponents/Testimonials";
import AskedQuestions from "./homeComponents/AskedQuestions";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="px-4 sm:px-10 md:px-20 2xl:px-[10.125rem] w-full">
        <FeaturedProperties />
        <Testimonials />
        <AskedQuestions />
      </div>
    </>
  );
};

export default Home;
