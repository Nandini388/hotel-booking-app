import { Link } from "react-router-dom";
import "../HotelList.css";
import { useState, useEffect } from "react";
import API from "../services/api";

function HotelList() {
  const [hotels, setHotels] = useState([]);
  const [search, setSearch] = useState("");

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
    <div style={{ padding: "30px" }}>
      <h1 style={{ textAlign: "center" }}>🏨 Hotel Booking</h1>

      <input
        type="text"
        placeholder="🔍 Search by hotel name or location..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          maxWidth: "400px",
          display: "block",
          margin: "20px auto 30px",
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          fontSize: "16px",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px,1fr))",
          gap: "20px",
        }}
      >
        {hotels
          .filter(
            (hotel) =>
              hotel.name.toLowerCase().includes(search.toLowerCase()) ||
              hotel.location.toLowerCase().includes(search.toLowerCase())
          )
          .map((hotel) => (
            <div
              key={hotel.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                transition: "0.3s",
              }}
            >
              <img
                src={hotel.thumbnail}
                alt={hotel.name}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "15px" }}>
                <h3>{hotel.name}</h3>

                <p>⭐ {hotel.rating}</p>

                <p>📍 {hotel.location}</p>

                <h3>₹ {hotel.price}</h3>

                <Link to={`/hotel/${hotel.id}`}>
                  <button
                    style={{
                      background: "#007bff",
                      color: "white",
                      border: "none",
                      padding: "10px 18px",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default HotelList;