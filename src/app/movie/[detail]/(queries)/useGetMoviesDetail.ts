import { useQuery } from "react-query";
import { getMovieDetail } from "../(api)/get-movieDetail";

export const useGetMoviesDetail = (movie_id: string | undefined) => {
  //movies나, id 이 바뀌면 재랜더링
  const result = useQuery(["movies", movie_id], () => getMovieDetail(movie_id));
  return {
    status: result.status,
    contents: result.data,
  };
};
//isFetching은 어떠한 react-query요청 내부의 비동기 함수가 처리되었는지 여부 에 따라 true/false로 나누어 진다.
