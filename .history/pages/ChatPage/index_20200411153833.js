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
            <Chat img={"https://i.pinimg.com/originals/0c/67/5a/0c675a8e1061478d2b7b21b330093444.gif"} name={"User 2"} backgroundColor={"#FAB"} msg={resp}/> {/* Response */}
        </div>
        <div id="controls">
            <Input onClick={(val)=>{
                setMsg(val);
                if(val === "hi") {
                    setResp("I love pie");
                }
            }}/>
        </div>
</div>
}
ChatPage.defaultProps = {

}

export default ChatPage;