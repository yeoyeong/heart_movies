import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import MovieListWrap from "./lists/(components)/MovieListWrap";

const MoviePage = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const navigate = useNavigate();
  useEffect(() => {
    console.log(category);
    if (!category) navigate("/movie?category=popular&page=1");
  }, []);

  return (
    <div>
      <ul>
        <li>
          <Link to="/movie?category=popular&page=1">인기 순 영화</Link>
        </li>
        <li>
          <Link to="/movie?category=now_playing&page=1">지금 상영 중</Link>
        </li>
        <li>
          <Link to="/movie?category=upcoming&page=1">개봉 예정</Link>
        </li>
      </ul>
      <MovieListWrap />
    </div>
  );
};
export default MoviePage;
