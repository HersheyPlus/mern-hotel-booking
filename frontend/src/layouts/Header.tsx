import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api/client";

const Header = () => {
  const queryClient = useQueryClient();
  const { isLoggedIn } = useAppContext();
  const { showToast } = useAppContext();
  const mutation = useMutation(apiClient.signOut, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("validateToken");
      showToast({ message: "Logout successfully!", type: "SUCCESS" });
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });
  const handleLogoutClick = () => {
    mutation.mutate();
  };

  return (
    <header className="h-full">
      <nav className="w-full py-2 md:py-4">
        <div className="flex-col flex md:flex-row justify-between gap-5 md:gap-0 md:items-center">
          <Link to="/">
            <h1 className="font-bold whitespace-nowrap bg-gradient-to-l from-violet-500 to-indigo-600 bg-clip-text text-transparent text-3xl lg:text-4xl">
              Joy-Booking
            </h1>
          </Link>
          <div className="flex gap-3 flex-wrap">
            {!isLoggedIn ? (
              <>
                <Button
                  link={"/sign-in"}
                  title={"Login"}
                  variants={"before:bg-green-500"}
                />
                <Button
                  link={"/register"}
                  title={"Register"}
                  variants={"before:bg-blue-600"}
                />
              </>
            ) : (
              <>
                <Button
                  link={"/my-bookings"}
                  title={"My bookings"}
                  variants={"before:bg-purple-500"}
                />
                <Button
                  link={"/my-hotels"}
                  title={"My hotels"}
                  variants={"before:bg-purple-500"}
                />
                <button
                  onClick={handleLogoutClick}
                  className={
                    "text-white bg-gray-800  font-medium rounded-lg px-5 py-2.5 me-2 mb-2 text-btn before:ease relative overflow-hidden shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:transition-all before:duration-500 hover:text-white hover:shadow-black hover:before:-rotate-180 border border-purple-400 before:bg-red-500"
                  }
                >
                  <span className="relative z-10">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
