import React from "react";
import { Link } from "react-router";

const PaymentCancel = () => {
  return <div className="text-4xl">Payment Cancel place 
  <Link to='/dashboard/add-product' className='btn btn-sm'>try again</Link></div>;
};

export default PaymentCancel;
