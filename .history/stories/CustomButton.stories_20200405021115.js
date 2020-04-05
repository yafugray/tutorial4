import React from 'react';
import CustomButton from '../comps/CustomButton';
import Header from '../comps/Header';
// import CustomButton, {num, greetings} from '../comps/CustomButton'; //.. means one folder out
//you can change the CustomButton to anything it'd be better be the same.
//if you change the CustomButton variable name you need to change the bottom one.
//import Mybutton from '../comps/CustomButton'; 
export default {
    title: "Custom Button",
    component: CustomButton,
    component: Header
}
// export default {
    
// }
// alert(num + greetings); //it will alert 0hi.

export const MyCustomButton = () => <CustomButton />; // also you need to change it e.g.
//export const MyCustomButton = () => <Mybutton />; 

export const PageWithCustomButtons = () => <div>
    <Header
    fontSize={12}
    color="#ABC"
    onMouseOver={CancelClick}
    />

    <Header
    fontSize={24}
    color="#red"
    onMouseOver = {OkClick}
    />

    <Header
    fontSize={36}
    color="#red"
    onMouseOver = {OkClick}
    />

    <Header
    fontSize={12}
    color="#ABC"
    onMouseOver={CancelClick}
    />
    
    <br></br>
    <CustomButton
    color="#999"
    text="Cancel"
    onClick={CancelClick} /> 
    <CustomButton
    color="#3F5"
    text="OK"
    onClick={OkClick} />
    <CustomButton
    color="#F3F"
    text="Submit"
    onClick={SubmitClick} />
    <CustomButton
    text="Menu" />
</div>;

function CancelClick() {
    alert("Canceled");
}
function OkClick() {
    alert("OK");
}
function SubmitClick() {
    alert("Submitted");
}

// function