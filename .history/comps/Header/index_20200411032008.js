//use the same compoent to chage the fontsize
//change the text color of the header
//change the onMouseOver

import React from 'react';
import './Header.css';

const Header = ({text, fontSize, color, onMouseOver}) =>
<div
    onMouseOver={onMouseOver}
    className="header_line">
    <h1 style={{fontSize:fontSize, color:color}}>{text}</h1>
</div>

function MouseOver() {
    alert("mouse is over");
    
}
Header.defaultProps = {
    fontSize: 12,
    color: "rgb(48, 48, 48)",
    MouseOver:MouseOver,
    text: "Header"
}

export default Header;