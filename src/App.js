/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */

import './App.css';
import BotonClick from './components/boton.jsx'
import Contador from './components/contador.jsx';
import { useState } from 'react';
//import FreeCodeLogo from './images/FreeCodeCamp_logo.svg.png'.... Importar un logo

function App() {

  const [numberClicks, setNumClicks] = useState(0)

  const aumentarContador = () => {
    setNumClicks(numberClicks + 1);
  };

  const disminuir = () => {
    setNumClicks(numberClicks - 1)
  }

  const ReiniciarContador = () => { 
    setNumClicks(0)
  };

  return (
    <div className="App">
      {/* <div className='freecodecamp-logo-container'>
        <img className='freecodecamp-logo' src={FreeCodeLogo} alt='logo'/>
      </div> ... Container del la imagen*/}
      <div className='container'>
        <Contador
        numberClicks = {numberClicks}
        />

        <BotonClick
        texto = 'Aumentar'
        isBtnClick = {true}
        manejarClick = {aumentarContador}
        />

        <BotonClick
        texto = 'Disminuir'
        isBtnClick = {true}
        manejarClick = {disminuir}
        />

        <BotonClick
        texto = 'Reiniciar'
        isBtnClick={false}
        manejarClick = {ReiniciarContador}
        />

      </div>
    </div>

  )
}

export default App;
