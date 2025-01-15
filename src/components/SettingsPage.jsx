import { Component } from "react";
import { Col, Container, Image, Row, Form, Button } from "react-bootstrap";


class SettingsPage extends Component {
  state = {
    profile: {
      profileName: "Epicoder #1",
      language: "English",
      autoPlay: true,
      mobileData:false,
    },
  };

  formSubmit = (e) =>{
    e.preventDefault()
    // ESPORTERA' Il profilo utente tramite fetch (NonFunzionante)
    console.log(this.state.profile)
  }
  render() {
    return (
      <>
        <main className="bg-black">
          <Container className="d-flex flex-column w-50 text-secondary">
            <Form onSubmit={this.formSubmit}>
              <Row className="py-3 border-bottom border-dark">
                <h1 className="text-white" id="profileTitle">
                  Edit Profile
                </h1>
              </Row>
              <Row className="my-4 border-bottom border-dark">
                <Col className="col-md-4 position-relative" id="profilePicture">
                  <Image
                    src="../public/avatar.png"
                    alt="avatarLogo"
                    className="img-fluid "
                    height="150px "
                    width="200px"
                  />
                </Col>
                <Col className="col-md-8">
                  <div className="border-bottom border-dark">
                    <Form.Group>
                      <Form.Control
                        type="text"
                        className="py-2 bg-secondary border-0 text-white rounded-0"
                        value={this.state.profile.profileName}
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-lg"
                        onChange={(e) => {
                          this.setState({
                            profile: {
                              ...this.state.profile,
                              profileName: e.target.value,
                            },
                          });
                        }}
                      />
                    </Form.Group>
                    <div className="my-4">
                      <Form.Label className="h3">Language:</Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        className="bg-black text-light"
                        onChange={(e) => {
                          this.setState({
                            profile: {
                              ...this.state.profile,
                              language: e.target.value,
                            },
                          });
                        }}
                      >
                        <option>English</option>
                        <option>Italian</option>
                        <option>Chinese</option>
                        <option>Spanish</option>
                        <option>French</option>
                      </Form.Select>
                    </div>
                  </div>
                  <div className="border-bottom border-dark py-4">
                    <h3>Maturity Settings:</h3>
                    <button
                      type="button"
                      className="btn bg-dark text-white fw-bold fs-5 rounded-0 my-3"
                    >
                      ALL MATURITY SETTINGS
                    </button>
                    <p className="text-white">
                      Show files for all maturity settings for this profile
                    </p>
                    <button
                      type="buttton"
                      className="btn bg-transparent btn-outline-secondary px-4 rounded-0"
                    >
                      EDIT
                    </button>
                  </div>
                  <Form.Group className="py-4">
                    <Form.Label className="h3">Autoplay Controls:</Form.Label>
                    <Form.Check // prettier-ignore
                      className="text-white"
                      type="switch"
                      label="Autoplay next episode in a series on all devices"
                      checked={this.state.profile.autoPlay}
                      onChange={(e) => {
                        this.setState({
                            profile:{
                                ...this.state.profile,
                                autoPlay: e.target.checked
                            }
                        })
                      }}
                    />
                    <Form.Check // prettier-ignore
                      className="text-white"
                      type="switch"
                      label="Autoplay when using mobile data"
                      checked={this.state.profile.mobileData}
                      onChange={(e) => {
                        this.setState({
                            profile:{
                                ...this.state.profile,
                                mobileData: e.target.checked
                            }
                        })
                      }}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="pb-3">
                  <Button
                    type="Submit"
                    className="rounded-0 fs-4 fw-bold"
                    variant="outline-secondary"
                  >
                    SAVE
                  </Button>
                
              </Row>
            </Form>
          </Container>
        </main>
      </>
    );
  }
}
export default SettingsPage;
