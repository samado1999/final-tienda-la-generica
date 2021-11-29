import React, { Component } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";

import Producto from "../productos/productos";
import Cliente from "../clientes/clientes";
import Venta from "../ventas/ventas";
import Reporte from "../reportes/reportes";
import Consolidado from "../consolidado/consolidado";

import "./Navbar.css";

export default class Menu extends Component {
  render() {
    return (
      <Router>
        <div className="vertical-menu">
          <ul className="menu">
            <li>
              <NavLink to="/" className="" activeclass="active">
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to="/producto" className="" activeclass="active">
                Producto
              </NavLink>
            </li>
            <li>
              <NavLink to="/cliente" className="" activeclass="active">
                Cliente
              </NavLink>
            </li>
            <li>
              <NavLink to="/venta" className="" activeclass="active">
                Venta
              </NavLink>
            </li>
            <li>
              <NavLink to="/reporte" className="" activeclass="active">
                Reporte
              </NavLink>
            </li>
            <li>
              <NavLink to="/consolidado" className="" activeclass="active">
                Consolidado
              </NavLink>
            </li>
          </ul>
        </div>

        <Routes>
          <Route
            exact
            path="/producto"
            caseSensitive={true}
            element={<Producto />}
          />
          <Route path="/cliente" caseSensitive={true} element={<Cliente />} />
          <Route exact path="/venta" caseSensitive={true} element={<Venta />} />
          <Route path="/reporte" caseSensitive={true} element={<Reporte />} />
          <Route
            path="/consolidado"
            caseSensitive={true}
            element={<Consolidado />}
          />
          <Route path="/" />
        </Routes>
      </Router>
    );
  }
}
