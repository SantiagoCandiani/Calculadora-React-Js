import React from "react";
import clases from "./Boton.module.css";

function Boton({ valor, manejador }) {
  return (
    <div
      className={
        valor === "C" || valor === "="
          ? `${clases.btnCalculadora} ${clases.res}`
          : `${clases.btnCalculadora}`
      } onClick={() => manejador(valor)}
    >
      {valor}
    </div>
  );
}

export default Boton;
