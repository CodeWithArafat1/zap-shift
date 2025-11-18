import Marquee from "react-fast-marquee";
import brand0 from "../../assets/brands/amazon.png";
import brand1 from "../../assets/brands/amazon_vector.png";
import brand2 from "../../assets/brands/casio.png";
import brand3 from "../../assets/brands/moonstar.png";
import brand4 from "../../assets/brands/randstad.png";
import brand5 from "../../assets/brands/star.png";
import brand6 from "../../assets/brands/start_people.png";

const brands = [brand0, brand1, brand2, brand3, brand4, brand5, brand6];
const Brands = () => {
  return (
    <div className="py-20">
      <h1 className="text-3xl text-center space-y-10 text-secondary font-bold pb-5">
        We've helped thousands of sales teams
      </h1>
      <div className="mt-5">
        <Marquee pauseOnHover={true} gradient={true} gradientColor="#fff">
          <div className="flex justify-around items-center flex-nowrap overflow-x-hidden gap-10 md:gap-20">
            {brands.map((brand, i) => (
              <img key={i} src={brand} />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Brands;
