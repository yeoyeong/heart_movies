import styled from "styled-components";
import { Link } from "react-router-dom";
import ImageComponent from "@src/components/ImageComponent";
import HeartIcon from "@src/assets/icon/heart.svg?react";
import useMasonry from "@src/app/home/(hook)/useMasonry";
import { heartMoviesType } from "@src/app/movie/(model)/list";
import { UseQueryResult } from "react-query";
import useMovieHeartApi from "@src/app/home/(api)/useMovieHeart-api";
import movieStore from "@src/app/movie/(store)/moive-store";
// import movieStore from "../(store)/moive-store";
const List = ({
  movieLists,
}: {
  movieLists: UseQueryResult<heartMoviesType, unknown>[];
}) => {
  const { itemList } = useMasonry(movieLists);
  console.log(itemList);
  const { updateMovieInHeartList } = useMovieHeartApi();
  const { heartIdList } = movieStore();
  const updateHeartHandler = async (movieId: number) => {
    updateMovieInHeartList(movieId);
  };

  return itemList.map((itemLine, index) => (
    <ItemsLine key={index}>
      {itemLine.map((item) => (
        <Item
          key={item.id}
          style={item.id % 2 === 0 ? { height: "300px" } : { height: "200px" }}
        >
          <ImageComponent
            imageUrl={"https://image.tmdb.org/t/p/original/" + item.poster_path}
            alt={item.title}
          />
          <ItemHoverStyle>
            <ButtonWrap $toggle={heartIdList?.includes(item.id) ? true : false}>
              <button onClick={() => updateHeartHandler(item.id)}>
                <HeartIcon />
                {/* <img src="/img/star_svg.svg"></img> */}
              </button>
            </ButtonWrap>
            <h3>{item.title}</h3>
            <p>{item.overview}</p>
            <div>
              <Link to={`/movie/detail/${item.id}`}>자세히보기</Link>
            </div>
          </ItemHoverStyle>
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
  position: relative;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  &:hover {
    div {
      display: flex;
      flex-direction: column;
    }
  }
`;

const ItemHoverStyle = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color: ${(props) => props.theme.colors.background1}; */
  background-color: #00000050;
  text-align: left;
  padding: 4% 10px 0 10px;
  h3 {
    font-size: 1rem;
    margin-bottom: 10px;
  }
  p {
    font-weight: 400;

    display: block;
    font-size: 0.8rem;
    height: 30%;
    overflow: hidden;
    text-overflow: ellipsis;
    /* white-space: nowrap; */
    margin-bottom: 4px;
  }
  div {
    margin-top: 10px;
    a {
      display: block;
      font-weight: 400;
      font-size: 1rem;
      border: 1px solid ${(props) => props.theme.colors.boardborder1};
      width: 50%;
      padding: 5px 10px;
      margin: 0 auto;
      text-align: center;
    }
  }
`;

const ButtonWrap = styled.div<{ $toggle: boolean }>`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  button {
    margin-bottom: 10px;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    padding: 8px;
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.colors.boardBorder1};
    display: flex;
    place-items: center;
    svg {
      /* width: 100%;
      width: 20px;
      height: 20px; */
      fill: ${(props) => (props.$toggle ? "yellow" : "#eee")};
    }
    &:hover {
      background-color: ${(props) => props.theme.colors.backgroundOpacity};
    }
  }
`;
