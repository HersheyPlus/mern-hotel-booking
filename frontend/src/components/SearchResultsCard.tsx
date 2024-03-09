import { Link } from "react-router-dom";
import { HotelType } from "../../../backend/src/shared/types";
import { AiFillStar } from "react-icons/ai";
import { BsMap } from "react-icons/bs";
type Props = {
  hotel: HotelType;
};

const SearchResultsCard = ({ hotel }: Props) => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-[2fr_3fr] border border-slate-300 rounded-lg p-6 gap-8">
      <div className="w-full h-[250px] md:h-[300px]">
        <img
          src={hotel.imageUrls[0]}
          className="w-full h-full object-cover object-center rounded-lg"
        />
      </div>
      <div className="grid grid-rows-[1fr_2fr]">
        <div>
          <div className="flex items-center">
            <span className="flex">
              {Array.from({ length: hotel.starRating }).map(() => (
                <AiFillStar className="fill-yellow-400" />
              ))}
            </span>
            <span className="ml-1 text-sm">{hotel.type}</span>
          </div>
          <Link
            to={`/detail/${hotel._id}`}
            className="text-2xl font-bold cursor-pointer"
          >
            {hotel.name}
          </Link>
          <p className="flex gap-2 items-center mb-3 text-gray-300"><BsMap />{hotel.city}</p>
        </div>
        <div>
          <p className="line-clamp-4">{hotel.description}</p>
        </div>

        <div className="flex flex-col gap-7 lg:flex-row lg:justify-between whitespace-nowrap ">
          <div className="grid grid-cols-3  gap-1 items-center ">
            {hotel.facilities.map((facility) => (
              <span className="bg-slate-600 text-gray-200 p-2 rounded-lg font-bold text-xs whitespace-nowrap overflow-scroll text-center">
                {facility}
              </span>
            ))}
          </div>
          <div className="flex flex-col items-end md:items-center gap-1">
            <span className="font-bold">${hotel.pricePerNight} per night</span>
            <Link
              to={`/detail/${hotel._id}`}
              className="bg-blue-600 text-white py-2 px-4 font-bold text-xl max-w-fit hover:bg-blue-500 rounded-lg"
            >
              View More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultsCard;