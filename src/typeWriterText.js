import { use, useEffect, useState } from "react";

export default function TypeWriterText({ text, speed = 2000 }) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index));
      setIndex((prev) => prev + 1);

      if (index > text.length) {
        setIndex(0);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [index, text, speed]);

  return (
    <span className="whitespace-pre">
      {displayedText}
      <span className="border-r-2 border-white animate-pulse ml-1"></span>
    </span>
  );
}
