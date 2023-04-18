import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import logo from "./imagenesEX/UTD.png";
import foto from "./yo.jpeg";
import Mapa from "./components/Mapa";
import Mockup from "./muckup.jpg";
import Home from "./components/Home";
import Carrusel from "./components/Carrusel";
import Curriculum from "./CV.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Alumno from "./pages/Alumno";
import Inicio from "./pages/Inicio";
import Login from "./pages/login";
import Logout from "./pages/LoginLogout"
import Login_face from "./pages/formularioLogin";


function App() {
  return (
    <Router>
      <div className="container mt-5">
        <div className="btn-group">
          <Link to="/Inicio" className="btn btn-warning">
            INICIO
          </Link>
          <Link to="/Alumno" className="btn btn-dark">
            ALUMNO
          </Link>
          <Link to="/Mapa" className="btn btn-dark">
            MAPA
          </Link>
          <Link to="/Curriculum" className="btn btn-dark">
            CURRICULUM
          </Link>
          <Link to="/CARRUSEL" className="btn btn-dark">
            CARRUSEL
          </Link>
          <Link to="/Yo" className="btn btn-dark">
            YO
          </Link>
          <Link to="/Mockup" className="btn btn-dark">
            MOCKUP
          </Link>
          <Link to="/Login" className="btn btn-dark">
            LOGIN
          </Link>
          <Link to="/Login_face" className="btn btn-dark">
            Formulario
          </Link>
          <Link to="/Logout" className="btn btn-dark">
            LOGOUT
          </Link>
          
        </div>
        <hr />
        <Switch>
          <Route path="/Inicio">
            <Inicio />
          </Route>
          <Route path="/Alumno">
            <Alumno />
          </Route>
          <Route path="/Mapa">
            <Mapa />
          </Route>
          <Route path="/Mockup">
          <img src={Mockup} alt="Mockup" />
          </Route>
          <Route path="/Curriculum">
          <img src={Curriculum} alt="Curriculum" />
          </Route>
          <Route path="/Carrusel">
            <Carrusel/>
          </Route>
          <Route path="/Yo">
          <img src={foto} alt="YO" />
          </Route>
          <Route path="/Login">
            <Login/>
          </Route>
          <Route path="/Login_face">
            <Login_face/>
          </Route>
          <Route path="/Logout">
            <Logout/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
