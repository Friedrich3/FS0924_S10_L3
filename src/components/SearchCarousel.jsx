import { Component } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import MyGallery from "./MyGallery";

class SearchCarousel extends Component {
  state = {
    filmResearch: {
      search: "",
    },
    researchVisible: {
      isVisible: false,
    },
  };

  render() {
    return (
      <>
      {/* Funziona solo se si preme sul bottone search! TODO da fixare */}
        <Container className="py-4">
          <Form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Form.Group className="row">
              <Button
                type="Button"
                variant="outline-secondary"
                className="px-4 col-1"
                onClick={(e) => {
                  e.preventDefault();
                  this.setState({
                    researchVisible: {
                      isVisible: true,
                    },
                  });
                }}
              >
                <Search></Search>
              </Button>
              <Form.Control
                type="text"
                value={this.state.filmResearch.search}
                className="bg-dark border-0 text-light col"
                onChange={(e) => {
                  this.setState({
                    filmResearch: {
                      search: e.target.value,
                    },
                  });
                }}
                onBlur={() => {
                  this.setState({
                    researchVisible: {
                      isVisible: false,
                    },
                  });
                }}
              ></Form.Control>
            </Form.Group>
          </Form>
        </Container>
        {this.state.researchVisible.isVisible && (
          <Container fluid>
            <MyGallery research={this.state.filmResearch.search} />
            
          </Container>
        )}
        {/* TODO FIXARE IL BLUR OUT QUANDO UNA VALUE E' PRESENTE */}
      </>
    );
  }
}
export default SearchCarousel;
