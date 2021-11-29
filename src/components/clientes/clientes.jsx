import React, { Component } from "react";
import "./cliente.css";

export default class Cliente extends Component {
  render() {
    return (
      <div className="cliente-container">
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Cédula</label>
              <input
                type="number"
                className="form-control"
                placeholder="Cédula"
              />
            </div>
            <div className="form-group col-md-6">
              <label>Teléfono</label>
              <input
                type="number"
                className="form-control"
                placeholder="Teléfono"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Nombre Completo</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nombre Completo"
              />
            </div>
            <div className="form-group col-md-6">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Dirección</label>
              <input
                type="text"
                className="form-control"
                placeholder="Dirección"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-3">
              <button type="submit" className="cliente-button">
                Consultar
              </button>
            </div>
            <div className="form-group col-md-3">
              <button type="submit" className="cliente-button">
                Crear
              </button>
            </div>
            <div className="form-group col-md-3">
              <button type="submit" className="cliente-button">
                Actualizar
              </button>
            </div>
            <div className="form-group col-md-3">
              <button type="submit" className="cliente-button">
                Borrar
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
