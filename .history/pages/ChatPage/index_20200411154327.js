import React, {useState} from 'react';
import './chatpage.css';
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

const ChatPage = ({}) => {
    const [welcome, setWelcome] = useState("welcome to my App!");
    const [msg, setMsg] = useState("Pls type something!");
    const [resp, setResp] = useState("Let me respond to you"); 
    return <div>
        <div id="welcome">
            <Header fontsize={32} text="Welcome to my App!" />
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
                /*if(val === "hi") {
                    setResp("I love pie");
                } */
            }}/>
        </div>
</div>
}
function CheckResponse(inp){

}
ChatPage.defaultProps = {

}

export default ChatPage;