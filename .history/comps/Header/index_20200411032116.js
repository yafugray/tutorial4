//use the same compoent to chage the fontsize
//change the text color of the header
//change the onMouseOver

import React from 'react';
import './Header.css';

const Header = ({text, fontSize, onMouseOver}) =>
<div>
    <h1 style={{fontSize:fontSize}}>{text}</h1>
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