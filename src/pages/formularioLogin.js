import React from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import Swal from 'sweetalert2';
import { useState, useEffect } from 'react';
import { gapi } from "gapi-script";


function Login_face() {
  const key_login = "889082775733-uft314q6mcdcam2in0dd7rd0nsq8uprc.apps.googleusercontent.com";
    const [user, setUser] = useState({});
    useEffect(() => {
      const start = () => {
        gapi.Auth2.init({
          clientId: key_login,
        });
      }
      gapi.load("client:auth2", start)
    }, [])
  
  const responseFacebook = (respuesta_correcta) => {
    console.log(respuesta_correcta);
    Swal.fire({
      icon: 'success',
      title: 'BIENVENIDO APP UTD',
    })
  }
  const facebook_Error = (resp) => 
      {
          console.log("FALLO EN EL ACCESO:",resp.profileObj);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Intente de nuevo ',
            footer: '<a href="">Why do I have this issue?</a>'
          })
      }
  const logeado_exito = (respuesta_exitosa) => {
    console.log("LOGUEADO CON ÉXITO:", respuesta_exitosa.profileObj);
    setUser(respuesta_exitosa.profileObj);
    Swal.fire({
      icon: 'success',
      title: 'BIENVENIDO APP UTD',
    })
  }
  const fallo_login = (res) => 
      {
          console.log("FALLO EN EL ACCESO:",res.profileObj);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Intente de nuevo ',
            footer: '<a href="">Why do I have this issue?</a>'
          })
      }
  return (
    <form>
      <h4 class="modal-title" id="exampleModalLongTitle" align="center">
        APP PARCIAL II
      </h4>
      <br />
      <div class="form-outline mb-2">
        <label class="form-label" for="form2Example1">
          Correo Electrónico:
        </label>
        <br />
        <input
          type="email"
          id="form2Example1"
          class="form-control form-control-sm"
        />
      </div>

      <div class="form-outline mb-4">
        <label class="form-label" for="form2Example2">
          Password:
        </label>
        <input
          type="password"
          id="form2Example2"
          class="form-control form-control-sm"
        />
      </div>

      <div class="row mb-4">
        <div class="col d-flex justify-content-center">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="form2Example31"
              checked
            />
            <label class="form-check-label" for="form2Example31">
              {" "}
              Recordarme{" "}
            </label>
          </div>
        </div>

        <div class="col">
          <a href="#!">Olvidaste tu contraseña?</a>
        </div>
      </div>

      <center>
        <button type="button" class="btn btn-primary btn-sm">
          INGRESAR
        </button>
      </center>

      <div class="text-center">
        <p>
          No eres usuario? <a href="#!">Registrarse</a>
        </p>
        <p>o ingresa con :</p>

        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-google">
          <GoogleLogin
          clientId={key_login}
          onSuccess={logeado_exito}
          onFailure={fallo_login}
          buttonText="INGRESAR"
          cookiePolicy={"single_host_origin"}
        />
          </i>
        </button>
        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-facebook-f"></i>
          <FacebookLogin
            appId="146218878321521"
            autoLoad={true}
            fields="name,email,picture"
            textButton="LogIn"
            callback={responseFacebook}
          />
        </button>
      </div>
      <div class={user ? "profile" : "hidden"}>
    <h3>Imagen:<img src={user.imageUrl} alt=""/></h3>
    <h3>Usuario:{user.name}</h3>
    <h3>Email:{user.email}</h3>
    <h3>Id:{user.googleId}</h3>
  </div>
    </form>
  );
}

export default Login_face;