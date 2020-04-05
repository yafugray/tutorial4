import React from 'react';
import CustomButton from '../comps/CustomButton';
// import CustomButton, {num, greetings} from '../comps/CustomButton'; //.. means one folder out
//you can change the CustomButton to anything it'd be better be the same.
//if you change the CustomButton variable name you need to change the bottom one.
//import Mybutton from '../comps/CustomButton'; 
export default {
    title: "Custom Button",
    component: CustomButton
}
// alert(num + greetings); //it will alert 0hi.

export const MyCustomButton = () => <CustomButton />; // also you need to change it e.g.
//export const MyCustomButton = () => <Mybutton />; 

export const PageWithCustomButtons = () => <div>
    <CustomButton
    color="#999"
    text="Cancel" /> 
    <CustomButton
    color="#3F5"
    text="OK" />
    <CustomButton
    color="#F3F"
    text="Submit" />
    <CustomButton
    text="Menu" />
</div>;