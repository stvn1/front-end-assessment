import React from 'react'

import style from './styles/HamburgerMenu.css'

function HamburgerMenu() {
    return (
        <div>
            <input type="checkbox" id="menu-toggle"/>
            <label id="trigger" for="menu-toggle"></label>
            <label id="burger" for="menu-toggle"></label>
            <ul id="menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            
        </div>
    )
}

export default HamburgerMenu
