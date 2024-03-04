import { Routes as Router, Route, Navigate } from "react-router-dom";
import Layout from "./layouts/Layout";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import AddHotel from "./pages/AddHotel";
import MyHotels from "./pages/MyHotels";
import EditHotel from "./pages/EditHotel";
import Search from "./pages/Search";
import Detail from "./pages/Detail";
import Booking from "./pages/Booking";
import MyBookings from "./pages/MyBookings";
import Home from "./pages/Home";
import { useAppContext } from "./contexts/AppContext";

function App() {
  const { isLoggedIn } = useAppContext();
  return (
    <Layout>
      <Router>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/detail/:hotelId" element={<Detail />} />
        {isLoggedIn && (
          <>
            <Route path="/hotel/:hotelId/booking" element={<Booking />} />
            <Route path="/add-hotel" element={<AddHotel />} />
            <Route path="/edit-hotel/:hotelId" element={<EditHotel />} />
            <Route path="/my-hotels" element={<MyHotels />} />
            <Route path="/my-bookings" element={<MyBookings />} />
          </>
        )}
        <Route path="/*" element={<Navigate to="/" />} />
      </Router>
    </Layout>
  );
}

export default App;
