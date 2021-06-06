import React from 'react';
import "./messegeone.css";

function MessegeOne({own}) {
    return (
        <div className={own ? "message own" : "message"}>
            <div className="messageTop">
                <img className="messageImg" src={require('../../images/profile_foto.jpg')} alt="" />
                <p className="messageText">Hello is message</p>
            </div>
            <dic className="messageBottom">1 hours ago</dic>
        </div>
    )
}

export default MessegeOne;
