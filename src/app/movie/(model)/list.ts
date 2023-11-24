export type movieListOptionType = {
  page: number;
  category: string;
};

export type movielistsType = {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: movielistType[];
  total_pages: number;
  total_results: number;
};

export type movielistType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type heartMoviesType = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null | string;
  budget: number;
  genres: [
    {
      id: number;
      name: string;
    },
    {
      id: number;
      name: string;
    }
  ];
  homepage: string | null;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: [
    {
      id: 3172;
      logo_path: string;
      name: string;
      origin_country: string;
    },
    {
      id: number;
      logo_path: string | null;
      name: string;
      origin_country: string;
    }
  ];
  production_countries: [
    {
      iso_3166_1: string;
      name: string;
    }
  ];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: [
    {
      english_name: string;
      iso_639_1: string;
      name: string;
    }
  ];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
// export type heartMoviesType = {
//   status: string;
//   isLoading: boolean;
//   isSuccess: boolean;
//   isError: boolean;
//   isIdle: boolean;
//   data: {
//     adult: boolean;
//     backdrop_path: string;
//     belongs_to_collection: null | string;
//     budget: number;
//     genres: [
//       {
//         id: number;
//         name: string;
//       },
//       {
//         id: number;
//         name: string;
//       }
//     ];
//     homepage: string | null;
//     id: number;
//     imdb_id: string;
//     original_language: string;
//     original_title: string;
//     overview: string;
//     popularity: number;
//     poster_path: string;
//     production_companies: [
//       {
//         id: 3172;
//         logo_path: string;
//         name: string;
//         origin_country: string;
//       },
//       {
//         id: number;
//         logo_path: string | null;
//         name: string;
//         origin_country: string;
//       }
//     ];
//     production_countries: [
//       {
//         iso_3166_1: string;
//         name: string;
//       }
//     ];
//     release_date: string;
//     revenue: number;
//     runtime: number;
//     spoken_languages: [
//       {
//         english_name: string;
//         iso_639_1: string;
//         name: string;
//       }
//     ];
//     status: string;
//     tagline: string;
//     title: string;
//     video: boolean;
//     vote_average: number;
//     vote_count: number;
//   };
//   dataUpdatedAt: number;
//   error: null | string;
//   errorUpdatedAt: number;
//   failureCount: number;
//   errorUpdateCount: number;
//   isFetched: boolean;
//   isFetchedAfterMount: boolean;
//   isFetching: boolean;
//   isRefetching: boolean;
//   isLoadingError: boolean;
//   isPlaceholderData: boolean;
//   isPreviousData: boolean;
//   isRefetchError: boolean;
//   isStale: boolean;
// };
