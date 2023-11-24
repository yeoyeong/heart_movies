import Layout from "@src/ui/Layout";
import LoginButton from "./(components)/login-button";
import globalStore from "@src/store/global-store";
import movieStore from "../movie/(store)/moive-store";
import useGetHeartList from "./(api)/useMovieHeart-api";
import { useEffect } from "react";
import MovieListWrap from "./(components)/MovieListWrap";
import styled from "styled-components";

// const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//   },
// };

const HomePage = () => {
  const { auth } = globalStore();
  const { heartIdList } = movieStore();

  const { getHeartListApi } = useGetHeartList();
  useEffect(() => {
    getHeartListApi(null);
  }, []);
  //   const api_key = import.meta.env.VITE_TMDB_API;
  //   useEffect(() => {
  //     // 상영 중 리스트
  //     fetch(
  //       `https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=1&api_key=${api_key}`,
  //       options
  //     )
  //       .then((response) => response.json())
  //       .then((response) => console.log(response))
  //       .catch((err) => console.error(err));
  //     // 인기 순 리스트
  //     fetch(
  //       `https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1&api_key=${api_key}`,
  //       options
  //     )
  //       .then((response) => response.json())
  //       .then((response) => console.log(response))
  //       .catch((err) => console.error(err));
  //     // 상영 예정 리스트
  //     fetch(
  //       `https://api.themoviedb.org/3/movie/upcoming?language=ko-KR&page=1&api_key=${api_key}`,
  //       options
  //     )
  //       .then((response) => response.json())
  //       .then((response) => console.log(response))
  //       .catch((err) => console.error(err));
  //     //디테일
  //     fetch(
  //       `https://api.themoviedb.org/3/movie/762430?language=ko-KR&api_key=${api_key}`,
  //       options
  //     )
  //       .then((response) => response.json())
  //       .then((response) => console.log(response))
  //       .catch((err) => console.error(err));
  //   }, []);

  return (
    <Layout>
      {!auth.idToken && (
        <LoginWrap>
          <p>로그인하시면 영화를 기록할 수 있습니다. !</p>
          <LoginButton />
        </LoginWrap>
      )}
      {auth.idToken && <HeartMoiveTitle>나의 영화</HeartMoiveTitle>}
      {heartIdList && <MovieListWrap heartIdList={heartIdList} />}
    </Layout>
  );
};

export default HomePage;
const HeartMoiveTitle = styled.h3`
  padding-left: 20px;
  padding-top: 40px;
  font-size: 1.6rem;
  font-weight: 600;
`;

const LoginWrap = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  p {
    padding: 40px 0;
  }
`;
