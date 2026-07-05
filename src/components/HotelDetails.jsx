import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

function HotelDetails() {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    API.get(`/hotels/${id}/`)
      .then((response) => {
        setHotel(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (!hotel) {
    return <h2>Loading...</h2>;
  }

  return (
  <div style={{ padding: "20px" }}>
    <img
      src={hotel.thumbnail}
      alt={hotel.name}
      style={{ width: "500px", borderRadius: "10px" }}
    />

    <h1>{hotel.name}</h1>

    <h2>₹ {hotel.price}</h2>

    <p>⭐ {hotel.rating}</p>

    <p>📍 {hotel.location}</p>

    <p>{hotel.description}</p>

    <h2>Photos</h2>

    {hotel.photos.map((photo, index) => (
      <img
        key={index}
        src={photo}
        alt="Hotel"
        style={{
          width: "250px",
          margin: "10px",
          borderRadius: "10px",
        }}
      />
    ))}
  </div>
);
}

export default HotelDetails;
