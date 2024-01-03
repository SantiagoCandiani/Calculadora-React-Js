import React, { useState } from "react";
import clases from "./Inicio.module.css";
import Boton from "./Boton";
import * as mat from 'mathjs';

function Inicio() {
  const [resultado, setResultado] = useState("");

  const botones = [
    "C",
    "9",
    "/",
    "8",
    "7",
    "6",
    "*",
    "5",
    "4",
    "3",
    "+",
    "2",
    "1",
    "0",
    "-",
    ".",
    "Del",
    "=",
  ];

  const encontrarValor = () => {
    let result = mat.evaluate(resultado);
    setResultado(result.toString());
  };

  const manejador = (arg) => {
    if (resultado === "Infinity" || resultado === "NaN") {
      setResultado("");
      return;
    }
    if (arg === "C") setResultado("");
    else if (arg === "=") encontrarValor();
    else if (arg === "Del") {
      let n = resultado.length;
      if (n > 0) setResultado(resultado.slice(0, n - 1));
    } else setResultado(resultado.concat(arg));
  };

  return (
    <div className={clases.inicio}>
      <div className={clases.interno}>
        <div className={clases.resultado}>
          <div className={clases.cajaResultado}>{resultado}</div>
        </div>
        <div className={clases.botones}>
          {botones.map((ele) => {
            return <Boton manejador={manejador} valor={ele} key={ele} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Inicio;
