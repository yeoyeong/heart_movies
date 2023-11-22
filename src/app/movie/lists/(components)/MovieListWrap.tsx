import styled from "styled-components";
import ListSkeleton from "./list-skeleton";
import List from "./movie-list";
import { useGetMovies } from "../(queries)/useGetMovies";
import useWindowWidth from "../(hook)/useWindowWidth";

const MovieListWrap = () => {
  const { contents: movieLists, status, fetchNextPage } = useGetMovies();
  const { windowWidth } = useWindowWidth(240);
  // {status === "success" &&
  //       movieLists?.pages.map((movieList, index) => (
  //         <List key={index} movieList={movieList.results} />
  //       ))}
  console.log(movieLists);
  return (
    <Container $windowWidth={windowWidth}>
      {status === "loading" && !movieLists && <ListSkeleton />}
      {status === "success" && movieLists && <List movieLists={movieLists} />}
      <button onClick={() => fetchNextPage()}>페이지늘어나기</button>
    </Container>
  );
};
export default MovieListWrap;

const Container = styled.section<{ $windowWidth: number }>`
  /* display: grid; */
  /* gap: 20px; */
  padding: 0 20px;

  /* display: grid;
  flex-flow: row wrap;
  grid-template-columns: repeat(${(props) => props.$windowWidth}, 1fr);
  grid-template-rows: masonry; */
  column-count: ${(props) => props.$windowWidth};
  column-gap: 1em;
`;
