import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MovieDetails = function () {
    const params = useParams()
  let movieId = params.movieId
  let url = "https://www.omdbapi.com/?apikey=5e8aed44&i=" + movieId;

  // eslint-disable-next-line no-unused-vars
  const [filmDetails, setFilmDetails] = useState({});

  const fetchData = async function () {
    try {
      let response = await fetch(url, {
        method: "GET",
      });
      if (response.ok) {
        let data = await response.json();
        setFilmDetails(data);
      } else {
        throw new Error("FetchError");
      }
    } catch (error) {
      console.log("Errore", error);
    }
  }

  const fetchComments = async function () {};

  useEffect(() => {
    fetchData();
    fetchComments();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <Container className="pb-5">
      <Row className=" justify-content-center">
        <Col className="text-center" xs={12} md={6}>
          <h4 className="h1">FILM DETAILS</h4>
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
              <Button variant="outline-primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default MovieDetails;
