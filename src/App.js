import "./App.css"
import Boton from "./componentes/Boton"
import Contador from "./componentes/contador"
import freeCodeCampLogo from "./imagenes/FreeCodeCamp_logo.png"
import { useState } from "react"

function App() {
  /* Para el hook se usan dos valores importantes
  -El primero es el valor como estado 
  -El segundo es una funcion para actualizarlo 
  -En useState se pasa el valor inicial*/

  const [numClics, setNumClics] = useState(0)

  const manejarClic = () => {
    setNumClics(numClics + 1)
  }

  const reiniciarClic = () => {
    setNumClics(0)
  }

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={freeCodeCampLogo}
          alt="Logo FreeCodeCamp"
        />
      </div>
      <div className="contenedor-principal">
        <Contador numClics={numClics} />
        <Boton texto="Click" esBotonDeClic={true} manejarClic={manejarClic} />
        <Boton
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarClic={reiniciarClic}
        />
      </div>
    </div>
  )
}

export default App
