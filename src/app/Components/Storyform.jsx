import React, { useState } from "react";

const Storyform = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");
  const [kids, SetKids] = useState("");
  const payload = {
    inputValue,
    kids,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue == "") {
      return;
    }
    onSubmit(inputValue);
    setInputValue("");
  };

  

  return (
    <div className="container mx-auto ">
      <h2 className="text-2xl font-bold text-white  py-4 mb-4">
        {" "}
        Generate Story{" "}
      </h2>

      <form onSubmit={handleSubmit} className="mb-2">
        <div className="flex w-[100%] px-2 justify-center ">
          <div className=" w-[100%]">
            <input
              type="text"
              id="textInput"
              name="textInput"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="py-[.5rem] px-4 p-2 w-full border rounded-md"
            />
          </div>

          <button
            type="submit"
            className="bg-red-500 hover:bg-brown-700 py-[.1rem] px-4 text-white font-semibold  rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Storyform;
