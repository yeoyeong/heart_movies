import styled from "styled-components";
import { movielistsType } from "../(model)/list";
import ImageComponent from "../../../../components/ImageComponent";
import { InfiniteData } from "react-query";
import useMasonryInfinity from "../(hook)/useMasonryInfinity";

const List = ({ movieLists }: { movieLists: InfiniteData<movielistsType> }) => {
  const { itemList } = useMasonryInfinity(movieLists.pages);

  return itemList.map((itemLine, index) => (
    <ItemsLine key={index}>
      {itemLine.map((item) => (
        <Item
          key={item.id}
          style={
            Math.random() < 0.5 ? { height: "300px" } : { height: "200px" }
          }
        >
          <ImageComponent
            imageUrl={"https://image.tmdb.org/t/p/original/" + item.poster_path}
            alt={item.title}
          />
        </Item>
      ))}
    </ItemsLine>
  ));
};

export default List;

const ItemsLine = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eee;
  border-radius: 10px;
  margin-bottom: 20px;
  //////
  font-size: 40px;
  font-weight: 700;
  color: #fff;
  overflow: hidden;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  &:hover {
  }
`;
