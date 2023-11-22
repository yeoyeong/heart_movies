import { useState } from "react";
import styled from "styled-components";
import {
  ImageInAnimation,
  ImageLodingAnimation,
} from "../styles/animations/imageAnimation";

const ImageComponent = ({
  imageUrl,
  alt,
}: {
  imageUrl: string;
  alt: string;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <>
      {!isLoaded && <Item />}
      {
        <Img
          src={imageUrl}
          alt={alt}
          style={{
            display: isLoaded ? "block" : "none",
          }}
          onLoad={handleImageLoad}
        />
      }
    </>
  );
};

export default ImageComponent;
const Img = styled.img`
  opacity: 0;
  animation: ${ImageInAnimation} 1.7s forwards;
`;
const Item = styled.div`
  border-radius: 10px;
  animation: ${ImageLodingAnimation} 1.7s infinite;
  width: 100%;
  height: 100%;
  background-color: #00000043;
  -webkit-box-shadow: 1px 2px 10px 1px rgba(0, 0, 0, 0.4);
  box-shadow: 1px 6px 10px 0px rgba(0, 0, 0, 0.4);
  filter: blur(3px);

  opacity: 0;
`;
