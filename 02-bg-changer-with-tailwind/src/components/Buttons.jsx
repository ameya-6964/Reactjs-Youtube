import React from "react";
import Button from "./Button";

const colors = [
  { colorText: "Red", buttonColors: "bg-red-600" },
  { colorText: "Green", buttonColors: "bg-green-600" },
  { colorText: "Blue", buttonColors: "bg-blue-600" },
  { colorText: "Olive", buttonColors: "bg-green-900" },
  { colorText: "Gray", buttonColors: "bg-gray-400" },
  { colorText: "Yellow", buttonColors: "bg-yellow-600" },
  { colorText: "Pink", buttonColors: "bg-pink-600" },
  { colorText: "Purple", buttonColors: "bg-purple-600" },
  { colorText: "Lavender", buttonColors: "bg-violet-300" },
  { colorText: "White", buttonColors: "bg-slate-50" },
  { colorText: "Black", buttonColors: "bg-slate-950" },
];

const Buttons = () => {
  return (
    <>
      {colors.map((color, index) => (
        <Button color={color.buttonColors} name={color.colorText} key={index} />
      ))}
    </>
  );
};

export default Buttons;
