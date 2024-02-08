import { useState, useCallback, useEffect, useRef } from "react";
import Input from "./components/Input";
import "./index.css";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  //useRef hook
  const passwordRef = useRef(null);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*-_+=[]{}~`";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);

  useEffect(
    function () {
      passwordGenerator();
    },
    [passwordGenerator]
  );

  return (
    <>
      <h1 className="text-center mt-5 text-5xl font-bold text-white">
        Password Generator
      </h1>
      <div className="w-[800px] h-[200px] flex flex-col justify-center items-center mt-[40px] bg-gray-800 rounded-3xl">
        <Input
          password={password}
          length={length}
          numberAllowed={numberAllowed}
          characterAllowed={characterAllowed}
          setLength={setLength}
          setCharacterAllowed={setCharacterAllowed}
          setNumberAllowed={setNumberAllowed}
          copyPasswordToClipboard={copyPasswordToClipboard}
          passwordRef={passwordRef}
        />
      </div>
    </>
  );
}

export default App;
