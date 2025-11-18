
import Banner from "./Banner";
import HowItCard from "./utilities/HowItCard";
import Services from "./Services";
import Brands from "./Brands";
import TrackingFeatureCard from "./utilities/TrackingFeatureCard";

const Home = () => {
  return (
    <div>
      <Banner />
      <HowItCard />
      <Services />
      <Brands/>
      <TrackingFeatureCard/>
    </div>
  );
};

export default Home;
