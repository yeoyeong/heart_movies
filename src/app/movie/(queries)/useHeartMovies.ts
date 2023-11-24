import { useQueries } from "react-query";
import { getMovieDetail } from "../[detail]/(api)/get-movieDetail";

export const useGetHeartMovies = (heartIdList: number[] | null) => {
  //movies나, id 이 바뀌면 재랜더링
  console.log(heartIdList);
  const heartMovieQueries = useQueries(
    (heartIdList || []).map((movie_id: number) => ({
      queryKey: ["heart_movie", movie_id],
      queryFn: () => getMovieDetail(movie_id.toString()),
    }))
  );

  // const result = useQuery(["heart_movies", movie_id], () =>
  //   getMovieDetail(movie_id)
  // );
  const allQueriesLoaded = heartMovieQueries.every((query) => !query.isLoading);
  return {
    contents: allQueriesLoaded ? heartMovieQueries : null,
  };
};
//isFetching은 어떠한 react-query요청 내부의 비동기 함수가 처리되었는지 여부 에 따라 true/false로 나누어 진다.
