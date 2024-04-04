import React from "react";

const StoryDisplay = ({ choice, loading }) => {
  let backgroundColor, fontColor, backgroundImage;

  
  backgroundColor = "bg-blue-500"; 
  fontColor = "text-white"; 
  backgroundImage = "url('/path/to/background-image.jpg')"; 
  
  // bg-[url('/assets/Answer.jpg')]

  return (
    <>
      <div
        className={` py-8  border-black flex flex-col justify-center items-center px-6 bg-cover bg-center`}
        
      >
        <div className="max-w-4xl w-full p-8 bg-opacity-80 rounded-lg shadow-lg">
          <p className={`font-serif text-left text-xl ${fontColor} leading-relaxed`}>
            {choice.message.content}
          </p>
        </div>
      </div>
    </>
  );
};

export default StoryDisplay;
