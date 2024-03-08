import { useForm } from "react-hook-form";
import * as apiClient from "../../api/client";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../contexts/AppContext";
import { Link } from "react-router-dom";

export type SignInFormData = {
  email: string;
  password: string;
};

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>();
  const { showToast } = useAppContext();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutation = useMutation(apiClient.signIn, {
    onSuccess: async () => {
      showToast({ message: "Login successfully!", type: "SUCCESS" });
      await queryClient.invalidateQueries("validateToken");
      navigate("/");
    },
    onError: (error: Error) => {
      showToast({message:error.message, type: "ERROR"})
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });
  return (
    <form action="" className="flex flex-col gap-5 p-2 md:w-[50%] md:mx-auto" onSubmit={onSubmit}>
      <h2 className="font-extrabold text-2xl lg:text-3xl text-center border-2 border-gray-600 mx-auto px-3 py-1 rounded-md bg-gradient-to-l from-violet-500 to-indigo-600 bg-clip-text text-transparent ">Login</h2>
      <label htmlFor="" className="text-gray-300 font-semibold">
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
      <Link to='/reset-password' className="hover:underline hover:underline-offset-2 hover:text-cyan-300 ">Forgot password ?</Link>
      <button
        className="text-white bg-gray-800 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 text-btn before:ease relative overflow-hidden shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-full before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:transition-all before:duration-500 hover:text-white hover:shadow-black hover:before:-rotate-180 border border-purple-400 before:bg-green-500"
        type="submit"
      >
        <span className="relative z-10">Login</span>
      </button>
    </form>
  );
};

export default SignInForm;
