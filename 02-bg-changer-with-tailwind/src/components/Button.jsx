import React from "react";

const Button = ({ name, color, onButtonClick }) => {
  return (
    <button
      onClick={() => {
        onButtonClick(color);
      }}
      type="button"
      className={`rounded-full ${color} px-5 py-2 text-sm font-semibold ${
        name === "White"
          ? "text-black border-black"
          : "text-white border-" + color
      } shadow-md border-2`}
    >
      <h3 className="text-lg">{name}</h3>
    </button>
  );
};

export default Button;
