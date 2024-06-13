import React, { useState } from "react";
import "./style.css";
import { IMAGES_DATA } from "./selector";

const ImageGallery = () => {
  const [hoveredItems, setHoveredItems] = useState({});

  const handleMouseEnter = (id) => {
    setHoveredItems((prevState) => ({
      ...prevState,
      [id]: true,
    }));
  };

  const handleMouseLeave = (id) => {
    setHoveredItems((prevState) => ({
      ...prevState,
      [id]: false,
    }));
  };

  return (
    <>
      <h1 className="title">Showcase</h1>
      <div className="parent-container">
        {IMAGES_DATA.map((item) => {
          const id = item.id;
          const isHovered = hoveredItems[id] || false;

          return (
            <div
              key={id}
              className="image-container"
              onMouseEnter={() => handleMouseEnter(id)}
              onMouseLeave={() => handleMouseLeave(id)}
            >
              <img
                src={item.initialImage}
                alt="gallery-image"
                className={`base-image ${isHovered ? "hidden" : ""}`}
              />
              <div className={`overlay ${isHovered ? "visible" : ""}`}>
                <img
                  src={item.backgroundImage}
                  alt="gallery-image"
                  className={`transition-image transition-image-height ${
                    isHovered ? "visible" : ""
                  }`}
                />
                <img
                  src={item.lastImage}
                  alt="gallery-image"
                  className={`transition-image ${isHovered ? "visible" : ""}`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ImageGallery;
