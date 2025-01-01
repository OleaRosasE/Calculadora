import { useState } from 'react'
import { evaluate } from 'mathjs'     //npm install mathjs
import './App.css'
import Boton from './Componentes/Boton'
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';

function App() {
  const [entrada, setEntrada] = useState('');
  const AgregarEntrada = (val) => setEntrada(entrada + val);
  const calcularResultado = () => {
    if (entrada) {
      setEntrada(evaluate(entrada))
    }
    else {
      alert('Por favor ingrese valores para realizar los cálculos')
    }
  };
  return (
    <div className='app'>
      <h1 className='titulo'>Mi Calculdora</h1>
      <div className='contenedor-calculadora'>
        <div className='fila'><Pantalla entrada={entrada} /></div>
        <div className='fila'>
          <Boton manejarClick={AgregarEntrada}>1</Boton>
          <Boton manejarClick={AgregarEntrada}>2</Boton>
          <Boton manejarClick={AgregarEntrada}>3</Boton>
          <Boton manejarClick={AgregarEntrada}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={AgregarEntrada}>4</Boton>
          <Boton manejarClick={AgregarEntrada}>5</Boton>
          <Boton manejarClick={AgregarEntrada}>6</Boton>
          <Boton manejarClick={AgregarEntrada}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={AgregarEntrada}>7</Boton>
          <Boton manejarClick={AgregarEntrada}>8</Boton>
          <Boton manejarClick={AgregarEntrada}>9</Boton>
          <Boton manejarClick={AgregarEntrada}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={AgregarEntrada}>0</Boton>
          <Boton manejarClick={AgregarEntrada}>.</Boton>
          <Boton manejarClick={AgregarEntrada}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setEntrada('')}>Clear</BotonClear>
        </div>
      </div>

    </div>
  )
}

export default App
