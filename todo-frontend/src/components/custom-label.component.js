import React from "react";

const CustomLabel = ({ children, forValue }) => (
  <label
    className="font-bold text-lg block mb-2 text-gray-900"
    htmlFor={forValue}
  >
    {children}
  </label>
);

export default CustomLabel;
