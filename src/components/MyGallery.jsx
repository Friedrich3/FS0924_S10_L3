/* eslint-disable react/prop-types */
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from "react";
import { Alert, Container, Spinner } from "react-bootstrap";
import EachFilm from "./EachFilm";

const responsive = {
  desktopLarge: {
    breakpoint: { max: 3000, min: 1920 },
    items: 6,
    slidesToSlide: 2, //Optional default to one *preso dalla documentazione ufficiale*
  },
  desktop: {
    breakpoint: { max: 1920, min: 1440 },
    items: 5,
    slidesToSlide: 2,
  },
  desktopSmall: {
    breakpoint: { max: 1440, min: 1024 },
    items: 4,
    slidesToSlide: 2,
  },
  tabletVert: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 2,
  },
  tablet: {
    breakpoint: { max: 768, min: 576 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 576, min: 0 },
    items: 2,
    slidesToSlide: 2,
  },
};

const MyGallery = function (props) {
  const [filmList, setFilmList] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    if (props.research !== "") {
      let url = `https://www.omdbapi.com/?apikey=5e8aed44&s=${props.research.replaceAll(
        " ",
        "%20"
      )}`;

      try {
        const response = await fetch(url, {
          method: "GET",
        });

        if (response.ok) {
          let data = await response.json();
          if (data.Response !== "False") {
            setFilmList(data.Search);
            setIsError(false);
            setIsLoading(false);
            props.setIsVisible(true);
          } else {
            setIsError(true);
            setIsLoading(false);
          }
        } else {
          throw new Error("Problema con fetch");
        }
      } catch (error) {
        console.log("Errore:", error);
      }
    } else {
      setIsLoading(false);
      setIsError(false);
      props.setIsVisible(false);
    }
  };

  // componentDidMount() {
  //   this.fetchData();
  // }
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.research]);

  return (
    <>
      {/* // QUI SARANNO RIUNITI I COMPONENTI DELLE CARTE GENERATE DALLA FETCH DI UNA PROPS PASSATA COME PARAMETRO DI 'RICERCA'  */}
      <Container fluid className="py-3">
        {
          // LOADING HANDLER
          isLoading && (
            <div className="text-center">
              <Spinner animation="border" variant="white" />
              <span className="text-white ">Loading...</span>
            </div>
          )
        }
        {
          // ERROR HANDLER
          isError && (
            <>
              <Alert variant="danger">
                <Alert.Heading>
                  Oh snap! The films you are searching for are unavailable!
                </Alert.Heading>
                <p>
                  It seems you&apos;ve entered an incorrect word. Please check
                  the spelling and try again
                </p>
              </Alert>
            </>
          )
        }
        {isLoading === false && (
          <Carousel
            responsive={responsive}
            // sliderClass="carousel-item-padding-40-px"
            infinite={false}
            keyBoardControl={true}
            customTransition="transform 500ms ease-in-out"
            transitionDuration={1000}
          >
            {filmList.map((film) => {
              return <EachFilm film={film} key={film.imdbID} />;
            })}
          </Carousel>
        )}
      </Container>
    </>
  );
};

export default MyGallery;
