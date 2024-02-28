import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="h-full">
      <div className="w-full p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            to="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <h1 className="font-bold whitespace-nowrap bg-gradient-to-l from-violet-500 to-indigo-600 bg-clip-text text-transparent">
              Melbromss
            </h1>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-400 sm:mb-0 text-footer">
            <li>
              <Link to="#" className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline me-4 md:me-6">
                Licensing
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-700 sm:mx-auto  lg:my-8" />
        <span className="block text-sm text-gray-400 sm:text-center">
          © 2024{" "}
          <Link to="#" className="hover:underline">
            Joy-booking™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
