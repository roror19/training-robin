import React from 'react';
import '../../assets/LeftBar.css';

const UserDetail = () => {

    return (
        <div className="leftbar-user">
            <img src="https://acnhcdn.com/latest/ClosetIcon/AccessoryGlassPiratespatch0.png"
                 alt="user-logo"
                 title="Logo utilisateur"
            />

            <div className="username">
                <h2>Capitain Flint</h2>
                <div className="active"></div>
            </div>
        </div>
    );
}

export default UserDetail;