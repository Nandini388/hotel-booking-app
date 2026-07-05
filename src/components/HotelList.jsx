import { Link } from "react-router-dom";
import "../HotelList.css";
import { useState, useEffect } from "react";
import API from "../services/api";

function HotelList() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
  API.get("/hotels/")
  .then((response) => {
    console.log(response.data);
    setHotels(response.data.data);
  })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
  <div>
    <h2>Hotels</h2>

    {hotels.map((hotel) => (
      <div key={hotel.id}>
        <img
          src={hotel.thumbnail}
          alt={hotel.name}
          width="250"
        />

        <h3>{hotel.name}</h3>

        <p>📍 {hotel.location}</p>

        <p>⭐ {hotel.rating}</p>

        <p>₹ {hotel.price}</p>
  <Link to={`/hotel/${hotel.id}`}>
  <button>View Details</button>
</Link>
      </div>
    ))}
  </div>
);
}

export default HotelList; 

