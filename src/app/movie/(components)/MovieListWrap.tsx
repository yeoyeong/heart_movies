import styled from "styled-components";
import ListSkeleton from "./list-skeleton";
import List from "./movie-list";
import { useGetMovies } from "../(queries)/useGetMovies";
import useWindowWidth from "../(hook)/useWindowWidth";
import useIntersect from "../(hook)/useIntersect";

const MovieListWrap = () => {
  const {
    contents: movieLists,
    status,
    fetchNextPage,
    isFetching,
    hasNextPage,
  } = useGetMovies();
  const { windowWidth } = useWindowWidth(240);

  const ref = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target); //옵저버 제거 더 이상 해당 오브젝트 관찰 x
    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  // {status === "success" &&
  //       movieLists?.pages.map((movieList, index) => (
  //         <List key={index} movieList={movieList.results} />
  //       ))}
  return (
    <Container $windowWidth={windowWidth}>
      {status === "loading" && !movieLists && <ListSkeleton />}
      {status === "success" && movieLists && <List movieLists={movieLists} />}
      <Target ref={ref} />
    </Container>
  );
};
export default MovieListWrap;

const Container = styled.section<{ $windowWidth: number }>`
  /* display: grid; */
  /* gap: 20px; */
  padding: 20px 20px;

  /* display: grid;
  flex-flow: row wrap;
  grid-template-columns: repeat(${(props) => props.$windowWidth}, 1fr);
  grid-template-rows: masonry; */
  column-count: ${(props) => props.$windowWidth};
  column-gap: 1em;
`;

const Target = styled.div`
  height: 1px;
`;
