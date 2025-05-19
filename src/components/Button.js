import { Link } from "react-router-dom";
import React from "react";

export const Button = ({ children }) => {
  return (
    <Link to="/">
      <button
        className="w-64 text-xl text-white bg-gradient-to-r from-blue-500 via-blue-600
             to-blue-700 rounded-lg px-5 py-2.5 mr-2 mb-2 font-medium"
      >
        {children}
      </button>
      {/* <button
              className="bg-gradient-to-r text-xl text-white  from-red-200 via-red-300 to-yellow-200 text-gray-900 hover:bg-gradient-to-bl focus:ring-red-100
             dark:focus:ring-red-400 to-blue-700 rounded-lg px-5 py-2.5 mr-2 mb-2"
            >
              Back To Cinemate
            </button> */}
    </Link>
  );
};
