import { useState } from "react";
import Buttons from "./components/Buttons";

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

function App() {
  const [bg, setBg] = useState("bg-slate-50");
  function setBackgroundColor(color) {
    setBg(color);
  }
  return (
    <>
      <div className={`${bg} h-full`}>
        <div className="flex flex-col items-center justify-end h-screen">
          <div className=" bg-slate-50 w-auto p-2 mb-3 rounded-3xl">
            <Buttons colorObj={colors} onButtonClick={setBackgroundColor} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
