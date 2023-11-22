import { useInfiniteQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import { getMovie } from "../(api)/get-movie";

export const useGetMovies = () => {
  // const { campaignListOption } = adcenterStore();
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page"));
  const category = searchParams.get("category");
  const movieListOption = {
    page,
    category: category as string,
  };

  //movies나, campaignListOption 이 바뀌면 재랜더링
  // const result = useQuery(["movies", movieListOption], () =>
  //   getMovie(movieListOption)
  // );
  const result = useInfiniteQuery(
    ["movies", movieListOption],
    ({ pageParam = 1 }) => getMovie({ ...movieListOption, page: pageParam }),
    {
      getNextPageParam: (lastPage, allPosts) => {
        return lastPage.page !== allPosts[0].totalPage
          ? lastPage.page + 1
          : undefined;
      },
    }
  );

  return {
    status: result.status,
    contents: result.data,
    fetchNextPage: result.fetchNextPage,
  };
};
