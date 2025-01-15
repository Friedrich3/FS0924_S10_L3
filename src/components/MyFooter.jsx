import { Col, Container, Row } from "react-bootstrap";

const MyFooter = function () {
  return (
    <footer className="bg-black text-secondary pt-5" >
    <Container >
      <Row className="pb-3">
        <Col>
          <i className="bi bi-facebook fs-2 pe-4"></i>
          <i className="bi bi-instagram fs-2 pe-4"></i>
          <i className="bi bi-twitter fs-2 pe-4"></i>
          <i className="bi bi-youtube fs-2 pe-4"></i>
        </Col>
      </Row>
      <Row>
        <Col className="col-md-3">
          <ul className="list-unstyled lh-lg">
            <li>
              <a href="">Audio and Subtitles</a>
            </li>
            <li>
              <a href="">Media Center</a>
            </li>
            <li>
              <a href="">Privacy</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
            <li className="py-3">
              <a href="" className="btn btn-outline-secondary rounded-0">
                Service Code
              </a>
            </li>
            <li>
              <p className="text-nowrap">&copy; 1997-2019 Netflix, Inc.</p>
            </li>
          </ul>
        </Col>
        <Col className="col-md-3">
          <ul className="list-unstyled lh-lg">
            <li>
              <a href="">Audio Description</a>
            </li>
            <li>
              <a href="">Investor Relations</a>
            </li>
            <li>
              <a href="">Legal Notices</a>
            </li>
          </ul>
        </Col>
        <Col className="col-md-3">
          <ul className="list-unstyled lh-lg">
            <li>
              <a href="">Help Center</a>
            </li>
            <li>
              <a href="">Jobs</a>
            </li>
            <li>
              <a href="">Cookie Preferences</a>
            </li>
          </ul>
        </Col>
        <Col className="col-md-3">
          <ul className="list-unstyled lh-lg">
            <li>
              <a href="">Gift Cards</a>
            </li>
            <li>
              <a href="">Terms of Use</a>
            </li>
            <li>
              <a href="">Corporate Information</a>
            </li>
          </ul>
        </Col>
      </Row>
      </Container>
    </footer>
  );
};

export default MyFooter;
