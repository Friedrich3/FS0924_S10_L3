import MyGallery from "./MyGallery";
import {Container} from "react-bootstrap";
import SearchCarousel from "./SearchCarousel";


const MyHome = function () {
  


    return (
      <main className="bg-black container-fluid">
        <h2 className="text-light">Movies</h2>
        {/* SERVE PER CREARE UN CAROSELLO DINAMICO IN BASE ALLA SCRITTURA DI UNA PAROLA CHIAVE  
          FUNZIONA SOLO SE SI PREME IL TASTO BOTTONE SEARCH*/}
        <SearchCarousel />
        
        

        <Container fluid>
          {/* QUESTA SEZIONE AVRA' al suo interno le tre gallerie che riceveranno come props cosa cercare */}
          <h3 className=" text-light">Altri Titoli per Te</h3>
          <MyGallery research="Transformers" />
          <MyGallery research="Godzilla" />
          <MyGallery research="Harry Potter" />
        </Container>
      </main>
    );

}

export default MyHome;
