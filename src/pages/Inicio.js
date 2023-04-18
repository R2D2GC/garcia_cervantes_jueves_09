import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

function Inicio() {
  return (
      <Container className="mt-5">
        <Row>
          <Col>
            <h2>MÉTODO RENDER</h2>
            <p>
              El término “render prop” se refiere a una técnica para compartir
              código entre componentes en React utilizando una propiedad cuyo
              valor es una función. Un componente con una render prop toma una
              función que devuelve un elemento de React y lo llama en lugar de
              implementar su propia lógica de representación.
            </p>
          </Col>
          <Col>
            <h2>MÉTODO STRICT MODE</h2>
            <p>
              StrictMode es una herramienta para destacar problemas potenciales
              en la aplicación. Al igual que Fragment, StrictMode no renderiza
              nada en la interfaz de usuario. Este modo también activa
              advertencias y comprobaciones adicionales para sus descendientes.
            </p>
          </Col>
          <Col>
            <h2>MÉTODO RETURN</h2>
            <p>
              La sentencia return se emplea para salir de la secuencia de
              ejecución de las sentencias de un método y, opcionalmente,
              devolver un valor. Tras la salida del método se vuelve a la
              secuencia de ejecución del programa al lugar de llamada de dicho
              método.
            </p>
          </Col>
        </Row>
      </Container>
  );
}

export default Inicio;
