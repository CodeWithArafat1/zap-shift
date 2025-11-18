import React from "react";
import {
    TbArrowsShuffle,
  TbArrowsShuffle2,
  TbBuildingWarehouse,
  TbCash,
  TbPackage,
  TbTruckDelivery,
  TbWorld,
} from "react-icons/tb";

const iconMap = {
  TbTruckDelivery,
  TbWorld,
  TbPackage,
  TbCash,
  TbBuildingWarehouse,
  TbArrowsShuffle,
};
const ExpressServiceCard = ({ item }) => {
  const IconComponent = iconMap[item.icon];
  return (
    <div className="rounded-3xl bg-white  p-8 text-center shadow-xl">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-b from-teal-300 text-secondary to-bg-indigo-100">
        {IconComponent && <IconComponent className="h-10 w-10 " />}
      </div>

      <h3 className="mt-6 mb-3 text-2xl font-bold text-secondary ">
        {item.title}
      </h3>

      <p className="text-base ">{item.description}</p>
    </div>
  );
};

export default ExpressServiceCard;
