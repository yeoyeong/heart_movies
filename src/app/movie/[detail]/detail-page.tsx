import { useParams } from "react-router-dom";
import { useGetMoviesDetail } from "./(queries)/useGetMoviesDetail";
import ImageComponent from "@src/components/ImageComponent";
import styled from "styled-components";
import DetailSkeleton from "./(components)/DetailSkeleton";

const DetailPage = () => {
  const { id: movie_id } = useParams();
  const { status, contents: detail } = useGetMoviesDetail(movie_id);

  if (status === "loading") return <DetailSkeleton />;

  if (status === "success")
    return (
      <Container>
        {detail.adult && <p>청소년 관람 불가</p>}
        <ImageComponent
          imageUrl={"https://image.tmdb.org/t/p/original/" + detail.poster_path}
          alt={detail.title}
        />
        <Card
          $backImg={
            "https://image.tmdb.org/t/p/original/" + detail.backdrop_path
          }
        >
          {/* <p className="tagline">{detail.tagline}</p> */}
          {/* <h3>{detail.title}</h3> */}
          <p className="info">{detail.overview}</p>

          {/* <p className="date">{detail.release_date} 극장 개봉</p> */}
        </Card>
      </Container>
    );
};

export default DetailPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Card = styled.div<{ $backImg: string }>`
  background-image: url(${(props) => props.$backImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  background-color: #00000080;
  background-blend-mode: multiply;
  color: #eee;
  width: 100%;
  text-align: center;
  padding: 60px 20px;
  h3 {
    font-weight: 700;
    font-size: 3.8rem;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .info {
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 26px;
    width: 80%;
    margin: 0 auto;
  }
  .tagline {
    display: inline-block;
    margin: 0 auto;
    padding: 5px 20px;
    border-radius: 5px;
    background-color: #00000050;
  }
`;
