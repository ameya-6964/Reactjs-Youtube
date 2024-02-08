import { useState } from "react";
import Input from "./components/Input";
import "./index.css";

function App() {
  const [length, setLength] = useState(8);
  return (
    <div className="w-[800px] h-[120px] bg-blue-950 ">
      <Input />
    </div>
  );
}

export default App;
