import React from 'react';
import './cb.css';

//made the UI
const CustomButton= () => <div className="custom_button_box">
    <div className="custom_button_box_inner">
        Button
    </div>
</div>

export default CustomButton;

export const num = 0;
export const greetings = "hi";
//you can export your default valuse but you need to
//use the variable name exactly.
//e.g. import CustomButton, {num, greetings} from '../comps/CustomButton';
//alert(num + greetings); //it will alert 0hi.
// you need to put this on the story file