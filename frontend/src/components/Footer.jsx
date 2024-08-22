import { Link, useLocation } from "react-router-dom";
import logo from "assets/images/logo.png";
import LinkedIn from "assets/LinkedIn.png";
import instagram from "assets/Instagram.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import InputField from "./InputField";

export default function Footer() {
  const linkUrl = useLocation();
  return (
    <div className="bg-[#FFF5EC] text-whblackite text-left">
      {!linkUrl.pathname.startsWith("/blog") && (
        <div className="w-10/12 mx-auto pt-20 pb-8 flex flex-col md:flex-row sm:flex-row space-y-2 justify-start">
          <div className="w-full sm:w-2/5 md:w-3/5 pr-6 flex flex-col space-y-2 pb-6 cursor-default">
            <Link className="flex pt-1" to="/">
              <img className="h-12 pb-2 " src={logo} alt="logo" />
              <h1 className="md:pl-2 pl-2 text-4xl text-black font-medium hover:opacity-60">
                JobPortal
              </h1>
            </Link>
            <p className="md:w-80 w-full text-lg font-medium -mt-2 ">
              Quality over quantity.
            </p>

            <a
              className="w-[220px] text-lg font-medium border-b-2 border-black hover:opacity-60"
              href="mailto:jadhavom229@gmail.com"
            >
             jadhavom229@gmail.com
            </a>
            <span className="font-light">
              Copyright © 2024 <span className="font-normal"> Om Jadhav </span>{" "}
              Design.
            </span>
          </div>
          <div className="w-full sm:w-1/5 md:w-2/5 flex flex-col space-y-2 pb-6 cursor-default">
            <h1 className="text-2xl font-semibold">Welcome</h1>
            <Link
              className="w-28 opacity-60 hover:opacity-100 font-semibold text-lg"
              to="/for-applicant"
            >
              How it works
            </Link>

            <Link
              className="w-28 opacity-60 hover:opacity-100 font-semibold text-lg"
              to="/jobs"
            >
              Find jobs
            </Link>

            <Link
              className="w-40 opacity-60 hover:opacity-100 font-semibold text-lg"
              to="/companies"
            >
              Find companies
            </Link>

           
          </div>

          <div className="w-full sm:w-1/5 md:w-2/5 flex flex-col space-y-2 pb-6">
            <h1 className="text-2xl font-semibold">Companies</h1>

            <Link
              className="w-28 opacity-60 hover:opacity-100 font-semibold text-lg"
              to="/for-recruiter"
            >
              How it works
            </Link>

            <Link
              className="w-28 opacity-60 hover:opacity-100 font-semibold text-lg"
              to="/create-new-job"
            >
              Create job
            </Link>

         

            
          </div>

          <div className="w-full sm:w-1/5 md:w-2/5 flex flex-col space-y-2 pb-6">
            <h1 className="text-2xl font-semibold">JobPortal</h1>

            <Link
              className="w-28 opacity-60 hover:opacity-100 font-semibold text-lg"
              to="/about"
            >
              About us
            </Link>

            <Link
              className="opacity-60 hover:opacity-100 font-semibold text-lg"
              to="/privacy-policy"
            >
              Privacy policy
            </Link>

            <Link
              className="opacity-60 hover:opacity-100 font-semibold text-lg"
              to="/cookie-policy"
            >
              Cookie policy
            </Link>
          </div>

          
        </div>
      )}
      {linkUrl.pathname.startsWith("/blog") && (
        <div className="w-10/12 mx-auto pt-20 pb-8 flex flex-col md:flex-row sm:flex-row space-y-2 justify-start">
          <div className="w-full sm:w-2/5 md:w-3/5 pr-6 flex flex-col space-y-2 pb-6 cursor-default">
            <Link className="flex pt-1" to="/">
              <img className="h-12 pb-2 " src={logo} alt="logo" />
              <h1 className="md:pl-2 pl-2 text-4xl text-black font-medium hover:opacity-60">
                JobPortal
              </h1>
              <FontAwesomeIcon icon={faBlog} />
            </Link>
            <div className="w-full md:w-2/4 lg:w-1/3 h-16 flex items-center justify-center md:justify-start ">
              <input
                placeholder="Email Address"
                className="p-4 rounded outline-none bg-gray-50 focus:bg-white transition duration-200"
              />
            </div>
            <div>
              <button
                className="text-center transform hover:bg-yellow-400 transition duration-200
              cursor-pointer font-bold text-md px-8 py-3 bg-yellow-300 rounded-xl text-black"
              >
                Send mail
              </button>
            </div>
            <span className="break-all w-3/4">
              By providing your email address, you agree to the{" "}
              <strong>Terms of Service</strong> and{" "}
              <strong>Privacy Policy</strong> of JobPortal regarding your
              privacy information.
            </span>
            <div className="flex gap-4">
              <div className="w-10 h-10">
         \
              </div>
             
            </div>
          </div>
          <div className="w-full sm:w-1/5 md:w-2/5 flex flex-col space-y-2 pb-6 cursor-default">
            <h1 className="text-2xl font-semibold">Welcome</h1>
            <Link
              className="w-28 opacity-60 hover:opacity-100 font-semibold text-lg"
              to="/for-applicant"
            >
              How it works
            </Link>

            <Link
              className="w-28 opacity-60 hover:opacity-100 font-semibold text-lg"
              to="/jobs"
            >
              Find jobs
            </Link>

            <Link
              className="w-40 opacity-60 hover:opacity-100 font-semibold text-lg"
              to="/companies"
            >
              Find companies
            </Link>

           
          </div>

          <div className="w-full sm:w-1/5 md:w-2/5 flex flex-col space-y-2 pb-6">
            <h1 className="text-2xl font-semibold">Companies</h1>

            <Link
              className="w-28 opacity-60 hover:opacity-100 font-semibold text-lg"
              to="/for-recruiter"
            >
              How it works
            </Link>

            

          

            <Link
              className="w-40 opacity-60 hover:opacity-100 font-semibold text-lg"
              to="/sign-up/new-recruiter"
            >
              Sign up
            </Link>
          </div>

          <div className="w-full sm:w-1/5 md:w-2/5 flex flex-col space-y-2 pb-6">
            <h1 className="text-2xl font-semibold">JobPortal</h1>

            <Link
              className="w-28 opacity-60 hover:opacity-100 font-semibold text-lg"
              to="/about"
            >
              About us
            </Link>

            <Link
              className="opacity-60 hover:opacity-100 font-semibold text-lg"
              to="/privacy-policy"
            >
              Privacy policy
            </Link>

            <Link
              className="opacity-60 hover:opacity-100 font-semibold text-lg"
              to="/cookie-policy"
            >
              Cookie policy
            </Link>
          </div>
        </div>
      )}{" "}
    </div>
  );
}
