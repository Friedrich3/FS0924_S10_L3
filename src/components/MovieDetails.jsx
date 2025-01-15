import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row, ListGroup } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const MovieDetails = function () {
  const params = useParams();
  const navigate = useNavigate();
  let movieId = params.movieId;
  let url = "https://www.omdbapi.com/?apikey=5e8aed44&i=" + movieId;

  const [filmDetails, setFilmDetails] = useState({});
  const [filmComments, setFilmComments] = useState([]);

  const fetchData = async function () {
    try {
      let response = await fetch(url, {
        method: "GET",
      });
      if (response.ok) {
        let data = await response.json();
        setFilmDetails(data);
      } else {
        throw new Error("FetchError Data");
      }
    } catch (error) {
      console.log("Errore", error);
    }
  };

  const fetchComments = async function () {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + movieId,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzg1MGM5YzM2NmU0MzAwMTU1NGZhMGEiLCJpYXQiOjE3MzY3NzI4NTMsImV4cCI6MTczNzk4MjQ1M30.zfghVia2UNy3bX9ljYePbQ3MLx_N_vjFJy0ebz_Uht4",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        setFilmComments(data);
        console.log(data);
      } else {
        throw new Error("Errore Fetch Comments");
      }
    } catch (error) {
      console.log("ERRORE", error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container fluid className="pb-5 bg-black">
      <Row className=" justify-content-center">
        <Col className="text-center" xs={12} md={4}>
          <h4 className="h1 text-light">FILM DETAILS</h4>
          <Card className="my-3">
            <Card.Img
              variant="top"
              src={filmDetails.Poster}
              className="img-fluid"
            />
            <Card.Body>
              <Card.Title>{filmDetails.Title}</Card.Title>
              <Card.Text>Released: {filmDetails.Released}</Card.Text>
              <Card.Text>Genres: {filmDetails.Genre}</Card.Text>
              <Card.Text>Rating: {filmDetails.imdbRating} / 10</Card.Text>
              <Card.Text>Plot: {filmDetails.Plot}</Card.Text>
              <Button variant="outline-primary" onClick={()=>{navigate('/')}}>Back to Movies</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className=" justify-content-center">
        <Col className="text-center" xs={12} md={4}>
          <ListGroup>
            {filmComments.map((film) => {
              return (
                <ListGroup.Item key={film._id}>
                  {film.comment} - Voto:{film.rate}⭐
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};
export default MovieDetails;
