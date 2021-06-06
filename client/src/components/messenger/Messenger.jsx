import React from 'react';
import '../messenger/messenger.css';
import ChatOnline from './ChatOnline';
import Conversations from './Conversations';
import MessegeOne from './MessegeOne';
import { AuthContext } from '../../services/user.service';


function Messenger() {

    //const { user } = useContext(AuthContext);

    return (
        <>
        <div className="messenger">
            <div className="chatMenu">
                <div className="chatMenuWrapper">
                    <input placeholder="Search for user online" className="chatMenuInput" />
                    <Conversations />
                    <Conversations />
                    <Conversations />
                    <Conversations />
                    <Conversations />
                    <Conversations />
                    <Conversations />
                    <Conversations />
                </div>
            </div>
            <div className="chatBox">
                <div className="chatBoxWrapper">
                    <div className="chatBoxTop">
                        <MessegeOne />
                        <MessegeOne own={true}/>
                        <MessegeOne />
                        <MessegeOne />
                        
                        <MessegeOne />
                        <MessegeOne />
                        <MessegeOne />
                        <MessegeOne />
                        <MessegeOne />
                        <MessegeOne />
                    </div>
                    <div className="chatBoxBottom">
                        <textarea className="chatMessageInput" placeholder="Chat disini..." ></textarea>
                        <button className="chatSubmitButton">Send</button>
                    </div>
                </div>
            </div>
            <div className="chatOnline">
                <div className="chatOnlineWrapper">
                    <ChatOnline />
                    <ChatOnline />
                    <ChatOnline />
                </div>
            </div>
        </div>
        </>
    )
}

export default Messenger;