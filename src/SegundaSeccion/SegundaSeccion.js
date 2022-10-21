import React from 'react'
import "./SegundaSeccion.css"
function SegundaSeccion() {

    const estilo={
        flexDirection:"row-reverse" 

    }
  return (
    <div>
      <section class="segundaSeccion" id="segundaSeccion">
      <div class="tituloSegundaSeccion">
        <h2  >Seccion "Como lo hacemos"</h2>
      </div>
      <div class="contProcesoGral">
      <div class="contProceso">
      <div class="textProceso"> 

        <h2>Texto sobre proceso</h2>
      </div>
      <div class="imgProceso"> 

        <h2>Imagen</h2>
      </div>
    </div>

    <div class="contProceso" style={estilo}>
      <div class="textProceso" > 

        <h2>Texto sobre Sustentabilidad</h2>
      </div>
      <div class="imgProceso"> 

        <h2>Imagen</h2>
      </div>
    </div>

    <div class="contProceso">
      <div class="textProceso"> 

        <h2>Texto sobre el equipo</h2>
      </div>
      <div class="imgProceso"> 

        <h2>Imagen</h2>
      </div>
    </div>
  </div>



  </section>
    </div>
  )
}

export default SegundaSeccion
