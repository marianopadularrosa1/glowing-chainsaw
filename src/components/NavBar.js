import React from "react";
import CartWidget from "./CartWidget";

export default class NavBar extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <p class="navbar-brand" href="#">
            TastyCoffee
          </p>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <p class="nav-link active" aria-current="page">
                  Inicio
                </p>
              </li>
              <li class="nav-item">
                <p class="nav-link active">Productos</p>
              </li>
              <li class="nav-item">
                <p class="nav-link active">Servicios</p>
              </li>
              <li class="nav-item">
                <p class="nav-link active">Quienes Somos</p>
              </li>
            </ul>
          </div>
          <CartWidget />
        </div>
      </nav>
    );
  }
}
