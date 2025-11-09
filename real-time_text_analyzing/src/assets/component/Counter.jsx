import React from "react";

export default function Counter({ title, value }) {
  return (
    <div className="px-4 py-8">
      <p className="text-6xl font-semibold">{value}</p>
      <p
        className="text-lg font-semibold"
        style={{ fontWeight: "bold", paddingLeft: "10px" }}
      >
        {title}
      </p>
    </div>
  );
}
