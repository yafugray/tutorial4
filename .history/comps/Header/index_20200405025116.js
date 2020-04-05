//use the same compoent to chage the fontsize
//change the text color of the header
//change the onMouseOver

import React from 'react';
import './Header.css';

const Header = ({fontSize, color, onMouseOver}) =>
<div style={{fontSize:fontSize, color:color}
    onMouseOver={onMouseOver}
    className="header_line">
    <h1>Header</h1>
</div>

function onMouseOver() {
    alert("mouse is over");
    
}
Header.defaultProps = {
    fontSize: 12,
    color: "rgb(48, 48, 48)",
    onMouseOver:onMouseOver
}

export default Header;