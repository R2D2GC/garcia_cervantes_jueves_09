import curriculum from "../imagenesEX/CV.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Curriculum() {
  return (
    <>
      <h1>Curriculum</h1>
      <div className="foto">
        <img src={curriculum} />
      </div>
      <br />
      <Button variant="light" as={Link} to="/">
        Regresar
      </Button>
    </>
  );
}

export default Curriculum;