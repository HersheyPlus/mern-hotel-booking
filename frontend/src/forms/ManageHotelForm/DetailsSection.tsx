import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";

const DetailsSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-extrabold text-2xl lg:text-3xl bg-gradient-to-l from-violet-500 to-indigo-600 bg-clip-text text-transparent">Add Hotel</h1>
      <label className="text-gray-200 text-sm font-bold flex-1">
        Name
        <input
          type="text"
          className="border rounded w-full py-1 px-2 font-normal text-gray-200 mt-1 bg-gray-600"
          {...register("name", { required: "This field is required" })}
        ></input>
        {errors.name && (
          <span className="text-red-500">{errors.name.message}</span>
        )}
      </label>

      <div className="flex gap-4">
        <label className="text-gray-200 text-sm font-bold flex-1">
          City
          <input
            type="text"
            className="border rounded w-full py-1 px-2 font-normal text-gray-200 mt-1 bg-gray-600"
            {...register("city", { required: "This field is required" })}
          ></input>
          {errors.city && (
            <span className="text-red-500">{errors.city.message}</span>
          )}
        </label>
        <label className="text-gray-200 text-sm font-bold flex-1">
          Country
          <input
            type="text"
            className="border rounded w-full py-1 px-2 font-normal text-gray-200 mt-1 bg-gray-600"
            {...register("country", { required: "This field is required" })}
          ></input>
          {errors.country && (
            <span className="text-red-500">{errors.country.message}</span>
          )}
        </label>
      </div>
      <label className="text-gray-200 text-sm font-bold flex-1">
        Description
        <textarea
          rows={10}
          className="mt-1 border rounded w-full py-1 px-2 font-normal text-gray-200 bg-gray-600"
          {...register("description", { required: "This field is required" })}
        ></textarea>
        {errors.description && (
          <span className="text-red-500">{errors.description.message}</span>
        )}
      </label>
      <div className="grid grid-cols-2 gap-2">
        <label className="text-gray-200 text-sm font-bold ">
        Price Per Night
        <input
          type="number"
          min={1}
          max={1000}
          className="border rounded w-full p-1 font-normal text-gray-200 mt-1 bg-gray-600"
          {...register("pricePerNight", { required: "This field is required" })}
        ></input>
        {errors.pricePerNight && (
          <span className="text-red-500">{errors.pricePerNight.message}</span>
        )}
      </label>
      <label className="text-gray-200 text-sm font-bold">
        Star Rating
        <select
          {...register("starRating", {
            required: "This field is required",
          })}
          className="mt-1 border rounded w-full p-1 text-gray-200 bg-gray-600 font-normal"
        >
          <option value="" className="text-sm font-bold text-gray-800">
            Select as Rating
          </option>
          {[1, 2, 3, 4, 5].map((num) => (
            <option value={num}>{num}</option>
          ))}
        </select>
        {errors.starRating && (
          <span className="text-red-500">{errors.starRating.message}</span>
        )}
      </label>
        </div>    
    </div>
  );
};

export default DetailsSection;