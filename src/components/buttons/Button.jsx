import React from "react";

const Button = ({ buttonName }) => (
  <button className="px-5 py-2 bg-gray-100 cursor-pointer rounded-lg whitespace-nowrap">
    {buttonName}
  </button>
);
export default Button;

