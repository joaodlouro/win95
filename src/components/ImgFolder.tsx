import { useState } from "react";
import { Button } from "@react95/core";

const images = [
  "https://i.pinimg.com/736x/99/89/d1/9989d18282c61f58651c963df1ee93a8.jpg",
  "https://i.pinimg.com/736x/d3/68/ae/d368ae9815196cb6f7105512ef058ddc.jpg",
  "https://i.pinimg.com/736x/4c/05/56/4c0556d53dd559d452ed8feaee1d33fb.jpg",
  "https://i.pinimg.com/1200x/25/aa/1a/25aa1a16b78d63f639b04b8427d4f2d6.jpg",
];

function ImgCarousel() {
  const [current, setCurrent] = useState(0);

  const prevImage = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#c0c0c0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
       
      }}
    >
      <Button
        onClick={prevImage}
        style={{
          position: "absolute",
          left: "10px",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        ◀
      </Button>

      <img
        src={images[current]}
        alt={`img-${current}`}
        style={{
          maxWidth: "70%",
          maxHeight: "80%",
          objectFit: "contain",
          border: "2px solid #000",
          padding: "4px",
          backgroundColor: "transparent",
        }}
      />

      <Button
        onClick={nextImage}
        style={{
          position: "absolute",
          right: "10px",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        ▶
      </Button>
    </div>
  );
}

export default ImgCarousel;
