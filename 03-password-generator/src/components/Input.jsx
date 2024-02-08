import React, { useState, useEffect } from "react";

const Input = ({
  password,
  length,
  numberAllowed,
  characterAllowed,
  setLength,
  setCharacterAllowed,
  setNumberAllowed,
  copyPasswordToClipboard,
  passwordRef,
}) => {
  const [copied, setCopied] = useState(false);
  // Reset copied state when password changes
  useEffect(() => {
    setCopied(false);
  }, [password]);
  return (
    <>
      <div className=" mt-5 h-[50px] flex justify-center items-center">
        <input
          type="text"
          className="w-[450px] h-[35px] rounded-l-md text-orange-600 text-2xl 
          font-bold outline-none"
          value={password}
          readOnly
          ref={passwordRef}
        />
        <button
          className="text-white h-[35px] bg-blue-600 text-center w-auto pt-0 pb-0 pl-3 pr-4 rounded-r-md"
          onClick={() => {
            copyPasswordToClipboard();
            setCopied(true);
          }}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <div className="flex  h-[60px] items-center justify-center text-orange-400 pt-0 pb-0 gap-5  text-lg mt-3">
        <div>
          <input
            type="range"
            min={8}
            max={30}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label className="ml-2">Length: {length}</label>
        </div>
        <div>
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label className="ml-2" htmlFor="numberInput">
            Numbers
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            defaultChecked={characterAllowed}
            id="characterInput"
            onChange={() => {
              setCharacterAllowed((prev) => !prev);
            }}
          />
          <label className="ml-2" htmlFor="characterInput">
            Characters
          </label>
        </div>
      </div>
    </>
  );
};

export default Input;
