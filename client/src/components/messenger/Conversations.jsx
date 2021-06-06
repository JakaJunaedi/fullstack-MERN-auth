import React from 'react';
import './conversations.css';

export default function Conversations() {
    return (
        <div className="conversation">
            <img className="conversationImg" src={require('../../images/profile_foto.jpg')} alt="" />
            <span className="conversationName">John Cena</span>
        </div>
    )
}
