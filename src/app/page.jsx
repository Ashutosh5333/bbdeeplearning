"use client";

import { useState } from "react";
import Storyform from "./Components/Storyform";
import StoryDisplay from "./Components/StoryDisplay";
export default function Home() {
  const [choices, setChoices] = useState([]);
  const [loading, SetLoading] = useState(false);
  const payload = {
    someData: true,
  };

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
    <main className="text-center">
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
