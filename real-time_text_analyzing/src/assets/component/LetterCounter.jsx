import React, { use, useState } from "react";
import Counter from "./Counter";
import LetterDensity from "./LetterDensity";

export default function LetterCounter({ isDarkMode }) {
  const [text, setText] = useState("");
  const [excludeSpace, setExcludeSpace] = useState(false);
  const [limit, setLimit] = useState(null);
  const [showAllLetters, setShowAllLetters] = useState(false);

  const processedText = () => {
    let currentText = text;
    if (excludeSpace) currentText = currentText.replace(/\s/g, "");
    if (limit) currentText = currentText.slice(0, limit);
    return currentText;
  };

  const charCount = () => processedText().length;
  const wordCount = () => {
    const words = processedText()
      .split(/\s+/)
      .filter((word) => word !== "");
    return words.length;
  };

  const sentencesCount = () => {
    const sentences = processedText()
      .split(/[.!?]/)
      .filter((s) => s !== "");
    return sentences.length;
  };

  const letterDensity = () => {
    const counts = {};
    const processed = processedText().toUpperCase();
    for (const char of processed) {
      if (/[A-Z]/.test(char)) counts[char] = (counts[char] || 0) + 1;
    }
    const total = Object.values(counts).reduce((sum, c) => sum + c, 0);
    return Object.entries(counts).map(([letter, count]) => ({
      letter,
      count,
      percentage: total > 0 ? ((count / total) * 100).toFixed(2) : 0,
    }));
  };

  const displayLetters = () => {
    const density = letterDensity();
    if (density.length > 5 && !showAllLetters) {
      return density.slice(0, 5);
    }
    return density;
  };

  return (
    <div className="flex flex-col items-center text-center w-full">
      <h1
        className="text-4xl font-bold text-center my-8"
        style={{
          backgroundColor: isDarkMode ? "#222222" : "#ffffff",
          color: isDarkMode ? "#ffffff" : "#222222",
        }}
      >
        Analyze your text in real time
      </h1>
      <textarea
        name=""
        style={{
          backgroundColor: isDarkMode ? "#343148" : "#E8E8E8",
          color: isDarkMode ? "#ffffff" : "#808080",
          width: "80%",
          borderRadius: "1%",
          height: "200px",
          fontSize: "20px",
          marginBottom: "20px",
        }}
        placeholder="Write here..."
        id=""
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      {/* Options and Read Time*/}
      <div className="mt-6 flex justify-between items-center w-4/5">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="form-checkbox mr-2"
            onChange={(e) => setExcludeSpace(e.target.checked)}
          />
          <span>Exclude spaces</span>
        </label>

        <label htmlFor="limit">
          <span className="mr-2">Set Character Limit</span>
          <input
            type="number"
            style={{
              backgroundColor: isDarkMode ? "#343148" : "#E8E8E8",
              color: isDarkMode ? "#ffffff" : "#808080",
              borderRadius: "10%",
            }}
            onChange={(e) => {
              const num = parseInt(e.target.value, 10);
              setLimit(isNaN(num) ? null : num);
            }}
            value={limit === null ? null : limit}
            placeholder="Limit"
          />
        </label>
        <div>Appox. Read time; &lt; 1 minute</div>
      </div>

      {/* Counter */}
      <div
        className="my-8 grid grid-cols-3 gap-4 w-4/5"
        style={{
          marginTop: "10px",
          marginBottom: "10px",
          color: isDarkMode ? "#ffffff" : "#808080",
          color: "black",
          fontWeight: "bold",
        }}
      >
        <div
          className="flex justify-between"
          style={{
            backgroundColor: "#CF9FFF",
            boxShadow: "80%",
            height: "100px",
            borderRadius: "2%",
            marginRight: "20px",
          }}
        >
          <Counter title="Total Characters" value={charCount()} />
        </div>
        <div
          className="flex justify-between"
          style={{
            backgroundColor: "#FFBF00",
            boxShadow: "80%",
            height: "100px",
            borderRadius: "2%",
            marginRight: "20px",
          }}
        >
          <Counter title="Word Counts" value={wordCount()} />
        </div>
        <div
          className="flex justify-between "
          style={{
            backgroundColor: "#E97451		",
            boxShadow: "80%",
            height: "100px",
            borderRadius: "2%",
          }}
        >
          <Counter title="Sentence Count" value={sentencesCount()} />
        </div>
      </div>
      <div className="w-4/5">
        <LetterDensity
          letterDensity={letterDensity}
          displayLetters={displayLetters}
          showAllLetters={showAllLetters}
          setShowAllLetters={setShowAllLetters}
        />
      </div>
    </div>
  );
}
