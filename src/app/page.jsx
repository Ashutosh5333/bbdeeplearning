"use client";

import { useState } from "react";
import Storyform from "./Components/Storyform";
import StoryDisplay from "./Components/StoryDisplay";
import "./globals.css"

export default function Home() {
  const [choices, setChoices] = useState([]);
  const [loading, SetLoading] = useState(false);
  const payload = {
    someData: true,
  };

  // const handlesubmitform = async (prompt) => {
  //   SetLoading(true);
  //   try {
  //     const res = await fetch("/api/chat-gpt", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         prompt,
  //       }),
  //     });
  
  //     if (!res.ok) {
  //       throw new Error(`HTTP error! Status: ${res.status}`);
  //     }
  
  //     const data = await res.text();
  //     const result = data ? JSON.parse(data) : {}; // Parse JSON if data is not empty
  
  //     console.log("ress", result);
  //     setChoices(result.choices);
  //     SetLoading(false);
  //   } catch (err) {
  //     console.error(err, "err");
  //     SetLoading(false);
  //   }
  // };
  
  const handlesubmitform = async (prompt) => {
    SetLoading(true);
    try {
      const res = await fetch("/api/chat-gpt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
        }),
      });
      const result = await res.json();
      console.log("ress", result);
      setChoices(result.choices);
      SetLoading(false);
    } catch (err) {
      console.log(err, "err");
      SetLoading(false);
    }
  };

  return (
    <main className="text-center min-h-screen relative top-0 bg-cover bg-[url('/assets/background.jpg')]">
     
     
      <Storyform onSubmit={handlesubmitform} />

      {loading
        ? "Loading......."
        : choices.map((choice) => {
            return (
              <StoryDisplay
                loading={loading}
                key={choice.index}
                choice={choice}
              />
            );
          })}

    </main>
  );
}
