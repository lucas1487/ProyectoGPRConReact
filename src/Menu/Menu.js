import React from 'react'
import "./Menu.css"
import RedesSociales from '../RedesSociales/RedesSociales';
import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
function Menu() {


  
  return (
    <div>
     <div id="pagina" >
      <div class="contenidoGeneral">
        <div class="contenido">
          <div class="encabezado">
            <h2>LOGO</h2>
            <h2><Link
                    to="/"
                  >
                   X
                  </Link></h2>
            </div>
          <div class="enlaces">
            <ul>
              <li><a href="#primeraSeccion" id="productos">productos</a> </li>
              <li> <a href="#segundaSeccion" id="comoLoHacemos">Como lo hacemos</a> </li>
              <li> <a href="#terceraSeccion" id="aboutUs">About us</a> </li>
              <li><Link
                  to="/" spy={true} smooth={true}
                  >
                  Colaboraciones
                  </Link>  
                  </li>
            </ul>




            
          </div>
        </div>
        <div class="resdesSociales"><RedesSociales/></div>

      </div>

    </div>
    </div>
  )
}

export default Menu
