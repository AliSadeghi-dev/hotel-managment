import FeaturedRoom from "@/components/FeaturedRoom/FeaturedRoom";
import Gallery from "@/components/Gallery/Gallery";
import HeroSection from "@/components/HeroSection/HeroSection";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import PageSearch from "@/components/PageSearch/PageSearch";
import { getFeaturedRoom } from "@/libs/apis";

const Home = async () => {
  return (
    <>
      <HeroSection />
      <PageSearch />
      <FeaturedRoom />
      <Gallery />
      <NewsLetter />
    </>
  );
};

export default Home;
