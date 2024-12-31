import { useState } from 'react'
import './App.css'
import Boton from './Componentes/Boton'
import Pantalla from './componentes/Pantalla';

function App() {
  const [count, setCount] = useState(0); 
  
  return (
    <div className='app'>
      <h1 className='titulo'>Mi Calculdora</h1>
      <div className='contenedor-calculadora'>
        <div className='fila'><Pantalla entrada='5' /></div>
        <div className='fila'>
          <Boton>1</Boton>
          <Boton>2</Boton>
          <Boton >3</Boton>
          <Boton>+</Boton>
        </div>
        <div className='fila'>
        <Boton>4</Boton>
          <Boton>5</Boton>
          <Boton >6</Boton>
          <Boton>-</Boton>
        </div>
        <div className='fila'>
        <Boton>7</Boton>
          <Boton>8</Boton>
          <Boton >9</Boton>
          <Boton>*</Boton>
          </div>
        <div className='fila'>
        <Boton>=</Boton>
          <Boton>0</Boton>
          <Boton >.</Boton>
          <Boton>/</Boton>
        </div>
      </div>

    </div>
  )
}

export default App
