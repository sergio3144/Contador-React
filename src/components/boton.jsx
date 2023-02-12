import React from "react";
import '../styles/boton.css'

function boton ({ texto, isBtnClick, manejarClick }) {
  return (
    <button className={isBtnClick ? 'boton-click' : 'boton-reiniciar'}
    onClick={manejarClick}>
      {texto}
    </button>
  )
}

export default boton;