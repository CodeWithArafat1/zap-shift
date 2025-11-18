import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";
import { useRef } from "react";
const Coverage = () => {
  const centers = useLoaderData();
  const position = [24.374, 88.6011];
  const mapRef = useRef();

  const handelSearch = (e) => {
    e.preventDefault();
    const query = e.target.search.value;
    const dist = centers.find((center) =>
      center.district.toLowerCase().includes(query.toLowerCase())
    );
    if (dist) {
      const coord = [dist.latitude, dist.longitude];
      mapRef.current.flyTo(coord, 13);
    }
  };

  return (
    <div className="my-20 space-y-10">
      <h1 className="text-3xl font-bold">
        We are available in {centers.length} districts
      </h1>

      <div className="space-y-5 ">
        <form onSubmit={handelSearch}>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              required
              name="search"
              placeholder="Search"
              className="focus:outline-0 focus:ring-0"
            />
          </label>
        </form>

        <div className="w-full h-[80vh]">
          <MapContainer
            ref={mapRef}
            center={position}
            zoom={8}
            scrollWheelZoom={false}
            className="w-full h-[80vh]"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {centers.map((center, i) => (
              <Marker key={i} position={[center.latitude, center.longitude]}>
                <Popup>
                  <strong>{center.region}</strong> <br />{" "}
                  {center.covered_area.join(", ")}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Coverage;
