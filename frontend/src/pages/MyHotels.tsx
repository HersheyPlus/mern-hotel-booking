import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import * as apiClient from '../api/client';
import { BsBuilding, BsMap } from "react-icons/bs";
import { BiHotel, BiMoney, BiStar } from "react-icons/bi";
import { IoIosAdd } from "react-icons/io";
import { MdEdit } from "react-icons/md";

const MyHotels = () => {
  const { data: hotelData } = useQuery(
    "fetchMyHotels",
    apiClient.fetchMyHotels,
    {
      onError: () => {},
    }
  );

  if (!hotelData) {
    return <span>No Hotels found</span>;
  }

  return (
    <div className="space-y-5">
      <span className="flex justify-between items-center">
        <h1 className="font-extrabold text-2xl lg:text-3xl md:border-2 border-gray-600 p-2 rounded-md bg-gradient-to-l from-violet-500 to-indigo-600 bg-clip-text text-transparent ">My Hotels</h1>
        <Link
          to="/add-hotel"
          className="flex bg-blue-600 text-white text-lg md:text-xl font-bold py-2 px-3 hover:bg-blue-500 rounded-lg"
        >
          Add Hotel <IoIosAdd size={30} />
        </Link>
      </span>
      <div className="grid grid-cols-1 gap-8">
        {hotelData.map((hotel) => (
          <div
            data-testid="hotel-card"
            className="flex flex-col border border-slate-300 rounded-lg p-6 gap-5"
          >
            <h2 className="text-2xl font-bold">{hotel.name}</h2>
            <div className="whitespace-pre-line">{hotel.description}</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 font-semibold">
              <div className="border rounded-md border-slate-300 p-3 flex items-center overflow-hidden">
                <BsMap className="mr-2" />
                {hotel.city}, {hotel.country}
              </div>
              <div className="border border-slate-300 p-3 flex items-center overflow-hidden rounded-md">
                <BsBuilding className="mr-2" />
                {hotel.type}
              </div>
              <div className="border border-slate-300 rounded-lg p-3 flex items-center overflow-hidden">
                <BiMoney className="mr-2" />£{hotel.pricePerNight} per night
              </div>
              <div className="border border-slate-300 rounded-lg p-3 flex items-center overflow-hidden">
                <BiHotel className="mr-2" />
                {hotel.adultCount} adults, {hotel.childCount} children
              </div>
              <div className="border border-slate-300 rounded-lg p-3 flex items-center overflow-hidden">
                <BiStar className="mr-2" />
                {hotel.starRating} Star Rating
              </div>
            </div>
            <span className="flex justify-end">
              <Link
                to={`/edit-hotel/${hotel._id}`}
                className="flex bg-blue-600 text-white text-lg md:text-xl font-bold px-4 py-2 hover:bg-blue-500 rounded-lg items-center gap-2"
              >
                Edit <MdEdit />
              </Link>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyHotels;



