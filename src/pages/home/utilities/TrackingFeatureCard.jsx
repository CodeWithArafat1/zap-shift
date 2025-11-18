import img0 from "../../../assets/live-tracking.png";
import img1 from "../../../assets/tiny-deliveryman.png";
import img2 from "../../../assets/safe-delivery.png";
const trackingData = [
  {
    id: 1,
    icon: img0,
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
  },
  {
    id: 2,
    icon: img1,
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
  },
  {
    id: 3,
    icon: img2,
    title: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
  },
];
const TrackingFeatureCard = () => {
  return (
    <div className="space-y-10 border-t-2 border-dashed border-b-2 border-secondary/20 my-10">
      {trackingData.map((track) => (
        <div key={track.id} className="flex flex-col md:flex-row items-center gap-8 shadow-sm p-8 rounded-md">
          <div  className="md:border-r-2 border-dashed border-gray-300 border-0 pr-8">
            <img src={track.icon} alt="" />
          </div>

          <div className="flex-1 ">
            <h3 className="mb-3 text-2xl font-bold text-teal-700">
              {track.title}
            </h3>

            <p className="text-base text-gray-700">{track.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrackingFeatureCard;
