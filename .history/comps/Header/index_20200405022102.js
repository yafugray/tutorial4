//use the same compoent to chage the fontsize
//change the text color of the header
//change the onMouseOver

import React from 'react';
import './Header.css';

const Header = ({fontSize, color, onMouseOver}) =>
<div onMouseOver={onMouseOver}
    className="header_line">
    <h1>Header</h1>
</div>

function MouseOver() {
    alert("mouse is over");
    
}
Header.defaultProps = {
    fontSize: 12,
    color: "#000",
    onMouseOver:MouseOver
}

export default Header;