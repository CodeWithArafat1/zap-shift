import React, { useEffect, useState } from "react";
import ExpressServiceCard from "./utilities/ExpressServiceCard";
import axios from "axios";
import toast from "react-hot-toast";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("/data/services.json");
        setServices(data);
      } catch (err) {
        toast.error(err.message);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="bg-secondary rounded-md px-15 py-20">
      <div className="text-center pb-10 space-y-5">
        <h1 className="text-4xl font-bold text-white">Our Services</h1>
        <p className="text-base-200">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
        {services.map((item) => (
          <ExpressServiceCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Services;
