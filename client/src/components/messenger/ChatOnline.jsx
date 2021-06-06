import React from 'react';
import './chatonline.css';

export default function ChatOnline() {
    return (
        <div className="chatOnline">
            <div className="chatOnlineUser">
                <div className="chatOnlineImgContainer">
                    <img className="chatOnlineImg" src={require('../../images/profile_foto.jpg')} alt=""/>
                    <div className="chatOnlineBadge">

                    </div>
                </div>
                <span className="chatOnlineName">John Cena</span>
            </div>
        </div>
    )
}
