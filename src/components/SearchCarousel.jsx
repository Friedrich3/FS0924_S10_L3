import { useEffect, useState } from "react";
import { Container, Form} from "react-bootstrap";

import MyGallery from "./MyGallery";

const  SearchCarousel = function() {

  const[filmSearch, setFilmSearch] = useState('')
  const[isVisible, setIsVisible] = useState(true)

  useEffect(()=>{},[isVisible])

    return (
      <>
        <Container className="py-4">
          <Form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Form.Group className="row">
              <Form.Control
                type="text"
                placeholder="Search your movie..."
                value={filmSearch}
                className=" border-0 col"
                onChange={(e) => {
                  setFilmSearch(e.target.value)
                  setIsVisible(true)
                }}

              ></Form.Control>
            </Form.Group>
          </Form>
        </Container>

        <Container fluid >
        {isVisible &&
            <MyGallery research={filmSearch} setIsVisible={setIsVisible} />

            
          }
          </Container>
        
      </>
    );
  }

export default SearchCarousel;
