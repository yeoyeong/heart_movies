import { ImageLodingAnimation } from "@src/styles/animations/imageAnimation";
import styled from "styled-components";

const DetailSkeleton = () => {
  return <Item />;
};

export default DetailSkeleton;

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
