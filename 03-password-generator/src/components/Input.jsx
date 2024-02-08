const Input = () => {
  return (
    <div className=" mt-5 h-[50px] flex justify-center items-center">
      <input
        type="text"
        className="w-[450px] h-[35px] rounded-l-md text-orange-400 "
      />
      <button className="text-white h-[35px] bg-blue-600 text-center w-auto pt-0 pb-0 pl-3 pr-4 rounded-r-md">
        Copy
      </button>
    </div>
  );
};

export default Input;
