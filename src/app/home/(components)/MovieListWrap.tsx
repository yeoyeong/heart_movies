import styled from "styled-components";
import ListSkeleton from "../../movie/(components)/list-skeleton";
import useWindowWidth from "../../movie/(hook)/useWindowWidth";
import { useGetHeartMovies } from "@src/app/movie/(queries)/useHeartMovies";
import List from "./movie-list";
import { useEffect } from "react";

const MovieListWrap = (heartIdList: { heartIdList: number[] }) => {
  const { contents: movieLists } = useGetHeartMovies(heartIdList.heartIdList);
  const { windowWidth } = useWindowWidth(240);

  useEffect(() => {
    console.log("movieLists has changed:", movieLists);
  }, [movieLists]);
  return (
    <Container $windowWidth={windowWidth}>
      {!movieLists && <ListSkeleton />}
      {movieLists && <List movieLists={movieLists} />}
    </Container>
  );
};

export default MovieListWrap;

const Container = styled.section<{ $windowWidth: number }>`
  padding: 20px 20px;
  column-count: ${(props) => props.$windowWidth};
  column-gap: 1em;
`;
