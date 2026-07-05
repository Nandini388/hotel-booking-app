import { Routes, Route } from "react-router-dom";
import HotelList from "./components/HotelList";
import HotelDetails from "./components/HotelDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HotelList />} />
      <Route path="/hotel/:id" element={<HotelDetails />} />
    </Routes>
  );
}

export default App;