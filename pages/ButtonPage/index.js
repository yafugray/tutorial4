import React, {useState, useEffect} from 'react';
import './buttonpage.css';
import Chat from '../../comps/Chat';
import CustomButton from '../../comps/CustomButton';
import Header from '../../comps/Header';
import Input from '../../comps/Input';

/*
var welcome_state = "welcome to my App!"
function setWelcome () {
    document.querySelector("#welcome").innerText = welcome_state;
    welcome_state = "Start with seding a message.";
}

<div id="chats" onClick={setWelcome}>
        <Chat />
</div> */

const ButtonPage = ({}) => {
    const [welcome, setWelcome] = useState("welcome to my App!");
    const [msg, setMsg] = useState("Pls type something!");
    const [resp, setResp] = useState("Let me respond to you"); 
    const [color, setColor] = useState("#f7e600");
    const [text, setText] = useState("Click This");

    return <div id="chatpage">
 
        <div id="welcome">
            <Header fontSize={32} text={welcome} />
        </div>

        <div id="chats" onClick={()=>{
            setWelcome("Start with seding a message."); //this is shorter type of function.
        }}>
            <Chat name={"User 1"} msg={msg}/> {/* This is me talking  */}
            <p />
            <Chat img={"https://www.creativefabrica.com/wp-content/uploads/2019/05/Robot-icon-by-ahlangraphic-580x386.jpg"} name={"User 2"} backgroundColor={"#FAB"} msg={resp}/> {/* Response */}
        </div>

        <div id="controls">
            <Input onClick={(val)=>{
                setMsg(val);
                var new_resp = CheckResponse(val);
                setResp(new_resp);
                /*if(val === "hi") {
                    setResp("I love pie");
                } */
            }}/>
        </div>

        <div id="custom_button" >
        <CustomButton 
            text={text}
            color={color}
            onClick={() => {
                setColor("#DDF");
                setText("Colour Changed");
        }}/>
            When the button is clicked, setColor to another color, and
            setText to another text.
        </div>
    </div>
}


ButtonPage.defaultProps = {

}

export default ButtonPage;