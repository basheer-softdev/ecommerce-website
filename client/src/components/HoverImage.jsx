// src/components/HoverImage.jsx
import React, { useRef } from "react";
import { gsap } from "gsap";

export default function HoverImage() {
  const imgRef = useRef();

  const handleMouseEnter = () => {
    gsap.to(imgRef.current, {
      scale: 1.2,
      duration: 1,
      ease: "power1.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(imgRef.current, {
      scale: 1,
      duration: 1,
      ease: "power1.inOut",
    });
  };

  return (
    <div
      style={{ overflow: "hidden", display: "inline-block" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        ref={imgRef}
        src="/dress/tshirt-1.png"
        alt="demo"
        style={{
          display: "block",
          width: "100%",
          height: "auto",
          transformOrigin: "center center",
        }}
      />
    </div>
  );
}
