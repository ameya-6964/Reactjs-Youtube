import Buttons from "./components/Buttons";

function App() {
  return (
    <>
      <div className="bg-red-500 h-full">
        <div className="flex flex-col items-center justify-end h-screen">
          <div className=" bg-slate-50 w-auto p-2 mb-3 rounded-3xl">
            <Buttons />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
