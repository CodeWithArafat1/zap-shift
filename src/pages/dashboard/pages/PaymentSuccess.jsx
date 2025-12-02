import axios from "axios";
import { useRef } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router";
// https://zap-shift-server-ten-puce.vercel.app/api/parcels
const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const fetchedRef = useRef(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!sessionId) return;
      if (fetchedRef.current) return;
      fetchedRef.current = true;
      try {
        const res = await axios.patch(
          `http://localhost:5000/api/payment/payment-success?session_id=${sessionId}`
        );
        console.log(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [sessionId]);

  return (
    <div>
      <h1 className="text-6xl">Payment Successful</h1>
    </div>
  );
};

export default PaymentSuccess;
