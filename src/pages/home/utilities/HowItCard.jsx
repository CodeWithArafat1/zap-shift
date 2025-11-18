import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { TbTruckDelivery } from "react-icons/tb";
const HowItCard = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get("/data/howtoWork.json");
        setServices(data);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="py-10">
      <h3 className="text-3xl font-bold pb-5">How it Works</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6 bg-white ">
        {services.map((service) => {
          return (
            <div key={service.id} className=" rounded-2xl  p-6 shadow-sm">
              <div className="mb-4">
                <TbTruckDelivery size={55} />
              </div>
              <h3 className={`mb-2 text-xl font-bold text-secondary`}>
                {service.title}
              </h3>
              <p className="text-base text-gray-600">{service.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HowItCard;
