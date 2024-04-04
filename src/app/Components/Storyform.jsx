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

//   console.log("inputvalue",inputValue)

  return (
    <div className="container mx-auto mt-5">
      <h2 className="text-2xl font-bold mb-4">Simple Form Example</h2>

      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-4">
          <label
            htmlFor="textInput"
            className="block text-sm font-medium text-gray-600"
          >
            Enter Text:
          </label>
          <input
            type="text"
            id="textInput"
            name="textInput"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Storyform;
