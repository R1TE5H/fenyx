import React from "react";

export default function Label({ errors, name }) {
  const label = name.toLowerCase();
  return (
    <div className="rows" style={{ justifyContent: "space-between" }}>
      <label htmlFor={label}>
        {name}
        <span style={{ color: "red" }}>*</span>
      </label>
      {errors && (
        <span className="alert" style={{ textAlign: "right" }}>
          {errors.message}
        </span>
      )}
    </div>
  );
}
