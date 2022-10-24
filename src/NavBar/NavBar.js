import React from 'react'
import RedesSociales from '../RedesSociales/RedesSociales'
import "./NavBar.css"
import  icon from"./Img/whatsapp.png"
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      


      <div class="custom-navbar" id="custom-navbar">
      <div class="content">
        <h5 id="menu">
        <Link
                    to="/Menu"
                  >
                    MENU
                  </Link>
          
        </h5>
        <div class="line"></div>
<RedesSociales/>
        <img class="iconWhatsapp" src={icon} alt="Icon Whatsapp"/>

      </div>

    </div>


















    </div>
  )
}

export default NavBar
