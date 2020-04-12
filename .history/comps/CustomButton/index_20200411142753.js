import React from 'react';
import './cb.css';
import { Button } from '@storybook/react/demo';

// document.querySelector("#id").style.backgroundColor = "#DAB";
// document.querySelector("#id").style = {backgroundColor: "#DAB"}; //Both are the same.

//made the UI
const CustomButton= ({text, color, onClick}) => <div
    style={{backgroundColor:color, boxShadow: "1px 1px 1px " + color}} // {} this is js item, so text is the js variable
    onClick={onClick}
    className="custom_button_box">
    <div className="custom_button_box_inner">
        {text} 
    </div> 
</div> 

function ButtonClick() {
    alert("Clicked");
}

CustomButton.defaultProps = {
    text: "Default Button",
    color: "#DAB",
    onClick:ButtonClick
}
export default CustomButton;


// export const num = 0;
// export const greetings = "hi";
//you can export your default valuse but you need to
//use the variable name exactly.
//e.g. import CustomButton, {num, greetings} from '../comps/CustomButton';
//alert(num + greetings); //it will alert 0hi.
// you need to put this on the story file

