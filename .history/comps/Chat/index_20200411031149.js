import React from 'react';
import './chat.css'
import Header from '../Header';

const defaultImg = require('./default.png');

const Chat = ({}) => <div>
    <div className="chat_user">
      <img src={defaultImg} />
    <Header text="Username" />  
    </div>
    

</div>;

Chat.defaultProps = {

}

export default Chat;