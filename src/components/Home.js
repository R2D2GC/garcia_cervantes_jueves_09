import { Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Container>
        <Row>
          <h1>Bienvenido a la Página Principal</h1>
          <br />
        </Row>
        <Row>
          <Col>
            <Button variant="light" as={Link} to="/curriculum">
              Curriculum
            </Button>
            ;
          </Col>
          <Col>
            <Button variant="light" as={Link} to="/mapa">
              Mapa
            </Button>
          </Col>
          <Col>
            <Button variant="light" as={Link} to="/carrusel">
              Carrusel
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
