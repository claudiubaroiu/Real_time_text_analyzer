import React from "react";

export default function LetterDensity({
  letterDensity,
  displayLetters,
  showAllLetters,
  setShowAllLetters,
}) {
  return (
    <div className="mt-4 w-full text-left">
      <p className="text-left">Letter Density</p>
      {letterDensity().length > 0 ? (
        <div className="mt-2">
          {displayLetters().map(({ letter, count, percentage }) => (
            <div
              className="flex items-center p-2 rounded-md my-1 w-full"
              key={letter}
            >
              <span style={{ whiteSpace: "nowrap", fontWeight: "bold" }}>
                {letter}
              </span>
              <div
                style={{
                  flex: 1,
                  marginLeft: "8px",
                  height: "16px",
                  borderRadius: "8px",
                  backgroundColor: "gray",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${percentage}%`,
                    backgroundColor: "#CF9FFF",
                    borderRadius: "8px",
                    transition: "width 0.3s ease",
                  }}
                ></div>
              </div>

              <div className="flex ml-2">
                <span style={{ marginRight: "10px", marginLeft: "10px" }}>
                  {count}
                </span>
                <span>{percentage}%</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p
          style={{
            color: "white",
          }}
        >
          No character found. Start typing to see letter density.
        </p>
      )}
      {letterDensity().length > 5 && (
        <button
          onClick={() => setShowAllLetters(!showAllLetters)}
          style={{
            marginTop: "20px",
            padding: "12px 30px",
            backgroundColor: "#FEBE10",
            borderRadius: "50px",
            border: "50px",
            cursor: "pointer",
            boxShadow: "rgb(0 0 0 / 5%) 0 0 8px",
            fontSize: "15px",
            transition: "all 0.5s ease",
          }}
        >
          {showAllLetters ? "See less" : "Show all letters"}
        </button>
      )}
    </div>
  );
}
