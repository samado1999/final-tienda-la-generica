import React, { Component } from "react";
import "./producto.css";

export default class Productos extends Component {
  render() {
    return (
      <div className="producto-container">
        <p>
          <b>CARGA DE PRODUCTOS</b>
        </p>
        <div class="botones" id="botones">
          <button class="boton-subir-archivo" id="boton-subir-archivo">
            <input type="file" name="fileupload" id="fileupload" />
          </button>
          <button class="boton-publicar" id="boton-publicar">
            <input
              type="submit"
              value="Upload csv"
              name="submit"
              onclick="cargarArchivo()"
            />
          </button>
        </div>
      </div>
    );
  }
}
