import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from '../../api/client'
import { useAppContext } from "../../contexts/AppContext";
import { useNavigate } from "react-router-dom";

export type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const RegisterForm = () => {
  const {showToast} = useAppContext();
  const navigate = useNavigate()
  const queryClient = useQueryClient();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const mutation = useMutation(apiClient.register,{
    onSuccess: async () => {
      showToast({message: "Account created successfully", type: "SUCCESS"})
      await queryClient.invalidateQueries("validateToken");
      navigate("/")
    },
    onError: (error:Error) => {
       showToast({message:error.message, type: "ERROR"})
    }
  })

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <form action="" className="flex flex-col gap-5 p-2 md:w-[50%] md:mx-auto " onSubmit={onSubmit}>
      <h2 className="font-extrabold text-2xl lg:text-3xl text-center border-2 border-gray-600 mx-auto px-3 py-1 rounded-md bg-gradient-to-l from-violet-500 to-indigo-600 bg-clip-text text-transparent">Create an Account</h2>
      <div className="flex flex-col md:flex-row gap-4 xl:justify-between md:items-center">
       <label htmlFor="" className="text-gray-300 font-semibold xl:w-[50%]">
          First Name
          <input
            className="mt-1 border rounded w-full py-1 px-2 font-normal text-gray-800"
            type="text"
            {...register("firstName", { required: "First name is required" })}
          ></input>
          {errors.firstName && (
            <span className="text-red-500 font-medium text-sm">
              {errors.firstName.message}
            </span>
          )}
        </label>
        <label htmlFor="" className="text-gray-300 font-semibold xl:w-[50%]">
          Last Name
          <input
            className="mt-1 border rounded w-full py-1 px-2 font-normal text-gray-800"
            type="text"
            {...register("lastName", { required: "Last name is required" })}
          ></input>
          {errors.lastName && (
            <span className="text-red-500 font-medium text-sm">
              {errors.lastName.message}
            </span>
          )}
        </label>
      </div>
      <label htmlFor="" className="text-gray-300 font-semibold ">
        Email
        <input
          className="mt-1 border rounded w-full py-1 px-2 font-normal text-gray-800"
          type="email"
          {...register("email", { required: "Email is required" })}
        ></input>
        {errors.email && (
          <span className="text-red-500 font-medium text-sm">
            {errors.email.message}
          </span>
        )}
      </label>
      <label htmlFor="" className="text-gray-300 font-semibold">
        Password
        <input
          className="mt-1 border rounded w-full py-1 px-2 font-normal text-gray-800"
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
        ></input>
        {errors.password && (
          <span className="text-red-500 font-medium text-sm">
            {errors.password.message}
          </span>
        )}
      </label>
      <label htmlFor="" className="text-gray-300 font-semibold">
        Confirm Password
        <input
          className="mt-1 border rounded w-full py-1 px-2 font-normal text-gray-800"
          type="password"
          {...register("confirmPassword", {
            required: "Please confirm your password",
            validate: (value) => {
              if (!value) {
                return;
              } else if (watch("password") !== value) {
                return "Your passwords don't match";
              }
            },
          })}
        ></input>
        {errors.confirmPassword && (
          <span className="text-red-500 font-medium text-sm">
            {errors.confirmPassword.message}
          </span>
        )}
      </label>
      <button
        className="text-white bg-gray-800 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 text-btn before:ease relative overflow-hidden shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-full before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:transition-all before:duration-500 hover:text-white hover:shadow-black hover:before:-rotate-180 border border-purple-400 before:bg-blue-500"
        type="submit"
      >
        <span className="relative z-10">Register</span>
      </button>
    </form>
  );
};

export default RegisterForm;
