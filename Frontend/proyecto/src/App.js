import React from 'react';
import RegistroL from './Components/libroComponents/registrarLibro';
import RegistroA from './Components/alumnoComponents/registroAlumno';
import GestionarL from './Components/libroComponents/gestionarLibro'
import Login from './Components/login'
import Check from './Components/checkout/Checkout'
import Home from './Components/home'
import ListarLibro from './Components/libroComponents/mostrarLibro'
import ListarAlumno from './Components/alumnoComponents/mostrarAlumno'
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";



export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Login></Login>
          </Route>

          <Route path="/home" exact>
            <Home></Home>
          </Route>

          <Route path="/home/check" exact>
            <Check></Check>
          </Route>

          <Route path="/registrolibro" exact>
            <RegistroL></RegistroL>
          </Route>

          <Route path="/registroalumno" exact>
            <RegistroA></RegistroA>
          </Route>

          <Route path="/lista-A" exact>
            <ListarAlumno></ListarAlumno>
          </Route>

          <Route path="/lista-L" exact>
            <ListarLibro></ListarLibro>
          </Route>

          <Route path="/gestionar" exact>
            <GestionarL></GestionarL>
          </Route>



        </Switch>
      </BrowserRouter>
    </div>
  );
}



 
