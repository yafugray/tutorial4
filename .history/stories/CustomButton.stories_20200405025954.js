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
    fontSize={15}
    onMouseOver = {firstMO}
    />

    <Header
    fontSize={24}
    color="#red"
    onMouseOver = {secondMO}
    />

    <Header
    fontSize={36}
    color="#red"
    onMouseOver = {thirdMO}
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

function firstMO() {
    // prompt("You hover the default! Say something!", "");
    document.querySelector(".header_line h1").style.backgroundColor = "rgb(48, 48, 48)";
}
function secondMO() {
    // prompt("You hover the second heading!");
    document.querySelector(".header_line h1").style.backgroundColor = "rgb(90, 90, 90)";
}
function thirdMO() {
    // prompt("You hover the third heading!");
    document.querySelector(".header_line h1").style.backgroundColor = "Red";
}