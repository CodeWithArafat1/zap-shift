import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const PaymentHistory = () => {
  const { data: paymentHistory, isLoading } = useQuery({
    queryKey: ["paymentHistory"],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:5000/api/payment");
      return data;
    },
  });

  if (isLoading) {
    return <h1>loading...</h1>;
  }
  return (
    <div className="p-6 bg-base-200 rounded-lg shadow-lg container mx-auto">
      <h2 className="text-2xl font-bold mb-6 ">Payment History</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Parcel Info</th>
              <th>Price</th>
              <th>Tracking Number</th>
              <th>Transition Id</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {paymentHistory?.map((item, idx) => (
              <tr key={idx}>
                <td>{item.parcelName}</td>
                <td>
                  <div>${item.amount}</div>
                </td>
                <td>{item.trackingId}</td>
                <td >{item.transactionId}</td>
                <td>
                  <button className="btn btn-sm btn-outline ">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
