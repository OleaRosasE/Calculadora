import React from "react";
import '../estilos/Boton.css'

const Boton = (props) => {
    const esOperador = (valor) => {
        return isNaN(valor) && (valor != '.' )&& (valor != '=');
    };

    return (
        <div className={`boton ${esOperador(props.children) ? 'operador' : null}`}>
          {props.children}
        </div>
    );
}

export default Boton;