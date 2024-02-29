import React from "react";

//Style Import
import "../styles/main.css";

import { photos } from "../services/getPhotos";

// 10 bars
export default function LocationBars() {
  return (
    <div
      className="center"
      style={{
        justifyContent: "center",
        gap: "2vw",
      }}
    >
      {photos.map((element) => (
        <div
          className="location-bar"
          key={element.id}
          style={{
            height: `${element.height}`,
            background: `url(${element.url})`,
            backgroundSize: "cover",
          }}
        ></div>
      ))}
    </div>
  );
}
