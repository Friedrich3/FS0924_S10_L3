/* eslint-disable react/prop-types */

const EachFilm = function(props){

        return(
            <div style={{margin: '0 20px'}}><img src={props.film.Poster} alt="Film Poster" className=" w-100" style={{height:'400px'}}/>
            <small className="text-secondary">{props.film.Year}</small>
            <p className="text-light h5 custom-text">{props.film.Title}</p>
            
            </div>
        )
 
}

export default EachFilm