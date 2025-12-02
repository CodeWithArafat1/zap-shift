import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import axios from "axios";
const SendParcel = () => {
  const {
    register,
    handleSubmit,
    control,
    // formState: { errors }
  } = useForm();

  const serviceCenters = useLoaderData();
  const regionsDuplicate = serviceCenters.map((c) => c.region);
  const regions = [...new Set(regionsDuplicate)];

  const watchSender = useWatch({ control, name: "senderRegion" });
  const watchReceiver = useWatch({ control, name: "receiverRegion" });

  const districtsByRegions = (region) => {
    const regionsDistricts = serviceCenters.filter((c) => c.region === region);
    const districts = regionsDistricts.map((d) => d.district);
    return districts;
  };

  const handleSendParcel = async (data) => {
    const isDocument = data.parcelType === "document";
    const isSameDistrict = data.senderRegion === data.receiverRegion;
    const parcelWeight = parseFloat(data.parcelWeight);

    let cost = 0;

    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (parcelWeight < 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCharge = isSameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;
        cost = minCharge + extraCharge;
      }
    }
    data.totalCost = cost;

    try {
      const { data: parcelPost } = await axios.post(
        "http://localhost:5000/api/parcels",
        data
      );
      console.log(parcelPost);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2 className="text-5xl font-bold">Send A Parcel</h2>
      <form
        onSubmit={handleSubmit(handleSendParcel)}
        className="mt-12 p-4 text-black"
      >
        {/* parcel type*/}
        <div>
          <label className="label mr-4">
            <input
              type="radio"
              {...register("parcelType")}
              value="document"
              className="radio"
              defaultChecked
            />
            Document
          </label>
          <label className="label">
            <input
              type="radio"
              {...register("parcelType")}
              value="non-document"
              className="radio"
            />
            Non-Document
          </label>
        </div>

        {/* parcel info: name, weight */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-8">
          <fieldset className="fieldset">
            <label className="label">Parcel Name</label>
            <input
              type="text"
              {...register("parcelName")}
              className="input w-full"
              placeholder="Parcel Name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Parcel Weight (kg)</label>
            <input
              type="number"
              {...register("parcelWeight")}
              className="input w-full"
              placeholder="Parcel Weight"
            />
          </fieldset>
        </div>

        {/* two column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* sender Details */}

          <fieldset className="fieldset">
            <h4 className="text-2xl font-semibold">Sender Details</h4>
            {/* sender name */}
            <label className="label">Sender Name</label>
            <input
              type="text"
              {...register("senderName")}
              defaultValue="Arafat Nill"
              className="input w-full"
              placeholder="Sender Name"
            />

            {/* sender email */}
            <label className="label">Sender Email</label>
            <input
              type="text"
              {...register("senderEmail")}
              defaultValue="arafatnillpro@gmail.com"
              className="input w-full"
              placeholder="Sender Email"
            />

            {/* sender region */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Sender Regions</legend>
              <select
                {...register("senderRegion")}
                defaultValue="Pick a region"
                className="select"
              >
                <option disabled={true}>Pick a region</option>
                {regions.map((r, i) => (
                  <option key={i}>{r}</option>
                ))}
              </select>
            </fieldset>

            {/* sender districts */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Sender Districts</legend>
              <select
                {...register("senderDistrict")}
                defaultValue="Pick a district"
                className="select"
              >
                <option disabled={true}>Pick a district</option>
                {districtsByRegions(watchSender).map((r, i) => (
                  <option key={i}>{r}</option>
                ))}
              </select>
            </fieldset>

            {/* sender address */}
            <label className="label mt-4">Sender Address</label>
            <input
              type="text"
              {...register("senderAddress")}
              className="input w-full"
              placeholder="Sender Address"
            />
          </fieldset>
          {/* receiver Details */}
          <fieldset className="fieldset">
            <h4 className="text-2xl font-semibold">Receiver Details</h4>
            {/* receiver name */}
            <label className="label">Receiver Name</label>
            <input
              type="text"
              {...register("receiverName")}
              className="input w-full"
              placeholder="Receiver Name"
            />

            {/* receiver email */}
            <label className="label">Receiver Email</label>
            <input
              type="text"
              {...register("receiverEmail")}
              className="input w-full"
              placeholder="Receiver Email"
            />

            {/* receiver region */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Receiver Regions</legend>
              <select
                {...register("receiverRegion")}
                defaultValue="Pick a region"
                className="select"
              >
                <option disabled={true}>Pick a district</option>
                {regions.map((r, i) => (
                  <option key={i}>{r}</option>
                ))}
              </select>
            </fieldset>

            {/* receiver district */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Receiver District</legend>
              <select
                {...register("receiverDistrict")}
                defaultValue="Pick a district"
                className="select"
              >
                <option disabled={true}>Pick a district</option>
                {districtsByRegions(watchReceiver)?.map((d, i) => (
                  <option key={i} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* receiver address */}
            <label className="label mt-4">Receiver Address</label>
            <input
              type="text"
              {...register("receiverAddress")}
              className="input w-full"
              placeholder="Receiver Address"
            />
          </fieldset>
        </div>
        <input
          type="submit"
          className="btn btn-primary mt-8 text-black"
          value="Send Parcel"
        />
      </form>
    </div>
  );
};

export default SendParcel;
