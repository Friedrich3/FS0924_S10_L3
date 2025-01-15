import { Alert, Col, Container, Row } from "react-bootstrap"

const NotFound = function(){
    return(
    <Container fluid className="bg-black text-center min-vh-100" >
        <Row>
            <Col className="text-white">
            <Alert variant="warning"> ⚠️Working in progress⚠️</Alert>
            <h2>ERRORE 404 - Not Found</h2>
            <p>La pagina che cerchi potrebbe non essere disponibile</p>

            </Col>
        </Row>
    </Container>
    )
}
export default NotFound