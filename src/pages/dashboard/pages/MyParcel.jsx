import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router";

const MyParcel = () => {
  const { data: parcel, isLoading } = useQuery({
    queryKey: ["myParcels"],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:5000/api/parcels");
      return data;
    },
  });

  const handelPayment = async (singleParcel) => {
    const paymentInfo = {
      name: singleParcel.parcelName,
      totalAmount: singleParcel.totalCost,
      info: singleParcel._id,
      senderEmail: singleParcel.senderEmail,
    };

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/payment",
        paymentInfo
      );
      window.location.assign(data.url);
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return <h1>loading...</h1>;
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>S/N</th>
              <th>Name</th>
              <th>Parcel Type</th>
              <th>Payment Status</th>
              <th>Price</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {parcel.map((par, i) => (
              <tr key={par._id} className="bg-base-200">
                <th>{i}</th>
                <td>{par.parcelName}</td>
                <td>{par.parcelType}</td>
                <td>
                  {par.paymentStatus === "paid" ? (
                    <span className="text-green-500 bg-green-200">paid</span>
                  ) : (
                    <button
                      className="btn btn-sm btn-error text-white"
                      onClick={() => handelPayment(par)}
                    >
                      Pay
                    </button>
                  )}
                </td>
                <td>{par.totalCost}</td>
                <td>{par.senderEmail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyParcel;
