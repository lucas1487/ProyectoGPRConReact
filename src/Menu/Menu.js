import React from 'react'
import "./Menu.css"
function Menu() {
  return (
    <div>
     <div id="pagina" >
      <div class="contenidoGeneral">
        <div class="contenido">
          <div class="encabezado">
            <h2>LOGO</h2>
            <h2 id="closeMenu" >X</h2>
          </div>
          <div class="enlaces">
            <ul>
              <li><a href="#primeraSeccion" id="productos">productos</a> </li>
              <li> <a href="#segundaSeccion" id="comoLoHacemos">Como lo hacemos</a> </li>
              <li> <a href="#terceraSeccion" id="aboutUs">About us</a> </li>
              <li> <a href="#cuartaSeccion" id="colaboraciones">Colaboraciones</a> </li>
            </ul>
          </div>
        </div>
        
      </div>
    </div>
    </div>
  )
}

export default Menu
