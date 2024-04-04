import React from "react";

const StoryDisplay = ({ choice, loading }) => {
  let backgroundColor, fontColor, backgroundImage;

  return (
    <>
     
        <div
          className={`${backgroundColor} py-4 border-2 border-black  flex flex-col justify-center items-center px-4  bg-cover bg-center`}
          style={{ backgroundImage: backgroundImage }}
        >
          <div className="max-w-3xl border-2 border-green-600 w-full p-8 bg-white bg-opacity-80 rounded-lg shadow-lg">
            <p className={`font-serif text-xl text-black `}>
              {choice.message.content}
            </p>
          </div>
        </div>
     
    </>
  );
};

export default StoryDisplay;
