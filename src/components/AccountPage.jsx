import { Component } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";

class AccountPage extends Component {
  render() {
    return (
      <main>
        <Container fluid className="d-flex w-75 flex-column">
          <h2 className="mt-5 my-3 text-secondary">Account</h2>

          {/* MEMBERSHIP */}
          <Row className="border-top border-secondary">
            <Col className="col-md-4 text-secondary">
              <h4>MEMBERSHIP & BILLING</h4>
              <Button
                type="button"
                className="text-black bg-body-secondary rounded-2 shadow border-0"
              >
                Cancel Membership
              </Button>
            </Col>
            <Col className="col-md-8">
              <div className="d-flex justify-content-between">
                <p className="fw-bold">Epicoder1@gmail.com</p>
                <a href="">Change account email</a>
              </div>
              <div className="d-flex justify-content-between">
                <p className="text-secondary">Password: ********</p>
                <a href="">Change password</a>
              </div>
              <div className="d-flex justify-content-between">
                <p className="text-secondary">Phone: 321 044 1279</p>
                <a href="">Change phone number</a>
              </div>
            </Col>
            <Col className="d-none d-md-block col-md-4"></Col>
            <Col className="col-md-8 border-top border-secondary">
              <div className="d-flex justify-content-between flex-wrap align-items-baseline">
                <p className="fw-bold">
                  <Image
                    src="../public/paypal.png"
                    alt="logoPaypal"
                    width="70px"
                  />
                  Epicoder1@gmail.com
                </p>
                <a href="">Update payment info</a>
              </div>
              <div className="d-flex justify-content-end py-2">
                <a href="">Billing details</a>
              </div>
              <div className="d-flex justify-content-end py-2">
                <a href="">Redeem giftcard or promo code</a>
              </div>
              <div className="d-flex justify-content-end py-2">
                <a href="">Where to buy gift cards?</a>
              </div>
            </Col>
          </Row>

          {/* PLAN */}
          <Row className="border-top border-secondary py-2">
            <Col className="col-md-4 text-secondary">
              <h4>PLAN DETAILS</h4>
            </Col>
            <Col className="col-md-8">
              <div className="d-flex justify-content-between">
                <p className="fw-bold">
                  Standard&nbsp;<i className="bi bi-badge-hd"></i>
                </p>
                <a href="">Change plan</a>
              </div>
            </Col>
          </Row>

          {/* SETTINGS */}
          <Row className="row border-top border-secondary">
            <Col className="col-md-4 text-secondary">
              <h4>SETTINGS</h4>
            </Col>
            <Col className="col-md-8">
              <div className="py-2">
                <a href="">Parent Controls</a>
              </div>
              <div className="py-2">
                <a href="">Test Participation</a>
              </div>
              <div className="py-2">
                <a href="">Manage download devices</a>
              </div>
              <div className="py-2">
                <a href="">Activate a device</a>
              </div>
              <div className="py-2">
                <a href="">Recent device streaming activity</a>
              </div>
              <div className="py-2">
                <a href="">Signout all Devices</a>
              </div>
            </Col>
          </Row>

          {/* MY PROFILE */}
          <Row className="border-top border-secondary">
            <Col className="col-md-4 text-secondary">
              <h4>MY PROFILE</h4>
            </Col>
            <Col className="col-md-8">
              <Row className=" justify-content-between py-3">
                <Col className="col-8 d-flex align-items-center">
                  <Image
                    src="../public/avatar.png"
                    alt="FotoProfilo"
                    width="50px"
                  />
                  <p className="fw-bold">Epicoder #1</p>
                </Col>
                <Col className="col-4 d-flex flex-column">
                  <a href="">Manage Profiles</a>
                  <a href="">Add profile email</a>
                </Col>
              </Row>
              <div className="py-2">
                <a href="">Language</a>
              </div>
              <div className="py-2">
                <a href="">Playback Settings</a>
              </div>
              <div className="py-2">
                <a href="">Subtitle Appearance</a>
              </div>
              <div className="py-2">
                <a href="">Viewing activity</a>
              </div>
              <div className="py-2">
                <a href="">Ratings</a>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    );
  }
}

export default AccountPage;
