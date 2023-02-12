import React from "react";
import '../styles/contador.css'

function Contador ({ numberClicks }) {
  return (
    <div className="contador">
      { numberClicks }
    </div>
  )
}

export default Contador