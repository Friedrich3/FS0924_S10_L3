import { Navbar, Container, Nav, NavDropdown, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const MyNavbar = function () {

  const location = useLocation()

  return (
    <header className="container-fluid">
      <Row>
        <Navbar bg="black" variant="dark" expand="lg">
          <Container fluid>
            <Link to={"/"} className=" navbar-brand">
              
                <img
                  src="../public/netflix_logo.png"
                  alt="logo netflix_logo"
                  width="100px"
                  height="50px"
                />
            
            </Link>
            <Navbar.Toggle aria-controls="navbarNav" />
            <Navbar.Collapse id="navbarNav">
              <Nav className="w-100 justify-content-between">
                <div className="d-lg-flex">
                  <Nav.Item>
                    <Link to={"/"} className={ location.pathname === '/'? 'nav-link active':'nav-link' }>
                      Movies
                    </Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Link to={"/tvshows"} className={ location.pathname === '/tvshows'? 'nav-link active':'nav-link' }>
                      TV Shows
                    </Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link to={"/recentlyadded"} className={ location.pathname === '/recentlyadded'? 'nav-link active':'nav-link' }>
                      Recently Added
                    </Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link to={"/mylist"} className={ location.pathname === 'mylist'? 'nav-link active':'nav-link' }>
                      My List
                    </Link>
                  </Nav.Item>
                </div>
                <div className="d-lg-flex">
                  <Nav.Item>
                    <Container
                      fluid
                      className=" d-flex flex-column flex-lg-row"
                    >
                      \
                      <Nav.Item>
                        <NavDropdown
                          title={
                            <img
                              src="../public/avatar.png"
                              alt="YourAvatar"
                              width="30"
                              height="30"
                            />
                          }
                          id="dropdownProfile"
                          menuVariant="dark"
                          drop={"start"}
>
                          <Link to={'/settings'} className=" dropdown-item">
                            <img
                              src="../public/avatar.png"
                              alt="YourAvatar"
                              width="30"
                              height="30"
                              className="me-4"
                            />
                            Epicoder #1
                          </Link>
                          <Link className="dropdown-item" to={'/settings'}>Manage profiles</Link>
                          <Link className="dropdown-item" to={'/account'}>Account</Link>
                          <Link className="dropdown-item" to={'/help'}>Help Center</Link>
                          <NavDropdown.Divider />
                          <NavDropdown.Item>Signout Netflix</NavDropdown.Item>
                        </NavDropdown>
                      </Nav.Item>
                    </Container>
                  </Nav.Item>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Row>
    </header>
  );
};
export default MyNavbar;
