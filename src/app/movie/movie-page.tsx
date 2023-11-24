import { Outlet, useParams } from "react-router-dom";
import Layout from "../../ui/Layout";
import MovieListWrap from "./(components)/MovieListWrap";

const MoviePage = () => {
  const { id } = useParams();

  return (
    <Layout>
      {id && <Outlet />}
      {!id && <MovieListWrap />}
    </Layout>
  );
};
export default MoviePage;
