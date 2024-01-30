import React from "react";
import Button from "./Button";

const Buttons = ({ colorObj, onButtonClick }) => {
  return (
    <>
      {colorObj.map((color, index) => (
        <Button
          color={color.buttonColors}
          name={color.colorText}
          key={index}
          onButtonClick={onButtonClick}
        />
      ))}
    </>
  );
};

export default Buttons;
