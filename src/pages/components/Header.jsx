import React from "react";
import Logo from "/logo.svg";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const Navigate = useNavigate();
  function pathMathRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <header className="flex justify-between items-center px-3 sm:px-1 max-w-6xl mx-auto ">
        <div>
          <img
            src={Logo}
            alt="logo"
            className="h-5 cursor-pointer"
            onClick={() => Navigate("/")}
          />
        </div>
        <div>
          <ul className="flex gap-10">
            <li
              className={`py-3 text-sm font-semibold cursor-pointer text-gray-400 border-b-[3px] border-b-transparent ${
                pathMathRoute("/") &&
                "!font-extrabold !border-b-[3px] !border-b-red-700 !text-black"
              }`}
              onClick={() => Navigate("/")}
            >
              Home
            </li>

            <li
              className={`py-3 text-sm font-semibold cursor-pointer text-gray-400 border-b-[3px] border-b-transparent ${
                pathMathRoute("/offers") &&
                "!font-extrabold !border-b-[3px] !border-b-red-700 !text-black"
              }`}
              onClick={() => Navigate("/offers")}
            >
              Offers
            </li>
            <li
              className={`py-3 text-sm font-semibold cursor-pointer text-gray-400 border-b-[3px] border-b-transparent ${
                pathMathRoute("/sign-in") &&
                "!font-extrabold !border-b-[3px] !border-b-red-700 !text-black"
              }`}
              onClick={() => Navigate("/sign-in")}
            >
              Sign in
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
