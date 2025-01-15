/* eslint-disable react/prop-types */
import { Component } from "react";

class EachFilm extends Component{
    render(){
        return(
            <div style={{margin: '0 20px'}}><img src={this.props.film.Poster} alt="Film Poster" className=" w-100" style={{height:'400px'}}/>
            <small className="text-secondary">{this.props.film.Year}</small>
            <p className="text-light h5 custom-text">{this.props.film.Title}</p>
            
            </div>
        )
    }
}

export default EachFilm