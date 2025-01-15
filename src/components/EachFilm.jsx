/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";

const EachFilm = function (props) {
  const navigate = useNavigate();

  return (
    <div style={{ margin: "0 20px" }}>
      <img
        src={props.film.Poster}
        alt="Film Poster"
        className=" w-100 custom-class"
        style={{ height: "400px" }}
        onClick={() => {
          navigate("/movie-details/" + props.film.imdbID);
        }}
      />
      <small className="text-secondary">{props.film.Year}</small>
      <p className="text-light h5 custom-text">{props.film.Title}</p>
    </div>
  );
};

export default EachFilm;
