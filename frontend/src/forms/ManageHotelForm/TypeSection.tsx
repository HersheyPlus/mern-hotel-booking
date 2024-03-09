import { useFormContext } from "react-hook-form"
import { hotelTypes } from "../../config/hotel-options"
import { HotelFormData } from "./ManageHotelForm";

const TypeSection = () => {
    const {register, formState: { errors }, watch } = useFormContext<HotelFormData>()
    const typeWatch = watch("type");
  return (
    <div>
      <h2 className="text-2xl font-bold mb-3 text-gray-200">Type</h2>
      <div className="grid grid-cols-3 lg:grid-cols-5 gap-2">
        {hotelTypes.map((type) => (
          <label
            className={
              typeWatch === type
                ? "cursor-pointer bg-blue-600 text-sm rounded-full px-4 py-2 font-semibold text-center"
                : "cursor-pointer bg-gray-600 text-sm rounded-full px-4 py-2 font-semibold  text-center "
            }
          >
            <input
              type="radio"
              value={type}
              {...register("type", {
                required: "This field is required",
              })}
              className="hidden"
            />
            <span>{type}</span>
          </label>
        ))}
      </div>
      {errors.type && (
        <span className="text-red-500 text-sm font-bold">
          {errors.type.message}
        </span>
      )}
    </div>
  )
}

export default TypeSection