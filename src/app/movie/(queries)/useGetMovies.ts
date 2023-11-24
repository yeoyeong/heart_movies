import { useInfiniteQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import { getMovie } from "../(api)/get-movie";

export const useGetMovies = () => {
  // const { campaignListOption } = adcenterStore();
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  const movieListOption = {
    category: category ? category : "popular",
  };

  //movies나, campaignListOption 이 바뀌면 재랜더링
  // const result = useQuery(["movies", movieListOption], () =>
  //   getMovie(movieListOption)
  // );
  const result = useInfiniteQuery(
    ["movies", movieListOption],
    ({ pageParam = 1 }) => getMovie({ ...movieListOption, page: pageParam }),
    {
      getNextPageParam: ({ page: lastePage }, allPosts) =>
        lastePage !== allPosts[0].total_pages ? lastePage + 1 : undefined,
    }
  );

  return {
    status: result.status,
    contents: result.data,
    fetchNextPage: result.fetchNextPage,
    hasNextPage: result.hasNextPage,
    isFetching: result.isFetching,
  };
};
//isFetching은 어떠한 react-query요청 내부의 비동기 함수가 처리되었는지 여부 에 따라 true/false로 나누어 진다.
