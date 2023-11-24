import styled from "styled-components";
import useMasonrySkeleton from "../(hook)/useMasonrySkeleton";

const ListSkeleton = () => {
  const { itemList } = useMasonrySkeleton([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27,
  ]);

  return itemList.map((itemLine, index) => (
    <ItemsLine key={index}>
      {itemLine.map((item) => (
        <Item
          key={item}
          style={
            Math.random() < 0.5 ? { height: "300px" } : { height: "200px" }
          }
        ></Item>
      ))}
    </ItemsLine>
  ));
};

export default ListSkeleton;

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
  //////
  font-size: 40px;
  font-weight: 700;
  color: #fff;
`;
