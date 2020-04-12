import React, {useState} from 'react';
import './chatpage.css';
import Chat from '../../comps/Chat';
import CustomButton from '../../comps/CustomButton';
import Header from '../../comps/Header';
import Input from '../../comps/Input';

/*
var welcome_state = "welcome to my App!"
function ChangeWelcome () {
    document.querySelector("#welcome").innerText = welcome_state;
    welcome_state = "Start with seding a message.";
}
*/

const ChatPage = ({}) => <div>
    <div id="welcome">
        <Header fontsize={32} text="Welcome to my App!" />
    </div>
    {/* <div id="chats" onClick={ChangeWelcome}>
        <Chat />
    </div> */}
    <div id="chats">
        <Chat />
    </div>
    <div id="controls">
        <Input />
    </div>
</div>

ChatPage.defaultProps = {

}

export default ChatPage;