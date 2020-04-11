import React from 'react';
import CustomButton from '../comps/CustomButton';
import Header from '../comps/Header';
import Input from  '../comps/Input';
import Chat from  '../comps/Chat';

export default {
    title: "Custom Button",
    component: CustomButton,
    component: Header
}

export const MyCustomButton = () => <CustomButton />; // also you need to change it e.g.
function CancelClick(){
    alert("cancel");
}
export const MyCustomButtonwithOption = () => <CustomButton
color="#999"
text="Cancel"
onClick={CancelClick}
/>;

export const MyHeader = () => <Header />;

export const MyInput= () => <Input />;

export const MyInputwithPlaceholder= () => <Input 
        placeholder="Custom placeholder" />;

        export const MyChat = () => <Chat />;

//export const MyCustomButton = () => <Mybutton />; 

/*
export const PageWithCustomButtons = () => <div>
    <Header
    onMouseOver = {firstMO} />

    <Header
    fontSize={25}
    color="#red"
    onMouseOver = {secondMO} />

    <Header
    fontSize={35}
    color="#red"
    onMouseOver = {thirdMO} />

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
    alert("This is Default Heading")}
function secondMO() {
   alert("You scrolled the Second sentence")}
function thirdMO() {
    alert("You scrolled the Third sentence")
}
*/