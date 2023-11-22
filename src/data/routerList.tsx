import { RouteObject } from "react-router-dom";
import HomePage from "../app/home/home-page";
import DetailPage from "../app/movie/[detail]/detail-page";
import MoviePage from "../app/movie/movie-page";

// type routerType = {
//   path: string;
//   index: boolean;
//   role: number;
//   element: JSX.Element;
//   children?: { path: string; element: JSX.Element; index: boolean }[];
// }[];

//로그인 후 권한 없는 페이지
// const notAuthorizationPages = [
//   {
//     path: "/login",
//     element: <Login />,
//     index: true,
//     role: 0,
//   },
// ];

type ExtendedRouteObject = RouteObject & {
  index?: boolean;
  role: number;
};

//공용 페이지
const publicPages: ExtendedRouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
    index: true,
    role: 1,
  },
  {
    path: "/movie",
    element: <MoviePage />,
    role: 1,
    children: [
      {
        path: "detail/:id",
        element: <DetailPage />,
      },
    ],
  },
];

//로그인 필요한 페이지
// const authorizationPages = [
//   {
//     path: "/mypage",
//     element: <MyPage />,
//     index: true,
//     role: 2,
//   },
//   {
//     path: "/todo",
//     element: <TodoPage />,
//     index: true,
//     role: 2,
//   },
//   {
//     path: "/reducerprac",
//     element: <ReducerPage />,
//     index: true,
//     role: 2,
//   },
// ];

//관리자 페이지
// const adminPages = [
//   {
//     path: "/admin",
//     element: <Admin />,
//     index: true,
//     role: 3,
//   },
// ];

export const routerList: ExtendedRouteObject[] = [
  //   ...notAuthorizationPages,
  ...publicPages,
  //   ...authorizationPages,
  //   ...adminPages,
];
