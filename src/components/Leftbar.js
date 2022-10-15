import React from 'react';
import '../assets/LeftBar.css';
import UserList from "./Users/UserList";

const LeftBar = () => {
    return (
        <div className="LeftBar">
            <div className="leftbar-header">
                <img src="https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_1/v1591630070/kcpublicschoolsorg/fzhwmvfmq5vka4tfbwj6/Paseo.png"
                     alt="logo-pirate"
                     title="Pirates"
                     className="logo"
                />
                <h1>Pirate Chat</h1>
            </div>

            <UserList />
        </div>
    );
}

export default LeftBar;