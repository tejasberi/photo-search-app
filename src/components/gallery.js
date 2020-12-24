import Image from "./image";
import Masonry from "react-masonry-component";
import React from "react";

const Gallery = ({ images }) => {
  return (
    <div>
      <Masonry className="grid-container" options={{ isFitWidth: true }}>
        {images.map((image) => {
          return <Image imageDetails={image} />;
        })}
      </Masonry>
    </div>
  );
};

export default Gallery;
